# Conversation Prep: Elastic Search Customer Presentation

**With:** CTOs, search platform leaders, architecture, security, and application owners.

**About:** Evolving an existing Search/AI platform from scattered knowledge to relevant, current, authorized context.

**Your goal:** Agree a bounded evaluation with a representative corpus, questions, judgments, access policy, workload and cost limits, accountable owners, a rollback baseline, and a decision date.

**Their likely goal:** Improve the user experience while protecting previous investment, data control, service reliability, and operating economics.

**Relationship:** Treat this as a shared platform decision. The customer owns the requirements and consequences; the presenter must make claims and limitations inspectable.

**What makes it difficult:** Search quality can look persuasive in a demonstration and still fail on real queries. AI adds questions about evidence, permissions, model hosting, and unpredictable cost. A self-managed team also carries infrastructure and operational responsibility.

**Presentation:** 34 core scenes, approximately 27 minutes. Use the remaining meeting time for the customer's failure cases and evaluation scope. All Atlas Hub documents, ranks, answers, diagrams, and tool traces are fictional. No live search, model, or action executes on the public site.

## Before you start

**Mindset:** The desired outcome is a justified next decision. A pilot that shows a remaining quality, access, or cost problem is useful evidence; do not try to turn every result into a reason to deploy.

**Timing:** Reserve 45–60 minutes with the platform owner and at least one application or relevance owner present. If local inference or restricted data is essential, include the security and model-service owner. Agree a follow-up for technical sizing and release-specific entitlement checks rather than improvise them during the presentation.

**Avoid:** Do not describe vectors as a replacement for keywords, citations as proof of correctness, or a self-managed cluster as proof that every inference call stays local. Do not use a customer metric as a prediction for this customer.

**Prepare:** Know the customer's current search stack, critical query families, source systems, access boundary, update rate, expected concurrency, deployment preference, and owner of relevance judgments. If these are unknown, use the discussion to identify them before proposing a configuration.

**Presenter controls:** Animation sequences run and loop automatically. Right/Left, Space/Page keys, toolbar arrows, and swipes change slides directly. R replays the current scene. N opens notes; G opens overview; T opens filmstrip. Reduced motion shows the complete diagram immediately. Do not spend time narrating every moving element; use the final hold to connect the evidence to the customer's decision.

## The opening

**Option 1 — Direct**

> “Your users ask for an answer. Your platform must find the right context. Today I want to show how we connect current, authorized knowledge, combine exact and semantic retrieval, and evaluate the experience before we ask you to make a platform decision.”

**Option 2 — Context first**

> “You have already invested in search, content, and access controls. We will start from that investment. I will follow one fictional support question through retrieval and an evidence-backed answer, then propose a way to compare the candidate approach with what you already operate.”

**Option 3 — Question led**

> “When users fail to find an answer today, is the main problem missing content, weak ranking, the wrong version, or a result they cannot verify? Keep that failure in mind as we follow one question through the platform.”

## Key points to make

1. **Connect the knowledge.** “A useful answer starts with current and authorized evidence. We need source synchronization, useful passages, revision metadata, and access enforcement before the model sees context.”
2. **Find what matters.** “Exact product identifiers and natural-language intent are complementary. We can compose lexical and vector retrieval, fuse rankings, and selectively rerank; we should prove the combination against representative judgments.”
3. **Deliver with confidence.** “Show applicable source metadata and sections, evaluate generated claims, and define what the application does when evidence is missing or conflicting.”
4. **Keep the boundary explicit.** “Engine location and inference location are separate choices. A local route needs a compatible model, provisioning, commercial rights, hardware, and operations; an external route needs an approved data and network path.”
5. **Make the release a measured decision.** “Compare quality, access failures, end-to-end latency, throughput, and the complete operating cost against a stable baseline. Keep a rollback path.”

## The five buyer objections

### 1. “We already have a search platform. We cannot throw away that investment.”

**Respond with:**

