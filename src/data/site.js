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
  switch: {
    name: 'Granite Switch',
    github: 'https://github.com/generative-computing/granite-switch',
    hf: 'https://huggingface.co/ibm-granite/granite-switch-4.1-8b-preview',
  },
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

// The summary pitch on the home page. The CV carries a shorter version.
export const pitch = [
  'I lead post-training for agent reliability at IBM Research: Granite Guardian, an open judge model, and Granite Switch, a Granite model composed from adapter functions that check its own work: tool calls, groundedness, requirements, factuality, confidence. The models run in watsonx.ai, watsonx.governance and Red Hat’s Ask Red Hat assistant. Before LLMs I worked on generative models, mostly VAEs and GANs, and on uncertainty and fairness.',
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
