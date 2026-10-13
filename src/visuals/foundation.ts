import type { VisualKind, VisualOptions } from "../types";
import {
  C,
  arrow,
  caption,
  circle,
  cube,
  dotLine,
  flow,
  group,
  icon,
  line,
  mono,
  node,
  panelHeader,
  path,
  phase,
  pill,
  rect,
  slab,
  title,
  txt,
} from "./primitives";

function documentCard(
  x: number,
  y: number,
  label: string,
  sub: string,
  color = C.blue,
  w = 178,
): string {
  return (
    rect(x, y, w, 70, "white", C.line, 9) +
    icon("document", x + 13, y + 15, color, 0.83) +
    txt(x + 47, y + 29, label, 14, C.ink, "v-bold") +
    mono(x + 47, y + 49, sub, 10.5)
  );
}

function hero(): string {
  const wires =
    flow("M211 104 C266 104 254 167 314 185", C.blue, 4.4) +
    flow("M206 273 C268 273 259 205 314 194", C.teal, 4.8, 1.1) +
    flow("M389 192 C443 192 432 187 479 187", C.blue, 4.2, 0.4);
  return (
    wires +
    group(
      documentCard(33, 69, "Product knowledge", "CURRENT · 4.0", C.blue),
      100,
      "v-float",
    ) +
    group(
      documentCard(28, 238, "Support evidence", "AUTHORIZED SCOPE", C.teal),
      220,
      "v-float",
    ) +
    group(
      circle(351, 190, 87, C.blueLight, "none") +
        circle(351, 190, 76, "none", C.line, "v-orbit") +
        cube(351, 137, 94, C.blue, "search") +
        txt(351, 271, "Find the right context", 16, C.ink, "v-bold", "middle") +
        mono(351, 293, "TEXT + METADATA + VECTORS", 10.5, C.muted, "middle"),
      320,
    ) +
    group(
      rect(479, 120, 212, 140, "white", C.blue, 10) +
        pill(494, 135, "TRUSTED CONTEXT", C.blue, C.blueLight, 178) +
        txt(495, 188, "A useful answer starts", 15, C.ink, "v-bold") +
        txt(495, 210, "with useful evidence.", 15, C.ink, "v-bold") +
        icon("check", 495, 224, C.teal, 0.64) +
        mono(521, 241, "CURRENT · SCOPED · CITED", 10.5),
      460,
    ) +
    group(
      rect(116, 323, 489, 42, C.gray, "none", 21) +
        icon("user", 132, 331, C.blue, 0.73) +
        txt(
          164,
          348,
          "“How do I configure company sign-in?”",
          15,
          C.ink,
          "",
          "start",
        ),
      540,
    )
  );
}

function pillars(): string {
  const columns = [
    {
      x: 16,
      n: "01",
      label: "Connect the knowledge",
      sub: "Keep context current",
      detail: "Sources · structure · access",
      icon: "layers" as const,
      color: C.blue,
    },
    {
      x: 250,
      n: "02",
      label: "Find what matters",
      sub: "Retrieve and rank evidence",
      detail: "Lexical · vector · hybrid",
      icon: "search" as const,
      color: C.teal,
    },
    {
      x: 484,
      n: "03",
      label: "Deliver with confidence",
      sub: "Inspect and improve outcomes",
      detail: "Evaluation · provenance",
      icon: "check" as const,
      color: C.pink,
    },
  ];
  return (
    flow("M126 53 H360 H594", C.blue, 5.5) +
    columns
      .map((v, i) =>
        group(
          circle(v.x + 110, 53, 8, "white", v.color) +
            rect(v.x, 89, 220, 246, "white", C.line, 10) +
            mono(v.x + 18, 117, v.n, 12, v.color) +
            cube(v.x + 110, 139, 68, v.color, v.icon) +
            txt(v.x + 110, 237, v.label, 15, C.ink, "v-bold", "middle") +
            txt(v.x + 110, 264, v.sub, 12.5, C.muted, "", "middle") +
            line(v.x + 18, 286, v.x + 202, 286) +
            mono(v.x + 110, 312, v.detail, 10.5, v.color, "middle"),
          i * 180,
        ),
      )
      .join("") +
    caption(
      360,
      374,
      "ONE QUESTION. THREE ENGINEERING RESPONSIBILITIES.",
    ).replace('text-anchor="start"', 'text-anchor="middle"')
  );
}

function rankRows(
  x: number,
  y: number,
  w: number,
  labels: string[],
  color: string,
  active = true,
): string {
  return labels
    .map(
      (label, i) =>
        rect(
          x,
          y + i * 39,
          w,
          32,
          active
            ? i === 0
              ? color === C.teal
                ? C.tealLight
                : C.blueLight
              : "white"
            : C.gray,
          "none",
          5,
        ) +
        mono(
          x + 11,
          y + i * 39 + 21,
          String(i + 1).padStart(2, "0"),
          11,
          active ? color : C.line,
        ) +
        txt(
          x + 39,
          y + i * 39 + 21,
          active ? label : "Awaiting candidates",
          12,
          active ? C.ink : C.muted,
        ),
    )
    .join("");
}

