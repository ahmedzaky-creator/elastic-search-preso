import { test, expect } from "@playwright/test";
import path from "node:path";
import { pathToFileURL } from "node:url";

async function freezePlayback(page: any) {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.clock.install({ time: new Date("2026-10-13T12:00:00Z") });
  await page.clock.pauseAt(new Date("2026-10-13T12:00:00Z"));
}
async function animatedScenes(page: any) {
  return page.evaluate(() =>
    (window as any).__PRESENTATION__.scenes.filter((s: any) => s.steps),
  );
}

test("every sequence plays all of its phases and loops without changing slides", async ({
  page,
}) => {
  await freezePlayback(page);
  await page.goto("/#0");
  const sequences = await animatedScenes(page);
  expect(sequences.length).toBeGreaterThanOrEqual(12);
  for (const scene of sequences) {
    await page.goto(`/#${scene.index}`);
    for (let phase = 0; phase < scene.steps.length; phase++) {
      if (phase) await page.clock.runFor(3200);
      await expect(page.locator("html")).toHaveAttribute(
        "data-slide",
        String(scene.index),
      );
      await expect(page.locator("html")).toHaveAttribute(
        "data-step",
        String(phase),
      );
      await expect(page.locator(".step-strip")).toContainText(
        scene.steps[phase].label,
      );
      await expect(page.locator(".presentation-visual")).toHaveAttribute(
        "data-step",
        String(phase),
      );
    }
    await page.clock.runFor(4800);
    await expect(page.locator("html")).toHaveAttribute("data-step", "0");
    await expect(page.locator("html")).toHaveAttribute(
      "data-slide",
      String(scene.index),
    );
  }
});

test("arrows always navigate slides from early and intermediate animation phases", async ({
  page,
}) => {
  await freezePlayback(page);
  await page.goto("/#0");
  for (const scene of await animatedScenes(page)) {
    await page.goto(`/#${scene.index}`);
    await expect(page.locator("html")).toHaveAttribute(
      "data-slide",
      String(scene.index),
    );
    await page.clock.runFor(3200);
    await page.keyboard.press("ArrowRight");
    await expect(page.locator("html")).toHaveAttribute(
      "data-slide",
      String(scene.index + 1),
    );
    await page.keyboard.press("ArrowLeft");
    await expect(page.locator("html")).toHaveAttribute(
      "data-slide",
      String(scene.index),
    );
    await expect(page.locator("html")).toHaveAttribute("data-step", "0");
    await page.locator("#prev").click();
    await expect(page.locator("html")).toHaveAttribute(
      "data-slide",
      String(scene.index - 1),
    );
    await page.locator("#next").click();
    await expect(page.locator("html")).toHaveAttribute(
      "data-slide",
      String(scene.index),
    );
  }
  await page.goto("/#13");
  await page.keyboard.press("Space");
  await expect(page.locator("html")).toHaveAttribute("data-slide", "14");
  await page.keyboard.press("PageUp");
  await expect(page.locator("html")).toHaveAttribute("data-slide", "13");
  await page.keyboard.press("PageDown");
  await expect(page.locator("html")).toHaveAttribute("data-slide", "14");
});

test("browser history tracks slides and cancels old animation timers", async ({
  page,
}) => {
  await freezePlayback(page);
  await page.goto("/#13");
  await page.clock.runFor(6400);
  await expect(page.locator("html")).toHaveAttribute("data-step", "2");
  await page.keyboard.press("ArrowRight");
  await expect(page.locator("html")).toHaveAttribute("data-slide", "14");
  await page.goBack();
  await expect(page.locator("html")).toHaveAttribute("data-slide", "13");
  await expect(page.locator("html")).toHaveAttribute("data-step", "0");
  await page.goForward();
  await expect(page.locator("html")).toHaveAttribute("data-slide", "14");
  await page.keyboard.press("End");
  await page.clock.runFor(20000);
  await expect(page.locator("html")).toHaveAttribute("data-slide", "33");
  await expect(page.locator("html")).toHaveAttribute("data-step", "0");
  await expect(page.locator("#next")).toBeDisabled();
  await page.keyboard.press("Home");
  await expect(page.locator("#prev")).toBeDisabled();
});

