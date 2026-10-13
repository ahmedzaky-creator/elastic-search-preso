# Elastic Search: From scattered knowledge to trusted context

Status: written design for review. Create an original Search presentation for CTO and search platform leaders. The player, delivery format, and direct slide navigation carry forward from the completed Security presentation. Search content and public publication are subject to this design's review. This public-design draft contains no internal reference identifiers, access history, private URLs, or copied reference content.

## Audience, purpose, and delivery

Create an original English presentation with 34 core scenes and 25–30 minutes of presenter notes for CTOs and search platform leaders. Use self-managed examples while explaining other supported deployments. Publish original source and generated deliverables in a new public repository, `ahmedzaky-creator/elastic-search-preso`, with GitHub Pages. Deliver standalone offline HTML, a 34-page PDF at density 3, presenter notes, and `Conversation Prep - Elastic Search Customer Presentation.md`. No PowerPoint export.

Central argument: **Your users ask for an answer. Your platform must find the right context.**

Three editorial pillars: **Connect the knowledge. Find what matters. Deliver with confidence.** These are original narrative labels, not official Elastic feature names.

The presentation must prove that a useful Search/AI experience depends on relevant, current, authorized context; that lexical, vector, and hybrid retrieval are complementary; and that quality, latency, cost, and control should be evaluated together.

## Reference treatment and approach

The supplied authoring reference is a Search AI template collection with multiple agenda/problem variants and separate technical explanations. Use its conceptual progression—data foundation, vectors and hybrid search, relevance, vector infrastructure, inference choice, agents and context—as an authoring reference. Do not publish its source, screenshots, private links, recordings, notes, proprietary benchmark graphics, or internal claims.

Recommended approach: a coherent 34-scene customer journey using the same original light visual system and corrected player as the Security deck. A literal reference-order adaptation is the alternative: useful as modular speaker material, but it retains the reference's template orientation rather than completing one customer question. The coherent journey is the selected design recommendation.

All diagrams and product-like interfaces are newly authored and labeled illustrative. Public documentation supports claims and feature requirements. Preserve no claim solely because it appears in the internal reference.

## One fictional Search journey

A support engineer asks: **“How do I configure company sign-in for Atlas Hub 4.0 on a self-managed deployment?”** Atlas Hub, its documents, users, and result sets are fictional. The corpus includes a current 4.0 administrator guide, an older 3.2 guide, a troubleshooting article, a related cloud-only guide, and an access-restricted internal note.

Pin three requests throughout: exact query **‘Atlas Hub 4.0 self-managed SSO’**; natural-language query **‘How do I configure company sign-in for Atlas Hub 4.0 on a self-managed deployment?’**; follow-up **‘Which prerequisites apply, and which guide section supports each one?’** The follow-up retains the same product/version/deployment/access scope. Lexical retrieval preserves product/version terms. Semantic retrieval finds the documented term “single sign-on” from the user's wording “company sign-in.” Both lexical and vector retrieval apply identical eligibility constraints before candidate ranking/fusion: Atlas Hub, version 4.0, self-managed deployment, current published content, and the requesting user's authorized support-document scope. Ineligible older/cloud-only/restricted documents never become user-visible hits, snippets, model context, or citations. An architecture illustration may show them only as explicitly excluded inputs; it does not expose restricted content. Hybrid retrieval combines eligible ranked candidates; reranking compares the query with candidate text. The application supplies only authorized, current context to a model, displays citations, and asks for clarification or abstains when evidence is missing or conflicting.

Rank positions, document labels, embeddings/projections, evaluation charts, answers, and timings in the journey are explicitly synthetic. No real Elasticsearch requests, inference/model calls, tool executions, data synchronization, or business actions occur on the public site.

## The 34 core scenes

