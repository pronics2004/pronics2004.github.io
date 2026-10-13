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
  citations: 10043,
  hIndex: 44,
  i10: 97,
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

// The summary, used on the home page and the CV.
export const pitch = [
  'I lead post-training for agent reliability at IBM Research and designed Granite Guardian, an open judge model. It is a judge rather than a classifier: it answers with a yes/no token and its probability, takes criteria written at runtime instead of a fixed taxonomy, and can reason before it answers, a trace people also use to refine their criteria and debug verdicts. The team also adds capabilities to Granite models through modular post-training for reasoning, safety and agentic workloads: tool-call checks, groundedness, requirements, factuality, confidence. Granite Guardian 4.1 ranks fifth of 20 on the Artificial Analysis guardrail benchmark at 59 ms per check. The models run in watsonx.ai, watsonx.governance and Red Hat’s Ask Red Hat assistant, with 1.16M downloads on Hugging Face and 371K on Ollama.',
  'I have deep expertise in generative modeling, starting with VAEs and GANs (ICLR 2018, NeurIPS 2017) and now diffusion models, LLMs and agentic systems (COLM 2026, ICLR 2026, ACL 2026), with calibration and uncertainty running through all of it (ICML 2024, NeurIPS 2024). I am a principal investigator on joint projects with MIT and RPI, and a core contributor to AI Fairness 360, AI Explainability 360 and UQ360.',
];

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