test("animations preserve ink and notes, pause for drawing and overlays, and replay cleanly", async ({
  page,
}) => {
  await freezePlayback(page);
  await page.goto("/#13");
  await page.locator("#notes-toggle").click();
  await page.locator("#draw-toggle").click();
  const box = await page.locator("#stage-wrap").boundingBox();
  await page.mouse.move(box!.x + 100, box!.y + 100);
  await page.mouse.down();
  await page.mouse.move(box!.x + 200, box!.y + 200);
  await page.mouse.up();
  await page.clock.runFor(10000);
  await expect(page.locator("html")).toHaveAttribute("data-step", "0");
  await page.keyboard.press("Escape");
  await page.clock.runFor(3200);
  await expect(page.locator("html")).toHaveAttribute("data-step", "1");
  await expect(page.locator("#ink path")).toHaveCount(1);
  await expect(page.locator("#notes-panel")).toBeVisible();
  await page.locator("#help-toggle").click();
  await page.clock.runFor(10000);
  await expect(page.locator("html")).toHaveAttribute("data-step", "1");
  const closed = page
    .locator("#help-dialog")
    .evaluate(
      (dialog) =>
        new Promise<void>((resolve) =>
          dialog.addEventListener("close", () => resolve(), { once: true }),
        ),
    );
  await page.locator("#help-dialog [data-close]").click();
  await closed;
  await page.clock.runFor(3200);
  await expect(page.locator("html")).toHaveAttribute("data-step", "2");
  await page.locator("#replay").click();
  await expect(page.locator("html")).toHaveAttribute("data-step", "0");
  await page.clock.runFor(3200);
  await expect(page.locator("html")).toHaveAttribute("data-step", "1");
  await page.getByRole("button", { name: "Density 5", exact: true }).click();
  await page.clock.runFor(3200);
  await expect(page.locator("html")).toHaveAttribute("data-step", "2");
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(page.locator("html")).toHaveAttribute("data-step", "3");
  await page.clock.runFor(20000);
  await expect(page.locator("html")).toHaveAttribute("data-step", "3");
});

test("continuous evidence particles actually move and reduced motion completes the diagram", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("/#0");
  const mover = page.locator(".motion-particles circle").first();
  await expect(mover).toBeVisible();
  const before = await mover.evaluate((el: any) => ({
    x: el.getCTM().e,
    y: el.getCTM().f,
  }));
  await page.waitForTimeout(850);
  const after = await mover.evaluate((el: any) => ({
    x: el.getCTM().e,
    y: el.getCTM().f,
  }));
  expect(Math.hypot(after.x - before.x, after.y - before.y)).toBeGreaterThan(2);
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(page.locator(".motion-particles")).toHaveCount(0);
  await expect(page.locator(".presentation-visual")).toHaveClass(/settled/);
});

test("34 unique core scenes have pacing, qualifications and public evidence", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/?render=static&density=3#0");
  const metadata = await page.evaluate(() => (window as any).__PRESENTATION__);
  expect(metadata.count).toBe(34);
  expect(new Set(metadata.scenes.map((s: any) => s.id)).size).toBe(34);
  const seconds = metadata.scenes.reduce(
    (n: number, s: any) => n + s.notes.seconds,
    0,
  );
  expect(seconds).toBeGreaterThanOrEqual(1500);
  expect(seconds).toBeLessThanOrEqual(1800);
  for (let i = 0; i < 34; i++) {
    await page.evaluate((n) => {
      location.hash = String(n);
    }, i);
    await expect(page.locator("html")).toHaveAttribute("data-slide", String(i));
    await expect(page.locator(".slide h1")).not.toBeEmpty();
    await expect(page.locator(".presentation-visual svg")).toHaveCount(1);
    await expect(page.locator(".qualification")).not.toBeEmpty();
    await expect(page.locator(".source-strip a").first()).toHaveAttribute(
      "href",
      /^https:\/\/(www\.)?elastic\.co\//,
    );
  }
  expect(errors).toEqual([]);
});

test("all scene diagrams stay inside their viewBox at densities 1, 3 and 5", async ({
  page,
}) => {
  const overflow: any[] = [];
  for (const density of [1, 3, 5]) {
    await page.goto(`/?render=static&density=${density}#0`);
    await page.evaluate(() => document.fonts.ready);
    for (let index = 0; index < 34; index++) {
      await page.evaluate((n) => {
        location.hash = String(n);
      }, index);
      await expect(page.locator("html")).toHaveAttribute(
        "data-slide",
        String(index),
      );
      const clipped = await page
        .locator(".presentation-visual svg text")
        .evaluateAll((nodes) =>
          nodes
            .map((node) => ({
              text: node.textContent,
              box: (node as SVGGraphicsElement).getBBox(),
            }))
            .filter(
              (v) =>
                v.box.x < -2 ||
                v.box.y < -2 ||
                v.box.x + v.box.width > 722 ||
                v.box.y + v.box.height > 392,
            )
            .map((v) => v.text),
        );
      if (clipped.length) overflow.push({ index, density, clipped });
      const legendOverlap = await page.evaluate(() => {
        const legend = document.querySelector(".step-strip");
        if (!legend) return [];
        const box = legend.getBoundingClientRect();
        return Array.from(
          document.querySelectorAll(".presentation-visual svg text"),
        )
          .filter((node) => {
            const text = node.getBoundingClientRect();
            return (
              box.left < text.right &&
              box.right > text.left &&
              box.top < text.bottom &&
              box.bottom > text.top
            );
          })
          .map((node) => node.textContent);
      });
      if (legendOverlap.length)
        overflow.push({ index, density, legendOverlap });
    }
  }
  expect(overflow).toEqual([]);
});