| Scene | Content and purpose | Main visual |
|---|---|---|
| 1 | Cover: Elastic Search, from scattered knowledge to trusted context | Knowledge fragments converge around one question |
| 2 | What we will prove; synthetic journey boundary | Question → evidence → evaluated experience |
| 3 | Search evolves from links to answers and agents; relevance grows in importance | Four automatically looping stages of user experience |
| 4 | Fragmented knowledge and disconnected governance | Documents, records, web content, and access boundaries |
| 5 | Three pillars | Connect → find → deliver, with distinct responsibilities |
| 6 | Elasticsearch foundation: text, structured metadata, and vectors | One engine, several complementary representations |
| 7 | Current ingestion choices: APIs, clients, connectors, Open Web Crawler | Configured sources converge into ingest pipelines |
| 8 | Preparation: extraction, chunking, metadata, revision and access fields | A document becomes inspectable indexed chunks |
| 9 | Freshness and authorization are part of retrieval | Source update → sync → refresh; authorized result gate |
| 10 | Lexical search: exact words, product identifiers, and BM25 | Terms highlight eligible current documents; older/cloud-only inputs are visibly excluded outside result panels |
| 11 | Vector search: similarity and intent | Original point-space illustration; not a literal model explanation |
| 12 | Hybrid search: RRF fuses ranked lists | Lexical and vector lists merge; RRF is distinct from reranking |
| 13 | Composable retrievers in one search request | Retriever tree with filters, fusion and later ranking stages |
| 14 | Automatic hybrid retrieval walkthrough | Query → lexical candidates → semantic candidates → fused list |
| 15 | Relevance funnel: retrieve broadly and rerank selectively | Broad retrieval → focused candidate ranking → limited costly reranking; explicit policy remains a separate decision |
| 16 | Semantic reranking, including configured Jina model paths | Candidate passages reorder; latency/cost trade-off remains visible |
| 17 | Business rules and domain decisions | Explicit pin/exclude criteria; business promotion distinguished from relevance |
| 18 | Evaluate quality on representative queries and judgments | Synthetic per-query evaluation with baseline and failure cases |
| 19 | Turn ranked evidence into a useful Search experience | Results, metadata, filters, and source inspection |
| 20 | Choose Flat, HNSW, or DiskBBQ by workload | Automatically looping exhaustive scan, graph traversal, and disk cluster search |
| 21 | Quantization and disk indexing: distinct mechanisms that can be combined | Compact vectors in DiskBBQ clusters; memory/disk boundaries and measured trade-offs |
| 22 | GPU vector indexing | GPU graph construction; CPU query retrieval shown separately |
| 23 | Scale and operating economics | Corpus, ingest, filters, concurrency, rerank depth and model cost drivers |
| 24 | Inference/model choice, multilingual and multimodal retrieval | Sparse/dense and compatible text/image models, rerank and LLM roles with distinct mapping/API and hosting requirements |
| 25 | Local and approved external inference boundaries | Self-managed engine + configured local inference; explicit external alternative |
| 26 | Grounded RAG: retrieve before generation | Authorized evidence → model context → answer with inspectable citations |
| 27 | Elastic Agent Builder reveal | Question → permitted retrieval tools → evidence-led response |
| 28 | Automatic agent-assisted question walkthrough | Question → scoped tool request → evidence → prerequisites with source sections → qualified answer |
| 29 | Trust and verification | Source quality, retrieval quality, permissions and generated-answer evaluation |
| 30 | Deployment choice | Self-managed, ECK/ECE, Hosted, Serverless; requirements and differences |
| 31 | Evolve the existing stack with a measured rollout | Baseline → pilot → quality/access/cost gates → rollout or rollback |
| 32 | Public customer evidence | HSE's attributed CTR result; Stack Overflow's qualitative retrieval/answer story |
| 33 | Resolve the opening request and show an operating loop | Current authorized sources → verified answer → measured improvement cycle |
| 34 | Three takeaways and an evaluation next step | Agree corpus, representative questions, judgments, access policy and benchmark |

Pacing targets approximately 27 minutes. Scene definitions carry suggested seconds, opening, explanation, transition, qualification, public sources, density layers, and exact animation phases. The sum must remain within 25–30 minutes.

## Optional preview appendix

A help-menu appendix is outside the 34 core scenes and PDF. It explains the public context-engineering direction without treating it as an available self-managed production feature. Date its status **October 13, 2026**.

- **Context Engine:** public product page labels it Experimental/Private Preview; public Agent Builder skill documentation says Serverless Experimental and Stack Planned. Explain precomputed Knowledge Indicators and feedback conceptually. Do not promise pricing, current on-prem GA, automatic complete governance, universal token savings, persistent learning, or reliability.
- **ES|QL Data Federation:** Experimental, opt-in, and not intended for production. Current public support is Amazon S3; other sources are planned. Do not imply arbitrary database/SaaS pushdown, no stored derived content, or inherited end-user source ACLs. Distinguish it from supported cross-cluster searches of Elasticsearch indices.

## Visual and player design

Reuse the approved Security player's proportionally scaled 1280×720 stage, original white/light surfaces, Inter and IBM Plex Mono fonts, black headlines with blue emphasis, thin rules and restrained teal/pink accents. Search diagrams are new and emphasize ranked lists, retrieval paths, vector neighborhoods, memory/disk boundaries, authorization gates and evidence provenance. Approximately 180ms transitions and 600ms staggered entrances remain appropriate.