function hybridDemo(o: VisualOptions): string {
  const p = phase(o, 4);
  return (
    group(
      rect(28, 18, 663, 57, "white", C.blue, 10) +
        icon("search", 43, 32, C.blue, 0.85) +
        txt(
          78,
          45,
          "company sign-in · Atlas Hub 4.0 · self-managed",
          15,
          C.ink,
          "v-bold",
        ) +
        mono(78, 63, "ILLUSTRATIVE QUESTION / SYNTHETIC RANKS", 10.5),
      0,
    ) +
    group(
      pill(
        39,
        88,
        "SAME ELIGIBILITY FOR BOTH RETRIEVERS",
        C.blue,
        C.blueLight,
        365,
      ) +
        icon("lock", 420, 88, C.teal, 0.65) +
        mono(447, 104, "current + authorized", 11, C.teal),
      130,
    ) +
    (p >= 1
      ? flow("M156 111 V134", C.blue, 2.5)
      : dotLine(156, 111, 156, 134)) +
    (p >= 2
      ? flow("M358 111 V134", C.teal, 2.5, 0.7)
      : dotLine(358, 111, 358, 134)) +
    group(
      rect(28, 134, 194, 170, "white", p >= 1 ? C.blue : C.line, 8) +
        panelHeader(
          28,
          134,
          194,
          "Lexical ranking",
          p >= 1 ? "READY" : "WAIT",
        ) +
        rankRows(
          37,
          179,
          176,
          ["SSO admin guide", "Release notes", "Troubleshooting"],
          C.blue,
          p >= 1,
        ),
      230,
    ) +
    group(
      rect(259, 134, 194, 170, "white", p >= 2 ? C.teal : C.line, 8) +
        panelHeader(
          259,
          134,
          194,
          "Semantic ranking",
          p >= 2 ? "READY" : "WAIT",
        ) +
        rankRows(
          268,
          179,
          176,
          ["Troubleshooting", "SSO admin guide", "Release notes"],
          C.teal,
          p >= 2,
        ),
      320,
    ) +
    (p >= 3
      ? flow(
          "M222 220 C235 220 238 323 474 323 Q486 323 486 251 L497 251",
          C.blue,
          5,
        ) + flow("M453 218 H497", C.teal, 2.6, 0.3)
      : dotLine(453, 218, 497, 218)) +
    group(
      rect(
        497,
        134,
        194,
        170,
        p >= 3 ? C.blueLight : "white",
        p >= 3 ? C.blue : C.line,
        8,
      ) +
        panelHeader(497, 134, 194, "Fused results", "RRF") +
        rankRows(
          506,
          179,
          176,
          ["SSO admin guide", "Troubleshooting", "Release notes"],
          C.blue,
          p >= 3,
        ),
      430,
    ) +
    group(
      rect(39, 342, 640, 31, p === 3 ? C.tealLight : C.gray, "none", 7) +
        icon(
          p === 3 ? "check" : "lock",
          51,
          346,
          p === 3 ? C.teal : C.muted,
          0.65,
        ) +
        txt(
          78,
          362,
          p === 3
            ? "Eligible ranked context, ready to inspect before use."
            : "Older, cloud-only and restricted inputs stay outside results.",
          13,
          C.ink,
        ),
      500,
    )
  );
}

function promise(): string {
  return (
    group(
      rect(28, 23, 664, 52, C.gray, "none", 10) +
        icon("user", 43, 34, C.blue, 0.85) +
        txt(80, 47, "Maya Chen · support engineer", 15, C.ink, "v-bold") +
        mono(80, 65, "ATLAS HUB 4.0 / SELF-MANAGED / SYNTHETIC JOURNEY", 10.5),
      0,
    ) +
    flow("M151 205 H327 H547", C.blue, 6) +
    [
      {
        x: 25,
        label: "One question",
        kind: "search" as const,
        color: C.blue,
        lines: ["Configure company sign-in", "for the right deployment."],
      },
      {
        x: 265,
        label: "Relevant evidence",
        kind: "document" as const,
        color: C.teal,
        lines: ["Current, authorized sources", "with inspectable sections."],
      },
      {
        x: 505,
        label: "Evaluated experience",
        kind: "check" as const,
        color: C.pink,
        lines: ["Quality, latency and cost", "tested against a baseline."],
      },
    ]
      .map((v, i) =>
        group(
          rect(v.x, 111, 192, 205, "white", C.line, 10) +
            icon(v.kind, v.x + 78, 135, v.color, 1.2) +
            title(v.x + 96, 207, v.label).replace(
              'text-anchor="start"',
              'text-anchor="middle"',
            ) +
            txt(v.x + 96, 249, v.lines[0], 12.5, C.muted, "", "middle") +
            txt(v.x + 96, 269, v.lines[1], 12.5, C.muted, "", "middle"),
          i * 160 + 130,
        ),
      )
      .join("") +
    group(
      pill(
        173,
        348,
        "NO LIVE SEARCH, MODEL CALLS OR ACTIONS",
        C.blue,
        C.blueLight,
        374,
      ),
      560,
    )
  );
}

function evolution(o: VisualOptions): string {
  const p = phase(o, 4);
  const stages = [
    "Links",
    "Relevant results",
    "Grounded answers",
    "Tool-assisted work",
  ];
  const descriptions = [
    ["The user opens links.", "Context assembly is manual."],
    ["The platform ranks evidence.", "The user can inspect sources."],
    ["The application uses context.", "Answers preserve provenance."],
    ["Permitted tools retrieve context.", "Policy controls what can run."],
  ];
  let body = group(
    txt(27, 44, "USER EXPERIENCE EVOLVES", 13, C.muted, "v-mono") +
      txt(27, 76, "Relevance stays foundational.", 22, C.ink, "v-bold"),
    0,
  );
  body += stages
    .map((v, i) => {
      const y = 128 + i * 57;
      return group(
        circle(
          43,
          y + 13,
          12,
          i <= p ? (i === p ? C.blue : C.teal) : "white",
          i <= p ? "none" : C.line,
        ) +
          mono(
            43,
            y + 17,
            String(i + 1),
            11,
            i <= p ? "white" : C.muted,
            "middle",
          ) +
          txt(
            66,
            y + 19,
            v,
            14.5,
            i === p ? C.blue : C.ink,
            i === p ? "v-bold" : "",
          ) +
          (i < 3
            ? line(43, y + 25, 43, y + 45, i < p ? C.teal : C.line, 2)
            : ""),
        100 + i * 90,
      );
    })
    .join("");
  const panel =
    rect(313, 107, 380, 244, "white", C.blue, 10) +
    panelHeader(313, 107, 380, stages[p], "ILLUSTRATIVE");
  const demos = [
    [
      "Administrator guide",
      "Support knowledge base",
      "Authentication release note",
    ]
      .map(
        (v, i) =>
          txt(338, 169 + i * 34, v, 14, C.blue) +
          line(338, 177 + i * 34, 655, 177 + i * 34, C.line),
      )
      .join(""),
    rankRows(
      330,
      156,
      344,
      [
        "Current administrator guide",
        "Sign-in troubleshooting",
        "Authentication release notes",
      ],
      C.blue,
    ),
    rect(330, 157, 346, 120, C.blueLight, "none", 8) +
      txt(346, 182, "Use the current 4.0 guide.", 15, C.ink, "v-bold") +
      txt(346, 212, "Verify the prerequisites before rollout.", 13) +
      pill(346, 234, "Admin guide §2.1–2.3", C.blue, "white", 210),
    node(
      332,
      156,
      "search",
        "Retrieve",
      "PERMITTED TOOL",
      C.blue,
      156,
      73,
    ) +
      flow("M488 192 H515", C.teal, 2.5) +
      node(
        516,
        156,
        "document",
        "Inspect sources",
        "CITED SECTIONS",
        C.teal,
        158,
        73,
      ) +
      icon("lock", 345, 246, C.teal, 0.7) +
      txt(376, 263, "Configured scope and permissions", 13),
  ];
  return (
    body +
    group(
      panel +
        demos[p] +
        txt(333, 314, descriptions[p][0], 13, C.ink, "v-bold") +
        txt(333, 335, descriptions[p][1], 12.5, C.muted),
      270,
    ) +
    (p > 0 ? flow("M217 202 H303", C.blue, 3.2) : dotLine(217, 202, 303, 202))
  );
}