test("hash changes update notes, malformed routes normalize, and reload retains slide", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.goto("/#0");
  await page.locator("#notes-toggle").click();
  await page.evaluate(() => {
    location.hash = "#27";
  });
  await expect(page.locator("html")).toHaveAttribute("data-slide", "27");
  const title = await page.locator(".slide h1").innerText();
  await expect(page.locator("#notes-panel h2")).toHaveText(
    title.replace(/\s+/g, " ").trim(),
  );
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-slide", "27");
  for (const [hash, index] of [
    ["1.5", "1"],
    ["junk", "0"],
    ["Infinity", "0"],
    ["-5", "0"],
    ["999", "33"],
  ]) {
    await page.evaluate((v) => {
      location.hash = v;
    }, hash);
    await expect(page.locator("html")).toHaveAttribute("data-slide", index);
    await expect(page).toHaveURL(new RegExp(`#${index}$`));
  }
  expect(errors).toEqual([]);
});

test("five density levels reveal progressively deeper content", async ({
  page,
}) => {
  await page.goto("/#5");
  await page.getByRole("button", { name: "Density 1", exact: true }).click();
  await expect(page.locator(".lead")).toBeHidden();
  await page.getByRole("button", { name: "Density 2", exact: true }).click();
  await expect(page.locator(".lead")).toBeVisible();
  await expect(page.locator(".takeaway p").first()).toBeHidden();
  await page.getByRole("button", { name: "Density 3", exact: true }).click();
  await expect(page.locator(".takeaway p").first()).toBeVisible();
  await expect(page.locator(".density-extra")).toBeHidden();
  await page.getByRole("button", { name: "Density 4", exact: true }).click();
  await expect(page.locator(".density-extra")).toBeVisible();
  await expect(page.locator(".density-deep")).toBeHidden();
  await page.getByRole("button", { name: "Density 5", exact: true }).click();
  await expect(page.locator(".density-deep")).toBeVisible();
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-density", "5");
});

test("Space activates a focused control instead of navigating", async ({
  page,
}) => {
  await page.goto("/#0");
  await page.locator("#notes-toggle").focus();
  await page.keyboard.press("Space");
  await expect(page.locator("#notes-panel")).toBeVisible();
  await expect(page.locator("html")).toHaveAttribute("data-slide", "0");
});

test("overview, filmstrip, notes and timer operate independently", async ({
  page,
}) => {
  await page.goto("/#0");
  await page.locator("#overview-toggle").click();
  await expect(page.locator("#overview-dialog .thumb")).toHaveCount(34);
  await page.locator('#overview-dialog [data-goto="26"]').click();
  await expect(page.locator("html")).toHaveAttribute("data-slide", "26");
  await page.locator("#filmstrip-toggle").click();
  await expect(page.locator("#filmstrip .thumb")).toHaveCount(34);
  await page.locator("#notes-toggle").click();
  await expect(page.locator("#notes-panel")).toContainText("Agent Builder");
  await page.locator("#timer").click();
  await expect(page.locator("#timer")).toHaveAttribute(
    "aria-label",
    "Resume presenter timer",
  );
  const stopped = await page.locator("#timer").textContent();
  await page.waitForTimeout(1100);
  await expect(page.locator("#timer")).toHaveText(stopped!);
  await page.locator("#timer").click();
  await expect(page.locator("#timer")).toHaveAttribute(
    "aria-label",
    "Pause presenter timer",
  );
});

test("tablet notes and stage fit within the viewport", async ({ page }) => {
  await page.setViewportSize({ width: 800, height: 768 });
  await page.goto("/#0");
  await page.locator("#notes-toggle").click();
  const positions = await page.evaluate(() => ({
    stage: document
      .querySelector("#stage-wrap")!
      .getBoundingClientRect()
      .toJSON(),
    notes: document
      .querySelector("#notes-panel")!
      .getBoundingClientRect()
      .toJSON(),
    width: innerWidth,
  }));
  expect(positions.stage.left).toBeGreaterThanOrEqual(0);
  expect(positions.notes.right).toBeLessThanOrEqual(positions.width);
  expect(positions.stage.right).toBeLessThanOrEqual(positions.notes.left - 8);
});