Animation must explain relationships. Each sequence plays automatically while its slide is active, with a readable hold on its final state and a loop back to the beginning. **Right/Left, Space/Page keys, toolbar arrows and swipes always move directly between slides.** Internal animation phases never consume navigation input. R/replay restarts the slide. History records slides. Pause phased playback while a modal is open, during drawing, or when the document is hidden. Cancel resources on scene exit. Diagram ticks preserve headline, speaker notes, timer and annotations.

Reduced motion and static rendering show complete states immediately. A diagram's number of phases must match the scene metadata exactly. Thumbnails and PDF show the final complete diagram.

Retain #0–#33 links, reload/hash/back/forward behavior, overview, filmstrip with fully rendered thumbnails, five densities (default 3), inline notes, timer, fullscreen, laser, drawing, keyboard help and mobile scaling/touch navigation. Recording, collaboration backends and presenter popups remain out of scope.

## Source organization and exports

Create an independent Vite/TypeScript/vanilla project. Reuse the corrected player from Security without making changes to the Security repository/site. Separate topic configuration, player, scenario data, scene definitions, SVG primitives and scene visual modules. Centralize Search identifiers, title, filenames, storage key and repository URL; use topic-neutral visual CSS classes. Remove Security incident names, download paths, AlertZero and Security-specific assertions.

Generate Search assets from its own content. Do not copy Security PDFs, thumbnails or offline HTML. Export all 34 PNG thumbnails, notes, a 34-page density-3 PDF and standalone HTML with inline fonts, graphics, scripts, notes and embedded thumbnails. Local reference/research materials remain outside the public repository. Public code contains no credentials, model endpoints or live service integration. Publish only this sanitized design and original public-source content. Keep authoring references, access history, screenshots and local research outside the public repository. Audit tracked files and the complete Git history, presenter notes, generated exports, and embedded metadata before the first push; never commit private material and then merely delete it.

## Accuracy requirements and public evidence

Sources checked October 13, 2026. Recheck feature status before publication. Every quantitative product/customer claim needs a directly supporting public source; synthetic scenario values must be labeled clearly.