function fragmented(): string {
  const islands = [
    {
      x: 31,
      y: 36,
      title: "Documentation",
      sub: "REVISION + PRODUCT",
      kind: "document" as const,
      c: C.blue,
    },
    {
      x: 431,
      y: 37,
      title: "Support records",
      sub: "STRUCTURE + OWNERSHIP",
      kind: "database" as const,
      c: C.teal,
    },
    {
      x: 35,
      y: 242,
      title: "Web content",
      sub: "CRAWL + PUBLICATION",
      kind: "cloud" as const,
      c: C.teal,
    },
    {
      x: 431,
      y: 242,
      title: "Files and notes",
      sub: "ACCESS + PROVENANCE",
      kind: "layers" as const,
      c: C.pink,
    },
  ];
  return (
    dotLine(206, 111, 294, 166) +
    dotLine(480, 111, 407, 166) +
    dotLine(207, 242, 293, 206) +
    dotLine(479, 242, 407, 207) +
    islands
      .map((v, i) =>
        group(
          rect(v.x, v.y, 256, 91, "white", C.line, 10) +
            icon(v.kind, v.x + 16, v.y + 18, v.c, 0.94) +
            txt(v.x + 57, v.y + 37, v.title, 16, C.ink, "v-bold") +
            mono(v.x + 57, v.y + 61, v.sub, 10.5) +
            line(v.x + 12, v.y + 80, v.x + 242, v.y + 80, v.c, 1.5, "v-trace"),
          i * 130,
        ),
      )
      .join("") +
    group(
      circle(352, 186, 55, C.gray, "none") +
        icon("search", 336, 162, C.ink, 1.2) +
        txt(352, 222, "One user question", 13, C.ink, "v-bold", "middle"),
      450,
    ) +
    group(
      rect(129, 355, 463, 29, C.pinkLight, "none", 8) +
        txt(
          361,
          374,
          "Separate stores also carry separate governance.",
          13,
          C.ink,
          "",
          "middle",
        ),
      540,
    )
  );
}

function platform(): string {
  const tiles = [
    {
      x: 22,
      label: "Text",
      sub: "WORDS + PASSAGES",
      kind: "document" as const,
      c: C.blue,
      inner:
        txt(39, 119, "single sign-on", 16, C.blue, "v-bold") +
        txt(39, 145, "configuration guide", 14),
    },
    {
      x: 261,
      label: "Metadata",
      sub: "SCOPE + CONSTRAINTS",
      kind: "layers" as const,
      c: C.teal,
      inner:
        mono(278, 117, "version: 4.0", 12, C.teal) +
        mono(278, 143, "access: support", 12),
    },
    {
      x: 500,
      label: "Vectors",
      sub: "SEMANTIC REPRESENTATION",
      kind: "spark" as const,
      c: C.pink,
      inner: [18, 39, 27, 48, 20, 36, 13, 43]
        .map((h, i) =>
          rect(
            519 + i * 19,
            151 - h,
            11,
            h,
            i % 2 ? C.pink : C.pinkLight,
            "none",
            2,
          ),
        )
        .join(""),
    },
  ];
  return (
    tiles
      .map((v, i) =>
        group(
          rect(v.x, 24, 198, 151, "white", C.line, 10) +
            icon(v.kind, v.x + 15, 42, v.c, 0.9) +
            title(v.x + 55, 61, v.label) +
            mono(v.x + 16, 85, v.sub, 10.5) +
            v.inner,
          i * 130,
        ),
      )
      .join("") +
    flow("M121 175 C121 214 265 211 322 257", C.blue, 4.2) +
    flow("M360 175 V242", C.teal, 3.6, 0.7) +
    flow("M600 175 C600 215 453 211 399 257", C.pink, 4.2, 1.4) +
    group(
      slab(363, 218, 216, 122, 28, C.blue, "Elasticsearch") +
        pill(
          203,
          337,
          "ONE ENGINE · COMPLEMENTARY SIGNALS",
          C.blue,
          C.blueLight,
          316,
        ),
      440,
    )
  );
}

