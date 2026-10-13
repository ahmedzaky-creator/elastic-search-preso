import type { VisualKind, VisualOptions } from "../types";
import { documents, searchScenario } from "../scenario";
import {
  dotLine,
  C,
  arrow,
  caption,
  circle,
  flow,
  group,
  icon,
  line,
  mono,
  path,
  phase,
  pill,
  rect,
  slab,
  title,
  txt,
} from "./primitives";

function indexChoice(o: VisualOptions): string {
  const s = phase(o, 3);
  const active = (n: number) => o.settled || s === n;
  const card = (x: number, n: number, label: string, sub: string) =>
    rect(
      x,
      27,
      216,
      294,
      active(n) ? C.blueLight : "white",
      active(n) ? C.blue : C.line,
      12,
    ) +
    title(x + 18, 57, label, active(n) ? C.blue : C.ink) +
    mono(x + 18, 78, sub, 10.5);
  const flat = Array.from({ length: 9 }, (_, n) => ({
    x: 66 + (n % 3) * 45,
    y: 152 + Math.floor(n / 3) * 43,
  }));
  const flatRoutes = flat
    .map((p, n) =>
      active(0)
        ? flow(`M111 112 L${p.x} ${p.y}`, C.blue, 3.4, n * 0.3)
        : line(111, 112, p.x, p.y, C.line, 1),
    )
    .join("");
  const flatDots = flat
    .map(
      (p, n) =>
        circle(
          p.x,
          p.y,
          8,
          n === 4 ? C.teal : "white",
          n === 4 ? C.teal : C.blue,
        ) + (n === 4 ? circle(p.x, p.y, 16, "none", C.teal, "v-pulse") : ""),
    )
    .join("");
  const graph = [
    [320, 135],
    [367, 125],
    [405, 158],
    [299, 186],
    [351, 176],
    [392, 205],
    [313, 237],
    [356, 253],
    [421, 247],
  ];
  const edges = [
    [0, 1],
    [0, 3],
    [0, 4],
    [1, 2],
    [1, 4],
    [2, 4],
    [2, 5],
    [3, 4],
    [3, 6],
    [4, 5],
    [4, 6],
    [4, 7],
    [5, 7],
    [5, 8],
    [6, 7],
    [7, 8],
  ];
  const graphEdges = edges
    .map(([a, b]) =>
      line(graph[a][0], graph[a][1], graph[b][0], graph[b][1], C.line, 1.2),
    )
    .join("");
  const graphRoute = active(1)
    ? flow("M360 101 L320 135 L351 176 L392 205 L421 247", C.blue, 4.2)
    : path("M360 101 L320 135 L351 176 L392 205 L421 247", C.blue, 2);
  const graphDots = graph
    .map(
      ([x, y], n) =>
        circle(
          x,
          y,
          7.5,
          n === 8 ? C.teal : "white",
          n === 8 ? C.teal : C.blue,
        ) + (n === 8 ? circle(x, y, 15, "none", C.teal, "v-pulse") : ""),
    )
    .join("");
  const cluster = (x: number, y: number, selected: boolean) => {
    const c = selected ? C.teal : C.muted;
    return (
      `<ellipse cx="${x}" cy="${y}" rx="25" ry="31" fill="${selected ? C.tealLight : C.gray}" stroke="${selected ? C.teal : C.line}"/>` +
      [
        [-11, -12],
        [9, -15],
        [-4, 0],
        [12, 8],
        [-12, 15],
        [5, 18],
      ]
        .map(([dx, dy]) => circle(x + dx, y + dy, 3, c, "none"))
        .join("") +
      circle(x, y, 5, "white", c)
    );
  };
  const diskRoutes = active(2)
    ? flow("M599 105 L599 139 L527 174", C.blue, 4.3) +
      flow("M599 139 L599 174", C.teal, 3.9, 1.3)
    : path("M599 105 L599 139 L527 174 M599 139 L599 174", C.blue, 1.7);
  const disk =
    `<path d="M515 257V280C515 296 684 296 684 280V257" fill="${C.gray}" stroke="${C.line}"/><ellipse cx="599.5" cy="257" rx="84.5" ry="14" fill="white" stroke="${C.line}"/>` +
    mono(599, 284, "COMPACT CLUSTERS ON DISK", 10.5, C.muted, "middle");
  return (
    group(
      card(18, 0, "Flat", "Exhaustive comparison") +
        flatRoutes +
        flatDots +
        circle(111, 112, 13, "white", C.blue) +
        icon("search", 102, 103, C.blue, 0.64) +
        txt(126, 286, "Compare eligible vectors", 12, C.ink, "", "middle"),
      0,
    ) +
    group(
      card(252, 1, "HNSW", "Approximate graph traversal") +
        graphEdges +
        graphRoute +
        graphDots +
        circle(360, 101, 12, "white", C.blue) +
        icon("search", 352, 93, C.blue, 0.58) +
        txt(360, 286, "Navigate connected neighbors", 12, C.ink, "", "middle"),
      120,
    ) +
    group(
      card(486, 2, "DiskBBQ", "Hierarchical cluster search") +
        diskRoutes +
        line(599, 139, 671, 174, C.line, 1.1) +
        circle(599, 105, 12, "white", C.blue) +
        icon("search", 591, 97, C.blue, 0.58) +
        circle(599, 139, 5, "white", C.blue) +
        cluster(527, 205, true) +
        cluster(599, 205, true) +
        cluster(671, 205, false) +
        disk +
        mono(599, 315, "Visit selected clusters", 10.5, C.blue, "middle"),
      240,
    ) +
    group(
      rect(18, 339, 684, 37, C.gray, "none", 8) +
        icon("layers", 32, 346, C.blue, 0.7) +
        txt(
          60,
          362,
          "Choose by recall, filters, corpus, concurrency and hardware.",
          14,
          C.ink,
        ) +
        icon("check", 668, 347, C.teal, 0.65),
      360,
    )
  );
}