> “We should preserve what works. Let us document your current retrieval behavior and operating limits, then test one bounded corpus and user task against that baseline. The candidate can begin as a parallel evaluation or a limited application path. We will include integration work and a rollback decision in the comparison. If the evidence does not justify a change, keeping the existing path is a valid result.”

**Concrete next step:** Agree one application owner, one corpus, the existing baseline, and the smallest integration needed for a fair comparison. Define what must remain stable during the pilot. Do not promise automatic migration or equivalent behavior without testing.

### 2. “Every search demo looks good. How will you prove relevance on our queries?”

**Respond with:**

> “We will use your questions and rated evidence rather than selected demo queries. The set should include exact identifiers, natural wording, missing answers, wrong versions, and access cases. We will hold the corpus, judgments, baseline, and metric cutoff consistent, then inspect per-query failures as well as the overall result. After that offline check, we can test the application experience with users. Retrieval metrics and business outcomes are different measurements, and we should agree both.”

**Concrete next step:** Assign relevance-judgment owners and choose representative query families. Include failures from support tickets or search logs where permitted. Agree the metric and the acceptance criteria before comparing pipelines. [Ranking evaluation documentation](https://www.elastic.co/docs/reference/elasticsearch/rest-apis/search-rank-eval)

### 3. “AI makes things up. Why should we trust its answer?”

**Respond with:**

> “We should not assume that a fluent answer is correct. We will retrieve current authorized passages first, show citations to supporting source sections, and evaluate whether each claim follows from that evidence. We also need tests for missing sources, conflicts, misleading passages, and prompt injection. The application should clarify, abstain, or escalate when its policy says the evidence is insufficient. Grounding helps inspection; it does not give us a zero-hallucination promise. Our walkthrough retrieves information only and changes no system configuration.”

**Concrete next step:** Define answer-support checks and successful abstention examples. Ask the domain owner to review citations and applicability, not just phrasing. Establish tool permissions and action policy separately from retrieval. [RAG documentation](https://www.elastic.co/docs/solutions/search/rag/) · [Agent Builder permissions](https://www.elastic.co/docs/explore-analyze/ai-features/agent-builder/permissions)

### 4. “Our data cannot leave our environment, and source permissions must still apply.”

**Respond with:**

> “Let us draw the actual boundary, including questions, passages, embeddings, model calls, logs, and artifacts. A self-managed engine alone does not prove local inference. We can evaluate a compatible local model service provisioned for your restricted environment, or document an approved external route if your policy permits it. Source ACL synchronization and Elasticsearch authorization must be configured and tested before retrieval reaches the model. Prompts are not access enforcement. We should test revocation and excluded-content leakage, and verify the real model and network configuration.”

**Concrete next step:** Have the security, source-integration, and model owners approve the data-flow diagram and test policy. Validate artifacts and dependencies needed for restricted/offline operation. EIS through Cloud Connect is connected cloud inference, not an air-gapped route. [Document/field access](https://www.elastic.co/docs/deploy-manage/users-roles/cluster-or-deployment-auth/controlling-access-at-document-field-level) · [Jina On-Prem](https://www.elastic.co/search-labs/blog/on-prem-ai-jina-embedding-models) · [Self-managed EIS](https://www.elastic.co/docs/explore-analyze/elastic-inference/connect-self-managed-cluster-to-eis)

### 5. “The infrastructure and model costs will grow faster than the value.”

**Respond with:**

> “That is a design constraint we should measure early. We will include corpus growth, updates, filtering, query concurrency, candidate windows, rerank depth, and generation in the workload. The comparison should cover infrastructure, subscriptions, model services, resilience, and operating effort. We can evaluate index and model choices against the same quality target, then set limits for the application. Compression or a faster isolated operation does not prove lower total cost. I will not promise savings or a licensing exception before that complete comparison.”

**Concrete next step:** Agree expected and peak workload, quality targets, tail-latency limits, model throughput, and a complete cost envelope. Check entitlement and deployment details with the appropriate commercial and technical owners. [Capacity reference](https://www.elastic.co/docs/deploy-manage/reference-architectures/genai-search-high-availability) · [Subscriptions](https://www.elastic.co/subscriptions)

## If the conversation becomes tense

**If they are defensive about the existing architecture:**

> “I understand that the current platform represents substantial work and has constraints we may not know yet. Let us identify what it does well and the failure we are trying to improve. We can compare one change without making a judgment about the whole architecture.”

**If they are frustrated by an AI limitation:**

> “That limitation matters. Let us write it into the evaluation instead of explaining it away. Which failure would make this experience unacceptable for your users, and what evidence would show that the control works?”

**If they shut down or decline a pilot:**

> “We do not need to force a platform decision today. I can document the requirements and the unresolved evidence. If a bounded test becomes useful later, we will have a clear starting point.”

## Your non-negotiables

- **Must have:** Representative corpus and questions; stable relevance judgments and baseline; explicit source/access policy; tested authorization before model context; agreed quality, workload, and cost limits; named owners; rollback criteria.
- **Must say accurately:** RRF fusion, vector rescoring, and semantic reranking are distinct. A reranker cannot recover a never-retrieved document. Citations support verification rather than guarantee correctness. A local engine is not proof of local inference.
- **Must qualify:** Version, subscription, OS/hardware, model compatibility, connectivity, integration, and operating requirements. DiskBBQ and GPU indexing require Enterprise and additional compatibility checks. Deployment choices have different capabilities and responsibilities.
- **Must keep outside core promises:** Experimental/preview context-engineering and federation concepts. If the optional appendix is used, retain its dated status and supported-source limitations. Do not imply on-prem GA, inherited end-user source ACLs, or production readiness.
- **Ideal outcome:** A jointly owned evaluation with a decision date, acceptance gates, and a planned rollout or rollback route.
- **Walk-away point:** Do not endorse production release when required access controls, evidence quality, workload limits, or ownership remain unverified. Do not promise zero hallucinations, generic savings, blanket parity, or unapproved actions to overcome an objection.

## Customer evidence wording

Use these exact formulations when showing scene 32:

> “HSE reports a 4% rise in search-page click-through rate in its public customer story. That result came from Elastic Cloud on AWS. It is an attributed example, not percentage points, conversion growth, or a prediction for your self-managed environment.”

[HSE public customer story](https://www.elastic.co/customers/hse)

> “Stack Overflow's public customer account describes the progression from lexical to hybrid retrieval and answers linked to trusted community contributions and private Teams knowledge. We use it as qualitative evidence; the account includes forward-looking phrasing, so I am not asserting a current universal rollout footprint.”

[Stack Overflow public customer story](https://www.elastic.co/customers/stack-overflow)

## How to close

**If the discussion goes well:**

> “Let us agree one corpus and user task, the representative questions and judgments, the access policy, the workload and cost limits, and the owners. We will compare the candidate with your existing baseline and decide together whether the evidence supports rollout, another iteration, or keeping the current path. Who should own the evaluation, and what decision date fits your team?”

**If important questions remain unresolved:**

> “The unresolved questions are the model boundary, the source-access mapping, and the workload limit. Let us assign an owner to each and return with a concrete evaluation design. We should make the platform decision after that evidence is available.”

Replace the three examples with the customer's actual unresolved issues before using this line.

**If the discussion goes badly:**

> “I do not want to turn your concerns into a commitment you cannot justify. Let us record the requirement and the missing evidence. We can leave the current platform in place and revisit a bounded comparison when it serves your team.”

## Rehearsal

Practice the opening in 45 seconds, the five objection responses without rushing, and the closing as a specific evaluation proposal. Ask a colleague to challenge the difference between local retrieval and local inference, or between a citation and a supported answer.

Want me to role-play this conversation with you so you can practice? I will play a CTO or search platform leader and push back realistically on relevance, existing investment, data control, AI reliability, and operating cost.

Status and public sources checked October 13, 2026. Recheck deployment, model, subscription, and preview status before a customer-specific commitment.