function sources(): string {
  const entries = [
    {
      x: 22,
      y: 31,
      kind: "terminal" as const,
      label: "APIs and clients",
      sub: "APPLICATION WRITES",
      c: C.blue,
    },
    {
      x: 22,
      y: 122,
      kind: "cloud" as const,
      label: "Open Web Crawler",
      sub: "CONFIGURED CRAWLING",
      c: C.teal,
    },
    {
      x: 22,
      y: 213,
      kind: "database" as const,
      label: "Connectors",
      sub: "SUPPORTED SOURCES",
      c: C.blue,
    },
  ];
  return (
    entries
      .map(
        (v, i) =>
          group(node(v.x, v.y, v.kind, v.label, v.sub, v.c, 224, 74), i * 110) +
          flow(
            `M246 ${v.y + 37} C280 ${v.y + 37} 276 161 304 161`,
            v.c,
            4.5,
            i * 0.8,
          ),
      )
      .join("") +
    group(
      rect(304, 108, 163, 120, C.blueLight, C.blue, 10) +
        icon("workflow", 323, 123, C.blue, 0.95) +
        title(319, 181, "Ingest pipelines") +
        txt(319, 207, "Prepare and enrich", 12.5, C.muted),
      340,
    ) +
    flow("M467 166 H515", C.blue, 3.2, 0.7) +
    group(
      cube(589, 124, 113, C.blue, "database") +
        title(589, 265, "Search indices").replace(
          'text-anchor="start"',
          'text-anchor="middle"',
        ) +
        mono(589, 287, "CURRENT + GOVERNED", 10.5, C.muted, "middle"),
      480,
    ) +
    group(
      rect(36, 333, 648, 38, C.gray, "none", 8) +
        icon("clock", 50, 340, C.teal, 0.77) +
        txt(
          84,
          357,
          "Schedule sync, manage failures, preserve revision and access metadata.",
          13,
        ),
      580,
    )
  );
}

function preparation(o: VisualOptions): string {
  const p = phase(o, 4);
  const blocks = [
    { x: 20, label: "Extract", tag: "SOURCE TEXT", color: C.blue },
    { x: 200, label: "Chunk", tag: "SECTION BOUNDARIES", color: C.teal },
    { x: 380, label: "Enrich", tag: "SCOPE + REVISION", color: C.blue },
    { x: 560, label: "Index", tag: "READY TO RETRIEVE", color: C.pink },
  ];
  let body = group(
    txt(22, 34, "ATLAS HUB 4.0 · ADMINISTRATOR GUIDE", 13, C.ink, "v-bold") +
      mono(22, 58, "ILLUSTRATIVE DOCUMENT PREPARATION", 11),
    0,
  );
  body += blocks
    .map((v, i) => {
      const active = i <= p;
      let interior = "";
      if (i === 0)
        interior =
          icon("document", v.x + 55, 139, C.blue, 1.2) +
          ["Single sign-on", "Prerequisites", "Configuration"]
            .map((s, n) => txt(v.x + 14, 211 + n * 25, s, 12.5, C.ink))
            .join("");
      if (i === 1)
        interior = ["§2.1 Metadata", "§2.2 Callback", "§2.3 Test account"]
          .map(
            (s, n) =>
              rect(
                v.x + 12,
                138 + n * 49,
                132,
                36,
                n === 0 ? C.tealLight : C.gray,
                "none",
                5,
              ) + txt(v.x + 20, 161 + n * 49, s, 12),
          )
          .join("");
      if (i === 2)
        interior = [
          "product: Atlas Hub",
          "version: 4.0",
          "self-managed",
          "access: support",
          "revision: current",
        ]
          .map((s, n) =>
            mono(v.x + 12, 156 + n * 28, s, 10.5, n < 3 ? C.blue : C.muted),
          )
          .join("");
      if (i === 3)
        interior =
          cube(v.x + 78, 139, 72, C.pink, "database") +
          txt(
            v.x + 78,
            248,
            "Inspectable chunks",
            12.5,
            C.ink,
            "v-bold",
            "middle",
          ) +
          txt(v.x + 78, 270, "+ field mappings", 12.5, C.muted, "", "middle");
      return group(
        rect(v.x, 88, 156, 228, "white", active ? v.color : C.line, 9) +
          title(v.x + 14, 118, v.label, active ? C.ink : C.muted) +
          (active
            ? interior
            : txt(v.x + 78, 220, "Next stage", 13, C.muted, "", "middle")) +
          (i < 3
            ? i < p
              ? flow(`M${v.x + 156} 207 H${v.x + 179}`, v.color, 2.2, i * 0.6)
              : arrow(v.x + 157, 207, v.x + 176, 207, C.line)
            : ""),
        i * 140 + 100,
      );
    })
    .join("");
  return (
    body +
    group(
      rect(37, 341, 646, 32, C.gray, "none", 8) +
        txt(
          360,
          362,
          "Content, citation boundaries and permissions travel together.",
          14,
          C.ink,
          "",
          "middle",
        ),
      560,
    )
  );
}

function eligibility(o: VisualOptions): string {
  const p = phase(o, 3);
  return (
    group(
      node(
        28,
        33,
        "document",
        "Source revision",
        "PUBLISHED CHANGE",
        C.blue,
        204,
        74,
      ),
      0,
    ) +
    (p >= 1
      ? flow("M232 70 H270", C.blue, 2.6)
      : arrow(232, 70, 270, 70, C.line)) +
    group(
      node(
        270,
        33,
        "clock",
        "Sync + refresh",
        p >= 1 ? "SEARCHABLE REVISION" : "PIPELINE / REFRESH",
        C.teal,
        204,
        74,
      ),
      150,
    ) +
    (p >= 2
      ? flow("M474 70 H513", C.teal, 2.6, 0.6)
      : arrow(474, 70, 513, 70, C.line)) +
    group(
      node(513, 33, "lock", "Access gate", "SCOPED RETRIEVAL", C.blue, 181, 74),
      300,
    ) +
    group(
      rect(27, 145, 434, 156, "white", C.line, 10) +
        txt(43, 172, "Eligibility comes before ranking", 16, C.ink, "v-bold") +
        [
          "Atlas Hub",
          "Version 4.0",
          "Self-managed",
          "Current published",
          "Authorized support scope",
        ]
          .map(
            (s, i) =>
              icon(
                "check",
                43 + (i % 2) * 204,
                187 + Math.floor(i / 2) * 33,
                p >= 2 ? C.teal : C.line,
                0.6,
              ) +
              txt(
                68 + (i % 2) * 204,
                203 + Math.floor(i / 2) * 33,
                s,
                12.5,
                p >= 2 ? C.ink : C.muted,
              ),
          )
          .join(""),
      380,
    ) +
    (p >= 2
      ? flow("M461 224 H503", C.teal, 2.5)
      : arrow(461, 224, 503, 224, C.line)) +
    group(
      rect(
        503,
        145,
        191,
        156,
        p >= 2 ? C.tealLight : C.gray,
        p >= 2 ? C.teal : C.line,
        10,
      ) +
        icon("shield", 520, 163, p >= 2 ? C.teal : C.muted, 0.96) +
        txt(
          517,
          226,
          p >= 2 ? "Eligible evidence only" : "Policy gate",
          15,
          C.ink,
          "v-bold",
        ) +
        txt(517, 256, "Hits · snippets · context", 12.5, C.muted) +
        txt(517, 279, "· answer citations", 12.5, C.muted),
      470,
    ) +
    group(
      rect(28, 331, 666, 45, C.pinkLight, "none", 8) +
        icon("lock", 41, 341, C.pink, 0.75) +
        txt(
          75,
          350,
          "Excluded metadata: older 3.2 · cloud-only · restricted",
          13,
          C.ink,
          "v-bold",
        ) +
        mono(
          75,
          368,
          "EXCLUDED INPUTS NEVER BECOME USER-VISIBLE CONTENT",
          10.5,
          C.muted,
        ),
      570,
    )
  );
}

