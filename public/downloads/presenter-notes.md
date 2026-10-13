# Elastic Search — Presenter notes

34 scenes · 27:05 suggested pacing · English · CTOs and search platform leaders

Core argument: **Your users ask for an answer. Your platform must find the right context.**

Animation sequences play and loop automatically. Arrow, Space, and Page keys move directly between slides; R replays the current slide. Reduced motion shows complete diagrams immediately.

All scenario documents, ranks, vector projections and UI walkthroughs are synthetic. No real searches, model calls or actions run here. Verify relevance, source permissions, entitlements, versions, model interfaces, connectivity and operating costs for the customer. Sources checked October 13, 2026. Hide the inline notes before screen sharing.

## 01. Elastic Search. Trusted context.

**Chapter:** 01 / Philosophy · **Pacing:** 35 seconds

**Open:** Your users ask for an answer. Your platform must find the right context.

**Explain:** Our subject is the quality of that context: whether it is relevant, current, and authorized. We will follow one fictional support engineer rather than jump between unrelated demos. Elastic Search is a platform for retrieval and for AI context; the application still owns policy, evaluation, and the experience. All diagrams and example answers are illustrative. The animations play automatically, and navigation always changes slides.

**Transition:** Let us agree on what the journey needs to prove.

**Qualification:** Original illustrative journey. No live queries, model calls, or actions. Feature requirements vary by version, subscription, model, and deployment.

**Technical context:** One fictional support question follows the path from scattered documents to a source-backed answer. The same foundation supports search and AI applications.