const heading = (label: string, sub: string) =>
  title(24, 28, label) + mono(24, 48, sub, 11);

function stageCard(
  x: number,
  y: number,
  w: number,
  h: number,
  label: string,
  active: boolean,
  color = C.blue,
): string {
  return (
    rect(
      x,
      y,
      w,
      h,
      active ? (color === C.teal ? C.tealLight : C.blueLight) : "white",
      active ? color : C.line,
      10,
    ) + txt(x + 16, y + 27, label, 15, C.ink, "v-bold")
  );
}

function quantization(o: VisualOptions): string {
  const s = phase(o, 3),
    a = (n: number) => o.settled || n === s;
  const dimensions = [94, 53, 120, 39, 83, 65, 109, 46];
  const floatBars = dimensions
    .map(
      (w, n) =>
        rect(46, 114 + n * 16, 139, 9, C.gray, "none", 3) +
        rect(46, 114 + n * 16, w, 9, C.blue, "none", 3),
    )
    .join("");
  const bits = Array.from({ length: 32 }, (_, n) =>
    rect(
      276 + (n % 8) * 19,
      119 + Math.floor(n / 8) * 24,
      14,
      17,
      n % 3 ? C.blue : C.tealLight,
      "none",
      3,
    ),
  ).join("");
  const clusters = [527, 593, 655]
    .map(
      (x, n) =>
        `<ellipse cx="${x}" cy="184" rx="24" ry="35" fill="${n < 2 ? C.tealLight : C.gray}" stroke="${n < 2 ? C.teal : C.line}"/>` +
        Array.from({ length: 7 }, (_, i) =>
          circle(
            x - 11 + (i % 3) * 11,
            165 + Math.floor(i / 3) * 15,
            3.2,
            n < 2 ? C.teal : C.muted,
            "none",
          ),
        ).join(""),
    )
    .join("");
  return (
    heading(
      "Two engineering decisions",
      "A smaller representation is different from a disk-based search index",
    ) +
    group(
      stageCard(22, 70, 191, 239, "Dense representation", a(0)) +
        floatBars +
        mono(46, 266, "float dimensions", 11, C.blue) +
        txt(46, 289, "Original information", 12),
      0,
    ) +
    group(
      stageCard(253, 70, 191, 239, "BBQ quantization", a(1)) +
        bits +
        icon("layers", 274, 234, C.blue, 0.8) +
        txt(309, 251, "Compact bits", 14, C.blue, "v-bold") +
        txt(271, 289, "Lossy; measure relevance", 12),
      100,
    ) +
    group(
      stageCard(484, 70, 213, 239, "DiskBBQ organization", a(2), C.teal) +
        clusters +
        flow("M594 112 L594 139 L527 152", C.teal, 4.4) +
        path("M594 139 L655 152", C.line) +
        mono(594, 246, "Selected disk clusters", 11, C.teal, "middle") +
        txt(502, 289, "Visit more for higher recall", 12),
      200,
    ) +
    flow("M214 177 L252 177", C.blue, 3.5) +
    flow("M445 177 L483 177", C.teal, 3.8, 1) +
    group(
      rect(22, 329, 675, 48, C.gray, "none", 8) +
        icon("database", 36, 340, C.blue, 0.85) +
        txt(
          72,
          350,
          "Original + quantized vectors remain on disk.",
          14,
          C.ink,
          "v-bold",
        ) +
        mono(
          72,
          368,
          "Benchmark recall, working memory, latency and total storage.",
          10.5,
        ),
      300,
    )
  );
}