function lexical(): string {
  return (
    group(
      rect(27, 21, 666, 62, "white", C.blue, 9) +
        icon("search", 43, 39, C.blue, 0.88) +
        pill(81, 35, "Atlas Hub", C.blue, C.blueLight, 109) +
        pill(204, 35, "4.0", C.blue, C.blueLight, 57) +
        pill(275, 35, "self-managed", C.blue, C.blueLight, 136) +
        pill(425, 35, "SSO", C.blue, C.blueLight, 60) +
        mono(507, 53, "EXACT QUERY TERMS", 10.5),
      0,
    ) +
    group(
      txt(29, 111, "Lexical relevance · BM25", 16, C.ink, "v-bold") +
        mono(30, 132, "ELIGIBLE CANDIDATES / SYNTHETIC ORDER", 10.5),
      100,
    ) +
    [
      {
        y: 145,
        rank: "01",
        label: "SSO administrator guide",
        text: "Atlas Hub 4.0 · self-managed · current",
        fill: C.blueLight,
      },
      {
        y: 216,
        rank: "02",
        label: "Authentication release notes",
        text: "Product and version terms stay precise",
        fill: "white",
      },
      {
        y: 287,
        rank: "03",
        label: "Sign-in troubleshooting",
        text: "Current authorized support scope",
        fill: "white",
      },
    ]
      .map((v, i) =>
        group(
          rect(29, v.y, 398, 60, v.fill, C.line, 8) +
            mono(44, v.y + 24, v.rank, 12, C.blue) +
            txt(79, v.y + 25, v.label, 14, C.ink, "v-bold") +
            mono(79, v.y + 45, v.text, 10.5) +
            (i === 0
              ? rect(78, v.y + 5, 30, 2, C.blue, "none", 0, "v-pulse")
              : ""),
          180 + i * 130,
        ),
      )
      .join("") +
    flow("M230 83 V99 C230 121 381 121 381 145", C.blue, 4.5) +
    group(
      rect(454, 142, 239, 205, C.gray, C.line, 10) +
        icon("lock", 470, 159, C.pink, 0.8) +
        txt(507, 181, "Excluded inputs", 15, C.ink, "v-bold") +
        txt(470, 219, "Older 3.2 guide", 13, C.muted) +
        mono(470, 237, "WRONG VERSION", 10.5, C.pink) +
        txt(470, 269, "Cloud-only guide", 13, C.muted) +
        mono(470, 287, "WRONG DEPLOYMENT", 10.5, C.pink) +
        txt(470, 320, "Restricted note · no content", 12.5, C.muted),
      470,
    ) +
    mono(
      29,
      374,
      "PRODUCT IDENTIFIERS AND VERSION TERMS STILL MATTER",
      11,
      C.blue,
    )
  );
}

function vectors(o: VisualOptions): string {
  const p = phase(o, 3);
  const points = [
    { x: 376, y: 182, r: 7, c: C.blue },
    { x: 408, y: 162, r: 7, c: C.teal },
    { x: 420, y: 209, r: 6, c: C.blue },
    { x: 304, y: 134, r: 4, c: C.line },
    { x: 320, y: 237, r: 4, c: C.line },
    { x: 545, y: 133, r: 4, c: C.line },
    { x: 593, y: 238, r: 4, c: C.line },
    { x: 509, y: 243, r: 4, c: C.line },
    { x: 577, y: 173, r: 4, c: C.line },
  ];
  return (
    group(
      rect(26, 46, 206, 219, "white", C.line, 10) +
        title(42, 75, "User intent") +
        txt(42, 109, "“company sign-in”", 16, C.blue, "v-bold") +
        txt(42, 137, "Encode the query", 13, C.muted) +
        [30, 17, 44, 24, 36, 13, 41, 23]
          .map((h, i) =>
            rect(
              44 + i * 21,
              206 - h,
              12,
              h,
              i % 2 ? C.blue : C.blueLight,
              "none",
              2,
            ),
          )
          .join("") +
        mono(42, 237, "ILLUSTRATIVE VECTOR", 10.5),
      0,
    ) +
    (p >= 1
      ? flow("M232 152 C260 152 271 198 345 198", C.blue, 3.3)
      : arrow(233, 152, 267, 152, C.line)) +
    group(
      rect(271, 46, 422, 219, C.gray, C.line, 10) +
        txt(287, 74, "An eligible semantic neighborhood", 16, C.ink, "v-bold") +
        line(295, 244, 668, 244, C.line) +
        line(295, 95, 295, 244, C.line) +
        (p >= 1 ? circle(393, 190, 51, C.blueLight, C.blue, "v-pulse") : "") +
        points.map((v) => circle(v.x, v.y, v.r, v.c, "white")).join("") +
        circle(393, 192, 5, C.pink, "white") +
        mono(431, 194, "query", 11, C.pink) +
        (p >= 1
          ? line(393, 192, 376, 182, C.blue, 1.6) +
            line(393, 192, 408, 162, C.teal, 1.6) +
            line(393, 192, 420, 209, C.blue, 1.6)
          : "") +
        mono(489, 226, "“single sign-on”", 11, C.blue),
      170,
    ) +
    (p >= 2 ? flow("M394 265 V284 H133 M394 284 H588", C.blue, 4.5) : "") +
    ["SSO admin guide", "Troubleshooting", "Release notes"]
      .map((v, i) =>
        group(
          rect(
            27 + i * 231,
            300,
            205,
            45,
            p >= 2 ? (i === 1 ? C.tealLight : C.blueLight) : C.gray,
            "none",
            8,
          ) +
            icon(
              "document",
              40 + i * 231,
              312,
              p >= 2 ? C.blue : C.line,
              0.62,
            ) +
            txt(
              69 + i * 231,
              328,
              p >= 2 ? v : "Eligible context",
              13,
              p >= 2 ? C.ink : C.muted,
            ),
          320 + i * 90,
        ),
      )
      .join("") +
    mono(
      360,
      375,
      "ABSTRACT PROJECTION · SYNTHETIC POSITIONS · NOT A MODEL DIAGRAM",
      10.5,
      C.muted,
      "middle",
    )
  );
}

