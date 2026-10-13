// Research threads for the home page. `papers` are ids from publications.js.
// `ships` names the released artifact a thread fed into, where there is one.

export const threads = [
  {
    id: 'agents',
    title: 'Agents, memory and guardrails',
    framing:
      'Agents fail between the turns: a bad plan before any action, a risk that builds over a long session, a cache shared with another agent. These papers put the check at that point.',
    ships: 'Granite Guardian',
    papers: ['agentic-guardrail', 'blindspot', 'lcguard', 'granite-guardian', 'cascade'],
  },
  {
    id: 'uncertainty',
    title: 'Calibration, uncertainty and abstention',
    framing: 'A model that knows when it is likely wrong. Calibration that transfers, uncertainty for long outputs, abstention for reasoning models.',
    ships: 'calibrated uncertainty in Granite Switch',
    papers: ['thermometer', 'graph-uncertainty', 'edl-mirage', 'trace-inversion'],
  },
  {
    id: 'attribution',
    title: 'Attribution and interpretability',
    framing: 'Which part of the context, and which part of the model, produced this sentence.',
    ships: 'context attribution in Granite Switch, and the ICX360 toolkit',
    papers: ['mexgen', 'causal-tracing'],
  },
  {
    id: 'generative',
    title: 'Generative modeling',
    framing:
      'Disentangled VAEs, GANs for semi-supervised learning and fair data, and high-resolution synthesis on a small budget. DIP-VAE is in disentanglement_lib and PyTorch-VAE. Current work extends to diffusion models.',
    papers: ['dip-vae', 'ssl-gan', 'fairness-gan', 'nsb-gan'],
  },
  {
    id: 'human-ai',
    title: 'Human–AI collaboration',
    framing: 'Who should act, and when a person should trust the model.',
    papers: ['who-should-predict', 'onboarding', 'uncertainty-transparency'],
  },
  {
    id: 'foundations',
    title: 'Fairness and transfer',
    framing: 'Changing what a trained model does without retraining it.',
    papers: ['fair-ij', 'equivariant', 'coreg'],
  },
];

// Open-source work. GitHub stars and Hugging Face downloads read on 2026-10-01.
export const openSource = [
  {
    name: 'Granite Guardian',
    role: 'Project and training lead',
    what: 'Judge and guardrail models for LLM systems.',
    adoption: '1.16M Hugging Face downloads across versions',
    url: 'https://github.com/ibm-granite/granite-guardian',
  },
  {
    name: 'Granite Switch',
    role: 'Lead',
    what: 'Adapter functions for safety, factuality and RAG, composed into one Granite model.',
    adoption: '58K Hugging Face downloads',
    url: 'https://github.com/generative-computing/granite-switch',
  },
  {
    name: 'AI Fairness 360',
    role: 'Core contributor',
    what: 'Fairness metrics and bias mitigation algorithms for datasets and models.',
    adoption: '2,878 GitHub stars; the paper has 2,937 citations; an LF AI & Data (Linux Foundation) project',
    url: 'https://github.com/Trusted-AI/AIF360',
  },
  {
    name: 'AI Explainability 360',
    role: 'Core contributor',
    what: 'Interpretability and explanation methods for data and models.',
    adoption: '1,809 GitHub stars; the taxonomy paper has 732 citations',
    url: 'https://github.com/Trusted-AI/AIX360',
  },
  {
    name: 'Uncertainty Quantification 360',
    role: 'Core contributor',
    what: 'Estimating, communicating and using uncertainty in model predictions.',
    adoption: '270 GitHub stars',
    url: 'https://github.com/IBM/UQ360',
  },
  {
    name: 'ICX360',
    role: 'Contributor',
    what: 'In-context explainability for LLMs, including the MExGen attribution method.',
    adoption: 'Released with the ACL 2025 paper',
    url: 'https://github.com/IBM/ICX360',
  },
];

export const adoptedElsewhere = [
  {
    name: 'google-research/disentanglement_lib',
    detail: 'DIP-VAE is one of its four model families, and the SAP score is one of its metrics.',
    url: 'https://github.com/google-research/disentanglement_lib',
  },
  {
    name: 'AntixK/PyTorch-VAE',
    detail: 'Includes a DIP-VAE implementation. 7,676 GitHub stars.',
    url: 'https://github.com/AntixK/PyTorch-VAE',
  },
];

// Academic collaborations, with affiliations as listed on the joint papers.
// `with` lists the students and postdocs on those papers; always show it wherever `people` is shown.
export const collaborators = [
  {
    place: 'MIT',
    people: 'Gregory Wornell, David Sontag, William Freeman, Aude Oliva',
    with: 'Maohao Shen, Joshua Lee, Abhin Shah, J. Jon Ryu, Hussein Mozannar, Hunter Lang, Abinitha Gourabathina',
    topics: 'Calibration and uncertainty, learning to defer, abstention, agents that learn from experience, domain adaptation',
  },
  {
    place: 'Rensselaer Polytechnic Institute',
    people: 'Ali Tajer, Mohammad Mohammadi Amiri',
    with: 'Zirui Yan, Burak Varıcı, Sadia Asif',
    topics: 'Causal bandits and causal discovery, causal tracing in LLMs, agent safety benchmarks, multi-agent communication',
  },
  {
    place: 'Stanford University',
    people: 'Tatsunori Hashimoto',
    with: 'Mingjian Jiang, Yangjun Ruan, Zexue He',
    topics: 'Uncertainty for long-form generation, experience-driven agents',
  },
  {
    place: 'Mila and McGill University',
    people: 'David Rolnick',
    with: 'Paula Harder, Qidong Yang, Alex Hernandez-Garcia, Venkatesh Ramesh',
    topics: 'Hard-constrained deep learning for climate downscaling',
  },
];