test("laser and drawing remain usable and ink clears on exit", async ({
  page,
}) => {
  await page.goto("/#0");
  await page.locator("#laser-toggle").click();
  const box = await page.locator("#stage-wrap").boundingBox();
  await page.mouse.move(box!.x + 100, box!.y + 100);
  await expect(page.locator("#laser-dot")).toHaveClass("visible");
  await page.locator("#draw-toggle").click();
  await page.mouse.move(box!.x + 100, box!.y + 100);
  await page.mouse.down();
  await page.mouse.move(box!.x + 200, box!.y + 200);
  await page.mouse.up();
  await expect(page.locator("#ink path")).toHaveCount(1);
  await expect(page.locator("#ink path")).toHaveAttribute("d", /L/);
  await page.locator("#next").click();
  await expect(page.locator("#ink path")).toHaveCount(0);
});

test("reduced motion completes every sequence and print has exactly 34 pages", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.goto("/#0");
  const sequences = await animatedScenes(page);
  for (const scene of sequences) {
    await page.goto(`/#${scene.index}`);
    await expect(page.locator("html")).toHaveAttribute(
      "data-step",
      String(scene.steps.length - 1),
    );
    await expect(page.locator(".motion-particles")).toHaveCount(0);
  }
  await page.goto("/?print=1&density=3");
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(page.locator(".print-page")).toHaveCount(34);
  await expect(
    page.locator(".print-page .presentation-visual svg"),
  ).toHaveCount(34);
  await expect(page.locator("#appendix-dialog")).toHaveCount(0);
  expect(errors).toEqual([]);
});

test("mobile touch, controls and qualified preview appendix work", async ({
  browser,
}) => {
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true,
    reducedMotion: "reduce",
  });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:4174/#0");
  await page.getByRole("button", { name: "Next slide", exact: true }).tap();
  await expect(page.locator("html")).toHaveAttribute("data-slide", "1");
  await page.locator("#stage-wrap").dispatchEvent("pointerdown", {
    pointerType: "touch",
    clientX: 250,
    clientY: 400,
  });
  await page.locator("#stage-wrap").dispatchEvent("pointerup", {
    pointerType: "touch",
    clientX: 150,
    clientY: 400,
  });
  await expect(page.locator("html")).toHaveAttribute("data-slide", "2");
  await page.locator("#help-toggle").tap();
  await expect(page.locator(".download-link")).toHaveCount(4);
  await page.locator("#open-appendix").tap();
  await expect(page.locator("#appendix-dialog")).toContainText(
    "EXPERIMENTAL / PRIVATE PREVIEW",
  );
  await expect(page.locator("#appendix-dialog")).toContainText(
    "not intended for production",
  );
  await context.close();
});

test("standalone HTML plays offline with embedded fonts and all previews", async ({
  browser,
}) => {
  const context = await browser.newContext({
    offline: true,
    reducedMotion: "reduce",
    viewport: { width: 1280, height: 800 },
  });
  const page = await context.newPage();
  const errors: string[] = [],
    external: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("request", (r) => {
    if (/^https?:/.test(r.url())) external.push(r.url());
  });
  await page.goto(
    pathToFileURL(path.resolve("public/downloads/elastic-search-preso.html"))
      .href,
  );
  await expect(page.locator("html")).toHaveAttribute("data-ready", "true");
  await page.locator("#overview-toggle").click();
  await expect(page.locator("#overview-dialog .thumb")).toHaveCount(34);
  const embedded = await page
    .locator("#overview-dialog img")
    .evaluateAll((imgs) =>
      imgs.every((img) =>
        (img as HTMLImageElement).src.startsWith("data:image/png;base64,"),
      ),
    );
  expect(embedded).toBe(true);
  await page.locator('#overview-dialog [data-goto="13"]').click();
  await expect(page.locator("html")).toHaveAttribute("data-step", "3");
  await page.locator("#next").click();
  await expect(page.locator("html")).toHaveAttribute("data-slide", "14");
  await freezePlayback(page);
  await page.goto(page.url().split("#")[0] + "#13");
  await page.clock.runFor(3200);
  await expect(page.locator("html")).toHaveAttribute("data-step", "1");
  await page.keyboard.press("ArrowRight");
  await expect(page.locator("html")).toHaveAttribute("data-slide", "14");
  expect(errors).toEqual([]);
  expect(external).toEqual([]);
  await context.close();
});

test("hosted companion files and player alias resolve", async ({
  page,
  request,
}) => {
  for (const name of [
    "elastic-search-preso.pdf",
    "elastic-search-preso.html",
    "presenter-notes.md",
    "Conversation%20Prep%20-%20Elastic%20Search%20Customer%20Presentation.md",
  ]) {
    const response = await request.get(`/downloads/${name}`);
    expect(response.status()).toBe(200);
    expect((await response.body()).length).toBeGreaterThan(100);
  }
  await page.goto("/company-preso.html#13");
  await expect(page.locator("html")).toHaveAttribute("data-slide", "13");
});