function hybrid(o: VisualOptions): string {
  const p = phase(o, 4);
  return (
    group(
      txt(
        29,
        33,
        "Two complementary signals. One eligible corpus.",
        17,
        C.ink,
        "v-bold",
      ) +
        mono(29, 58, "RRF COMBINES RANK POSITIONS / ILLUSTRATIVE LISTS", 10.5),
      0,
    ) +
    group(
      rect(27, 84, 246, 172, "white", p >= 0 ? C.blue : C.line, 8) +
        panelHeader(27, 84, 246, "Lexical · exact words", "BM25") +
        rankRows(
          39,
          129,
          222,
          ["SSO admin guide", "Release notes", "Troubleshooting"],
          C.blue,
        ),
      150,
    ) +
    group(
      rect(447, 84, 246, 172, "white", p >= 1 ? C.teal : C.line, 8) +
        panelHeader(447, 84, 246, "Semantic · intent", "VECTOR") +
        rankRows(
          459,
          129,
          222,
          ["Troubleshooting", "SSO admin guide", "Release notes"],
          C.teal,
          p >= 1,
        ),
      280,
    ) +
    (p >= 2
      ? flow("M273 174 H310", C.blue, 2.8) +
        flow("M447 174 H410", C.teal, 2.8, 0.7)
      : arrow(273, 174, 310, 174, C.line) + arrow(447, 174, 410, 174, C.line)) +
    group(
      circle(
        360,
        174,
        45,
        p >= 2 ? C.blueLight : C.gray,
        p >= 2 ? C.blue : C.line,
      ) +
        txt(
          360,
          171,
          "RRF",
          20,
          p >= 2 ? C.blue : C.muted,
          "v-bold",
          "middle",
        ) +
        mono(360, 190, "RANK FUSION", 10.5, C.muted, "middle"),
      380,
    ) +
    (p >= 2
      ? flow("M360 219 V285", C.blue, 2.6, 0.5)
      : arrow(360, 219, 360, 285, C.line)) +
    group(
      rect(77, 285, 566, 71, p >= 2 ? C.blueLight : C.gray, "none", 10) +
        ["1  SSO admin guide", "2  Troubleshooting", "3  Release notes"]
          .map((s, i) =>
            txt(
              96 + i * 179,
              316,
              p >= 2 ? s : "Pending fusion",
              12.5,
              p >= 2 ? C.ink : C.muted,
              i === 0 ? "v-bold" : "",
            ),
          )
          .join("") +
        mono(
          360,
          340,
          p >= 3
            ? "INSPECT CURRENT AUTHORIZED PASSAGES BEFORE USE"
            : "SAME FILTERS AND AUTHORIZATION ON BOTH BRANCHES",
          10.5,
          p >= 3 ? C.teal : C.muted,
          "middle",
        ),
      480,
    ) +
    mono(
      360,
      381,
      "FUSION IS DISTINCT FROM SEMANTIC RERANKING",
      11,
      C.muted,
      "middle",
    )
  );
}

function retrievers(): string {
  return (
    group(
      rect(274, 18, 171, 62, C.pinkLight, C.pink, 8) +
        icon("spark", 288, 34, C.pink, 0.78) +
        txt(320, 47, "Rerank selected", 14, C.ink, "v-bold") +
        mono(290, 67, "OPTIONAL LATER STAGE", 10.5),
      0,
    ) +
    flow("M360 138 V80", C.pink, 3) +
    group(
      rect(274, 138, 171, 57, C.blueLight, C.blue, 8) +
        icon("layers", 291, 150, C.blue, 0.8) +
        txt(327, 172, "RRF fusion", 15, C.ink, "v-bold"),
      140,
    ) +
    flow("M173 269 V228 H360 V195", C.blue, 5) +
    flow("M547 269 V228 H360", C.teal, 5, 0.8) +
    group(
      node(
        57,
        269,
        "document",
        "Standard retriever",
        "LEXICAL QUERY",
        C.blue,
        234,
        67,
      ),
      260,
    ) +
    group(
      node(429, 269, "spark", "kNN retriever", "VECTOR QUERY", C.teal, 234, 67),
      380,
    ) +
    group(
      rect(30, 350, 662, 30, C.gray, "none", 8) +
        icon("lock", 45, 355, C.blue, 0.62) +
        txt(
          72,
          370,
          "Shared scope: product · version · deployment · current · authorized",
          13,
        ),
      480,
    ) +
    group(
      txt(20, 32, "One request", 17, C.ink, "v-bold") +
        txt(20, 59, "A composable tree", 14, C.muted) +
        txt(19, 178, "Each branch retrieves.", 13, C.muted) +
        txt(19, 199, "Fusion combines ranks.", 13, C.muted) +
        txt(477, 174, "Later ranking stages", 13, C.muted) +
        txt(477, 195, "refine selected candidates.", 13, C.muted),
      540,
    )
  );
}

