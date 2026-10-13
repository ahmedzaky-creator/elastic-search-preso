import type { Scene, VisualOptions } from "./types";
import { esc } from "./visuals/primitives";
import { foundationVisuals } from "./visuals/foundation";
import { engineeringVisuals } from "./visuals/engineering";
const visuals = { ...foundationVisuals, ...engineeringVisuals };
export function renderVisual(scene: Scene, options: VisualOptions): string {
  const render = visuals[scene.visual];
  if (!render) throw new Error(`Missing original diagram: ${scene.visual}`);
  let body = render(options);
  if (options.settled)
    body = body
      .replace(/<g class="motion-particles">[\s\S]*?<\/g>/g, "")
      .replace(/<animateMotion[^>]*\/>/g, "");
  return `<div class="presentation-visual${options.settled ? " settled" : ""}" data-visual="${scene.visual}" data-step="${options.step}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 390" role="img" aria-label="${esc(scene.headline + " " + scene.emphasis)}"><title>${esc(scene.headline + " " + scene.emphasis)}</title>${body}</svg></div>`;
}