function gpu(o: VisualOptions): string {
  const s = phase(o, 3),
    a = (n: number) => o.settled || n === s;
  const vectors = Array.from(
    { length: 5 },
    (_, n) =>
      rect(35 + n * 5, 102 + n * 29, 139, 24, "white", C.line, 5) +
      Array.from({ length: 8 }, (_, i) =>
        rect(
          47 + n * 5 + i * 13,
          109 + n * 29,
          8,
          10,
          i % 3 ? C.blueLight : C.blue,
          "none",
          2,
        ),
      ).join(""),
  ).join("");
  const chipPins = Array.from(
    { length: 6 },
    (_, n) =>
      line(245, 137 + n * 16, 260, 137 + n * 16, C.blue, 2) +
      line(430, 137 + n * 16, 445, 137 + n * 16, C.blue, 2),
  ).join("");
  const lanes = Array.from({ length: 4 }, (_, n) =>
    flow(
      `M281 ${153 + n * 21} L407 ${153 + n * 21}`,
      C.blue,
      2.6 + n * 0.3,
      n * 0.5,
    ),
  ).join("");
  const points = [
    [553, 110],
    [590, 94],
    [626, 122],
    [661, 104],
    [569, 151],
    [615, 157],
    [653, 157],
  ];
  const edges = [
    [0, 1],
    [0, 4],
    [1, 2],
    [1, 3],
    [2, 3],
    [2, 4],
    [2, 5],
    [3, 6],
    [4, 5],
    [5, 6],
  ];
  const graph =
    edges
      .map(([u, v]) =>
        line(points[u][0], points[u][1], points[v][0], points[v][1], C.line),
      )
      .join("") +
    points.map(([x, y]) => circle(x, y, 5.5, "white", C.blue)).join("");
  return (
    heading(
      "Accelerate construction; keep the roles clear",
      "Illustrative dense-vector ingest and retrieval paths",
    ) +
    group(stageCard(21, 70, 187, 202, "Input vectors", a(0)) + vectors, 0) +
    group(
      rect(260, 115, 170, 145, a(1) ? C.blueLight : "white", C.blue, 11) +
        chipPins +
        txt(345, 140, "GPU", 20, C.blue, "v-bold", "middle") +
        lanes +
        mono(345, 247, "Graph construction", 11, C.blue, "middle"),
      100,
    ) +
    flow("M208 172 L259 172", C.blue, 4) +
    flow("M431 172 C478 172 472 120 532 120", C.blue, 4.5, 1.5) +
    group(
      rect(530, 74, 165, 123, "white", C.line, 10) +
        graph +
        mono(612, 185, "HNSW index", 11, C.blue, "middle"),
      200,
    ) +
    group(
      rect(273, 298, 174, 57, "white", C.line, 9) +
        icon("search", 286, 313, C.teal, 0.85) +
        txt(327, 322, "Search request", 14, C.ink, "v-bold") +
        mono(327, 340, "After indexing", 10.5),
      250,
    ) +
    flow("M448 326 L520 326", C.teal, 4.2) +
    group(
      stageCard(522, 285, 173, 81, "CPU retrieval", a(2), C.teal) +
        mono(540, 339, "Query the built index", 10.5, C.teal),
      300,
    ) +
    flow("M609 284 L609 198", C.teal, 4.5, 2) +
    mono(
      22,
      374,
      "Supported GPU / OS / libraries / index formats and Enterprise entitlement apply.",
      10.5,
    )
  );
}

function economics(_o: VisualOptions): string {
  const drivers = [
    {
      x: 22,
      y: 73,
      label: "Corpus + dimensions",
      sub: "Embedding + footprint",
      c: C.blue,
    },
    {
      x: 263,
      y: 73,
      label: "Ingest + updates",
      sub: "Freshness + rebuilds",
      c: C.blue,
    },
    {
      x: 504,
      y: 73,
      label: "Filters + concurrency",
      sub: "Eligibility + workload",
      c: C.blue,
    },
    {
      x: 22,
      y: 254,
      label: "Rerank depth",
      sub: "Candidate passages",
      c: C.teal,
    },
    {
      x: 263,
      y: 254,
      label: "Model calls",
      sub: "Three inference roles",
      c: C.teal,
    },
    {
      x: 504,
      y: 254,
      label: "Resilience + operation",
      sub: "Capacity + recovery",
      c: C.teal,
    },
  ];
  const cards = drivers
    .map((d, i) =>
      group(
        rect(d.x, d.y, 194, 75, "white", C.line, 9) +
          circle(d.x + 16, d.y + 16, 3.5, d.c, "none", "v-pulse") +
          txt(d.x + 14, d.y + 34, d.label, 13.5, C.ink, "v-bold") +
          mono(d.x + 14, d.y + 56, d.sub, 10.5),
        i * 80,
      ),
    )
    .join("");
  return (
    heading(
      "Design for the whole workload",
      "Operating economics includes retrieval, inference, infrastructure and people",
    ) +
    cards +
    flow("M119 149 L263 203", C.blue, 5) +
    flow("M360 149 L360 186", C.blue, 4.3, 1) +
    flow("M601 149 L456 203", C.blue, 5, 2) +
    flow("M264 218 L119 254", C.teal, 5.2, 1) +
    flow("M360 224 L360 254", C.teal, 4.5, 2) +
    flow("M456 218 L601 254", C.teal, 5.2, 3) +
    rect(250, 178, 220, 53, C.blueLight, C.blue, 27) +
    txt(360, 200, "QUALITY · LATENCY · COST", 13, C.blue, "v-bold", "middle") +
    mono(360, 218, "Measure them together", 10.5, C.blue, "middle") +
    group(
      rect(22, 348, 676, 30, C.gray, "none", 7) +
        txt(
          360,
          368,
          "Benchmark your corpus, queries, hardware and service boundaries.",
          13,
          C.ink,
          "",
          "middle",
        ),
      550,
    )
  );
}