function funnel(o: VisualOptions): string {
  const p = phase(o, 3);
  const trapezoid = (
    top: number,
    bottom: number,
    y: number,
    h: number,
    color: string,
  ) =>
    `<path d="M${360 - top / 2} ${y} H${360 + top / 2} L${360 + bottom / 2} ${y + h} H${360 - bottom / 2}Z" fill="${color}" stroke="${C.line}"/>`;
  return (
    group(
      txt(28, 34, "Candidate depth and resource use", 17, C.ink, "v-bold") +
        mono(
          28,
          58,
          "CONCEPTUAL TIERS / NO QUANTITATIVE PERFORMANCE CLAIM",
          10.5,
        ),
      0,
    ) +
    group(
      trapezoid(444, 333, 82, 74, C.blueLight) +
        title(360, 112, "Retrieve broadly").replace(
          'text-anchor="start"',
          'text-anchor="middle"',
        ) +
        txt(
          360,
          137,
          "Eligible lexical + semantic candidates",
          13,
          C.muted,
          "",
          "middle",
        ),
      140,
    ) +
    group(
      trapezoid(323, 218, 169, 74, p >= 1 ? C.tealLight : C.gray) +
        txt(
          360,
          199,
          "Rank and fuse",
          16,
          p >= 1 ? C.ink : C.muted,
          "v-bold",
          "middle",
        ) +
        txt(360, 224, "Focus candidate depth", 12.5, C.muted, "", "middle"),
      270,
    ) +
    group(
      trapezoid(208, 130, 256, 74, p >= 2 ? C.pinkLight : C.gray) +
        txt(
          360,
          286,
          "Rerank selectively",
          14.5,
          p >= 2 ? C.ink : C.muted,
          "v-bold",
          "middle",
        ) +
        mono(360, 310, "MODEL WORK", 10.5, C.muted, "middle"),
      400,
    ) +
    (p >= 1
      ? flow("M177 122 L217 204 L268 291", C.blue, 4.8) +
        flow("M543 122 L503 204 L452 291", C.teal, 4.8, 1.1)
      : "") +
    group(
      txt(25, 190, "More candidates", 12.5, C.muted) +
        arrow(87, 210, 87, 291, C.line) +
        txt(25, 316, "More focused work", 12.5, C.muted) +
        txt(544, 192, "Measure recall", 12.5, C.muted) +
        txt(544, 220, "and latency.", 12.5, C.muted) +
        txt(544, 282, "Tune model", 12.5, C.muted) +
        txt(544, 309, "cost and depth.", 12.5, C.muted),
      500,
    ) +
    group(
      rect(114, 348, 492, 30, "white", C.line, 8) +
        icon("workflow", 130, 353, C.pink, 0.65) +
        txt(
          163,
          369,
          "Explicit business policy is a separate decision.",
          13,
          C.ink,
          "v-bold",
        ),
      580,
    )
  );
}

function rerank(o: VisualOptions): string {
  const p = phase(o, 3);
  return (
    group(
      rect(28, 19, 665, 49, C.gray, "none", 8) +
        icon("search", 44, 31, C.blue, 0.8) +
        txt(
          80,
          49,
          "Compare the question with candidate passages",
          16,
          C.ink,
          "v-bold",
        ),
      0,
    ) +
    group(
      rect(29, 103, 226, 188, "white", C.line, 9) +
        panelHeader(29, 103, 226, "Candidate passages", "INPUT") +
        rankRows(
          41,
          148,
          202,
          ["Admin §2.3 test", "Admin §2.1 metadata", "Admin §2.2 callback"],
          C.blue,
        ),
      140,
    ) +
    (p >= 1
      ? flow("M255 197 H291", C.blue, 2.4)
      : arrow(255, 197, 291, 197, C.line)) +
    group(
      rect(
        291,
        143,
        135,
        105,
        p >= 1 ? C.pinkLight : C.gray,
        p >= 1 ? C.pink : C.line,
        9,
      ) +
        icon("spark", 345, 156, p >= 1 ? C.pink : C.muted, 0.9) +
        txt(359, 213, "Rerank model", 14, C.ink, "v-bold", "middle") +
        mono(359, 233, "QUERY × PASSAGE", 10.5, C.muted, "middle"),
      280,
    ) +
    (p >= 2
      ? flow("M426 197 H465", C.pink, 2.6, 0.8)
      : arrow(426, 197, 465, 197, C.line)) +
    group(
      rect(
        465,
        103,
        228,
        188,
        p >= 2 ? C.tealLight : "white",
        p >= 2 ? C.teal : C.line,
        9,
      ) +
        panelHeader(465, 103, 228, "Passage relevance", "OUTPUT") +
        rankRows(
          477,
          148,
          204,
          ["Admin §2.1 metadata", "Admin §2.2 callback", "Admin §2.3 test"],
          C.teal,
          p >= 2,
        ),
      430,
    ) +
    group(
      rect(29, 320, 664, 56, C.blueLight, "none", 9) +
        txt(
          44,
          342,
          "Configured model path · e.g. supported Jina reranking",
          14,
          C.ink,
          "v-bold",
        ) +
        mono(
          44,
          363,
          "MEASURE QUALITY, CANDIDATE DEPTH, LATENCY AND COST",
          10.5,
          C.muted,
        ),
      560,
    )
  );
}

