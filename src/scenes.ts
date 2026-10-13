import type { Notes, Scene, Source, Step, Takeaway } from "./types";
import { queryVariants as q, searchScenario as journey } from "./scenario";

const t = (label: string, value: string, detail: string): Takeaway => ({
  label,
  value,
  detail,
});
const n = (
  opening: string,
  body: string,
  transition: string,
  seconds: number,
  prompt?: string,
): Notes => ({
  opening,
  body,
  transition,
  seconds,
  ...(prompt ? { prompt } : {}),
});
const phases = (...items: [string, string][]): Step[] =>
  items.map(([label, detail]) => ({ label, detail }));
const source = (label: string, url: string): Source => ({ label, url });
const S = {
  search: source("Search", "https://www.elastic.co/docs/solutions/search"),
  stack: source(
    "Elasticsearch",
    "https://www.elastic.co/docs/get-started/the-stack",
  ),
  ingest: source(
    "Ingestion",
    "https://www.elastic.co/docs/solutions/search/ingest-for-search",
  ),
  refresh: source(
    "Refresh",
    "https://www.elastic.co/docs/reference/elasticsearch/rest-apis/refresh-parameter",
  ),
  ranking: source(
    "Ranking",
    "https://www.elastic.co/docs/solutions/search/ranking",
  ),
  semantic: source(
    "semantic_text",
    "https://www.elastic.co/docs/reference/elasticsearch/mapping-reference/semantic-text/",
  ),
  semanticReference: source(
    "Semantic fields",
    "https://www.elastic.co/docs/reference/elasticsearch/mapping-reference/semantic-text-reference",
  ),
  retrievers: source(
    "Retrievers",
    "https://www.elastic.co/docs/solutions/search/retrievers-overview",
  ),
  rrf: source(
    "RRF",
    "https://www.elastic.co/docs/reference/elasticsearch/rest-apis/retrievers/rrf-retriever",
  ),
  rerank: source(
    "Reranking",
    "https://www.elastic.co/docs/solutions/search/ranking/semantic-reranking",
  ),
  rules: source(
    "Query rules",
    "https://www.elastic.co/docs/reference/elasticsearch/rest-apis/retrievers/rule-retriever",
  ),
  evaluate: source(
    "Rank evaluation",
    "https://www.elastic.co/docs/reference/elasticsearch/rest-apis/search-rank-eval",
  ),
  judgments: source(
    "Judgment lists",
    "https://www.elastic.co/search-labs/blog/judgment-lists",
  ),
  bbq: source(
    "BBQ / DiskBBQ",
    "https://www.elastic.co/docs/reference/elasticsearch/mapping-reference/bbq",
  ),
  gpu: source(
    "GPU indexing",
    "https://www.elastic.co/docs/solutions/search/vector/gpu-vector-indexing",
  ),
  capacity: source(
    "Capacity design",
    "https://www.elastic.co/docs/deploy-manage/reference-architectures/genai-search-high-availability",
  ),
  elser: source(
    "ELSER",
    "https://www.elastic.co/docs/explore-analyze/machine-learning/nlp/ml-nlp-elser",
  ),
  jina: source(
    "Jina models",
    "https://www.elastic.co/docs/explore-analyze/machine-learning/nlp/ml-nlp-jina",
  ),
  local: source(
    "Jina On-Prem",
    "https://www.elastic.co/search-labs/blog/on-prem-ai-jina-embedding-models",
  ),
  eis: source(
    "Self-managed EIS",
    "https://www.elastic.co/docs/explore-analyze/elastic-inference/connect-self-managed-cluster-to-eis",
  ),
  rag: source("RAG", "https://www.elastic.co/docs/solutions/search/rag/"),
  grounding: source(
    "Grounding",
    "https://www.elastic.co/search-labs/blog/grounding-rag/",
  ),
  agent: source(
    "Agent Builder",
    "https://www.elastic.co/docs/explore-analyze/ai-features/elastic-agent-builder",
  ),
  permissions: source(
    "Agent permissions",
    "https://www.elastic.co/docs/explore-analyze/ai-features/agent-builder/permissions",
  ),
  models: source(
    "Agent models",
    "https://www.elastic.co/docs/explore-analyze/ai-features/agent-builder/models",
  ),
  access: source(
    "Document access",
    "https://www.elastic.co/docs/deploy-manage/users-roles/cluster-or-deployment-auth/controlling-access-at-document-field-level",
  ),
  ccs: source(
    "Cross-cluster search",
    "https://www.elastic.co/docs/explore-analyze/cross-cluster-search",
  ),
  deploy: source(
    "Deployments",
    "https://www.elastic.co/docs/deploy-manage/deploy/deployment-comparison",
  ),
  subscriptions: source(
    "Subscriptions",
    "https://www.elastic.co/subscriptions",
  ),
  hse: source("HSE customer story", "https://www.elastic.co/customers/hse"),
  stackOverflow: source(
    "Stack Overflow story",
    "https://www.elastic.co/customers/stack-overflow",
  ),
};