- Core platform and ingestion: [Elastic Search](https://www.elastic.co/docs/solutions/search), [ingestion](https://www.elastic.co/docs/solutions/search/ingest-for-search), [refresh](https://www.elastic.co/docs/reference/elasticsearch/rest-apis/refresh-parameter). Say near real-time; source sync and refresh introduce engineering choices. Current ingestion architecture does not present discontinued App Search/Workplace Search/managed crawler as current.
- Hybrid and ranking: [retrievers](https://www.elastic.co/docs/solutions/search/retrievers-overview), [RRF](https://www.elastic.co/docs/reference/elasticsearch/rest-apis/retrievers/rrf-retriever), [reranking](https://www.elastic.co/docs/solutions/search/ranking/semantic-reranking), [query rules](https://www.elastic.co/docs/reference/elasticsearch/rest-apis/retrievers/rule-retriever), [evaluation](https://www.elastic.co/docs/reference/elasticsearch/rest-apis/search-rank-eval). RRF fusion, vector rescoring and semantic reranking are distinct. Reranking cannot recover a document never retrieved. Rules and relevance are separate decisions.
- Semantic fields/models: [semantic_text](https://www.elastic.co/docs/reference/elasticsearch/mapping-reference/semantic-text/), [ELSER](https://www.elastic.co/docs/explore-analyze/machine-learning/nlp/ml-nlp-elser), [Jina](https://www.elastic.co/docs/explore-analyze/machine-learning/nlp/ml-nlp-jina). semantic_text accepts text and uses a configured inference endpoint; it is not a direct arbitrary image/PDF-binary field. Model/language/interface/hardware/license requirements vary. Model changes can require re-embedding/reindexing; provider changes alone do not imply universal model interchangeability.
- Vector engineering: [BBQ and DiskBBQ](https://www.elastic.co/docs/reference/elasticsearch/mapping-reference/bbq), [GPU indexing](https://www.elastic.co/docs/solutions/search/vector/gpu-vector-indexing). Qualify DiskBBQ Enterprise entitlement and release-dependent behavior. Do not describe disk cluster search as a graph moved to disk. GPU HNSW construction is distinct from embeddings/reranking and query retrieval; qualify Enterprise, supported OS/GPU/Java/libraries/index format. Avoid universal speed, recall, memory, or cost improvements and inherited internal competitive benchmark figures.
- Local inference: [Jina On-Prem](https://www.elastic.co/search-labs/blog/on-prem-ai-jina-embedding-models), [self-managed EIS](https://www.elastic.co/docs/explore-analyze/elastic-inference/connect-self-managed-cluster-to-eis). Local commercial containers can support restricted/offline operation when provisioned appropriately. EIS through Cloud Connect is a connected cloud service with account, entitlement, billing and network requirements, not an air-gapped path.
- RAG/agents: [RAG](https://www.elastic.co/docs/solutions/search/rag/), [Agent Builder](https://www.elastic.co/docs/explore-analyze/ai-features/elastic-agent-builder), [permissions](https://www.elastic.co/docs/explore-analyze/ai-features/agent-builder/permissions), [model configuration](https://www.elastic.co/docs/explore-analyze/ai-features/agent-builder/models). Use current Agent Builder rather than deprecated/removed Playground. Self-managed has no preconfigured model. Grounding/citations support verification, not zero hallucinations. Tools and actions require configured permissions and policies.
- Access: [DLS/FLS](https://www.elastic.co/docs/deploy-manage/users-roles/cluster-or-deployment-auth/controlling-access-at-document-field-level), [cross-cluster search](https://www.elastic.co/docs/explore-analyze/cross-cluster-search). Configure source ACL sync and Elasticsearch authorization; prompts are not access enforcement. Apply authorization before model context. Do not claim automatic identical source-governance inheritance or universal security parity.
- Deployment/economics: [deployment comparison](https://www.elastic.co/docs/deploy-manage/deploy/deployment-comparison), [subscriptions](https://www.elastic.co/subscriptions). Qualify subscription, version, operations, hardware, network and model requirements in notes and concise footnotes. No exact pricing, blanket parity, “everything free,” guaranteed cost reduction or guaranteed latency.
- Proof: [HSE](https://www.elastic.co/customers/hse) reports a **4% rise in search-page click-through rate**. Retain that wording; do not turn it into percentage points, revenue or conversion. It is customer-reported from Elastic Cloud on AWS, not a promise for on-premises deployment. [Stack Overflow](https://www.elastic.co/customers/stack-overflow) provides qualitative evidence of lexical-to-hybrid retrieval and attributed answers; avoid turning its forward-looking account into a universal current-rollout statement.
- Appendix: [Context Engine](https://www.elastic.co/elasticsearch/context-engine), [skill availability](https://www.elastic.co/docs/explore-analyze/ai-features/agent-builder/builtin-skills-reference), [Data Federation](https://www.elastic.co/docs/reference/query-languages/esql/esql-data-federation), [federation security](https://www.elastic.co/docs/reference/query-languages/esql/esql-data-federation-security). Date and qualify experimental/preview status; omit unsupported roadmap commitments.

## Presenter conversation guide

Create exact opening lines, key talking points, responses to five buyer objections, non-negotiables and a concrete close. Objections: existing Search investment, relevance proof, AI reliability, data control, and operating cost. The minimum evaluation establishes a representative corpus/query set, judgments, an access policy, workload/cost limits, accountable owners and a rollback baseline. Keep the language honest and consultative. Do not promise a licensing exception or generic savings. Include an option to rehearse the conversation.

## Implementation and validation sequence

1. Review this written design, resolve independent reviewer findings, record user approval, and commit the approved design before application implementation. Create a concrete implementation plan; keep the new Search source and artifacts separate from Security.
2. Build four representative scenes: cover, pillars, hybrid retrieval walkthrough and vector-index comparison. Establish fidelity and readable diagram motion before expanding.
3. Expand all 34 scenes with sources, qualifications, notes, density layers and scenario continuity. Verify animated diagram phase counts match metadata.
4. Review every scene at density 1/3/5, all automatic phases and reduced motion. Check direct forward/back navigation, history, replay, overlays and resource cleanup.
5. Verify desktop/mobile scaling, links, thumbnails, notes, timer, fullscreen, laser and drawing. Require readable text, complete diagrams, no clipping/missing assets, and no browser errors.
6. Open standalone HTML with networking disabled and test navigation/automatic loops. Verify exactly 34 readable PDF pages with complete diagrams and citations. Audit tracked files, full Git history, presenter notes, exports and embedded metadata for private materials/credentials before publication.
7. Run reproducible production builds and browser checks in GitHub Actions; deploy Pages and verify the published site and download paths. Preserve the prior successful deployment for rollback.

Acceptance: the published Search site and offline player work without live services; arrows never stay on a slide to consume an animation phase; all 34 core scenes/PDF pages are complete, qualified and readable; notes and objection guide are usable; the Security presentation remains unaffected.