// Public testimonials. Quotes are verbatim from the linked source.
export const quotes = [
  {
    quote: 'Granite-Guardian-3.2-5B showed the best generalization with only a 6.5% gap.',
    who: 'R. J. Young, independent robustness study of ten guardrail models, 2025',
    context: 'The gap is the accuracy drop from public benchmarks to novel attacks. The largest drop in the study was 57 points.',
    url: 'https://arxiv.org/abs/2511.22047',
  },
  {
    quote:
      'IBM’s open-source safety models provide harm detection, jailbreak detection, topic control, hallucination detection, and RAG quality assessment, capabilities that other guard providers don’t yet offer.',
    who: 'Traefik Labs, on adding Granite Guardian to Traefik Hub, March 2026',
    context: 'One of three guard providers in the product’s safety pipeline.',
    url: 'https://traefik.io/press/traefik-labs-new-multi-vendor-composable-ai-safety-pipeline',
  },
];

// Usage counts. Hugging Face read on 2026-10-13; Ollama on 2026-10-01.
export const usage = [
  { value: '1.16M', label: 'Hugging Face downloads, all time, across the Granite Guardian models and the Granite Switch libraries' },
  { value: '371K', label: 'Ollama pulls of granite3-guardian and granite4.1-guardian' },
  { value: '45', label: 'community quantized builds on Hugging Face' },
  { value: '56K', label: 'downloads of Granite Guardian 4.1 8B in the past 30 days' },
];

// All-time Hugging Face downloads by Guardian version, summed over the sizes in each release.
export const downloadsByVersion = [
  { version: '3.0', when: 'Oct 2024', downloads: 330751 },
  { version: '3.1', when: 'Dec 2024', downloads: 121580 },
  { version: '3.2', when: 'Feb 2025', downloads: 150346 },
  { version: '3.3', when: '2025', downloads: 289773 },
  { version: '4.1', when: 'Apr 2026', downloads: 213412 },
];

export const adoption = [
  {
    head: 'Independent benchmarks',
    items: [
      { text: 'LLM-AggreFact: Granite Guardian 3.3 (8B) is third of 39, ahead of GPT-4o, Mistral Large 2 and Llama 3.1 405B.', url: 'https://llm-aggrefact.github.io/' },
      { text: 'GuardBench (EC Joint Research Centre): six of the top ten places across 40 datasets, April 2025.', url: 'https://research.ibm.com/blog/granite-guardian-tops-guardbench' },
      { text: 'Artificial Analysis, with NVIDIA: fifth of 20, first among policy-at-runtime models, June 2026.', url: 'https://artificialanalysis.ai/articles/guardrail-safety-benchmark' },
    ],
  },
  {
    head: 'In products',
    items: [
      { text: 'watsonx.governance: “The AI guardrails now use a Granite Guardian model as a filter.”', url: 'https://www.ibm.com/docs/SSLSRPV_2.2.x/fixlist/watsonxgov-fixlist.html' },
      { text: 'watsonx.ai: the AI guardrails filter for prompts, and a hosted foundation model.', url: 'https://www.ibm.com/docs/en/watsonx/w-and-w/2.2.0?topic=prompts-ai-guardrails-filter-content' },
      { text: 'Ask Red Hat, on the Red Hat Customer Portal: “Guardrails consists of IBM granite-guardian-3.3-8b.”', url: 'https://access.redhat.com/ai/system-card/ask-red-hat' },
      { text: 'Traefik Hub: an LLM Guard built on Granite Guardian, next to guards from Microsoft and NVIDIA.', url: 'https://traefik.io/press/traefik-labs-new-multi-vendor-composable-ai-safety-pipeline' },
    ],
  },
  {
    head: 'In open-source projects and tutorials',
    items: [
      { text: 'Google Cloud’s community guide to guardrails for the Agent Development Kit, with Granite Guardian 3.3.', url: 'https://medium.com/google-cloud/guardrails-with-agent-development-kit-featuring-safeguard-llm-models-6d696198a063' },
      { text: 'Turing Post’s explainer on guardian models.', url: 'https://www.turingpost.com/p/guardianmodels' },
      { text: 'deepset’s Haystack safety cookbook.', url: 'https://haystack.deepset.ai/cookbook/safety_moderation_open_lms' },
      { text: 'Mozilla.ai’s any-guardrail library.', url: 'https://github.com/mozilla-ai/any-guardrail' },
      { text: 'Red Hat AI Services’ model catalog and OpenShift notebook.', url: 'https://github.com/rh-aiservices-bu/llm-on-openshift' },
    ],
  },
  {
    head: 'Research others have built on',
    items: [
      { text: 'DIP-VAE (ICLR 2018, 753 citations): one of the methods in the ICML 2019 best paper, which trained 12,000 disentanglement models. In disentanglement_lib and PyTorch-VAE.', url: 'https://arxiv.org/abs/1811.12359' },
      { text: 'AI Fairness 360: 2,937 citations; an LF AI & Data project at the Linux Foundation.', url: 'https://lfaidata.foundation/projects/ai-fairness-360/' },
      { text: 'AI Explainability 360 taxonomy paper: 732 citations.', url: 'https://arxiv.org/abs/1909.03012' },
      { text: '“Uncertainty as a Form of Transparency” (AIES 2021): 494 citations.', url: 'https://arxiv.org/abs/2011.07586' },
      { text: '“Who Should Predict?” (AISTATS 2023): 151 citations.', url: 'https://arxiv.org/abs/2301.06197' },
    ],
  },
];