function models(_o: VisualOptions): string {
  const roles = [
    {
      x: 22,
      w: 155,
      title: "Sparse / dense",
      sub: "Text representation",
      icon: "layers" as const,
      c: C.blue,
      one: "ELSER / configured",
      two: "embedding models",
      three: "Language/model fit",
    },
    {
      x: 196,
      w: 155,
      title: "Multimodal",
      sub: "Text + image inputs",
      icon: "document" as const,
      c: C.teal,
      one: "Dedicated field +",
      two: "compatible endpoint",
      three: "Input / API fit",
    },
    {
      x: 370,
      w: 155,
      title: "Reranking",
      sub: "Query × passage",
      icon: "search" as const,
      c: C.blue,
      one: "Configured Jina or",
      two: "supported model",
      three: "Depth / latency fit",
    },
    {
      x: 544,
      w: 155,
      title: "Generation",
      sub: "Evidence → answer",
      icon: "spark" as const,
      c: C.pink,
      one: "Configured LLM",
      two: "local / approved route",
      three: "Quality / trust fit",
    },
  ];
  return (
    heading(
      "Select a model for its job",
      "Representation, reranking and generation have different responsibilities",
    ) +
    roles
      .map((r, i) =>
        group(
          rect(r.x, 75, r.w, 245, "white", C.line, 10) +
            icon(r.icon, r.x + 60, 100, r.c, 1.2) +
            circle(r.x + 77, 119, 37, "none", r.c, "v-pulse") +
            txt(r.x + 16, 184, r.title, 16, C.ink, "v-bold") +
            mono(r.x + 16, 205, r.sub, 10.5) +
            line(r.x + 16, 218, r.x + r.w - 16, 218, C.line) +
            txt(r.x + 16, 244, r.one, 12) +
            txt(r.x + 16, 264, r.two, 12) +
            mono(r.x + 16, 297, r.three, 10.5, r.c),
          i * 110,
        ),
      )
      .join("") +
    group(
      rect(22, 340, 677, 40, C.gray, "none", 8) +
        icon("check", 36, 348, C.teal, 0.85) +
        txt(
          73,
          356,
          "Validate mapping, model, language, hosting and hardware requirements.",
          12.5,
        ) +
        mono(
          73,
          372,
          "A provider change does not make every embedding model interchangeable.",
          10.5,
        ),
      500,
    )
  );
}

function sovereign(o: VisualOptions): string {
  const s = phase(o, 3),
    a = (n: number) => o.settled || s === n;
  return (
    heading(
      "Make the inference boundary explicit",
      "A self-managed cluster and a model endpoint are separate deployment decisions",
    ) +
    group(
      rect(20, 71, 453, 271, C.blueLight, C.blue, 13) +
        icon("lock", 36, 83, C.blue, 0.74) +
        txt(71, 104, "YOUR CONFIGURED LOCAL BOUNDARY", 13, C.blue, "v-bold") +
        stageCard(39, 132, 170, 81, "Elasticsearch", a(0)) +
        mono(55, 183, "Authorized evidence", 10.5, C.blue) +
        stageCard(262, 132, 190, 81, "Local inference", a(1), C.teal) +
        mono(278, 181, "Embedding + rerank", 10.5, C.teal) +
        stageCard(262, 248, 190, 72, "Local compatible LLM", a(1), C.teal) +
        mono(278, 294, "Configured separately", 10.5, C.teal) +
        flow("M210 172 L261 172", C.teal, 4.3) +
        flow("M123 213 C123 282 208 283 261 283", C.teal, 5.2, 2) +
        mono(39, 302, "Models + runtime", 10.5, C.blue) +
        mono(39, 320, "provisioned locally", 10.5, C.blue),
      0,
    ) +
    group(
      stageCard(526, 118, 177, 126, "External alternative", a(2), C.pink) +
        icon("cloud", 596, 164, C.pink, 1) +
        mono(543, 224, "Approved model route", 10.5, C.pink) +
        txt(537, 280, "Cloud Connect / EIS", 13, C.ink, "v-bold") +
        txt(537, 300, "or configured provider", 12) +
        mono(537, 325, "Connectivity applies", 10.5, C.pink),
      150,
    ) +
    (s === 2 && !o.settled
      ? flow("M474 183 L525 183", C.pink, 5, 1.6) +
        mono(499, 167, "DATA", 10.5, C.pink, "middle") +
        mono(499, 210, "LEAVES", 10.5, C.pink, "middle")
      : dotLine(474, 183, 525, 183, C.pink) +
        mono(499, 167, "OPTIONAL", 9.5, C.pink, "middle") +
        mono(499, 210, "ROUTE", 10.5, C.pink, "middle")) +
    group(
      rect(20, 355, 683, 26, C.gray, "none", 6) +
        mono(
          361,
          373,
          "Local model licensing and capability vary; EIS is a connected cloud service.",
          10.5,
          C.muted,
          "middle",
        ),
      300,
    )
  );
}