function rules(): string {
  return (
    group(
      txt(
        27,
        36,
        "Relevance and policy answer different questions.",
        17,
        C.ink,
        "v-bold",
      ),
      0,
    ) +
    group(
      rect(26, 79, 237, 218, "white", C.line, 10) +
        icon("search", 42, 98, C.blue, 0.96) +
        title(84, 121, "Relevance") +
        rankRows(
          38,
          153,
          213,
          ["SSO admin guide", "Troubleshooting", "Release notes"],
          C.blue,
        ),
      150,
    ) +
    flow("M263 190 H304", C.blue, 3.1) +
    group(
      rect(304, 116, 125, 150, C.pinkLight, C.pink, 10) +
        icon("workflow", 351, 134, C.pink, 0.9) +
        txt(367, 191, "Explicit rules", 14, C.ink, "v-bold", "middle") +
        txt(367, 219, "Pin / exclude", 12.5, C.muted, "", "middle") +
        mono(367, 248, "CONFIGURED", 10.5, C.pink, "middle"),
      300,
    ) +
    flow("M429 190 H468", C.pink, 3.1, 1) +
    group(
      rect(468, 79, 225, 218, "white", C.pink, 10) +
        icon("document", 483, 98, C.pink, 0.96) +
        title(525, 121, "Domain decision") +
        pill(483, 146, "PIN CURRENT GUIDE", C.pink, C.pinkLight, 194) +
        txt(484, 197, "Only when criteria match", 13, C.ink, "v-bold") +
        txt(484, 226, "Explain why it is promoted.", 12.5, C.muted) +
        txt(484, 256, "Keep access filters intact.", 12.5, C.muted),
      440,
    ) +
    group(
      rect(60, 331, 600, 43, C.gray, "none", 8) +
        icon("lock", 74, 341, C.teal, 0.75) +
        txt(
          110,
          357,
          "Policy promotion does not make a passage semantically relevant.",
          13,
        ),
      560,
    )
  );
}

function evaluation(): string {
  const rows = [
    {
      y: 127,
      q: "Exact product + version",
      base: 92,
      test: 108,
      result: "Preserve precision",
      c: C.blue,
    },
    {
      y: 186,
      q: "Natural-language intent",
      base: 57,
      test: 122,
      result: "Improve coverage",
      c: C.teal,
    },
    {
      y: 245,
      q: "Missing or conflicting source",
      base: 101,
      test: 74,
      result: "Investigate failure",
      c: C.pink,
    },
  ];
  return (
    group(
      txt(27, 36, "Evaluate a representative query set", 17, C.ink, "v-bold") +
        mono(27, 60, "SYNTHETIC ILLUSTRATION / NO PRODUCT BENCHMARK", 10.5),
      0,
    ) +
    group(
      rect(26, 82, 667, 225, "white", C.line, 10) +
        panelHeader(
          26,
          82,
          667,
          "Query judgments and failure cases",
          "ILLUSTRATIVE",
        ) +
        rows
          .map(
            (v, i) =>
              txt(43, v.y + 18, v.q, 13.5, C.ink, "v-bold") +
              rect(299, v.y, v.base, 9, C.line, "none", 3) +
              rect(299, v.y + 15, v.test, 9, v.c, "none", 3, "v-pulse") +
              txt(488, v.y + 19, v.result, 13, v.c, "v-bold") +
              (i < 2 ? line(43, v.y + 42, 676, v.y + 42, "#E6ECF2") : ""),
          )
          .join("") +
        mono(299, 295, "BASELINE / CANDIDATE", 10.5),
      160,
    ) +
    group(
      rect(27, 329, 208, 44, C.blueLight, "none", 8) +
        icon("check", 41, 340, C.blue, 0.73) +
        txt(73, 356, "Relevance judgments", 13),
      360,
    ) +
    group(
      rect(256, 329, 208, 44, C.tealLight, "none", 8) +
        icon("clock", 270, 338, C.teal, 0.79) +
        txt(306, 356, "Latency and throughput", 12.5),
      460,
    ) +
    group(
      rect(486, 329, 207, 44, C.pinkLight, "none", 8) +
        icon("layers", 500, 338, C.pink, 0.79) +
        txt(536, 356, "Resources and cost", 13),
      560,
    )
  );
}

function experience(): string {
  return (
    group(
      rect(26, 22, 667, 356, "white", C.line, 11) +
        panelHeader(
          26,
          22,
          667,
          "Atlas Hub support search",
          "ILLUSTRATIVE UI",
        ) +
        rect(44, 74, 631, 41, C.gray, "none", 8) +
        icon("search", 55, 84, C.blue, 0.78) +
        txt(89, 101, "Atlas Hub 4.0 self-managed SSO", 15, C.ink, "v-bold") +
        pill(44, 127, "4.0", C.blue, C.blueLight, 54) +
        pill(107, 127, "self-managed", C.blue, C.blueLight, 134) +
        pill(250, 127, "current", C.teal, C.tealLight, 84) +
        pill(343, 127, "authorized", C.teal, C.tealLight, 110),
      0,
    ) +
    group(
      rect(44, 168, 386, 105, C.blueLight, "none", 8) +
        txt(58, 195, "SSO administrator guide", 17, C.blue, "v-bold") +
        mono(58, 218, "ATLAS HUB · 4.0 · SELF-MANAGED", 10.5) +
        txt(
          58,
          245,
          "Metadata, callback URL and test prerequisites.",
          12.5,
          C.ink,
        ) +
        rect(44, 287, 386, 73, "white", C.line, 8) +
        txt(58, 315, "Sign-in troubleshooting", 15, C.blue, "v-bold") +
        txt(
          58,
          341,
          "Check certificate validity and clock agreement.",
          12.5,
          C.muted,
        ),
      180,
    ) +
    flow("M430 218 H453", C.blue, 2.5) +
    group(
      rect(453, 168, 222, 192, "white", C.blue, 8) +
        icon("document", 468, 182, C.blue, 0.83) +
        txt(505, 201, "Inspect the source", 14, C.ink, "v-bold") +
        txt(469, 237, "§2.1 Metadata", 13, C.ink, "v-bold") +
        txt(469, 264, "§2.2 Callback", 13, C.ink, "v-bold") +
        txt(469, 291, "§2.3 Administrator + test", 12.5, C.ink, "v-bold") +
        line(470, 307, 658, 307, C.line) +
        mono(469, 336, "PROVENANCE STAYS VISIBLE", 10.5, C.teal),
      430,
    )
  );
}

export const foundationVisuals: Partial<
  Record<VisualKind, (o: VisualOptions) => string>
> = {
  hero,
  promise,
  evolution,
  fragmented,
  pillars,
  platform,
  sources,
  preparation,
  eligibility,
  lexical,
  vectors,
  hybrid,
  retrievers,
  "hybrid-demo": hybridDemo,
  funnel,
  rerank,
  rules,
  evaluation,
  experience,
};