**Evidence:** [Search](https://www.elastic.co/docs/solutions/search)

## 02. One question. Traceable evidence.

**Chapter:** 01 / Philosophy · **Pacing:** 40 seconds

**Open:** Maya needs to configure company sign-in for a specific release in a specific environment.

**Explain:** Maya Chen is our fictional support engineer. The question is about Atlas Hub 4.0 on a self-managed deployment. A plausible answer for an older release or a cloud service can still be wrong. A restricted document may be relevant but must remain outside Maya's access scope. We apply the same product, version, deployment, publication, and authorization constraints to every retrieval branch. The user sees only eligible sources.

**Ask:** Where does context fail today: finding it, keeping it current, or proving that it applies?

**Transition:** As the experience evolves, the obligation to find the right context becomes greater.

**Qualification:** Synthetic teaching example; no product benchmark or real configuration guidance. Eligibility is enforced before ranking and generation.

**Technical context:** Atlas Hub, its users, documents, rank positions, answers, and diagrams are fictional. Older, cloud-only, and restricted inputs never enter user-visible results or model context.

**Evidence:** [RAG](https://www.elastic.co/docs/solutions/search/rag/) · [Document access](https://www.elastic.co/docs/deploy-manage/users-roles/cluster-or-deployment-auth/controlling-access-at-document-field-level)

## 03. From finding links to finishing work.

**Chapter:** 01 / Philosophy · **Pacing:** 40 seconds

**Open:** Every step toward a richer experience raises the cost of weak context.

**Explain:** A results page gives the user a list to inspect. An answer summarizes selected evidence. A tool-assisted experience may retrieve more information or perform an allowed operation. These are different responsibilities, but retrieval remains central. We should evaluate them separately: result relevance, answer support, and tool behavior. The automatic sequence shows a conceptual progression, not a promise that one product setting turns search into an autonomous business process.

**Automatic animation sequence:**

1. **Links** — Find a relevant document.
2. **Relevant results** — Rank and explain useful context.
3. **Grounded answers** — Compose an answer from eligible sources.
4. **Tool-assisted work** — Use permitted tools within explicit policy.

**Transition:** The first obstacle is where the knowledge lives.

**Qualification:** Illustrative progression. Grounded generation does not guarantee correctness, and tool availability does not confer action authority.

**Technical context:** These are complementary application patterns. Search does not disappear when generation or tools are added; it supplies the evidence those experiences need.

**Evidence:** [Search](https://www.elastic.co/docs/solutions/search) · [RAG](https://www.elastic.co/docs/solutions/search/rag/) · [Agent Builder](https://www.elastic.co/docs/explore-analyze/ai-features/elastic-agent-builder)

## 04. Knowledge has many homes. Users have one question.

**Chapter:** 01 / Philosophy · **Pacing:** 40 seconds

**Open:** The platform challenge begins before the search box.

**Explain:** The current administrator guide may live on a documentation site; troubleshooting may be in a support system; a restricted note may have a different owner. These systems update differently and carry different permission models. A search platform makes content retrievable, but the project must decide how to extract it, synchronize changes, remove retired versions, and map access. A connector is a configured ingestion route, not automatic governance over every source.

**Transition:** That gives us three responsibilities for the platform.

**Qualification:** Connector coverage and ACL synchronization vary. Source permissions are not automatically inherited by every integration.

**Technical context:** Indexing connects knowledge only when metadata, revision handling, and access synchronization are engineered with the source integration.

**Evidence:** [Ingestion](https://www.elastic.co/docs/solutions/search/ingest-for-search) · [Document access](https://www.elastic.co/docs/deploy-manage/users-roles/cluster-or-deployment-auth/controlling-access-at-document-field-level)

## 05. Connect. Find. Deliver.

**Chapter:** 01 / Philosophy · **Pacing:** 40 seconds

**Open:** The useful unit of design is a trusted experience, not a catalogue of features.

**Explain:** Connect means the relevant knowledge is available under the right controls. Find means we can retrieve it for exact terms and natural language, then demonstrate quality. Deliver means people can use the result, inspect its evidence, and trust the operating boundary. A weakness in any pillar limits the whole experience: an excellent model cannot repair a missing source, and a relevant passage cannot justify unauthorized access.

**Transition:** Start with the common engine underneath those responsibilities.

**Qualification:** Architecture guidance. Outcomes depend on corpus quality, relevance design, application policy, and measured operations.

**Technical context:** These are original editorial pillars for this presentation. They organize the work; they are not official Elastic feature names or an automatic maturity model.

**Evidence:** [Search](https://www.elastic.co/docs/solutions/search) · [RAG](https://www.elastic.co/docs/solutions/search/rag/)

## 06. One engine. Several representations.

**Chapter:** 02 / Knowledge · **Pacing:** 45 seconds

**Open:** The representations are complementary.

**Explain:** Atlas Hub and 4.0 are exact terms we want to retain. Self-managed is an explicit constraint. Company sign-in is the user's wording for a concept documented as single sign-on. Elasticsearch can hold the text, metadata, and vector representations needed for these signals and compose their retrieval. A common engine simplifies the architecture, but does not automatically prove workload isolation, lower cost, or better relevance; those must be designed and measured.

**Transition:** Now connect the content to that engine.

**Qualification:** Near real-time search. Advanced retrieval and inference requirements vary by version, subscription, model, and deployment.

**Technical context:** Elasticsearch provides search, filtering, and analytics over indexed content. The application can compose lexical, vector, and structured retrieval rather than maintain unrelated relevance paths.

**Evidence:** [Elasticsearch](https://www.elastic.co/docs/get-started/the-stack) · [Retrievers](https://www.elastic.co/docs/solutions/search/retrievers-overview)

## 07. Connect the sources. Build the pipeline.

**Chapter:** 02 / Knowledge · **Pacing:** 45 seconds

**Open:** Choose an ingestion route that fits both the source and its operating policy.

**Explain:** APIs and language clients suit application-owned content. Connectors and the Open Web Crawler offer other current routes, with source-specific configuration and operations. Preserve revision and access metadata through transformation. This presentation does not position discontinued App Search, Workplace Search, or the former managed crawler as current architecture. Cross-cluster search is a different mechanism: it searches indexed data on remote Elasticsearch clusters with configured permissions and connectivity, rather than querying arbitrary external applications.

**Transition:** Once content arrives, it needs to become usable context.

**Qualification:** Integration support and ACL sync vary. Cross-cluster search targets Elasticsearch indices with explicit remote access and connectivity.

**Technical context:** Ingest pipelines can transform and enrich content. Distributed Elasticsearch indices can also be searched with configured cross-cluster access; that is separate from external-source ingestion.

**Evidence:** [Ingestion](https://www.elastic.co/docs/solutions/search/ingest-for-search) · [Cross-cluster search](https://www.elastic.co/docs/explore-analyze/cross-cluster-search)

## 08. A file is not context yet.

**Chapter:** 02 / Knowledge · **Pacing:** 50 seconds

**Open:** A good chunk is useful on its own and still traceable to its source.

**Explain:** Watch the current administrator guide become text, passages, metadata, and indexed context. For our fictional documents, section identifiers stay with each passage so the answer can cite a specific prerequisite. semantic_text can automate embedding generation and chunking for text through a configured inference endpoint. It does not extract arbitrary binaries, infer every source ACL, or make model changes free of migration work. Pin the endpoint, validate the model, and plan re-embedding or reindexing when required.

**Automatic animation sequence:**

1. **Extract** — Produce searchable text from the source.
2. **Chunk** — Keep passages and section provenance.
3. **Enrich** — Attach product, revision, deployment, and access metadata.
4. **Index** — Store text and configured semantic representations.

**Transition:** Preparation is incomplete unless the context stays current and authorized.

**Qualification:** semantic_text accepts text, not arbitrary image or PDF bytes. Inference, license, model, language, and resource requirements apply.

**Technical context:** semantic_text can automate text chunking and embedding generation through a configured inference endpoint. Extraction, source provenance, and access mapping remain application responsibilities.

**Evidence:** [Ingestion](https://www.elastic.co/docs/solutions/search/ingest-for-search) · [semantic_text](https://www.elastic.co/docs/reference/elasticsearch/mapping-reference/semantic-text/)

## 09. The right context. The right person and time.

**Chapter:** 02 / Knowledge · **Pacing:** 50 seconds

**Open:** A relevant document still has to be eligible.

**Explain:** Elasticsearch refresh makes indexed writes visible to search; source synchronization is an additional part of the freshness path. We do not claim instant visibility across every source. Maya's request is constrained to Atlas Hub, version 4.0, self-managed, current published content, and her authorized support-document scope. The older guide, cloud-only guide, and restricted note are excluded before candidate ranking in every branch. Source ACL synchronization and Elasticsearch document controls must be configured and tested. A prompt instruction is never the access boundary.

**Automatic animation sequence:**

1. **Source change** — A current document revision becomes available.
2. **Sync and refresh** — Update the index and make writes searchable.
3. **Authorized retrieval** — Apply product, version, deployment, publication, and access constraints.

**Transition:** Within that scope, exact words remain valuable.

**Qualification:** Configure ACL synchronization and Elasticsearch authorization. Prompts do not enforce access. DLS/FLS entitlements and limitations apply.

**Technical context:** Ineligible inputs appear only as excluded metadata in architecture diagrams. Their content is absent from hits, snippets, model context, and citations throughout the journey.

**Evidence:** [Refresh](https://www.elastic.co/docs/reference/elasticsearch/rest-apis/refresh-parameter) · [Document access](https://www.elastic.co/docs/deploy-manage/users-roles/cluster-or-deployment-auth/controlling-access-at-document-field-level)

## 10. Exact words still matter.

**Chapter:** 03 / Relevance · **Pacing:** 50 seconds

**Open:** AI does not make identifiers less important.

**Explain:** The exact query is Atlas Hub 4.0 self-managed SSO. BM25 is Elasticsearch's default statistical full-text scoring algorithm; terms, their frequency, and document length contribute to its score. The administrator guide is a strong candidate for this exact wording. An older guide might share many words, but we do not ask scoring to solve its eligibility problem. It is excluded by the shared scope. The rank order shown is invented for this teaching example, not a measured result from Elasticsearch.

**Transition:** Users also ask in their own words.

**Qualification:** Rank positions are synthetic. Excluded inputs remain outside the result list. Retrieval quality depends on mappings, analyzers, corpus, and queries.

**Technical context:** Lexical retrieval is useful for exact names, codes, and specialist terminology. A term match is evidence for ranking; it does not replace version or access filtering.

**Evidence:** [Ranking](https://www.elastic.co/docs/solutions/search/ranking) · [Document access](https://www.elastic.co/docs/deploy-manage/users-roles/cluster-or-deployment-auth/controlling-access-at-document-field-level)

## 11. Intent has more than one wording.

**Chapter:** 03 / Relevance · **Pacing:** 50 seconds

**Open:** Maya says company sign-in; the guide says single sign-on.

**Explain:** Dense or sparse learned representations can help connect different wording to relevant passages. The animated neighborhood is a conceptual illustration, not a real embedding plot. We need compatible query and document representations and a model suited to the corpus. All eligibility constraints still apply. Semantic similarity can retrieve helpful candidates, but it can also favor related text that does not answer the specific task, so inspect and evaluate the results rather than treating proximity as truth.

**Automatic animation sequence:**

1. **Encode intent** — Represent the query with a compatible model.
2. **Find neighbors** — Search similarity within eligible candidates.
3. **Return eligible context** — Inspect relevant passages and source metadata.

**Transition:** Combine this perspective with lexical retrieval.

**Qualification:** Similarity is a model-dependent signal. Embedding, language, hardware, API, version, and subscription requirements vary.

**Technical context:** The point-space diagram is an original illustrative projection, not a literal view of embeddings or proof that a model understands every domain phrase.

**Evidence:** [Ranking](https://www.elastic.co/docs/solutions/search/ranking) · [semantic_text](https://www.elastic.co/docs/reference/elasticsearch/mapping-reference/semantic-text/)

## 12. Two perspectives. One ranked result.

**Chapter:** 03 / Relevance · **Pacing:** 50 seconds

**Open:** The goal is complementary evidence, not choosing one retrieval ideology.

**Explain:** Both branches search the same eligible corpus. Lexical ranking retains exact identifiers, while vector ranking can surface the single sign-on passage for Maya's wording. RRF combines rank positions across child lists, avoiding a direct comparison of unrelated raw scores. A candidate does not have to appear in every list. Fusion is not a cross-encoder or LLM reranker, and it is not vector rescoring. Wider candidate windows add work and may improve coverage; measure that trade-off.

**Automatic animation sequence:**

1. **Lexical ranking** — Rank eligible text candidates.
2. **Vector ranking** — Rank eligible similarity candidates.
3. **Fuse ranks** — Combine child rankings with RRF.
4. **Inspect context** — Return one ranked list with source metadata.

**Transition:** A composable request makes the pipeline easier to express.

**Qualification:** Synthetic ranks. RRF, inference, and other retrievers have version and subscription requirements. Validate retrieval windows on your workload.

**Technical context:** RRF fuses two or more ranked lists. A document can contribute from one branch; appearing in every branch is not a prerequisite. Fusion is distinct from semantic reranking.

**Evidence:** [RRF](https://www.elastic.co/docs/reference/elasticsearch/rest-apis/retrievers/rrf-retriever) · [Retrievers](https://www.elastic.co/docs/solutions/search/retrievers-overview)

## 13. Design retrieval as a pipeline.

**Chapter:** 03 / Relevance · **Pacing:** 45 seconds

**Open:** The pipeline is a design surface you can inspect.

**Explain:** The retriever tree makes the sequence explicit: retrieve eligible candidates, fuse rankings, apply a configured later-stage model, and enforce business rules. The abstraction reduces the amount of application orchestration needed to express that search request. It does not eliminate modeling decisions or make every nesting combination valid. Query rules are normally the outermost retriever so later ranking does not undo them. Pin the release and verify its syntax, supported combinations, and subscriptions.

**Transition:** Now watch that request follow our question.

**Qualification:** Supported retrievers, nesting, syntax, and entitlements depend on the release. Validate the actual request against your deployment.

**Technical context:** Retriever composition can reduce application-side orchestration. It does not remove model infrastructure, access design, or relevance testing. Rule retrievers are typically outermost.

**Evidence:** [Retrievers](https://www.elastic.co/docs/solutions/search/retrievers-overview) · [Query rules](https://www.elastic.co/docs/reference/elasticsearch/rest-apis/retrievers/rule-retriever)

## 14. Follow the question. Watch context converge.

**Chapter:** 03 / Relevance · **Pacing:** 65 seconds

**Open:** Keep your eye on the scope, then watch the rankings.

**Explain:** The sequence runs automatically. Start with Maya's question and its fixed eligibility policy. Lexical candidates prioritize the exact administrator-guide wording. Semantic candidates bring the troubleshooting passage closer to the user's phrasing. The fused list combines their rank evidence. The administrator guide, troubleshooting article, and release notes are all current, self-managed, and authorized. The excluded inputs are never passed downstream. This is an original teaching interface and synthetic ranking, not a live Kibana screenshot or benchmark.

**Ask:** Which query families need exact retrieval, semantic retrieval, or both in your corpus?

**Automatic animation sequence:**

1. **Scoped question** — Keep product, version, deployment, publication, and access fixed.
2. **Lexical candidates** — Preserve Atlas Hub 4.0 and SSO terminology.
3. **Semantic candidates** — Match company sign-in to single sign-on context.
4. **Fused results** — Inspect the combined eligible ranked list.

**Transition:** Candidate coverage is the first stage of a relevance funnel.

**Qualification:** Illustrative UI, synthetic rankings, and no live query. Excluded inputs never become hits, snippets, context, or citations.

**Technical context:** Lexical: administrator, release notes, troubleshooting. Semantic: troubleshooting, administrator, release notes. Fused: administrator, troubleshooting, release notes. All ranks are synthetic.

**Evidence:** [RRF](https://www.elastic.co/docs/reference/elasticsearch/rest-apis/retrievers/rrf-retriever) · [Retrievers](https://www.elastic.co/docs/solutions/search/retrievers-overview)

## 15. Retrieve broadly. Rerank selectively.

**Chapter:** 03 / Relevance · **Pacing:** 45 seconds

**Open:** Relevance and efficiency should be designed together.

**Explain:** Efficient retrieval should cover the evidence the question needs. Fusion organizes complementary candidate lists. A more costly semantic reranker can then compare a bounded set of candidate text against the question. We tune the windows with evaluations and workload measurements, rather than assuming more model calls are always better. Authorization remains a prior requirement; business promotion remains an explicit policy decision. A reranker cannot recover a useful document omitted by every first-stage retriever.

**Automatic animation sequence:**

1. **Retrieve candidates** — Build coverage with efficient lexical and vector retrieval.
2. **Focus the ranking** — Fuse and inspect a bounded candidate set.
3. **Rerank selectively** — Apply more costly query-passage comparison to chosen candidates.

**Transition:** Look closely at that query-passage comparison.

**Qualification:** Conceptual pipeline. No universal optimum or latency claim. Later ranking can only use candidates supplied to it.

**Technical context:** Fusion, vector rescoring, and semantic reranking are different mechanisms. Measure candidate coverage, ranking quality, latency, and model cost at each stage.

**Evidence:** [Ranking](https://www.elastic.co/docs/solutions/search/ranking) · [Reranking](https://www.elastic.co/docs/solutions/search/ranking/semantic-reranking)

## 16. Compare the question with the passage.

**Chapter:** 03 / Relevance · **Pacing:** 50 seconds

**Open:** The useful passage is the one that answers the specific request.

**Explain:** For Maya, the administrator-guide prerequisites are more useful than a broad release summary. A semantic reranker compares candidate text with the query through a configured inference endpoint. The illustration focuses that evidence; it does not publish a model score or promise a quality uplift. Current documentation describes Jina through several hosting paths and other model services. Do not imply every Jina model runs natively inside every cluster. Check the actual model, interface, entitlement, hardware, and data boundary, then evaluate its additional work.

**Automatic animation sequence:**

1. **Candidate passages** — Inspect the retrieved current source passages.
2. **Query-passage comparison** — Use the configured rerank endpoint.
3. **Focused context** — Prioritize evidence that directly addresses the request.

**Transition:** Some ranking decisions come from business policy instead.

**Qualification:** Illustrative ordering. Model, API, hosting, hardware, version, and commercial requirements apply. No guaranteed relevance improvement.

**Technical context:** Supported configurations include Jina model paths and other rerank services. Reranking can enrich a lexical pipeline without embedding every document; it remains a later-stage operation.

**Evidence:** [Reranking](https://www.elastic.co/docs/solutions/search/ranking/semantic-reranking) · [Jina models](https://www.elastic.co/docs/explore-analyze/machine-learning/nlp/ml-nlp-jina)

## 17. Business rules are explicit decisions.

**Chapter:** 03 / Relevance · **Pacing:** 45 seconds

**Open:** Promotion should have an owner and a reason.

**Explain:** An organization may choose to pin an eligible canonical guide for a defined product query. That is a legitimate policy decision when it is explicit and evaluated. The rule retriever supports pinning or excluding documents based on matching metadata criteria. Keep authorization in force before any rule can return content. Rules are normally placed outermost so downstream ranking does not overturn their intent. Measure affected query families, document ownership, and expiration; avoid calling policy promotion an algorithmic relevance gain.

**Transition:** Prove the full pipeline with representative questions.

**Qualification:** Rules do not replace authorization. Configure privileges, criteria, ruleset order, supported retriever composition, and subscription requirements.

**Technical context:** A policy may promote a canonical administrator guide for a product/version query. That promotion is an application decision, not proof that the underlying relevance model improved.

**Evidence:** [Query rules](https://www.elastic.co/docs/reference/elasticsearch/rest-apis/retrievers/rule-retriever) · [Retrievers](https://www.elastic.co/docs/solutions/search/retrievers-overview)

## 18. Relevance is demonstrated.

**Chapter:** 03 / Relevance · **Pacing:** 55 seconds

**Open:** A compelling demo is the start of evaluation, not its conclusion.

**Explain:** Build judgments from real user tasks and include difficult cases: identifiers, synonyms, wrong versions, missing evidence, and access boundaries. The ranking evaluation API can compare rated queries with defined metrics and expose per-query issues and unrated documents. Synthetic bars here communicate the method, not a reported Elastic improvement. Calibrate AI-generated judgments with human review. Follow offline retrieval checks with controlled application experiments and user outcomes; answer accuracy and business impact are different from a search-rank metric.

**Ask:** What query set and relevance judgments would you trust enough to make a release decision?

**Transition:** The user needs an experience that exposes what the ranking found.

**Qualification:** Illustrative evaluation, not measured product results. Define dataset, judgments, metric, cutoff, baseline, and method before reporting an improvement.

**Technical context:** The rank evaluation API supports rated queries and metrics such as precision, MRR, and discounted cumulative gain. Per-query failures matter more than an attractive average alone.

**Evidence:** [Rank evaluation](https://www.elastic.co/docs/reference/elasticsearch/rest-apis/search-rank-eval) · [Judgment lists](https://www.elastic.co/search-labs/blog/judgment-lists)

## 19. A result earns trust when it can be inspected.

**Chapter:** 03 / Relevance · **Pacing:** 40 seconds

**Open:** The user should not have to guess whether a result applies.

**Explain:** Maya sees a current administrator guide, a troubleshooting article, and release notes, with scope and source metadata. The useful snippet makes the next step clear, while a section link allows inspection of the surrounding context. This is an original application interface, not a claim about a specific out-of-the-box workbench. Feedback can guide improvement, but clicks alone are not unbiased relevance judgments. Keep evaluation and evidence visible as we move from ranking design to platform engineering.

**Transition:** The same context needs an infrastructure choice that fits its workload.

**Qualification:** Illustrative UI, not a shipped Elastic interface. All shown hits and snippets are eligible current fictional support documents.

**Technical context:** The result cards are an original application illustration. User behavior is useful feedback but can carry position, presentation, and population bias.

**Evidence:** [Search](https://www.elastic.co/docs/solutions/search) · [Judgment lists](https://www.elastic.co/search-labs/blog/judgment-lists)

## 20. Vector search starts with a workload choice.

**Chapter:** 04 / Engineering · **Pacing:** 55 seconds

**Open:** The index should fit the workload rather than the other way around.

**Explain:** Flat search compares vectors exhaustively and can be appropriate for a small eligible population. HNSW uses a graph for approximate retrieval. DiskBBQ organizes compact vectors in hierarchical clusters and reads selected clusters from disk. That is a distinct mechanism, not a graph relocated to disk. Benchmark corpus size, dimensions, filters, concurrency, memory, and target recall. More clusters may increase coverage and work; at very high recall, HNSW may be preferable depending on memory. Pin the release because defaults and tuning behavior evolve. DiskBBQ has an Enterprise entitlement.

**Automatic animation sequence:**

1. **Flat** — Compare eligible vectors exhaustively.
2. **HNSW** — Traverse a graph for approximate neighbors.
3. **DiskBBQ** — Search selected compact clusters from disk.

**Transition:** Compression and indexing are related, but different, choices.

**Qualification:** Qualitative illustration; no measured speed or recall claim. DiskBBQ requires Enterprise. Index behavior and defaults depend on the release.

**Technical context:** DiskBBQ uses hierarchical clustering and selected disk reads. It is not HNSW with its graph moved to disk. Very high recall can require more work and favor a different design.

**Evidence:** [BBQ / DiskBBQ](https://www.elastic.co/docs/reference/elasticsearch/mapping-reference/bbq) · [Capacity design](https://www.elastic.co/docs/deploy-manage/reference-architectures/genai-search-high-availability)

## 21. Smaller representations. Different search paths.

**Chapter:** 04 / Engineering · **Pacing:** 50 seconds

**Open:** A smaller vector representation is one component of a capacity plan.

**Explain:** BBQ compresses dense vectors with a lossy representation. Search can use techniques such as oversampling and rescoring to manage quality. The original and compact representations still contribute to storage and operations. DiskBBQ combines compact vectors with a disk-based cluster search path. We deliberately avoid a compression multiplier headline because it would not describe total cluster RAM, all index storage, or TCO. Measure recall and latency at the desired workload, including filters and concurrent searches, and separate representation choice from index-search mechanism.

**Automatic animation sequence:**

1. **Float vectors** — Keep the original representation for the workload.
2. **Compact representation** — Quantize vectors and evaluate precision trade-offs.
3. **Disk cluster search** — Use compact vectors in selected DiskBBQ clusters.

**Transition:** The build path is another opportunity to evaluate acceleration.

**Qualification:** No universal savings claim. Quantization is lossy; index format, dimensions, rescoring, version, subscription, and hardware requirements apply.

**Technical context:** BBQ is a quantization method; DiskBBQ combines compact representations with disk-based cluster search. Vector compression is not an equal reduction in total cluster RAM or operating cost.

**Evidence:** [BBQ / DiskBBQ](https://www.elastic.co/docs/reference/elasticsearch/mapping-reference/bbq) · [Capacity design](https://www.elastic.co/docs/deploy-manage/reference-architectures/genai-search-high-availability)

## 22. Build the graph with the GPU.

**Chapter:** 04 / Engineering · **Pacing:** 50 seconds

**Open:** Separate the work of creating vectors from the work of building their search graph.

**Explain:** The animation moves vector ingest through GPU graph construction and then to CPU retrieval. Current documentation requires Enterprise, Linux x86_64, Java 22 or later, supported NVIDIA Ampere-or-newer GPUs with compute capability at least 8.0 and at least 8 GB VRAM, and supported CUDA/cuVS combinations. Supported formats are hnsw and int8_hnsw with float elements. Check the exact support matrix and release; these are compatibility minima, not production sizing. GPU embeddings and reranking are separate services. Benchmark indexing, merges, search during ingest, recall, and end-to-end infrastructure cost before choosing hardware.

**Automatic animation sequence:**

1. **Vector ingest** — Supply vectors for a supported index format.
2. **GPU graph construction** — Build the HNSW graph with supported GPU libraries.
3. **CPU query retrieval** — Search the resulting index on the CPU.

**Transition:** Capacity and economics include every part of that path.

**Qualification:** Enterprise and supported NVIDIA GPU, Linux, Java, libraries, and index format required. No universal acceleration or cost claim.

**Technical context:** GPU HNSW construction is distinct from generating embeddings or running a reranker. Evaluate indexing, merges, query-under-ingest, recall, and infrastructure expense.

**Evidence:** [GPU indexing](https://www.elastic.co/docs/solutions/search/vector/gpu-vector-indexing)

## 23. Scale the workload. Budget the whole system.

**Chapter:** 04 / Engineering · **Pacing:** 50 seconds

**Open:** Search cost is not a single per-query number.

**Explain:** Indexing and embedding refresh change with corpus growth and updates. Filters and retrieval fan-out change search work. Candidate windows and rerank depth change model throughput. Generation adds another service and another latency distribution. Include resilience, snapshots, monitoring, staffing, and licensing. Compare p50 and p95 end-to-end latency under expected concurrency and ingestion, with the same quality target. A faster isolated operation does not prove a cheaper whole system. Set workload and cost limits that your evaluation can actually test.

**Ask:** Which limit matters most for your planned workload: quality, tail latency, memory, model throughput, or operating cost?

**Transition:** Models need the same task-specific discipline.

**Qualification:** Workload guidance, not a price estimate or guaranteed saving. Entitlements, service billing, hardware, and operating responsibilities vary.

**Technical context:** Benchmark quality and p50/p95 end-to-end latency at expected concurrency and update load. Compare operating options using the same workload and service requirements.

**Evidence:** [Capacity design](https://www.elastic.co/docs/deploy-manage/reference-architectures/genai-search-high-availability) · [Subscriptions](https://www.elastic.co/subscriptions)

## 24. Choose the model for the job.

**Chapter:** 04 / Engineering · **Pacing:** 50 seconds

**Open:** Model choice begins with the task and the corpus.

**Explain:** Sparse and dense retrieval offer different representations. ELSER is recommended for English documents and queries; its learned expansion terms are associations rather than ordinary synonyms. Jina and other supported model paths have model-specific languages, modalities, interfaces, and hosting requirements. semantic_text accepts text, not image or PDF binary input. Compatible multimodal retrieval requires an appropriate separate field mapping and endpoint; do not infer universal image support from an embedding label. A reranker and an answer-generating model have different jobs. Pin each model and plan compatibility checks, re-embedding, or reindexing when changing representations.

**Transition:** Where inference runs is part of that choice.

**Qualification:** semantic_text is text-only. Language, modality, mapping, API, hardware, license, and deployment requirements vary; model changes may require reindexing.

**Technical context:** ELSER, configured Jina paths, and other compatible models offer different roles. Text/image retrieval needs matching model, field mapping, API, and hosting support.

**Evidence:** [ELSER](https://www.elastic.co/docs/explore-analyze/machine-learning/nlp/ml-nlp-elser) · [Jina models](https://www.elastic.co/docs/explore-analyze/machine-learning/nlp/ml-nlp-jina) · [Semantic fields](https://www.elastic.co/docs/reference/elasticsearch/mapping-reference/semantic-text-reference)

## 25. Your data boundary includes inference.

**Chapter:** 04 / Engineering · **Pacing:** 55 seconds

**Open:** Locate every place the question and evidence can travel.

**Explain:** Our central example keeps retrieval self-managed and shows a configured local inference path. Public Jina On-Prem documentation describes self-contained commercial containers that can operate without external connections after appropriate provisioning. You still need model artifacts, dependencies, license, hardware, and operational preparation. Local compatible LLMs need a supported inference configuration and validation. An approved EIS or external-provider route is a distinct connected alternative. Cloud Connect to EIS requires an Elastic Cloud account, qualifying entitlement, network connectivity, and billing or trial configuration. A self-managed cluster alone is not an air-gapped inference architecture.

**Automatic animation sequence:**

1. **Local engine** — Keep indexed retrieval in the self-managed boundary.
2. **Local inference** — Provision compatible local model services.
3. **Approved external alternative** — Review any connected provider and outgoing context.

**Transition:** With the boundary clear, assemble evidence before generation.

**Qualification:** Model compatibility and commercial requirements apply. Self-managed has no preconfigured Agent Builder model. Validate restricted/offline operation before use.

**Technical context:** Jina On-Prem provides commercial local container paths. EIS through Cloud Connect is connected cloud inference, with account, network, entitlement, and billing requirements.

**Evidence:** [Jina On-Prem](https://www.elastic.co/search-labs/blog/on-prem-ai-jina-embedding-models) · [Self-managed EIS](https://www.elastic.co/docs/explore-analyze/elastic-inference/connect-self-managed-cluster-to-eis) · [Agent models](https://www.elastic.co/docs/explore-analyze/ai-features/agent-builder/models)

## 26. Answers begin with authorized context.

**Chapter:** 05 / Trusted AI · **Pacing:** 55 seconds

**Open:** The answer should be traceable to the evidence that made it possible.

**Explain:** Only the current administrator guide and troubleshooting passages enter Maya's model context. Each passage retains its source and section. The model can compose an explanation, and the application displays citations for inspection. RAG adds context rather than retraining the model. It does not guarantee factual answers. We need a policy for missing evidence, conflicts, unsupported statements, and user clarification. We also evaluate source freshness, retrieval coverage, permissions, and generated text independently. Do not expose ineligible snippets even temporarily before generation.

**Automatic animation sequence:**

1. **Authorized retrieval** — Retrieve only current eligible source passages.
2. **Context assembly** — Pass bounded evidence and section provenance.
3. **Generation** — Compose an answer using the configured model.
4. **Inspect citations** — Check each claim against its cited section.

**Transition:** An agent can retrieve that evidence with configured tools.

**Qualification:** Synthetic answer and no live model call. Grounding and citations do not guarantee factual correctness or automatic authorization.

**Technical context:** RAG supplies external context to a model; it is not model training. Citations support inspection, but source quality, retrieval quality, and generated-answer quality need separate evaluation.

**Evidence:** [RAG](https://www.elastic.co/docs/solutions/search/rag/) · [Grounding](https://www.elastic.co/search-labs/blog/grounding-rag/) · [Document access](https://www.elastic.co/docs/deploy-manage/users-roles/cluster-or-deployment-auth/controlling-access-at-document-field-level)

## 27. Elastic Agent Builder. Evidence before action.

**Chapter:** 05 / Trusted AI · **Pacing:** 50 seconds

**Open:** Tools make the path to evidence explicit.

**Explain:** Elastic Agent Builder provides agents, tools, chat, and integration interfaces over Elasticsearch data. Our fictional assistant is assigned retrieval tools only. Permissions span Kibana, spaces, Elasticsearch indices, and the executing user or API key. Limit operations and index scope to the task, and enforce document authorization before the model sees any result. Self-managed, ECE, and ECK do not include a preconfigured model; choose and configure a supported route. An agent's ability to call a tool is not approval to configure identity systems or perform a business action.

**Transition:** Watch the assistant answer Maya's follow-up without changing the scope.

**Qualification:** Subscription and version requirements apply. Self-managed needs a configured model. Tools execute within configured privileges; prompts are not access controls.

**Technical context:** Agent Builder supports built-in/custom agents and tools, chat, and integration interfaces. The illustrative assistant uses retrieval only; it performs no configuration or business action.

**Evidence:** [Agent Builder](https://www.elastic.co/docs/explore-analyze/ai-features/elastic-agent-builder) · [Agent permissions](https://www.elastic.co/docs/explore-analyze/ai-features/agent-builder/permissions) · [Agent models](https://www.elastic.co/docs/explore-analyze/ai-features/agent-builder/models)

## 28. One question. A traceable answer.

**Chapter:** 05 / Trusted AI · **Pacing:** 65 seconds

**Open:** A useful answer connects each prerequisite to a source section.

**Explain:** The sequence plays automatically. Maya's follow-up retains the scope established earlier. The permitted tool requests only current authorized support passages. Administrator section 2.1 supports identity-provider metadata and signing certificate; 2.2 supports callback registration; 2.3 supports authorized administrator and test access. Troubleshooting 4.2 supports certificate-validity and clock checks if the test fails. The qualified answer identifies what the sources establish and asks for a missing deployment URL before offering configuration-specific detail. No identity change is performed, and no excluded input reaches hits, context, or citations.

**Ask:** What evidence would your users need to trust a generated answer enough to act on it?

**Automatic animation sequence:**

1. **Scoped question** — Retain Atlas Hub 4.0, self-managed, current, and authorized scope.
2. **Permitted tool request** — Retrieve source passages through a limited configured tool.
3. **Eligible evidence** — Inspect current administrator and troubleshooting sections.
4. **Source-backed prerequisites** — Map each prerequisite to its supporting section.
5. **Qualified answer** — Explain the evidence and ask for missing deployment detail.

**Transition:** The verification model belongs in the platform design.

**Qualification:** Synthetic interface, documents, answer, and tool trace. No live model or tool call. Only eligible current sources appear in context and citations.

**Technical context:** Administrator guide §2.1 supports metadata and certificate; §2.2 the callback; §2.3 administrator/test access. Troubleshooting §4.2 supports certificate and clock checks.

**Evidence:** [Agent Builder](https://www.elastic.co/docs/explore-analyze/ai-features/elastic-agent-builder) · [Agent permissions](https://www.elastic.co/docs/explore-analyze/ai-features/agent-builder/permissions) · [RAG](https://www.elastic.co/docs/solutions/search/rag/)

## 29. Trust is a system you can verify.

**Chapter:** 05 / Trusted AI · **Pacing:** 45 seconds

**Open:** A citation is useful only when it supports the claim and the source is eligible.

**Explain:** Test the source, retrieval, permission, and generation layers independently. Ask whether a passage is current, whether the retriever found the necessary evidence, whether the user could access it, and whether the answer stays within it. Include revoked access, conflicting versions, missing prerequisites, and prompt injection in the application test set. Evaluate clarification and abstention as successful outcomes when evidence is insufficient. Logs and traces help inspection but need their own privacy, access, and retention policy. None of these controls makes generated text infallible.

**Transition:** Choose a deployment that supports the required boundary and operations.

**Qualification:** Recommended application controls; not a guarantee of zero hallucinations or automatic complete governance. Grounding is one layer of verification.

**Technical context:** Test missing evidence, misleading passages, wrong versions, prompt injection, and revoked access. Log and inspect the application path within your retention and privacy policy.

**Evidence:** [Grounding](https://www.elastic.co/search-labs/blog/grounding-rag/) · [Agent permissions](https://www.elastic.co/docs/explore-analyze/ai-features/agent-builder/permissions) · [Document access](https://www.elastic.co/docs/deploy-manage/users-roles/cluster-or-deployment-auth/controlling-access-at-document-field-level)

## 30. Run where requirements lead.

**Chapter:** 06 / Operate · **Pacing:** 45 seconds

**Open:** Deployment choice assigns responsibility as well as location.

**Explain:** Self-managed is central to our example because the team needs direct control of data and infrastructure. ECK orchestrates Elasticsearch on Kubernetes; ECE orchestrates deployments across an estate. Hosted and Serverless offer different managed operating models. Compare the actual requirements, including authentication, custom plugins, scaling, lifecycle, upgrades, network paths, and inference. Do not imply every capability or operating responsibility is identical. A cloud model connection remains an explicit connection even when the engine is self-managed. Record owners for resilience, updates, and model services.

**Transition:** Adopt the new pipeline as a measured evolution of the existing stack.

**Qualification:** No blanket feature parity. Deployment, version, subscription, operations, connectivity, and model requirements differ.

**Technical context:** Compare identity, plugins, scaling, lifecycle, release control, model hosting, network, and entitlements. Engine location and inference location are separate decisions.

**Evidence:** [Deployments](https://www.elastic.co/docs/deploy-manage/deploy/deployment-comparison) · [Agent models](https://www.elastic.co/docs/explore-analyze/ai-features/agent-builder/models) · [Subscriptions](https://www.elastic.co/subscriptions)

## 31. Evolve the stack. Prove each release.

**Chapter:** 06 / Operate · **Pacing:** 50 seconds

**Open:** The existing investment gives us a baseline, not an obstacle.

**Explain:** Document what the current application does well and where it fails. Choose a bounded corpus and a candidate retrieval pipeline, then compare them with stable judgments. Add access revocation and excluded-content checks, workload and cost limits, and generated-answer tests if generation is in scope. Name owners for data freshness, relevance, models, security, and operations. Agree rollback criteria before release. The pilot may justify rollout, another iteration, or retaining the existing path; each is a useful decision when supported by evidence.

**Automatic animation sequence:**

1. **Baseline** — Capture existing retrieval, workload, and failure behavior.
2. **Pilot** — Evaluate a bounded candidate corpus and pipeline.
3. **Release gates** — Check relevance, access, latency, cost, and ownership.
4. **Rollout or rollback** — Use measured evidence to choose the next release.

**Transition:** Public customer examples show why teams evaluate this approach.

**Qualification:** Recommended rollout method. Integration and migration work are deployment-specific; no automatic parity or migration-success claim.

**Technical context:** A minimum pilot includes a representative corpus/query set, relevance judgments, an access policy, workload/cost limits, accountable owners, and an agreed rollback baseline.

**Evidence:** [Rank evaluation](https://www.elastic.co/docs/reference/elasticsearch/rest-apis/search-rank-eval) · [Deployments](https://www.elastic.co/docs/deploy-manage/deploy/deployment-comparison)

## 32. Evidence from customers. A benchmark for you.

**Chapter:** 06 / Operate · **Pacing:** 40 seconds

**Open:** Customer evidence makes the opportunity concrete without defining your outcome.

**Explain:** HSE reports a four percent rise in search-page click-through rate in its public story, using Elastic Cloud on AWS. Retain that exact scope: it is not four percentage points, conversion growth, revenue, or an on-prem result. Stack Overflow's public account describes moving from lexical to hybrid retrieval and summaries linked to trusted community contributions and private Teams knowledge. It provides qualitative evidence of retrieval and attribution; the story includes forward-looking language, so we do not invent a current rollout footprint. Use these examples to inform an evaluation, not substitute for one.

**Transition:** Return to the question that opened the presentation.

**Qualification:** Attributed customer examples, not promises. HSE's Cloud on AWS result is not an on-premises performance or cost guarantee.

**Technical context:** HSE's wording is a 4% rise, not percentage points, revenue, or conversion. Stack Overflow's account includes forward-looking phrasing; no current universal rollout scope is asserted.

**Evidence:** [HSE customer story](https://www.elastic.co/customers/hse) · [Stack Overflow story](https://www.elastic.co/customers/stack-overflow)

## 33. The question is answered. The work keeps improving.

**Chapter:** 06 / Operate · **Pacing:** 45 seconds

**Open:** The useful outcome is both an answer and a platform we can keep evaluating.

**Explain:** Maya has the applicable current prerequisites: identity-provider metadata and certificate, the callback registration, and authorized administrator and test access, each tied to administrator-guide sections. The troubleshooting section supports the additional checks if testing fails. Missing deployment details remain explicit. The older, cloud-only, and restricted sources stayed excluded. The team then maintains source changes, access synchronization, retrieval judgments, model behavior, workload, and release ownership. The improvement loop is human-owned application operations; it is not a promise of automatic persistent model learning.

**Automatic animation sequence:**

1. **Current sources** — Maintain eligible documents, revisions, and access.
2. **Verified answer** — Inspect the prerequisites and supporting sections.
3. **Measured improvement** — Review failures and release evaluated changes.

**Transition:** Close with the evaluation that makes this practical for your platform.

**Qualification:** Fictional outcome. Review and feedback are an application operating process, not automatic persistent learning or a guaranteed improvement.

**Technical context:** These sources establish prerequisites. A missing deployment URL or conflicting source requires clarification before a configuration-specific answer.

**Evidence:** [RAG](https://www.elastic.co/docs/solutions/search/rag/) · [Rank evaluation](https://www.elastic.co/docs/reference/elasticsearch/rest-apis/search-rank-eval) · [Document access](https://www.elastic.co/docs/deploy-manage/users-roles/cluster-or-deployment-auth/controlling-access-at-document-field-level)

## 34. Connect the knowledge. Deliver with confidence.

**Chapter:** 06 / Operate · **Pacing:** 40 seconds

**Open:** Your users ask for an answer. Your platform must find the right context.

**Explain:** Connect current and authorized knowledge. Find what matters with complementary retrieval and demonstrated relevance. Deliver an experience people can inspect and a release the team can operate. Propose a bounded evaluation with the customer's corpus, representative questions, rated source evidence, access policy, workload and cost limits, owners, and rollback baseline. Agree a decision date and the evidence required to choose rollout, iteration, or the existing path. That is a concrete platform decision rather than a generic AI promise.

**Ask:** Which corpus and user task should we use to prove the next decision together?

**Transition:** Invite the platform team to agree the evaluation scope and accountable owners.

**Qualification:** Evaluation proposal, not a commitment to savings, zero hallucinations, universal feature parity, or an unreviewed production rollout.

**Technical context:** The next step is a jointly defined evaluation: corpus and questions, rated evidence, access policy, quality/latency/cost limits, operating owners, and a decision date.

**Evidence:** [Search](https://www.elastic.co/docs/solutions/search) · [Rank evaluation](https://www.elastic.co/docs/reference/elasticsearch/rest-apis/search-rank-eval)