function rag(o: VisualOptions): string {
  const s = phase(o, 4),
    a = (n: number) => o.settled || n <= s;
  const docs = [
    { label: "Administrator guide", sub: "4.0 · current · permitted" },
    { label: "Troubleshooting", sub: "4.0 · current · permitted" },
  ];
  const evidence = docs
    .map(
      (d, i) =>
        rect(218, 129 + i * 58, 210, 49, a(1) ? "white" : C.gray, C.line, 7) +
        icon("document", 230, 139, C.blue, 0.8) +
        txt(265, 149, d.label, 13, C.ink, "v-bold") +
        mono(265, 166, d.sub, 10.5),
    )
    .join("");
  return (
    heading(
      "Retrieve the evidence before generating the answer",
      "Illustrative RAG; authorized context precedes model context",
    ) +
    group(
      stageCard(20, 84, 161, 94, "User question", a(0)) +
        txt(36, 137, "Company sign-in?", 14, C.blue, "v-bold") +
        mono(36, 158, "Atlas Hub 4.0", 10.5),
      0,
    ) +
    flow("M182 132 L217 132", C.blue, 4.4) +
    group(
      stageCard(217, 83, 213, 214, "Scoped retrieval", a(1)) +
        evidence +
        pill(232, 252, "CURRENT + AUTHORIZED", C.teal, C.tealLight, 181),
      100,
    ) +
    flow("M431 187 L486 187", C.teal, 4.6, 1.1) +
    group(
      stageCard(487, 145, 209, 91, "Configured LLM", a(2), C.teal) +
        icon("spark", 505, 190, C.teal, 0.75) +
        txt(539, 209, "Ground in evidence", 13, C.teal),
      200,
    ) +
    flow("M591 237 L591 277", C.teal, 4.5, 2) +
    group(
      stageCard(487, 278, 209, 87, "Inspectable answer", a(3), C.teal) +
        mono(504, 327, "[Guide §2.1–2.3]", 11, C.blue) +
        mono(504, 346, "[Troubleshooting §4.2]", 10.5, C.blue),
      300,
    ) +
    path(
      "M486 342 L454 342 L454 276 L431 276",
      C.line,
      1.3,
      "none",
      "v-trace",
    ) +
    mono(21, 338, "Missing or conflicting evidence?", 11, C.ink) +
    txt(21, 361, "Clarify or abstain before advising.", 14, C.blue, "v-bold")
  );
}

function agent(_o: VisualOptions): string {
  const tools = [
    { x: 34, y: 115, label: "Search", sub: "Authorized indices" },
    { x: 280, y: 54, label: "ES|QL", sub: "Permitted queries" },
    { x: 528, y: 115, label: "Custom tools", sub: "Assigned scope" },
  ];
  return (
    heading(
      "Elastic Agent Builder",
      "Connect a question to permitted tools, evidence and a useful response",
    ) +
    tools
      .map((t, i) =>
        group(
          rect(t.x, t.y, 158, 71, "white", C.line, 9) +
            txt(t.x + 15, t.y + 29, t.label, 15, C.ink, "v-bold") +
            mono(t.x + 15, t.y + 52, t.sub, 10.5),
          i * 110,
        ),
      )
      .join("") +
    flow("M193 151 L282 223", C.blue, 4.3) +
    flow("M359 126 L359 190", C.blue, 4.8, 1) +
    flow("M528 151 L435 222", C.blue, 4.3, 2) +
    group(
      circle(359, 235, 50, C.blueLight, C.blue) +
        circle(359, 235, 61, "none", C.blue, "v-pulse") +
        icon("spark", 343, 202, C.blue, 1.2) +
        txt(359, 257, "AGENT", 14, C.blue, "v-bold", "middle"),
      260,
    ) +
    flow("M308 268 L194 319", C.teal, 4.6, 0.6) +
    flow("M411 268 L525 319", C.teal, 4.6, 2.6) +
    group(
      rect(34, 294, 190, 74, C.tealLight, C.teal, 9) +
        icon("document", 48, 312, C.teal, 0.9) +
        txt(90, 324, "Source evidence", 14, C.ink, "v-bold") +
        mono(90, 345, "Current + permitted", 10.5, C.teal),
      380,
    ) +
    group(
      rect(497, 294, 190, 74, C.tealLight, C.teal, 9) +
        icon("check", 511, 312, C.teal, 0.9) +
        txt(551, 324, "Cited response", 14, C.ink, "v-bold") +
        mono(551, 345, "Human verification", 10.5, C.teal),
      460,
    ) +
    mono(
      360,
      369,
      "Tools run with configured privileges.",
      10.5,
      C.muted,
      "middle",
    )
  );
}

