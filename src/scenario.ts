/** Original fictional teaching scenario. No live search, inference, or tool execution. */
export const queryVariants = {
  exact: "Atlas Hub 4.0 self-managed SSO",
  natural:
    "How do I configure company sign-in for Atlas Hub 4.0 on a self-managed deployment?",
  followUp:
    "Which prerequisites apply, and which guide section supports each one?",
} as const;

export interface ScenarioSection {
  id: string;
  title: string;
  text: string;
}

export interface SearchDocument {
  id: string;
  title: string;
  shortTitle: string;
  product: string;
  version: string;
  deployment: string;
  status: string;
  access: string;
  eligible: boolean;
  exclusionReason?: string;
  snippet: string;
  sections: ScenarioSection[];
}

/** Excluded inputs deliberately carry metadata only, with no restricted content. */
export const documents: SearchDocument[] = [
  {
    id: "admin-4",
    title: "Atlas Hub 4.0 · Self-managed administrator guide",
    shortTitle: "Current administrator guide",
    product: "Atlas Hub",
    version: "4.0",
    deployment: "self-managed",
    status: "current published",
    access: "support-document scope",
    eligible: true,
    snippet:
      "Configure single sign-on with identity-provider metadata, the registered callback URL, and an authorized administrator.",
    sections: [
      {
        id: "2.1",
        title: "Identity-provider metadata",
        text: "Obtain the identity-provider federation metadata and a valid signing certificate.",
      },
      {
        id: "2.2",
        title: "Callback registration",
        text: "Register the self-managed deployment's callback URL with the identity provider.",
      },
      {
        id: "2.3",
        title: "Administrator and test account",
        text: "Use an authorized Atlas Hub administrator and a permitted test account to validate sign-in before rollout.",
      },
    ],
  },
  {
    id: "troubleshoot-4",
    title: "Atlas Hub 4.0 · Company sign-in troubleshooting",
    shortTitle: "Sign-in troubleshooting",
    product: "Atlas Hub",
    version: "4.0",
    deployment: "self-managed",
    status: "current published",
    access: "support-document scope",
    eligible: true,
    snippet:
      "If single sign-on fails, verify the callback URL, certificate validity, and clock agreement before retrying the test account.",
    sections: [
      {
        id: "4.1",
        title: "Callback mismatch",
        text: "Compare the registered callback URL with the self-managed deployment configuration.",
      },
      {
        id: "4.2",
        title: "Certificate and clock checks",
        text: "Verify certificate validity and clock agreement before repeating the sign-in test.",
      },
    ],
  },
  {
    id: "release-4",
    title: "Atlas Hub 4.0 · Authentication release notes",
    shortTitle: "Authentication release notes",
    product: "Atlas Hub",
    version: "4.0",
    deployment: "self-managed",
    status: "current published",
    access: "support-document scope",
    eligible: true,
    snippet:
      "For the supported 4.0 self-managed configuration, follow the current administrator guide and verify prerequisites before enabling single sign-on.",
    sections: [
      {
        id: "1.3",
        title: "Single sign-on configuration",
        text: "The current 4.0 administrator guide is the authoritative configuration source for this release.",
      },
    ],
  },
  {
    id: "legacy-3",
    title: "Older 3.2 guide · excluded metadata",
    shortTitle: "Older 3.2 guide",
    product: "Atlas Hub",
    version: "3.2",
    deployment: "self-managed",
    status: "superseded",
    access: "support-document scope",
    eligible: false,
    exclusionReason: "Wrong version and superseded",
    snippet: "",
    sections: [],
  },
  {
    id: "cloud-4",
    title: "Cloud-only guide · excluded metadata",
    shortTitle: "Cloud-only guide",
    product: "Atlas Hub",
    version: "4.0",
    deployment: "cloud-only",
    status: "current published",
    access: "support-document scope",
    eligible: false,
    exclusionReason: "Wrong deployment",
    snippet: "",
    sections: [],
  },
  {
    id: "restricted-4",
    title: "Access-restricted note · excluded metadata",
    shortTitle: "Restricted internal note",
    product: "Atlas Hub",
    version: "4.0",
    deployment: "self-managed",
    status: "current published",
    access: "outside requesting user scope",
    eligible: false,
    exclusionReason: "Not authorized",
    snippet: "",
    sections: [],
  },
];

export const searchScenario = {
  label: "Illustrative journey · synthetic data",
  product: "Atlas Hub",
  version: "4.0",
  deployment: "self-managed",
  user: "Maya Chen",
  role: "Support engineer",
  question: queryVariants.natural,
  exactQuery: queryVariants.exact,
  followUp: queryVariants.followUp,
  queryVariants,
  scope:
    "Atlas Hub · 4.0 · self-managed · current published · authorized support documents",
  eligibility: {
    product: "Atlas Hub",
    version: "4.0",
    deployment: "self-managed",
    status: "current published",
    access: "requesting user's support-document scope",
  },
  eligibleIds: ["admin-4", "troubleshoot-4", "release-4"],
  excludedIds: ["legacy-3", "cloud-4", "restricted-4"],
  rankings: {
    lexical: ["admin-4", "release-4", "troubleshoot-4"],
    semantic: ["troubleshoot-4", "admin-4", "release-4"],
    fused: ["admin-4", "troubleshoot-4", "release-4"],
  },
  contextIds: ["admin-4", "troubleshoot-4"],
  prerequisites: [
    {
      requirement: "Identity-provider metadata and signing certificate",
      documentId: "admin-4",
      section: "2.1",
    },
    {
      requirement: "Registered self-managed callback URL",
      documentId: "admin-4",
      section: "2.2",
    },
    {
      requirement: "Authorized administrator and test account",
      documentId: "admin-4",
      section: "2.3",
    },
    {
      requirement:
        "Certificate validity and clock agreement for troubleshooting",
      documentId: "troubleshoot-4",
      section: "4.2",
    },
  ],
  answer:
    "For Atlas Hub 4.0 self-managed, obtain the identity-provider metadata and signing certificate [Administrator guide §2.1], register the deployment's callback URL [§2.2], then use an authorized administrator and test account to validate sign-in [§2.3]. If the test fails, verify certificate validity and clock agreement [Troubleshooting §4.2].",
  uncertainty:
    "These sources establish prerequisites. A missing deployment URL or conflicting source requires clarification before a configuration-specific answer.",
  policy:
    "Retrieve authorized current context before generation; inspect source sections; abstain or clarify when evidence is missing or conflicting.",
} as const;
