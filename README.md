# Elastic Search — Trusted context

An original 34-scene animated customer presentation for CTOs and search platform leaders.

**Your users ask for an answer. Your platform must find the right context.**

The fictional Atlas Hub journey connects ingestion, permissions and freshness with lexical/vector/hybrid retrieval, relevance evaluation, vector infrastructure, model choice and grounded agent experiences. All results and diagrams are illustrative; the site performs no real searches, model calls or actions.

## Present

- Site: https://ahmedzaky-creator.github.io/elastic-search-preso/
- Arrows, Space, Page keys and swipes move directly between slides. Animations play and loop automatically while you remain on a slide.
- `G` overview, `T` filmstrip, `N` inline notes, `F` fullscreen, `1–5` density (default 3).
- `R` replay, `L` laser, `D` draw, `C` clear ink, `?` help/downloads.
- Reduced motion shows complete diagrams instantly. Hide notes before screen sharing.

## Companion files

The help menu links standalone offline HTML, the 34-page density 3 PDF, presenter notes and the buyer conversation guide. The optional Context Engine/Data Federation appendix is qualified as experimental/preview and is outside the core PDF.

## Accuracy and publication

Scene definitions include public sources and feature-specific requirements. Synthetic ranks and answers are labeled. Advanced features depend on version, subscription, model, hardware, privileges, deployment and connectivity. Customer results are attributed examples rather than promises. The static site has no runtime backend or secrets.

This repository contains original code/diagrams and public-source content. Private reference materials, credentials and sign-in history are excluded from files and Git history. Fonts are bundled under OFL; Elastic logos remain trademarks. See THIRD_PARTY_NOTICES.md.

## Develop and export

```sh
npm ci
npm run dev -- --port 4174
npm run build
npm test
npm run export
```

Node 22.12+ is required. For macOS, export uses installed Chrome; set `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH` for another Chromium installation. Export generates 34 thumbnails, PDF, offline player and notes, then rebuilds Pages assets. `PRESENTATION_OUTPUT_DIR` and `PRESENTATION_QA_DIR` override output folders.

`npm run export -- --offline-only` refreshes a controller-only change using existing PDF/thumbnails. `node scripts/qa.mjs --all` captures all 34 scenes at density 1/3/5. Tests cover navigation, automatic animation, history, annotations, notes, responsive layout, offline playback and print completeness.

Pushes to main verify and deploy GitHub Pages. Revert the relevant commit to roll back through the same workflow.