function agentDemo(o: VisualOptions): string {
  const s = phase(o, 5),
    complete = o.settled || s === 4;
  const active = (n: number) => o.settled || s === n;
  const stages = [
    "Ask the follow-up",
    "Scope the tool",
    "Retrieve evidence",
    "Link prerequisites",
    "Qualify the answer",
  ];
  const stepper = stages
    .map((label, n) =>
      group(
        circle(
          35,
          115 + n * 53,
          12,
          active(n) ? C.blue : C.gray,
          active(n) ? C.blue : C.line,
        ) +
          mono(
            35,
            119 + n * 53,
            String(n + 1),
            10.5,
            active(n) ? "white" : C.muted,
            "middle",
          ) +
          txt(
            56,
            120 + n * 53,
            label,
            12.5,
            active(n) ? C.blue : C.muted,
            active(n) ? "v-bold" : "",
          ) +
          (n < 4 ? line(35, 130 + n * 53, 35, 153 + n * 53, C.line) : ""),
        n * 60,
      ),
    )
    .join("");
  const panelX = 223;
  let panel =
    rect(panelX, 87, 475, 285, "white", C.line, 12) +
    rect(panelX, 87, 475, 34, C.gray, C.line, 10) +
    rect(panelX, 107, 475, 14, C.gray, "none", 0) +
    mono(239, 109, "ATLAS HUB · ILLUSTRATIVE AGENT", 11, C.muted);
  if (s === 0 && !complete)
    panel +=
      icon("user", 244, 151, C.blue, 0.9) +
      txt(284, 170, "Which prerequisites apply,", 17, C.ink, "v-bold") +
      txt(284, 196, "and which guide section", 17, C.ink, "v-bold") +
      txt(284, 222, "supports each one?", 17, C.ink, "v-bold") +
      pill(244, 279, "4.0 · SELF-MANAGED · CURRENT", C.blue, C.blueLight, 286) +
      mono(244, 331, "Follow-up retains the authorized document scope.", 10.5);
  else if (s === 1 && !complete)
    panel +=
      icon("terminal", 244, 147, C.blue, 0.9) +
      txt(284, 166, "Request permitted retrieval", 17, C.ink, "v-bold") +
      rect(244, 186, 429, 120, C.gray, "none", 8) +
      mono(261, 210, "tool: search_support_documents", 11, C.blue) +
      mono(261, 236, "product: Atlas Hub     version: 4.0", 11) +
      mono(261, 259, "deployment: self-managed  status: current", 10.5) +
      mono(261, 282, "access: requesting user's support scope", 10.5) +
      txt(
        244,
        342,
        "Authorization enforced before retrieval.",
        13,
        C.teal,
        "v-bold",
      );
  else if (s === 2 && !complete)
    panel +=
      txt(244, 153, "Inspect the authorized evidence", 17, C.ink, "v-bold") +
      documents
        .filter((d) =>
          searchScenario.contextIds.includes(
            d.id as "admin-4" | "troubleshoot-4",
          ),
        )
        .map(
          (d, n) =>
            rect(244, 173 + n * 86, 429, 73, C.blueLight, C.line, 8) +
            icon("document", 257, 190, C.blue, 0.8) +
            txt(294, 199, d.shortTitle, 14, C.ink, "v-bold") +
            mono(
              294,
              220,
              n === 0 ? "Guide §2.1 · §2.2 · §2.3" : "Troubleshooting §4.2",
              11,
              C.blue,
            ) +
            mono(294, 237, "4.0 · self-managed · current · permitted", 10.5),
        )
        .join("") +
      mono(
        244,
        358,
        "Excluded versions and access-restricted notes stay out.",
        10.5,
      );
  else {
    panel += txt(
      244,
      151,
      complete
        ? "Prerequisites with inspectable sources"
        : "Every prerequisite has a source",
      16,
      C.ink,
      "v-bold",
    );
    const rows = [
      ["Identity-provider metadata", "and signing certificate", "Guide §2.1"],
      ["Registered self-managed", "callback URL", "Guide §2.2"],
      ["Authorized administrator", "and permitted test account", "Guide §2.3"],
    ];
    panel += rows
      .map(
        ([a, b, c], n) =>
          rect(
            244,
            164 + n * 53,
            429,
            47,
            n % 2 ? "white" : C.gray,
            "none",
            5,
          ) +
          icon("check", 254, 173 + n * 53, C.teal, 0.62) +
          txt(282, 183 + n * 53, a, 12.5, C.ink, "v-bold") +
          txt(282, 200 + n * 53, b, 12) +
          mono(658, 191 + n * 53, c, 11, C.blue, "end"),
      )
      .join("");
    panel += complete
      ? txt(
          244,
          340,
          "If the test fails: certificate and clock checks [§4.2].",
          12,
          C.blue,
        ) +
        mono(
          244,
          361,
          "Missing deployment detail or conflicting evidence? Clarify.",
          10.5,
        )
      : mono(
          244,
          349,
          "Human review connects each statement to its section.",
          10.5,
          C.teal,
        );
  }
  return (
    heading(
      "Follow the evidence, then answer",
      "Fictional Atlas Hub journey · no tools or models are called",
    ) +
    stepper +
    panel +
    flow("M188 220 L222 220", C.blue, 4.4)
  );
}

function trust(_o: VisualOptions): string {
  const gates = [
    {
      x: 22,
      y: 75,
      label: "Source quality",
      sub: "Current, owned and traceable",
      kind: "document" as const,
      c: C.blue,
    },
    {
      x: 383,
      y: 75,
      label: "Access policy",
      sub: "Authorized before retrieval and context",
      kind: "lock" as const,
      c: C.blue,
    },
    {
      x: 383,
      y: 237,
      label: "Retrieval quality",
      sub: "Queries, judgments and failures",
      kind: "search" as const,
      c: C.teal,
    },
    {
      x: 22,
      y: 237,
      label: "Answer verification",
      sub: "Citations, conflicts and abstention",
      kind: "check" as const,
      c: C.teal,
    },
  ];
  return (
    heading(
      "Trust is a sequence of checks",
      "Grounding supports verification; it does not guarantee factual answers",
    ) +
    flow("M332 123 L382 123", C.blue, 4.7) +
    flow("M539 172 L539 236", C.blue, 4.7, 1.2) +
    flow("M383 288 L333 288", C.teal, 4.7, 2.4) +
    flow("M177 237 L177 173", C.teal, 4.7, 3.6) +
    gates
      .map((g, i) =>
        group(
          rect(g.x, g.y, 310, 98, "white", C.line, 10) +
            icon(g.kind, g.x + 20, g.y + 23, g.c, 1.1) +
            txt(g.x + 70, g.y + 38, g.label, 17, C.ink, "v-bold") +
            mono(g.x + 20, g.y + 78, g.sub, 10.5),
          i * 110,
        ),
      )
      .join("") +
    rect(255, 185, 210, 36, C.blueLight, C.blue, 18) +
    txt(360, 208, "TEST THE FAILURE CASES", 12.5, C.blue, "v-bold", "middle") +
    group(
      mono(
        360,
        370,
        "Wrong version · stale source · unauthorized result · unsupported claim",
        11,
        C.muted,
        "middle",
      ),
      500,
    )
  );
}

