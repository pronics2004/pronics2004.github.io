// Profile facts shared by every page. Numbers carry the date they were read.

export const profile = {
  name: 'Prasanna Sattigeri',
  title: 'Principal Research Scientist and Manager',
  org: 'IBM Research',
  lab: 'MIT-IBM Watson AI Lab',
  location: 'Cambridge, MA',
};

export const links = {
  scholar: 'https://scholar.google.com/citations?hl=en&user=m-s38ikAAAAJ&view_op=list_works&sortby=pubdate',
  linkedin: 'https://www.linkedin.com/in/prasannasattigeri',
  github: 'https://github.com/pronics2004',
  ibm: 'https://research.ibm.com/people/prasanna-sattigeri',
  mitibm: 'https://mitibm.mit.edu/people/prasanna-sattigeri/',
  x: 'https://x.com/prasatti',
};

export const scholar = {
  citations: 9893,
  hIndex: 42,
  i10: 93,
  asOf: 'October 2026',
};

export const models = {
  guardian: {
    name: 'Granite Guardian 4.1 8B',
    hf: 'https://huggingface.co/ibm-granite/granite-guardian-4.1-8b',
    github: 'https://github.com/ibm-granite/granite-guardian',
    paper: 'https://aclanthology.org/2025.naacl-industry.49/',
  },
  guardianLib: {
    name: 'Granite Guardian Library',
    hf: 'https://huggingface.co/ibm-granite/granitelib-guardian-r1.0',
  },
  coreLib: {
    name: 'Granite Core Library',
    hf: 'https://huggingface.co/ibm-granite/granitelib-core-r1.0',
  },
  mellea: 'https://mellea.ai',
};

export const benchmark = {
  url: 'https://artificialanalysis.ai/articles/guardrail-safety-benchmark',
  published: 'June 11, 2026',
  prompts: 7232,
  configs: 20,
};

export const guardbench = {
  url: 'https://research.ibm.com/blog/granite-guardian-tops-guardbench',
  date: 'April 2025',
};

// The summary pitch. Used on the home page; the CV carries a shorter version.
export const pitch = [
  'I lead post-training for agent reliability at IBM Research: judge models, reward models and base-model capabilities that check tool calls, groundedness and requirements at each step of an LLM agent’s workflow. The team, spread across IBM Research sites in the United States, India, Japan and Ireland, trains Granite Guardian, an open-source judge model, and the Granite Guardian and Core libraries, which add calibrated uncertainty, context attribution, policy compliance, and factuality detection and correction to a base model.',
  'Granite Guardian 4.1 ranks in the top five of 20 guardrail models on the Artificial Analysis benchmark at 59 ms per check, and as a reward model it selects better answers than judges up to 70B parameters. These models are used in IBM watsonx.ai and watsonx.governance, deployed as the guardrails in Red Hat’s Ask Red Hat assistant, and integrated in external products and projects such as Traefik Hub, deepset Haystack and Mozilla.ai any-guardrail. Together they have 1.15M downloads on Hugging Face and 371K pulls on Ollama.',
  'The research spans post-training and generative modeling. On the post-training side, recent papers cover agent memory (COLM 2026), guardrails that check an agent’s plan before it executes (ICLR 2026), abstention for reasoning models (ACL 2026) and calibration for LLMs (ICML 2024). On the generative side, the work runs from disentangled representation learning with DIP-VAE (ICLR 2018) to GANs for semi-supervised learning (NeurIPS 2017). I am a principal investigator on two MIT-IBM Watson AI Lab projects and a core contributor to the open-source toolkits AI Fairness 360, AI Explainability 360, UQ360 and ICX360.',
];

// Where the Granite Guardian team is based.
export const team = {
  sites: 'the United States, India, Japan and Ireland',
};

// Granite Guardian releases. Dates from the Hugging Face repositories and IBM Research blog posts.
export const releases = [
  { when: 'Oct 2024', version: '3.0', what: 'Harm and RAG-hallucination detection, at 2B and 8B' },
  { when: 'Dec 2024', version: '3.1', what: 'Function-call hallucination detection for agents' },
  { when: 'Feb 2025', version: '3.2', what: 'Smaller 5B and 3B variants' },
  { when: '2025', version: '3.3', what: 'Hybrid thinking: a reasoning trace or a direct verdict' },
  { when: 'Apr 2026', version: '4.1', what: 'User-written criteria, and use as a reward model' },
];

export const awards = [
  ['2025', 'IBM Research Outstanding Accomplishment', 'AI governance innovations to watsonx.governance and open source'],
  ['2025', 'IBM Research Technical Achievement Award', 'Granite Guardian'],
  ['2024', 'IBM Research Outstanding Accomplishment', 'Granite 3.0 release'],
  ['2024', 'IBM Research Technical Achievement Award', 'Causal inference for business decision making'],
  ['2020–21', 'Four IBM Research Technical Achievement Awards', 'Uncertainty quantification, robust and generalizable AI, learning with less labels, efficient AI'],
  ['2019', 'IBM Outstanding Technical Achievement Award', 'Contributions to trustworthy AI'],
];