export const scenes: Scene[] = [
  {
    id: "hero",
    chapter: "01 / Philosophy",
    eyebrow: "ELASTIC SEARCH",
    headline: "Elastic Search.",
    emphasis: "Trusted context.",
    lead: "Your users ask for an answer. Your platform must find the right context. Connect the knowledge, find what matters, and deliver with confidence.",
    visual: "hero",
    layout: "hero",
    illustrative: true,
    takeaways: [
      t(
        "Connect",
        "The knowledge",
        "Make current, authorized content retrievable.",
      ),
      t(
        "Find",
        "What matters",
        "Combine exact terms, intent, and measured relevance.",
      ),
      t(
        "Deliver",
        "With confidence",
        "Show evidence and evaluate the complete experience.",
      ),
    ],
    densityExtra:
      "One fictional support question follows the path from scattered documents to a source-backed answer. The same foundation supports search and AI applications.",
    qualification:
      "Original illustrative journey. No live queries, model calls, or actions. Feature requirements vary by version, subscription, model, and deployment.",
    sources: [S.search],
    notes: n(
      "Your users ask for an answer. Your platform must find the right context.",
      "Our subject is the quality of that context: whether it is relevant, current, and authorized. We will follow one fictional support engineer rather than jump between unrelated demos. Elastic Search is a platform for retrieval and for AI context; the application still owns policy, evaluation, and the experience. All diagrams and example answers are illustrative. The animations play automatically, and navigation always changes slides.",
      "Let us agree on what the journey needs to prove.",
      35,
    ),
  },
  {
    id: "promise",
    chapter: "01 / Philosophy",
    eyebrow: "WHAT WE WILL PROVE",
    headline: "One question.",
    emphasis: "Traceable evidence.",
    lead: q.natural,
    visual: "promise",
    layout: "split",
    illustrative: true,
    takeaways: [
      t(
        "Scope",
        "The right documents",
        "Atlas Hub 4.0, self-managed, current, and authorized.",
      ),
      t(
        "Relevance",
        "The right passages",
        "Keep exact identifiers while matching company sign-in to single sign-on.",
      ),
      t(
        "Evidence",
        "An inspectable answer",
        "Tie each prerequisite to a current source section.",
      ),
    ],
    densityExtra:
      "Atlas Hub, its users, documents, rank positions, answers, and diagrams are fictional. Older, cloud-only, and restricted inputs never enter user-visible results or model context.",
    qualification:
      "Synthetic teaching example; no product benchmark or real configuration guidance. Eligibility is enforced before ranking and generation.",
    sources: [S.rag, S.access],
    notes: n(
      "Maya needs to configure company sign-in for a specific release in a specific environment.",
      "Maya Chen is our fictional support engineer. The question is about Atlas Hub 4.0 on a self-managed deployment. A plausible answer for an older release or a cloud service can still be wrong. A restricted document may be relevant but must remain outside Maya's access scope. We apply the same product, version, deployment, publication, and authorization constraints to every retrieval branch. The user sees only eligible sources.",
      "As the experience evolves, the obligation to find the right context becomes greater.",
      40,
      "Where does context fail today: finding it, keeping it current, or proving that it applies?",
    ),
  },
  {
    id: "evolution",
    chapter: "01 / Philosophy",
    eyebrow: "THE EXPERIENCE IS CHANGING",
    headline: "From finding links",
    emphasis: "to finishing work.",
    lead: "Results, answers, and agents all depend on retrieval. A richer interface makes relevance and evidence more consequential.",
    visual: "evolution",
    layout: "split",
    illustrative: true,
    steps: phases(
      ["Links", "Find a relevant document."],
      ["Relevant results", "Rank and explain useful context."],
      ["Grounded answers", "Compose an answer from eligible sources."],
      ["Tool-assisted work", "Use permitted tools within explicit policy."],
    ),
    takeaways: [
      t(
        "Results",
        "A path to knowledge",
        "Users inspect ranked documents and metadata.",
      ),
      t(
        "Answers",
        "Context in the response",
        "The application supplies evidence and source links.",
      ),
      t(
        "Agents",
        "Permitted assistance",
        "Tools need configured privileges and evaluation.",
      ),
    ],
    densityExtra:
      "These are complementary application patterns. Search does not disappear when generation or tools are added; it supplies the evidence those experiences need.",
    qualification:
      "Illustrative progression. Grounded generation does not guarantee correctness, and tool availability does not confer action authority.",
    sources: [S.search, S.rag, S.agent],
    notes: n(
      "Every step toward a richer experience raises the cost of weak context.",
      "A results page gives the user a list to inspect. An answer summarizes selected evidence. A tool-assisted experience may retrieve more information or perform an allowed operation. These are different responsibilities, but retrieval remains central. We should evaluate them separately: result relevance, answer support, and tool behavior. The automatic sequence shows a conceptual progression, not a promise that one product setting turns search into an autonomous business process.",
      "The first obstacle is where the knowledge lives.",
      40,
    ),
  },
  {
    id: "fragmented",
    chapter: "01 / Philosophy",
    eyebrow: "THE CONTEXT GAP",
    headline: "Knowledge has many homes.",
    emphasis: "Users have one question.",
    lead: "Documents, records, web content, and access policies arrive from different systems. The user needs a coherent result, not that complexity.",
    visual: "fragmented",
    layout: "split",
    illustrative: true,
    takeaways: [
      t(
        "Content",
        "Different formats",
        "Extract searchable text and preserve useful structure.",
      ),
      t(
        "Change",
        "Different update cycles",
        "Sync revisions and retire superseded content.",
      ),
      t(
        "Access",
        "Different boundaries",
        "Map source ACLs and enforce retrieval permissions.",
      ),
    ],
    densityExtra:
      "Indexing connects knowledge only when metadata, revision handling, and access synchronization are engineered with the source integration.",
    qualification:
      "Connector coverage and ACL synchronization vary. Source permissions are not automatically inherited by every integration.",
    sources: [S.ingest, S.access],
    notes: n(
      "The platform challenge begins before the search box.",
      "The current administrator guide may live on a documentation site; troubleshooting may be in a support system; a restricted note may have a different owner. These systems update differently and carry different permission models. A search platform makes content retrievable, but the project must decide how to extract it, synchronize changes, remove retired versions, and map access. A connector is a configured ingestion route, not automatic governance over every source.",
      "That gives us three responsibilities for the platform.",
      40,
    ),
  },
  {
    id: "pillars",
    chapter: "01 / Philosophy",
    eyebrow: "THE OPERATING PHILOSOPHY",
    headline: "Connect. Find.",
    emphasis: "Deliver.",
    lead: "Connect the knowledge. Find what matters. Deliver with confidence. Each pillar answers a different failure mode.",
    visual: "pillars",
    layout: "wide",
    takeaways: [
      t(
        "Connect",
        "Current and authorized",
        "Engineer ingestion, metadata, revisions, and access.",
      ),
      t(
        "Find",
        "Relevant and measurable",
        "Compose retrieval and test representative questions.",
      ),
      t(
        "Deliver",
        "Useful and verifiable",
        "Expose evidence and operate within explicit limits.",
      ),
    ],
    densityExtra:
      "These are original editorial pillars for this presentation. They organize the work; they are not official Elastic feature names or an automatic maturity model.",
    qualification:
      "Architecture guidance. Outcomes depend on corpus quality, relevance design, application policy, and measured operations.",
    sources: [S.search, S.rag],
    notes: n(
      "The useful unit of design is a trusted experience, not a catalogue of features.",
      "Connect means the relevant knowledge is available under the right controls. Find means we can retrieve it for exact terms and natural language, then demonstrate quality. Deliver means people can use the result, inspect its evidence, and trust the operating boundary. A weakness in any pillar limits the whole experience: an excellent model cannot repair a missing source, and a relevant passage cannot justify unauthorized access.",
      "Start with the common engine underneath those responsibilities.",
      40,
    ),
  },
  {
    id: "platform",
    chapter: "02 / Knowledge",
    eyebrow: "THE ELASTICSEARCH FOUNDATION",
    headline: "One engine.",
    emphasis: "Several representations.",
    lead: "Text, structured metadata, and vectors work together. Exact identifiers, eligibility filters, and semantic similarity belong in the same retrieval design.",
    visual: "platform",
    layout: "split",
    takeaways: [
      t(
        "Text",
        "Words and identifiers",
        "Use full-text retrieval for terminology and exact intent.",
      ),
      t(
        "Metadata",
        "Explicit constraints",
        "Filter version, deployment, freshness, and access scope.",
      ),
      t(
        "Vectors",
        "Similarity signals",
        "Add learned representations when they help the task.",
      ),
    ],
    densityExtra:
      "Elasticsearch provides search, filtering, and analytics over indexed content. The application can compose lexical, vector, and structured retrieval rather than maintain unrelated relevance paths.",
    qualification:
      "Near real-time search. Advanced retrieval and inference requirements vary by version, subscription, model, and deployment.",
    sources: [S.stack, S.retrievers],
    notes: n(
      "The representations are complementary.",
      "Atlas Hub and 4.0 are exact terms we want to retain. Self-managed is an explicit constraint. Company sign-in is the user's wording for a concept documented as single sign-on. Elasticsearch can hold the text, metadata, and vector representations needed for these signals and compose their retrieval. A common engine simplifies the architecture, but does not automatically prove workload isolation, lower cost, or better relevance; those must be designed and measured.",
      "Now connect the content to that engine.",
      45,
    ),
  },
  {
    id: "sources",
    chapter: "02 / Knowledge",
    eyebrow: "CURRENT INGESTION CHOICES",
    headline: "Connect the sources.",
    emphasis: "Build the pipeline.",
    lead: "Use APIs and clients, configured connectors, or the Open Web Crawler. Transform content and metadata before the first search request.",
    visual: "sources",
    layout: "split",
    takeaways: [
      t(
        "APIs",
        "Application-owned data",
        "Send JSON with official clients or Elasticsearch APIs.",
      ),
      t(
        "Connectors",
        "Configured synchronization",
        "Check source coverage, scheduling, and access support.",
      ),
      t(
        "Crawler",
        "Web content",
        "Operate the Open Web Crawler for eligible pages.",
      ),
    ],
    densityExtra:
      "Ingest pipelines can transform and enrich content. Distributed Elasticsearch indices can also be searched with configured cross-cluster access; that is separate from external-source ingestion.",
    qualification:
      "Integration support and ACL sync vary. Cross-cluster search targets Elasticsearch indices with explicit remote access and connectivity.",
    sources: [S.ingest, S.ccs],
    notes: n(
      "Choose an ingestion route that fits both the source and its operating policy.",
      "APIs and language clients suit application-owned content. Connectors and the Open Web Crawler offer other current routes, with source-specific configuration and operations. Preserve revision and access metadata through transformation. This presentation does not position discontinued App Search, Workplace Search, or the former managed crawler as current architecture. Cross-cluster search is a different mechanism: it searches indexed data on remote Elasticsearch clusters with configured permissions and connectivity, rather than querying arbitrary external applications.",
      "Once content arrives, it needs to become usable context.",
      45,
    ),
  },
  {
    id: "preparation",
    chapter: "02 / Knowledge",
    eyebrow: "PREPARE THE CONTEXT",
    headline: "A file is not",
    emphasis: "context yet.",
    lead: "Extract text, chunk useful passages, enrich metadata, and preserve source sections. Context should remain inspectable after indexing.",
    visual: "preparation",
    layout: "split",
    illustrative: true,
    steps: phases(
      ["Extract", "Produce searchable text from the source."],
      ["Chunk", "Keep passages and section provenance."],
      ["Enrich", "Attach product, revision, deployment, and access metadata."],
      ["Index", "Store text and configured semantic representations."],
    ),
    takeaways: [
      t(
        "Structure",
        "Useful passage boundaries",
        "Keep context and source sections with each chunk.",
      ),
      t(
        "Metadata",
        "Scope before ranking",
        "Record current version, deployment, and authorization.",
      ),
      t(
        "Inference",
        "Configured representations",
        "Pin the endpoint and evaluate model changes.",
      ),
    ],
    densityExtra:
      "semantic_text can automate text chunking and embedding generation through a configured inference endpoint. Extraction, source provenance, and access mapping remain application responsibilities.",
    qualification:
      "semantic_text accepts text, not arbitrary image or PDF bytes. Inference, license, model, language, and resource requirements apply.",
    sources: [S.ingest, S.semantic],
    notes: n(
      "A good chunk is useful on its own and still traceable to its source.",
      "Watch the current administrator guide become text, passages, metadata, and indexed context. For our fictional documents, section identifiers stay with each passage so the answer can cite a specific prerequisite. semantic_text can automate embedding generation and chunking for text through a configured inference endpoint. It does not extract arbitrary binaries, infer every source ACL, or make model changes free of migration work. Pin the endpoint, validate the model, and plan re-embedding or reindexing when required.",
      "Preparation is incomplete unless the context stays current and authorized.",
      50,
    ),
  },
  {
    id: "eligibility",
    chapter: "02 / Knowledge",
    eyebrow: "CONTEXT HAS A BOUNDARY",
    headline: "The right context.",
    emphasis: "The right person and time.",
    lead: "Source changes, synchronization, refresh, and retrieval permissions form one path. Both lexical and vector branches use the same eligibility policy.",
    visual: "eligibility",
    layout: "split",
    illustrative: true,
    steps: phases(
      ["Source change", "A current document revision becomes available."],
      ["Sync and refresh", "Update the index and make writes searchable."],
      [
        "Authorized retrieval",
        "Apply product, version, deployment, publication, and access constraints.",
      ],
    ),
    takeaways: [
      t(
        "Freshness",
        "An engineered pipeline",
        "Source sync and index refresh determine visibility.",
      ),
      t(
        "Access",
        "Before model context",
        "Enforce configured document and field permissions.",
      ),
      t(
        "Scope",
        "One shared policy",
        "Exclude older, cloud-only, and restricted inputs.",
      ),
    ],
    densityExtra:
      "Ineligible inputs appear only as excluded metadata in architecture diagrams. Their content is absent from hits, snippets, model context, and citations throughout the journey.",
    qualification:
      "Configure ACL synchronization and Elasticsearch authorization. Prompts do not enforce access. DLS/FLS entitlements and limitations apply.",
    sources: [S.refresh, S.access],
    notes: n(
      "A relevant document still has to be eligible.",
      "Elasticsearch refresh makes indexed writes visible to search; source synchronization is an additional part of the freshness path. We do not claim instant visibility across every source. Maya's request is constrained to Atlas Hub, version 4.0, self-managed, current published content, and her authorized support-document scope. The older guide, cloud-only guide, and restricted note are excluded before candidate ranking in every branch. Source ACL synchronization and Elasticsearch document controls must be configured and tested. A prompt instruction is never the access boundary.",
      "Within that scope, exact words remain valuable.",
      50,
    ),
  },
  {
    id: "lexical",
    chapter: "03 / Relevance",
    eyebrow: "EXACT TERMINOLOGY",
    headline: "Exact words",
    emphasis: "still matter.",
    lead: q.exact,
    visual: "lexical",
    layout: "split",
    illustrative: true,
    takeaways: [
      t(
        "Identifiers",
        "Preserve the specifics",
        "Atlas Hub and 4.0 are meaningful query terms.",
      ),
      t(
        "Scoring",
        "Lexical evidence",
        "BM25 ranks text using statistical term signals.",
      ),
      t(
        "Eligibility",
        "Before the result",
        "Apply the same current, deployment, and access scope.",
      ),
    ],
    densityExtra:
      "Lexical retrieval is useful for exact names, codes, and specialist terminology. A term match is evidence for ranking; it does not replace version or access filtering.",
    qualification:
      "Rank positions are synthetic. Excluded inputs remain outside the result list. Retrieval quality depends on mappings, analyzers, corpus, and queries.",
    sources: [S.ranking, S.access],
    notes: n(
      "AI does not make identifiers less important.",
      "The exact query is Atlas Hub 4.0 self-managed SSO. BM25 is Elasticsearch's default statistical full-text scoring algorithm; terms, their frequency, and document length contribute to its score. The administrator guide is a strong candidate for this exact wording. An older guide might share many words, but we do not ask scoring to solve its eligibility problem. It is excluded by the shared scope. The rank order shown is invented for this teaching example, not a measured result from Elasticsearch.",
      "Users also ask in their own words.",
      50,
    ),
  },
  {
    id: "vectors",
    chapter: "03 / Relevance",
    eyebrow: "INTENT AND SIMILARITY",
    headline: "Intent has",
    emphasis: "more than one wording.",
    lead: "Company sign-in and single sign-on can point to related context. Learned representations add a similarity signal within the same authorized scope.",
    visual: "vectors",
    layout: "split",
    illustrative: true,
    steps: phases(
      ["Encode intent", "Represent the query with a compatible model."],
      ["Find neighbors", "Search similarity within eligible candidates."],
      [
        "Return eligible context",
        "Inspect relevant passages and source metadata.",
      ],
    ),
    takeaways: [
      t(
        "Intent",
        "Related language",
        "Retrieve beyond an exact word match when the model helps.",
      ),
      t(
        "Scope",
        "The same constraints",
        "Similarity never overrides version, deployment, or access.",
      ),
      t(
        "Choice",
        "Evaluate the model",
        "Test language, domain, latency, and representation changes.",
      ),
    ],
    densityExtra:
      "The point-space diagram is an original illustrative projection, not a literal view of embeddings or proof that a model understands every domain phrase.",
    qualification:
      "Similarity is a model-dependent signal. Embedding, language, hardware, API, version, and subscription requirements vary.",
    sources: [S.ranking, S.semantic],
    notes: n(
      "Maya says company sign-in; the guide says single sign-on.",
      "Dense or sparse learned representations can help connect different wording to relevant passages. The animated neighborhood is a conceptual illustration, not a real embedding plot. We need compatible query and document representations and a model suited to the corpus. All eligibility constraints still apply. Semantic similarity can retrieve helpful candidates, but it can also favor related text that does not answer the specific task, so inspect and evaluate the results rather than treating proximity as truth.",
      "Combine this perspective with lexical retrieval.",
      50,
    ),
  },
  {
    id: "hybrid",
    chapter: "03 / Relevance",
    eyebrow: "COMPLEMENTARY RETRIEVAL",
    headline: "Two perspectives.",
    emphasis: "One ranked result.",
    lead: "Lexical retrieval preserves terminology. Vector retrieval adds similarity. Reciprocal rank fusion combines their eligible ranked lists.",
    visual: "hybrid",
    layout: "split",
    illustrative: true,
    steps: phases(
      ["Lexical ranking", "Rank eligible text candidates."],
      ["Vector ranking", "Rank eligible similarity candidates."],
      ["Fuse ranks", "Combine child rankings with RRF."],
      ["Inspect context", "Return one ranked list with source metadata."],
    ),
    takeaways: [
      t(
        "Lexical",
        "Exact terms",
        "Keep identifiers and domain wording in the design.",
      ),
      t(
        "Vector",
        "Similarity",
        "Add candidates that match the user's phrasing.",
      ),
      t(
        "RRF",
        "Fuse ranked lists",
        "Use rank positions rather than comparing raw scores.",
      ),
    ],
    densityExtra:
      "RRF fuses two or more ranked lists. A document can contribute from one branch; appearing in every branch is not a prerequisite. Fusion is distinct from semantic reranking.",
    qualification:
      "Synthetic ranks. RRF, inference, and other retrievers have version and subscription requirements. Validate retrieval windows on your workload.",
    sources: [S.rrf, S.retrievers],
    notes: n(
      "The goal is complementary evidence, not choosing one retrieval ideology.",
      "Both branches search the same eligible corpus. Lexical ranking retains exact identifiers, while vector ranking can surface the single sign-on passage for Maya's wording. RRF combines rank positions across child lists, avoiding a direct comparison of unrelated raw scores. A candidate does not have to appear in every list. Fusion is not a cross-encoder or LLM reranker, and it is not vector rescoring. Wider candidate windows add work and may improve coverage; measure that trade-off.",
      "A composable request makes the pipeline easier to express.",
      50,
    ),
  },
  {
    id: "retrievers",
    chapter: "03 / Relevance",
    eyebrow: "COMPOSABLE BY DESIGN",
    headline: "Design retrieval",
    emphasis: "as a pipeline.",
    lead: "Retriever trees express retrieval, fusion, later ranking, and explicit rules in one search request. The application still owns the policy and evaluation.",
    visual: "retrievers",
    layout: "split",
    takeaways: [
      t(
        "Retrieve",
        "Eligible candidates",
        "Compose standard and vector branches with shared scope.",
      ),
      t(
        "Rank",
        "Successive decisions",
        "Fuse, then selectively rerank candidate passages.",
      ),
      t(
        "Rules",
        "Explicit policy",
        "Keep pinning and exclusion decisions testable.",
      ),
    ],
    densityExtra:
      "Retriever composition can reduce application-side orchestration. It does not remove model infrastructure, access design, or relevance testing. Rule retrievers are typically outermost.",
    qualification:
      "Supported retrievers, nesting, syntax, and entitlements depend on the release. Validate the actual request against your deployment.",
    sources: [S.retrievers, S.rules],
    notes: n(
      "The pipeline is a design surface you can inspect.",
      "The retriever tree makes the sequence explicit: retrieve eligible candidates, fuse rankings, apply a configured later-stage model, and enforce business rules. The abstraction reduces the amount of application orchestration needed to express that search request. It does not eliminate modeling decisions or make every nesting combination valid. Query rules are normally the outermost retriever so later ranking does not undo them. Pin the release and verify its syntax, supported combinations, and subscriptions.",
      "Now watch that request follow our question.",
      45,
    ),
  },
  {
    id: "hybrid-demo",
    chapter: "03 / Relevance",
    eyebrow: "ILLUSTRATIVE HYBRID WALKTHROUGH",
    headline: "Follow the question.",
    emphasis: "Watch context converge.",
    lead: "The same scoped question travels through lexical and semantic retrieval, then returns one fused list of eligible current sources.",
    visual: "hybrid-demo",
    layout: "split",
    illustrative: true,
    steps: phases(
      [
        "Scoped question",
        "Keep product, version, deployment, publication, and access fixed.",
      ],
      ["Lexical candidates", "Preserve Atlas Hub 4.0 and SSO terminology."],
      [
        "Semantic candidates",
        "Match company sign-in to single sign-on context.",
      ],
      ["Fused results", "Inspect the combined eligible ranked list."],
    ),
    takeaways: [
      t(
        "Question",
        "One consistent scope",
        "The natural-language request keeps the exact deployment.",
      ),
      t(
        "Methods",
        "Different perspectives",
        "Retrieve eligible candidates through complementary signals.",
      ),
      t(
        "Result",
        "Current sources",
        "Administrator guide, troubleshooting, and release notes.",
      ),
    ],
    densityExtra:
      "Lexical: administrator, release notes, troubleshooting. Semantic: troubleshooting, administrator, release notes. Fused: administrator, troubleshooting, release notes. All ranks are synthetic.",
    qualification:
      "Illustrative UI, synthetic rankings, and no live query. Excluded inputs never become hits, snippets, context, or citations.",
    sources: [S.rrf, S.retrievers],
    notes: n(
      "Keep your eye on the scope, then watch the rankings.",
      "The sequence runs automatically. Start with Maya's question and its fixed eligibility policy. Lexical candidates prioritize the exact administrator-guide wording. Semantic candidates bring the troubleshooting passage closer to the user's phrasing. The fused list combines their rank evidence. The administrator guide, troubleshooting article, and release notes are all current, self-managed, and authorized. The excluded inputs are never passed downstream. This is an original teaching interface and synthetic ranking, not a live Kibana screenshot or benchmark.",
      "Candidate coverage is the first stage of a relevance funnel.",
      65,
      "Which query families need exact retrieval, semantic retrieval, or both in your corpus?",
    ),
  },
  {
    id: "funnel",
    chapter: "03 / Relevance",
    eyebrow: "RELEVANCE HAS STAGES",
    headline: "Retrieve broadly.",
    emphasis: "Rerank selectively.",
    lead: "Use efficient retrieval to find candidates, then spend more work where it changes the result. Keep eligibility and business policy explicit.",
    visual: "funnel",
    layout: "split",
    steps: phases(
      [
        "Retrieve candidates",
        "Build coverage with efficient lexical and vector retrieval.",
      ],
      ["Focus the ranking", "Fuse and inspect a bounded candidate set."],
      [
        "Rerank selectively",
        "Apply more costly query-passage comparison to chosen candidates.",
      ],
    ),
    takeaways: [
      t(
        "Coverage",
        "Find the evidence",
        "A later stage cannot recover a document never retrieved.",
      ),
      t(
        "Precision",
        "Spend work deliberately",
        "Limit reranking to an evaluated candidate window.",
      ),
      t(
        "Policy",
        "Separate decisions",
        "Authorization and business rules remain explicit.",
      ),
    ],
    densityExtra:
      "Fusion, vector rescoring, and semantic reranking are different mechanisms. Measure candidate coverage, ranking quality, latency, and model cost at each stage.",
    qualification:
      "Conceptual pipeline. No universal optimum or latency claim. Later ranking can only use candidates supplied to it.",
    sources: [S.ranking, S.rerank],
    notes: n(
      "Relevance and efficiency should be designed together.",
      "Efficient retrieval should cover the evidence the question needs. Fusion organizes complementary candidate lists. A more costly semantic reranker can then compare a bounded set of candidate text against the question. We tune the windows with evaluations and workload measurements, rather than assuming more model calls are always better. Authorization remains a prior requirement; business promotion remains an explicit policy decision. A reranker cannot recover a useful document omitted by every first-stage retriever.",
      "Look closely at that query-passage comparison.",
      45,
    ),
  },
  {
    id: "rerank",
    chapter: "03 / Relevance",
    eyebrow: "SEMANTIC RERANKING",
    headline: "Compare the question",
    emphasis: "with the passage.",
    lead: "A configured rerank model assesses candidate text against the query. Make the most useful prerequisite passage easier to find.",
    visual: "rerank",
    layout: "split",
    illustrative: true,
    steps: phases(
      ["Candidate passages", "Inspect the retrieved current source passages."],
      ["Query-passage comparison", "Use the configured rerank endpoint."],
      [
        "Focused context",
        "Prioritize evidence that directly addresses the request.",
      ],
    ),
    takeaways: [
      t(
        "Compare",
        "The specific task",
        "Assess passage relevance to this question.",
      ),
      t(
        "Configure",
        "A supported endpoint",
        "Choose a model and hosting path that fit the boundary.",
      ),
      t(
        "Measure",
        "Quality and work",
        "Evaluate rerank depth, latency, throughput, and cost.",
      ),
    ],
    densityExtra:
      "Supported configurations include Jina model paths and other rerank services. Reranking can enrich a lexical pipeline without embedding every document; it remains a later-stage operation.",
    qualification:
      "Illustrative ordering. Model, API, hosting, hardware, version, and commercial requirements apply. No guaranteed relevance improvement.",
    sources: [S.rerank, S.jina],
    notes: n(
      "The useful passage is the one that answers the specific request.",
      "For Maya, the administrator-guide prerequisites are more useful than a broad release summary. A semantic reranker compares candidate text with the query through a configured inference endpoint. The illustration focuses that evidence; it does not publish a model score or promise a quality uplift. Current documentation describes Jina through several hosting paths and other model services. Do not imply every Jina model runs natively inside every cluster. Check the actual model, interface, entitlement, hardware, and data boundary, then evaluate its additional work.",
      "Some ranking decisions come from business policy instead.",
      50,
    ),
  },
  {
    id: "rules",
    chapter: "03 / Relevance",
    eyebrow: "DOMAIN DECISIONS",
    headline: "Business rules",
    emphasis: "are explicit decisions.",
    lead: "Pin or exclude eligible documents when configured criteria match. Keep policy separate from the relevance signals it deliberately changes.",
    visual: "rules",
    layout: "split",
    illustrative: true,
    takeaways: [
      t(
        "Criteria",
        "A stated trigger",
        "Apply a rule to declared query metadata.",
      ),
      t(
        "Action",
        "Pin or exclude",
        "Make the rule's result visible and reviewable.",
      ),
      t(
        "Evaluation",
        "Test the consequence",
        "Check affected queries and rule ordering.",
      ),
    ],
    densityExtra:
      "A policy may promote a canonical administrator guide for a product/version query. That promotion is an application decision, not proof that the underlying relevance model improved.",
    qualification:
      "Rules do not replace authorization. Configure privileges, criteria, ruleset order, supported retriever composition, and subscription requirements.",
    sources: [S.rules, S.retrievers],
    notes: n(
      "Promotion should have an owner and a reason.",
      "An organization may choose to pin an eligible canonical guide for a defined product query. That is a legitimate policy decision when it is explicit and evaluated. The rule retriever supports pinning or excluding documents based on matching metadata criteria. Keep authorization in force before any rule can return content. Rules are normally placed outermost so downstream ranking does not overturn their intent. Measure affected query families, document ownership, and expiration; avoid calling policy promotion an algorithmic relevance gain.",
      "Prove the full pipeline with representative questions.",
      45,
    ),
  },
  {
    id: "evaluation",
    chapter: "03 / Relevance",
    eyebrow: "PROVE RELEVANCE",
    headline: "Relevance",
    emphasis: "is demonstrated.",
    lead: "Use representative questions, rated documents, a stable baseline, and failure cases. Evaluate retrieval offline, then test the user experience.",
    visual: "evaluation",
    layout: "split",
    illustrative: true,
    takeaways: [
      t(
        "Judgments",
        "Representative coverage",
        "Rate exact, natural-language, version, and access cases.",
      ),
      t(
        "Baseline",
        "A fair comparison",
        "Hold corpus, query set, judgments, and cutoff consistent.",
      ),
      t(
        "Release",
        "Quality with limits",
        "Check relevance, latency, cost, and excluded-content failures.",
      ),
    ],
    densityExtra:
      "The rank evaluation API supports rated queries and metrics such as precision, MRR, and discounted cumulative gain. Per-query failures matter more than an attractive average alone.",
    qualification:
      "Illustrative evaluation, not measured product results. Define dataset, judgments, metric, cutoff, baseline, and method before reporting an improvement.",
    sources: [S.evaluate, S.judgments],
    notes: n(
      "A compelling demo is the start of evaluation, not its conclusion.",
      "Build judgments from real user tasks and include difficult cases: identifiers, synonyms, wrong versions, missing evidence, and access boundaries. The ranking evaluation API can compare rated queries with defined metrics and expose per-query issues and unrated documents. Synthetic bars here communicate the method, not a reported Elastic improvement. Calibrate AI-generated judgments with human review. Follow offline retrieval checks with controlled application experiments and user outcomes; answer accuracy and business impact are different from a search-rank metric.",
      "The user needs an experience that exposes what the ranking found.",
      55,
      "What query set and relevance judgments would you trust enough to make a release decision?",
    ),
  },
  {
    id: "experience",
    chapter: "03 / Relevance",
    eyebrow: "MAKE THE RESULT USEFUL",
    headline: "A result earns trust",
    emphasis: "when it can be inspected.",
    lead: "Show source titles, version and deployment metadata, useful passages, and filters. Let the user verify that the result fits the task.",
    visual: "experience",
    layout: "split",
    illustrative: true,
    takeaways: [
      t(
        "Context",
        "Applicability is visible",
        "Show current 4.0 and self-managed metadata.",
      ),
      t(
        "Evidence",
        "Inspect the source",
        "Preserve snippets and guide-section provenance.",
      ),
      t(
        "Feedback",
        "Improve the experience",
        "Use reviewed signals alongside relevance judgments.",
      ),
    ],
    densityExtra:
      "The result cards are an original application illustration. User behavior is useful feedback but can carry position, presentation, and population bias.",
    qualification:
      "Illustrative UI, not a shipped Elastic interface. All shown hits and snippets are eligible current fictional support documents.",
    sources: [S.search, S.judgments],
    notes: n(
      "The user should not have to guess whether a result applies.",
      "Maya sees a current administrator guide, a troubleshooting article, and release notes, with scope and source metadata. The useful snippet makes the next step clear, while a section link allows inspection of the surrounding context. This is an original application interface, not a claim about a specific out-of-the-box workbench. Feedback can guide improvement, but clicks alone are not unbiased relevance judgments. Keep evaluation and evidence visible as we move from ranking design to platform engineering.",
      "The same context needs an infrastructure choice that fits its workload.",
      40,
    ),
  },
  {
    id: "index-choice",
    chapter: "04 / Engineering",
    eyebrow: "VECTOR INFRASTRUCTURE",
    headline: "Vector search starts",
    emphasis: "with a workload choice.",
    lead: "Flat, HNSW, and DiskBBQ use different search mechanisms. Choose with your corpus, filters, recall target, memory, and query load.",
    visual: "index-choice",
    layout: "split",
    illustrative: true,
    steps: phases(
      ["Flat", "Compare eligible vectors exhaustively."],
      ["HNSW", "Traverse a graph for approximate neighbors."],
      ["DiskBBQ", "Search selected compact clusters from disk."],
    ),
    takeaways: [
      t(
        "Flat",
        "Exhaustive comparison",
        "Useful when the eligible candidate population is small.",
      ),
      t(
        "HNSW",
        "Graph traversal",
        "Evaluate approximate retrieval against the recall target.",
      ),
      t(
        "DiskBBQ",
        "Disk cluster search",
        "Trade searched cluster scope against recall and work.",
      ),
    ],
    densityExtra:
      "DiskBBQ uses hierarchical clustering and selected disk reads. It is not HNSW with its graph moved to disk. Very high recall can require more work and favor a different design.",
    qualification:
      "Qualitative illustration; no measured speed or recall claim. DiskBBQ requires Enterprise. Index behavior and defaults depend on the release.",
    sources: [S.bbq, S.capacity],
    notes: n(
      "The index should fit the workload rather than the other way around.",
      "Flat search compares vectors exhaustively and can be appropriate for a small eligible population. HNSW uses a graph for approximate retrieval. DiskBBQ organizes compact vectors in hierarchical clusters and reads selected clusters from disk. That is a distinct mechanism, not a graph relocated to disk. Benchmark corpus size, dimensions, filters, concurrency, memory, and target recall. More clusters may increase coverage and work; at very high recall, HNSW may be preferable depending on memory. Pin the release because defaults and tuning behavior evolve. DiskBBQ has an Enterprise entitlement.",
      "Compression and indexing are related, but different, choices.",
      55,
    ),
  },
  {
    id: "quantization",
    chapter: "04 / Engineering",
    eyebrow: "VECTOR REPRESENTATION AND STORAGE",
    headline: "Smaller representations.",
    emphasis: "Different search paths.",
    lead: "Quantization reduces the vector working set. Disk indexing changes how candidates are searched. They can work together, with measured trade-offs.",
    visual: "quantization",
    layout: "split",
    illustrative: true,
    steps: phases(
      ["Float vectors", "Keep the original representation for the workload."],
      [
        "Compact representation",
        "Quantize vectors and evaluate precision trade-offs.",
      ],
      [
        "Disk cluster search",
        "Use compact vectors in selected DiskBBQ clusters.",
      ],
    ),
    takeaways: [
      t(
        "Quantize",
        "A compact representation",
        "Lossy compression changes precision and working size.",
      ),
      t(
        "Store",
        "Memory and disk boundaries",
        "Account for original and compact representations.",
      ),
      t(
        "Verify",
        "Quality with efficiency",
        "Evaluate recall, rescoring, latency, and total cost.",
      ),
    ],
    densityExtra:
      "BBQ is a quantization method; DiskBBQ combines compact representations with disk-based cluster search. Vector compression is not an equal reduction in total cluster RAM or operating cost.",
    qualification:
      "No universal savings claim. Quantization is lossy; index format, dimensions, rescoring, version, subscription, and hardware requirements apply.",
    sources: [S.bbq, S.capacity],
    notes: n(
      "A smaller vector representation is one component of a capacity plan.",
      "BBQ compresses dense vectors with a lossy representation. Search can use techniques such as oversampling and rescoring to manage quality. The original and compact representations still contribute to storage and operations. DiskBBQ combines compact vectors with a disk-based cluster search path. We deliberately avoid a compression multiplier headline because it would not describe total cluster RAM, all index storage, or TCO. Measure recall and latency at the desired workload, including filters and concurrent searches, and separate representation choice from index-search mechanism.",
      "The build path is another opportunity to evaluate acceleration.",
      50,
    ),
  },
  {
    id: "gpu",
    chapter: "04 / Engineering",
    eyebrow: "GPU VECTOR INDEXING",
    headline: "Build the graph",
    emphasis: "with the GPU.",
    lead: "GPU vector indexing accelerates supported HNSW graph construction. Subsequent query retrieval runs on the CPU; inference is a separate workload.",
    visual: "gpu",
    layout: "split",
    illustrative: true,
    steps: phases(
      ["Vector ingest", "Supply vectors for a supported index format."],
      [
        "GPU graph construction",
        "Build the HNSW graph with supported GPU libraries.",
      ],
      ["CPU query retrieval", "Search the resulting index on the CPU."],
    ),
    takeaways: [
      t(
        "Build",
        "Graph construction",
        "Assess bulk ingest and rebuild operations.",
      ),
      t(
        "Search",
        "CPU query path",
        "Measure retrieval while indexing and merging.",
      ),
      t(
        "Fit",
        "Supported infrastructure",
        "Validate GPU, OS, Java, libraries, and index format.",
      ),
    ],
    densityExtra:
      "GPU HNSW construction is distinct from generating embeddings or running a reranker. Evaluate indexing, merges, query-under-ingest, recall, and infrastructure expense.",
    qualification:
      "Enterprise and supported NVIDIA GPU, Linux, Java, libraries, and index format required. No universal acceleration or cost claim.",
    sources: [S.gpu],
    notes: n(
      "Separate the work of creating vectors from the work of building their search graph.",
      "The animation moves vector ingest through GPU graph construction and then to CPU retrieval. Current documentation requires Enterprise, Linux x86_64, Java 22 or later, supported NVIDIA Ampere-or-newer GPUs with compute capability at least 8.0 and at least 8 GB VRAM, and supported CUDA/cuVS combinations. Supported formats are hnsw and int8_hnsw with float elements. Check the exact support matrix and release; these are compatibility minima, not production sizing. GPU embeddings and reranking are separate services. Benchmark indexing, merges, search during ingest, recall, and end-to-end infrastructure cost before choosing hardware.",
      "Capacity and economics include every part of that path.",
      50,
    ),
  },
  {
    id: "economics",
    chapter: "04 / Engineering",
    eyebrow: "OPERATING ECONOMICS",
    headline: "Scale the workload.",
    emphasis: "Budget the whole system.",
    lead: "Corpus growth, updates, filters, concurrency, candidate windows, rerank depth, and model calls all change the operating envelope.",
    visual: "economics",
    layout: "split",
    takeaways: [
      t(
        "Platform",
        "Ingest and retrieval",
        "Measure capacity, resilience, filters, and update rate.",
      ),
      t(
        "Models",
        "Inference work",
        "Account for embeddings, reranking, and generation.",
      ),
      t(
        "Operations",
        "The full responsibility",
        "Include subscriptions, hardware, people, and recovery.",
      ),
    ],
    densityExtra:
      "Benchmark quality and p50/p95 end-to-end latency at expected concurrency and update load. Compare operating options using the same workload and service requirements.",
    qualification:
      "Workload guidance, not a price estimate or guaranteed saving. Entitlements, service billing, hardware, and operating responsibilities vary.",
    sources: [S.capacity, S.subscriptions],
    notes: n(
      "Search cost is not a single per-query number.",
      "Indexing and embedding refresh change with corpus growth and updates. Filters and retrieval fan-out change search work. Candidate windows and rerank depth change model throughput. Generation adds another service and another latency distribution. Include resilience, snapshots, monitoring, staffing, and licensing. Compare p50 and p95 end-to-end latency under expected concurrency and ingestion, with the same quality target. A faster isolated operation does not prove a cheaper whole system. Set workload and cost limits that your evaluation can actually test.",
      "Models need the same task-specific discipline.",
      50,
      "Which limit matters most for your planned workload: quality, tail latency, memory, model throughput, or operating cost?",
    ),
  },
  {
    id: "models",
    chapter: "04 / Engineering",
    eyebrow: "MODEL CHOICE",
    headline: "Choose the model",
    emphasis: "for the job.",
    lead: "Sparse or dense retrieval, multilingual text, compatible multimodal models, reranking, and generation solve different parts of the experience.",
    visual: "models",
    layout: "split",
    takeaways: [
      t(
        "Retrieve",
        "Represent the corpus",
        "Choose sparse or dense models suited to language and domain.",
      ),
      t(
        "Rerank",
        "Compare candidates",
        "Use a supported query-passage inference endpoint.",
      ),
      t(
        "Generate",
        "Compose from evidence",
        "Configure a compatible model with an explicit boundary.",
      ),
    ],
    densityExtra:
      "ELSER, configured Jina paths, and other compatible models offer different roles. Text/image retrieval needs matching model, field mapping, API, and hosting support.",
    qualification:
      "semantic_text is text-only. Language, modality, mapping, API, hardware, license, and deployment requirements vary; model changes may require reindexing.",
    sources: [S.elser, S.jina, S.semanticReference],
    notes: n(
      "Model choice begins with the task and the corpus.",
      "Sparse and dense retrieval offer different representations. ELSER is recommended for English documents and queries; its learned expansion terms are associations rather than ordinary synonyms. Jina and other supported model paths have model-specific languages, modalities, interfaces, and hosting requirements. semantic_text accepts text, not image or PDF binary input. Compatible multimodal retrieval requires an appropriate separate field mapping and endpoint; do not infer universal image support from an embedding label. A reranker and an answer-generating model have different jobs. Pin each model and plan compatibility checks, re-embedding, or reindexing when changing representations.",
      "Where inference runs is part of that choice.",
      50,
    ),
  },
  {
    id: "sovereign",
    chapter: "04 / Engineering",
    eyebrow: "LOCAL AND CONNECTED INFERENCE",
    headline: "Your data boundary",
    emphasis: "includes inference.",
    lead: "A self-managed engine can use configured local inference. An approved external model is a separate architecture choice with explicit network and data flows.",
    visual: "sovereign",
    layout: "split",
    steps: phases(
      ["Local engine", "Keep indexed retrieval in the self-managed boundary."],
      ["Local inference", "Provision compatible local model services."],
      [
        "Approved external alternative",
        "Review any connected provider and outgoing context.",
      ],
    ),
    takeaways: [
      t(
        "Local",
        "Provision the boundary",
        "Prepare model artifacts, runtime, entitlement, and operations.",
      ),
      t(
        "External",
        "Approve the connection",
        "Specify provider, context transfer, network, and billing.",
      ),
      t(
        "Control",
        "Verify the actual path",
        "A local cluster alone does not make inference local.",
      ),
    ],
    densityExtra:
      "Jina On-Prem provides commercial local container paths. EIS through Cloud Connect is connected cloud inference, with account, network, entitlement, and billing requirements.",
    qualification:
      "Model compatibility and commercial requirements apply. Self-managed has no preconfigured Agent Builder model. Validate restricted/offline operation before use.",
    sources: [S.local, S.eis, S.models],
    notes: n(
      "Locate every place the question and evidence can travel.",
      "Our central example keeps retrieval self-managed and shows a configured local inference path. Public Jina On-Prem documentation describes self-contained commercial containers that can operate without external connections after appropriate provisioning. You still need model artifacts, dependencies, license, hardware, and operational preparation. Local compatible LLMs need a supported inference configuration and validation. An approved EIS or external-provider route is a distinct connected alternative. Cloud Connect to EIS requires an Elastic Cloud account, qualifying entitlement, network connectivity, and billing or trial configuration. A self-managed cluster alone is not an air-gapped inference architecture.",
      "With the boundary clear, assemble evidence before generation.",
      55,
    ),
  },
  {
    id: "rag",
    chapter: "05 / Trusted AI",
    eyebrow: "RETRIEVAL-AUGMENTED GENERATION",
    headline: "Answers begin",
    emphasis: "with authorized context.",
    lead: "Retrieve current evidence, assemble a bounded context, generate an answer, and expose citations. Keep unsupported or conflicting claims visible.",
    visual: "rag",
    layout: "split",
    illustrative: true,
    steps: phases(
      [
        "Authorized retrieval",
        "Retrieve only current eligible source passages.",
      ],
      ["Context assembly", "Pass bounded evidence and section provenance."],
      ["Generation", "Compose an answer using the configured model."],
      ["Inspect citations", "Check each claim against its cited section."],
    ),
    takeaways: [
      t(
        "Retrieve",
        "Eligible evidence first",
        "No restricted or wrong-deployment content reaches the model.",
      ),
      t(
        "Generate",
        "Evidence-led response",
        "Use source passages to support the answer.",
      ),
      t(
        "Verify",
        "Inspect and qualify",
        "Clarify or abstain when evidence is missing or conflicting.",
      ),
    ],
    densityExtra:
      "RAG supplies external context to a model; it is not model training. Citations support inspection, but source quality, retrieval quality, and generated-answer quality need separate evaluation.",
    qualification:
      "Synthetic answer and no live model call. Grounding and citations do not guarantee factual correctness or automatic authorization.",
    sources: [S.rag, S.grounding, S.access],
    notes: n(
      "The answer should be traceable to the evidence that made it possible.",
      "Only the current administrator guide and troubleshooting passages enter Maya's model context. Each passage retains its source and section. The model can compose an explanation, and the application displays citations for inspection. RAG adds context rather than retraining the model. It does not guarantee factual answers. We need a policy for missing evidence, conflicts, unsupported statements, and user clarification. We also evaluate source freshness, retrieval coverage, permissions, and generated text independently. Do not expose ineligible snippets even temporarily before generation.",
      "An agent can retrieve that evidence with configured tools.",
      55,
    ),
  },
  {
    id: "agent",
    chapter: "05 / Trusted AI",
    eyebrow: "ELASTIC AGENT BUILDER",
    headline: "Elastic Agent Builder.",
    emphasis: "Evidence before action.",
    lead: "Connect reasoning to permitted retrieval tools over Elasticsearch data. Make scope, tool privileges, model configuration, and evidence inspection explicit.",
    visual: "agent",
    layout: "split",
    takeaways: [
      t(
        "Tools",
        "A limited capability",
        "Assign the retrieval operations needed for the task.",
      ),
      t(
        "Privileges",
        "The actual user scope",
        "Enforce Kibana, Elasticsearch, and space permissions.",
      ),
      t(
        "Evidence",
        "A reviewable response",
        "Inspect tool results, source sections, and qualifications.",
      ),
    ],
    densityExtra:
      "Agent Builder supports built-in/custom agents and tools, chat, and integration interfaces. The illustrative assistant uses retrieval only; it performs no configuration or business action.",
    qualification:
      "Subscription and version requirements apply. Self-managed needs a configured model. Tools execute within configured privileges; prompts are not access controls.",
    sources: [S.agent, S.permissions, S.models],
    notes: n(
      "Tools make the path to evidence explicit.",
      "Elastic Agent Builder provides agents, tools, chat, and integration interfaces over Elasticsearch data. Our fictional assistant is assigned retrieval tools only. Permissions span Kibana, spaces, Elasticsearch indices, and the executing user or API key. Limit operations and index scope to the task, and enforce document authorization before the model sees any result. Self-managed, ECE, and ECK do not include a preconfigured model; choose and configure a supported route. An agent's ability to call a tool is not approval to configure identity systems or perform a business action.",
      "Watch the assistant answer Maya's follow-up without changing the scope.",
      50,
    ),
  },
  {
    id: "agent-demo",
    chapter: "05 / Trusted AI",
    eyebrow: "ILLUSTRATIVE AGENT WALKTHROUGH",
    headline: "One question.",
    emphasis: "A traceable answer.",
    lead: q.followUp,
    visual: "agent-demo",
    layout: "split",
    illustrative: true,
    steps: phases(
      [
        "Scoped question",
        "Retain Atlas Hub 4.0, self-managed, current, and authorized scope.",
      ],
      [
        "Permitted tool request",
        "Retrieve source passages through a limited configured tool.",
      ],
      [
        "Eligible evidence",
        "Inspect current administrator and troubleshooting sections.",
      ],
      [
        "Source-backed prerequisites",
        "Map each prerequisite to its supporting section.",
      ],
      [
        "Qualified answer",
        "Explain the evidence and ask for missing deployment detail.",
      ],
    ),
    takeaways: [
      t(
        "Scope",
        "The same request",
        "Follow-up keeps product, release, deployment, and access fixed.",
      ),
      t(
        "Support",
        "Claim to section",
        "Metadata, callback, and test prerequisites have sources.",
      ),
      t(
        "Limit",
        "No hidden action",
        "An answer does not configure or enable sign-in.",
      ),
    ],
    densityExtra:
      "Administrator guide §2.1 supports metadata and certificate; §2.2 the callback; §2.3 administrator/test access. Troubleshooting §4.2 supports certificate and clock checks.",
    qualification:
      "Synthetic interface, documents, answer, and tool trace. No live model or tool call. Only eligible current sources appear in context and citations.",
    sources: [S.agent, S.permissions, S.rag],
    notes: n(
      "A useful answer connects each prerequisite to a source section.",
      "The sequence plays automatically. Maya's follow-up retains the scope established earlier. The permitted tool requests only current authorized support passages. Administrator section 2.1 supports identity-provider metadata and signing certificate; 2.2 supports callback registration; 2.3 supports authorized administrator and test access. Troubleshooting 4.2 supports certificate-validity and clock checks if the test fails. The qualified answer identifies what the sources establish and asks for a missing deployment URL before offering configuration-specific detail. No identity change is performed, and no excluded input reaches hits, context, or citations.",
      "The verification model belongs in the platform design.",
      65,
      "What evidence would your users need to trust a generated answer enough to act on it?",
    ),
  },
  {
    id: "trust",
    chapter: "05 / Trusted AI",
    eyebrow: "TRUST IS ENGINEERED",
    headline: "Trust is a system",
    emphasis: "you can verify.",
    lead: "Source quality, retrieval quality, permissions, and generated-answer behavior are separate checks. Design for uncertainty rather than hide it.",
    visual: "trust",
    layout: "split",
    takeaways: [
      t(
        "Sources",
        "Current and applicable",
        "Check revision, scope, provenance, and conflicts.",
      ),
      t(
        "Retrieval",
        "Relevant and authorized",
        "Test coverage, access boundaries, and source leakage.",
      ),
      t(
        "Answers",
        "Supported and qualified",
        "Evaluate citations, unsupported claims, and abstention.",
      ),
    ],
    densityExtra:
      "Test missing evidence, misleading passages, wrong versions, prompt injection, and revoked access. Log and inspect the application path within your retention and privacy policy.",
    qualification:
      "Recommended application controls; not a guarantee of zero hallucinations or automatic complete governance. Grounding is one layer of verification.",
    sources: [S.grounding, S.permissions, S.access],
    notes: n(
      "A citation is useful only when it supports the claim and the source is eligible.",
      "Test the source, retrieval, permission, and generation layers independently. Ask whether a passage is current, whether the retriever found the necessary evidence, whether the user could access it, and whether the answer stays within it. Include revoked access, conflicting versions, missing prerequisites, and prompt injection in the application test set. Evaluate clarification and abstention as successful outcomes when evidence is insufficient. Logs and traces help inspection but need their own privacy, access, and retention policy. None of these controls makes generated text infallible.",
      "Choose a deployment that supports the required boundary and operations.",
      45,
    ),
  },
  {
    id: "deploy",
    chapter: "06 / Operate",
    eyebrow: "DEPLOYMENT CHOICE",
    headline: "Run where",
    emphasis: "requirements lead.",
    lead: "Self-managed, ECK, ECE, Elastic Cloud Hosted, and Serverless offer different control and operating models. Compare the requirements that matter to your platform.",
    visual: "deploy",
    layout: "split",
    takeaways: [
      t(
        "Self-managed",
        "Direct responsibility",
        "Own infrastructure, upgrades, resilience, and model routes.",
      ),
      t(
        "ECK / ECE",
        "Orchestrated estates",
        "Operate Kubernetes or deployment fleets with explicit owners.",
      ),
      t(
        "Cloud",
        "Managed options",
        "Assess Hosted or Serverless capabilities and connectivity.",
      ),
    ],
    densityExtra:
      "Compare identity, plugins, scaling, lifecycle, release control, model hosting, network, and entitlements. Engine location and inference location are separate decisions.",
    qualification:
      "No blanket feature parity. Deployment, version, subscription, operations, connectivity, and model requirements differ.",
    sources: [S.deploy, S.models, S.subscriptions],
    notes: n(
      "Deployment choice assigns responsibility as well as location.",
      "Self-managed is central to our example because the team needs direct control of data and infrastructure. ECK orchestrates Elasticsearch on Kubernetes; ECE orchestrates deployments across an estate. Hosted and Serverless offer different managed operating models. Compare the actual requirements, including authentication, custom plugins, scaling, lifecycle, upgrades, network paths, and inference. Do not imply every capability or operating responsibility is identical. A cloud model connection remains an explicit connection even when the engine is self-managed. Record owners for resilience, updates, and model services.",
      "Adopt the new pipeline as a measured evolution of the existing stack.",
      45,
    ),
  },
  {
    id: "rollout",
    chapter: "06 / Operate",
    eyebrow: "EVOLVE WITH EVIDENCE",
    headline: "Evolve the stack.",
    emphasis: "Prove each release.",
    lead: "Keep the existing baseline, pilot a candidate pipeline, verify quality and access gates, then roll out or return to the known path.",
    visual: "rollout",
    layout: "split",
    steps: phases(
      [
        "Baseline",
        "Capture existing retrieval, workload, and failure behavior.",
      ],
      ["Pilot", "Evaluate a bounded candidate corpus and pipeline."],
      [
        "Release gates",
        "Check relevance, access, latency, cost, and ownership.",
      ],
      [
        "Rollout or rollback",
        "Use measured evidence to choose the next release.",
      ],
    ),
    takeaways: [
      t(
        "Preserve",
        "A rollback baseline",
        "Make the comparison and recovery path reproducible.",
      ),
      t(
        "Validate",
        "Explicit release gates",
        "Test judgments, exclusions, workload limits, and answers.",
      ),
      t(
        "Operate",
        "Named owners",
        "Assign source, relevance, model, and platform responsibility.",
      ),
    ],
    densityExtra:
      "A minimum pilot includes a representative corpus/query set, relevance judgments, an access policy, workload/cost limits, accountable owners, and an agreed rollback baseline.",
    qualification:
      "Recommended rollout method. Integration and migration work are deployment-specific; no automatic parity or migration-success claim.",
    sources: [S.evaluate, S.deploy],
    notes: n(
      "The existing investment gives us a baseline, not an obstacle.",
      "Document what the current application does well and where it fails. Choose a bounded corpus and a candidate retrieval pipeline, then compare them with stable judgments. Add access revocation and excluded-content checks, workload and cost limits, and generated-answer tests if generation is in scope. Name owners for data freshness, relevance, models, security, and operations. Agree rollback criteria before release. The pilot may justify rollout, another iteration, or retaining the existing path; each is a useful decision when supported by evidence.",
      "Public customer examples show why teams evaluate this approach.",
      50,
    ),
  },
  {
    id: "proof",
    chapter: "06 / Operate",
    eyebrow: "PUBLIC CUSTOMER EVIDENCE",
    headline: "Evidence from customers.",
    emphasis: "A benchmark for you.",
    lead: "HSE reports a 4% rise in search-page click-through rate. Stack Overflow's public account describes hybrid retrieval and answers linked to sources.",
    visual: "proof",
    layout: "wide",
    takeaways: [
      t(
        "HSE",
        "4% rise in search-page CTR",
        "Customer-reported result from Elastic Cloud on AWS.",
      ),
      t(
        "Stack Overflow",
        "Retrieval to sourced answers",
        "A qualitative public account of hybrid search and attribution.",
      ),
      t(
        "Your platform",
        "Evaluate your outcome",
        "Use your corpus, users, deployment, judgments, and workload.",
      ),
    ],
    densityExtra:
      "HSE's wording is a 4% rise, not percentage points, revenue, or conversion. Stack Overflow's account includes forward-looking phrasing; no current universal rollout scope is asserted.",
    qualification:
      "Attributed customer examples, not promises. HSE's Cloud on AWS result is not an on-premises performance or cost guarantee.",
    sources: [S.hse, S.stackOverflow],
    notes: n(
      "Customer evidence makes the opportunity concrete without defining your outcome.",
      "HSE reports a four percent rise in search-page click-through rate in its public story, using Elastic Cloud on AWS. Retain that exact scope: it is not four percentage points, conversion growth, revenue, or an on-prem result. Stack Overflow's public account describes moving from lexical to hybrid retrieval and summaries linked to trusted community contributions and private Teams knowledge. It provides qualitative evidence of retrieval and attribution; the story includes forward-looking language, so we do not invent a current rollout footprint. Use these examples to inform an evaluation, not substitute for one.",
      "Return to the question that opened the presentation.",
      40,
    ),
  },
  {
    id: "operating",
    chapter: "06 / Operate",
    eyebrow: "CLOSE THE CONTEXT LOOP",
    headline: "The question is answered.",
    emphasis: "The work keeps improving.",
    lead: "Maya receives current self-managed prerequisites with source sections. The team keeps the content, access policy, retrieval, and answer evaluation under review.",
    visual: "operating",
    layout: "split",
    illustrative: true,
    steps: phases(
      [
        "Current sources",
        "Maintain eligible documents, revisions, and access.",
      ],
      ["Verified answer", "Inspect the prerequisites and supporting sections."],
      [
        "Measured improvement",
        "Review failures and release evaluated changes.",
      ],
    ),
    takeaways: [
      t(
        "Resolved",
        "Source-backed prerequisites",
        "Metadata, callback, and test access map to current guide sections.",
      ),
      t(
        "Qualified",
        "Known limits",
        "A deployment-specific detail still needs clarification.",
      ),
      t(
        "Operated",
        "An accountable loop",
        "Review changes, failures, access, and measured releases.",
      ),
    ],
    densityExtra: journey.uncertainty,
    qualification:
      "Fictional outcome. Review and feedback are an application operating process, not automatic persistent learning or a guaranteed improvement.",
    sources: [S.rag, S.evaluate, S.access],
    notes: n(
      "The useful outcome is both an answer and a platform we can keep evaluating.",
      "Maya has the applicable current prerequisites: identity-provider metadata and certificate, the callback registration, and authorized administrator and test access, each tied to administrator-guide sections. The troubleshooting section supports the additional checks if testing fails. Missing deployment details remain explicit. The older, cloud-only, and restricted sources stayed excluded. The team then maintains source changes, access synchronization, retrieval judgments, model behavior, workload, and release ownership. The improvement loop is human-owned application operations; it is not a promise of automatic persistent model learning.",
      "Close with the evaluation that makes this practical for your platform.",
      45,
    ),
  },
  {
    id: "closing",
    chapter: "06 / Operate",
    eyebrow: "THE NEXT DECISION",
    headline: "Connect the knowledge.",
    emphasis: "Deliver with confidence.",
    lead: "Find what matters, prove it with your questions, and make the next platform decision from evidence. Start with a bounded evaluation.",
    visual: "closing",
    layout: "wide",
    takeaways: [
      t(
        "Connect",
        "Current, authorized context",
        "Agree the corpus, source owners, and access policy.",
      ),
      t(
        "Find",
        "Measured relevance",
        "Agree representative questions, judgments, and a baseline.",
      ),
      t(
        "Deliver",
        "A release you can justify",
        "Agree workload limits, owners, gates, and rollback.",
      ),
    ],
    densityExtra:
      "The next step is a jointly defined evaluation: corpus and questions, rated evidence, access policy, quality/latency/cost limits, operating owners, and a decision date.",
    qualification:
      "Evaluation proposal, not a commitment to savings, zero hallucinations, universal feature parity, or an unreviewed production rollout.",
    sources: [S.search, S.evaluate],
    notes: n(
      "Your users ask for an answer. Your platform must find the right context.",
      "Connect current and authorized knowledge. Find what matters with complementary retrieval and demonstrated relevance. Deliver an experience people can inspect and a release the team can operate. Propose a bounded evaluation with the customer's corpus, representative questions, rated source evidence, access policy, workload and cost limits, owners, and rollback baseline. Agree a decision date and the evidence required to choose rollout, iteration, or the existing path. That is a concrete platform decision rather than a generic AI promise.",
      "Invite the platform team to agree the evaluation scope and accountable owners.",
      40,
      "Which corpus and user task should we use to prove the next decision together?",
    ),
  },
];