function deploy(_o: VisualOptions): string {
  const rows = [
    ["Self-managed", "Your infrastructure", "Your operations", C.blue],
    ["ECK", "Kubernetes operator", "Your Kubernetes estate", C.blue],
    ["ECE", "Deployment orchestration", "Your platform estate", C.blue],
    ["Cloud Hosted", "Managed clusters", "Configured cluster choices", C.teal],
    [
      "Serverless",
      "Managed infrastructure",
      "Automatic service updates",
      C.teal,
    ],
  ];
  return (
    heading(
      "Choose the deployment for the requirements",
      "Check model routes, authentication, lifecycle and feature support for each option",
    ) +
    rect(23, 73, 674, 37, C.gray, C.line, 8) +
    mono(41, 98, "DEPLOYMENT", 11) +
    mono(252, 98, "CONTROL MODEL", 11) +
    mono(488, 98, "OPERATING RESPONSIBILITY", 10.5) +
    rows
      .map(([name, model, ops, c], i) =>
        group(
          rect(
            23,
            115 + i * 43,
            674,
            39,
            i < 3 ? C.blueLight : "white",
            C.line,
            6,
          ) +
            circle(39, 134 + i * 43, 4, c, "none", "v-pulse") +
            txt(53, 139 + i * 43, name, 14, C.ink, "v-bold") +
            txt(252, 139 + i * 43, model, 12) +
            txt(488, 139 + i * 43, ops, 12),
          i * 100,
        ),
      )
      .join("") +
    group(
      rect(23, 348, 674, 30, C.tealLight, "none", 7) +
        txt(
          360,
          368,
          "Map control, capabilities, connectivity and operations before choosing.",
          13,
          C.ink,
          "",
          "middle",
        ),
      550,
    )
  );
}

function rollout(o: VisualOptions): string {
  const s = phase(o, 4),
    a = (n: number) => o.settled || s === n;
  const cards = [
    {
      x: 20,
      title: "Baseline",
      lines: ["Current pipeline", "Queries + judgments", "Known access policy"],
    },
    {
      x: 200,
      title: "Pilot",
      lines: [
        "Representative corpus",
        "Candidate retrieval",
        "Realistic workload",
      ],
    },
    {
      x: 380,
      title: "Decision gates",
      lines: ["Quality + access", "Latency + cost", "Accountable owners"],
    },
    {
      x: 560,
      title: "Release",
      lines: ["Controlled rollout", "Observe outcomes", "Keep rollback path"],
    },
  ];
  return (
    heading(
      "Evolve the stack with evidence",
      "The next release earns its place against your current baseline",
    ) +
    cards
      .map((c, i) =>
        group(
          stageCard(
            c.x,
            112,
            141,
            152,
            c.title,
            a(i),
            i === 3 ? C.teal : C.blue,
          ) +
            circle(c.x + 70, 91, 14, "white", a(i) ? C.blue : C.line) +
            mono(
              c.x + 70,
              95,
              String(i + 1),
              11,
              a(i) ? C.blue : C.muted,
              "middle",
            ) +
            c.lines
              .map((v, n) => txt(c.x + 12, 175 + n * 28, v, 11.5))
              .join(""),
          i * 120,
        ),
      )
      .join("") +
    [161, 341, 521]
      .map((x, i) =>
        flow(
          `M${x} 184 L${x + 38} 184`,
          i === 2 ? C.teal : C.blue,
          4.1,
          i * 1.2,
        ),
      )
      .join("") +
    flow("M632 265 L632 324 L90 324 L90 265", C.pink, 8.5, 1) +
    pill(265, 309, "ROLL BACK IF GATES FAIL", C.pink, C.pinkLight, 220) +
    mono(
      360,
      371,
      "Agree thresholds and owners before the pilot starts.",
      11,
      C.muted,
      "middle",
    )
  );
}

function proof(_o: VisualOptions): string {
  return (
    heading(
      "Customer evidence to inform an evaluation",
      "Public customer accounts; results are examples, not promises",
    ) +
    group(
      rect(20, 74, 327, 278, "white", C.line, 12) +
        title(41, 109, "HSE") +
        txt(41, 180, "4%", 67, C.blue, "v-bold") +
        txt(41, 213, "rise in search-page", 20, C.ink, "v-bold") +
        txt(41, 240, "click-through rate", 20, C.ink, "v-bold") +
        flow("M42 255 L306 255", C.blue, 5) +
        mono(41, 286, "Customer-reported A/B result", 11) +
        mono(41, 307, "Elastic Cloud on AWS", 11, C.blue) +
        mono(41, 331, "elastic.co/customers/hse", 10.5),
      0,
    ) +
    group(
      rect(370, 74, 327, 278, "white", C.line, 12) +
        title(391, 109, "Stack Overflow") +
        txt(391, 155, "Lexical → hybrid retrieval", 17, C.ink, "v-bold") +
        flow("M398 182 L474 182 L474 207 L638 207", C.teal, 5, 1.7) +
        icon("search", 392, 174, C.teal, 0.8) +
        icon("document", 650, 194, C.teal, 0.8) +
        txt(391, 243, "Answers with attribution", 17, C.ink, "v-bold") +
        txt(391, 273, "The public account describes", 12) +
        txt(391, 293, "trusted community and Teams", 12) +
        txt(391, 313, "knowledge as answer context.", 12) +
        mono(391, 336, "elastic.co/customers/stack-overflow", 10.5),
      160,
    ) +
    mono(
      360,
      377,
      "Different environments and workflows require their own measured evaluation.",
      10.5,
      C.muted,
      "middle",
    )
  );
}

function operating(o: VisualOptions): string {
  const s = phase(o, 3),
    a = (n: number) => o.settled || s === n;
  return (
    heading(
      "Resolve the request; improve the system",
      "The current authorized source remains the basis for the answer",
    ) +
    group(
      stageCard(20, 79, 213, 204, "Connect the knowledge", a(0)) +
        icon("document", 42, 125, C.blue, 1.2) +
        txt(42, 185, "Atlas Hub 4.0", 17, C.ink, "v-bold") +
        mono(42, 210, "Self-managed + current", 11) +
        mono(42, 235, "Authorized support scope", 10.5) +
        pill(42, 251, "SOURCE SECTIONS", C.blue, C.blueLight, 149),
      0,
    ) +
    group(
      stageCard(255, 79, 213, 204, "Find what matters", a(1)) +
        icon("search", 276, 125, C.blue, 1.2) +
        txt(276, 185, "Verified prerequisites", 15, C.ink, "v-bold") +
        mono(276, 210, "Metadata + callback", 11) +
        mono(276, 235, "Administrator + test", 10.5) +
        pill(276, 251, "GUIDE §2.1–2.3", C.blue, C.blueLight, 161),
      120,
    ) +
    group(
      stageCard(489, 79, 213, 204, "Deliver with confidence", a(2), C.teal) +
        icon("check", 510, 125, C.teal, 1.2) +
        txt(510, 185, "Inspectable answer", 16, C.ink, "v-bold") +
        mono(510, 210, "Citations + uncertainty", 10.5) +
        mono(510, 235, "Test before rollout", 11) +
        pill(510, 251, "TROUBLESHOOTING §4.2", C.teal, C.tealLight, 178),
      240,
    ) +
    flow("M234 171 L254 171", C.blue, 3.8) +
    flow("M469 171 L488 171", C.teal, 3.8, 1.3) +
    flow("M596 284 L596 334 L127 334 L127 284", C.teal, 8.2, 2) +
    rect(220, 314, 281, 40, "white", C.teal, 20) +
    txt(
      360,
      332,
      "MEASURE · REVIEW · IMPROVE",
      12.5,
      C.teal,
      "v-bold",
      "middle",
    ) +
    mono(
      360,
      347,
      "Corpus, judgments, policy and outcomes",
      10.5,
      C.muted,
      "middle",
    ) +
    mono(
      360,
      378,
      "Synthetic scenario; a configuration-specific answer still needs deployment details.",
      10.5,
      C.muted,
      "middle",
    )
  );
}

function closing(_o: VisualOptions): string {
  const pillars = [
    {
      x: 115,
      c: C.blue,
      label: "Connect",
      sub: "Current knowledge",
      icon: "layers" as const,
    },
    {
      x: 360,
      c: C.blue,
      label: "Find",
      sub: "Relevant evidence",
      icon: "search" as const,
    },
    {
      x: 605,
      c: C.teal,
      label: "Deliver",
      sub: "Verified experience",
      icon: "check" as const,
    },
  ];
  return (
    heading(
      "Build the evaluation together",
      "Agree a corpus, representative questions, judgments and access policy",
    ) +
    flow("M162 183 L313 183", C.blue, 4.8) +
    flow("M407 183 L558 183", C.teal, 4.8, 2.2) +
    pillars
      .map((p, i) =>
        group(
          circle(
            p.x,
            182,
            46,
            p.c === C.teal ? C.tealLight : C.blueLight,
            p.c,
          ) +
            circle(p.x, 182, 57, "none", p.c, "v-pulse") +
            icon(p.icon, p.x - 16, 163, p.c, 1.2) +
            txt(p.x, 265, p.label, 22, C.ink, "v-bold", "middle") +
            mono(p.x, 290, p.sub, 11, p.c, "middle"),
          i * 130,
        ),
      )
      .join("") +
    group(
      rect(81, 321, 558, 57, C.gray, "none", 10) +
        txt(
          360,
          345,
          "Your next step: one measured Search / AI pilot.",
          16,
          C.blue,
          "v-bold",
          "middle",
        ) +
        mono(
          360,
          365,
          "Named owners · acceptance gates · workload and cost limits · rollback",
          10.5,
          C.muted,
          "middle",
        ),
      500,
    )
  );
}

export const engineeringVisuals: Partial<
  Record<VisualKind, (o: VisualOptions) => string>
> = {
  "index-choice": indexChoice,
  quantization,
  gpu,
  economics,
  models,
  sovereign,
  rag,
  agent,
  "agent-demo": agentDemo,
  trust,
  deploy,
  rollout,
  proof,
  operating,
  closing,
};
