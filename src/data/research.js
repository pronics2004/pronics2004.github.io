// Research threads for the home page. `papers` are ids from publications.js.
// `ships` names the released artifact a thread fed into, where there is one.

export const threads = [
  {
    id: 'agents',
    title: 'Agents, memory and guardrails',
    framing:
      'Agents fail in ways single-turn models do not. A plan can be unsafe before any action runs, a risk can build over many turns, and agents can leak context to each other through shared caches. This work puts the checks where those failures happen, and studies how agents improve at test time without weight updates.',
    ships: 'Granite Guardian',
    papers: ['agentic-guardrail', 'decocted', 'blindspot', 'lcguard', 'granite-guardian', 'cascade'],
  },
  {
    id: 'uncertainty',
    title: 'Calibration, uncertainty and abstention',
    framing:
      'A reliable system has to know when its answer is likely wrong. These papers cover calibration that transfers to new tasks, claim-level uncertainty for long outputs, the limits of evidential methods, and abstention for reasoning models.',
    ships: 'calibrated uncertainty in the Granite Core Library, trained to reproduce a Thermometer calibrator',
    papers: ['thermometer', 'graph-uncertainty', 'edl-mirage', 'trace-inversion'],
  },
  {
    id: 'attribution',
    title: 'Attribution and interpretability',
    framing:
      'Explaining a generated answer means tying it to the context that shaped it and to the model components that produced it.',
    ships: 'context attribution in the Granite Core Library, trained on MExGen rankings, and the ICX360 toolkit',
    papers: ['mexgen', 'causal-tracing'],
  },
  {
    id: 'generative',
    title: 'Generative modeling',
    framing:
      'Earlier work was on deep generative models: disentangled VAEs, GANs for semi-supervised learning and for fair data generation, and high-resolution synthesis on a small compute budget. DIP-VAE and its SAP metric are implemented in Google’s disentanglement_lib and in PyTorch-VAE. The same skills now go into the synthetic data engines that train judge models, and current work extends to diffusion models.',
    papers: ['dip-vae', 'ssl-gan', 'fairness-gan', 'nsb-gan'],
  },
  {
    id: 'human-ai',
    title: 'Human–AI collaboration',
    framing:
      'When a person and a model share a decision, the system has to decide who acts and tell the person when to rely on it.',
    papers: ['who-should-predict', 'onboarding', 'uncertainty-transparency'],
  },
  {
    id: 'foundations',
    title: 'Fairness and transfer',
    framing: 'Methods for changing what a trained model does without training it again from scratch.',
    papers: ['fair-ij', 'equivariant', 'coreg'],
  },
];

// Open-source work. GitHub stars and Hugging Face downloads read on 2026-10-01.
export const openSource = [
  {
    name: 'Granite Guardian',
    role: 'Project and training lead',
    what: 'Judge and guardrail models for LLM systems.',
    adoption: '54K downloads of the 4.1 8B model on Hugging Face in the past month',
    url: 'https://github.com/ibm-granite/granite-guardian',
  },
  {
    name: 'Granite Guardian Library and Granite Core Library',
    role: 'Lead',
    what: 'Seven post-trained capabilities for the Granite 4.0 and 4.1 base models, shipped as adapters.',
    adoption: 'Called through Mellea as intrinsics',
    url: 'https://huggingface.co/collections/ibm-granite/granite-libraries',
  },
  {
    name: 'AI Fairness 360',
    role: 'Core contributor',
    what: 'Fairness metrics and bias mitigation algorithms for datasets and models.',
    adoption: '2,872 GitHub stars; the paper has 2,907 citations',
    url: 'https://github.com/Trusted-AI/AIF360',
  },
  {
    name: 'AI Explainability 360',
    role: 'Core contributor',
    what: 'Interpretability and explanation methods for data and models.',
    adoption: '1,806 GitHub stars; the taxonomy paper has 800 citations',
    url: 'https://github.com/Trusted-AI/AIX360',
  },
  {
    name: 'Uncertainty Quantification 360',
    role: 'Core contributor',
    what: 'Estimating, communicating and using uncertainty in model predictions.',
    adoption: '269 GitHub stars',
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
    with: 'Maohao Shen, Joshua Lee, Abhin Shah, J. Jon Ryu, Hussein Mozannar, Hunter Lang, Abinitha Gourabathina, Kaiwen Zha',
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
    place: 'University of Notre Dame',
    people: 'Xiangliang Zhang',
    with: 'Yue Huang',
    topics: 'Guardrails for agentic systems, trustworthiness benchmarks for generative models',
  },
  {
    place: 'University of Illinois Urbana-Champaign',
    people: 'Lav Varshney, Katherine Driggs-Campbell',
    with: 'Sourya Basu, Pulkit Katdare, Siru Ouyang',
    topics: 'Equivariant fine-tuning of pretrained models',
  },
  {
    place: 'UCLA',
    people: 'Suhas Diggavi',
    topics: 'Experience-driven agents',
  },
  {
    place: 'Carnegie Mellon University',
    people: 'Ameet Talwalkar',
    with: 'Valerie Chen',
    topics: 'Evaluating LLMs as programming assistants',
  },
  {
    place: 'Mila and McGill University',
    people: 'David Rolnick',
    with: 'Paula Harder, Qidong Yang, Alex Hernandez-Garcia, Venkatesh Ramesh',
    topics: 'Hard-constrained deep learning for climate downscaling',
  },
  {
    place: 'Harvard University',
    people: 'Lucas Monteiro Paes',
    topics: 'Attribution for generative language models',
  },
  {
    place: 'University of Florida',
    people: 'Yuheng Bu',
    topics: 'Uncertainty quantification, fair selective prediction',
  },
  {
    place: 'Boston University',
    people: 'Kate Saenko',
    topics: 'Efficient video recognition',
  },
  {
    place: 'Tel Aviv University',
    people: 'Raja Giryes',
    with: 'Moshe Lichtenstein',
    topics: 'Few-shot learning',
  },
  {
    place: 'University of Utah',
    people: 'P. Thomas Fletcher',
    topics: 'Semi-supervised learning with GANs',
  },
];

// Public testimonials. Quotes are verbatim from the linked source.
export const quotes = [
  {
    quote: 'Granite-Guardian-3.2-5B showed the best generalization with only a 6.5% gap.',
    who: 'R. J. Young, independent robustness study of ten guardrail models, 2025',
    context:
      'The gap is the drop in accuracy from public benchmark prompts to novel attacks, across 1,445 prompts and 21 attack categories. The largest drop in the study was 57 points.',
    url: 'https://arxiv.org/abs/2511.22047',
  },
  {
    quote:
      'IBM’s open-source safety models provide harm detection, jailbreak detection, topic control, hallucination detection, and RAG quality assessment, capabilities that other guard providers don’t yet offer.',
    who: 'Traefik Labs, announcing Granite Guardian support in Traefik Hub, March 2026',
    context: 'Granite Guardian is one of three guard providers in the product’s safety pipeline.',
    url: 'https://traefik.io/press/traefik-labs-new-multi-vendor-composable-ai-safety-pipeline',
  },
  {
    quote:
      'When they compared Thermometer to several baselines on multiple tasks, it consistently produced better-calibrated uncertainty measures while requiring much less computation.',
    who: 'MIT News, July 2024',
    context: 'Thermometer is the calibration method behind the uncertainty capability in the Granite Core Library.',
    url: 'https://news.mit.edu/2024/thermometer-prevents-ai-model-overconfidence-about-wrong-answers-0731',
  },
  {
    quote:
      'The researchers found that this onboarding procedure led to about a 5 percent improvement in accuracy when humans and AI collaborated on an image prediction task.',
    who: 'MIT News, December 2023',
    context: 'On the NeurIPS 2023 spotlight paper with David Sontag’s group.',
    url: 'https://news.mit.edu/2023/automated-system-teaches-collaborate-ai-assistant-1208',
  },
];

// Usage counts read on 2026-10-01 from the Hugging Face API and the Ollama model library.
export const usage = [
  {
    value: '1.15M',
    label: 'Hugging Face downloads, all time, across the Granite Guardian models and the two Granite libraries',
  },
  { value: '371K', label: 'Ollama pulls of granite3-guardian and granite4.1-guardian' },
  {
    value: '45',
    label: 'quantized builds on Hugging Face, from community quantizers including mradermacher, DevQuasar and tensorblock',
  },
  { value: '54K', label: 'downloads of Granite Guardian 4.1 8B in the past 30 days' },
];

export const adoption = [
  {
    head: 'Independent benchmarks',
    items: [
      {
        text: 'GuardBench, built at the European Commission’s Joint Research Centre: six of the top ten places across 40 datasets (April 2025).',
        url: 'https://research.ibm.com/blog/granite-guardian-tops-guardbench',
      },
      {
        text: 'Artificial Analysis guardrail benchmark, run with NVIDIA: fifth of 20, first among policy-at-runtime models (June 2026).',
        url: 'https://artificialanalysis.ai/articles/guardrail-safety-benchmark',
      },
    ],
  },
  {
    head: 'In products',
    items: [
      {
        text: 'watsonx.governance: “The AI guardrails now use a Granite Guardian model as a filter” (IBM documentation, watsonx 2.2.1).',
        url: 'https://www.ibm.com/docs/SSLSRPV_2.2.x/fixlist/watsonxgov-fixlist.html',
      },
      {
        text: 'watsonx.ai: Granite Guardian is the AI guardrails filter for prompts, and a hosted foundation model.',
        url: 'https://www.ibm.com/docs/en/watsonx/w-and-w/2.2.0?topic=prompts-ai-guardrails-filter-content',
      },
      {
        text: 'Ask Red Hat, the AI assistant on the Red Hat Customer Portal: “Guardrails consists of IBM granite-guardian-3.3-8b” (Red Hat AI system card, April 2026).',
        url: 'https://access.redhat.com/ai/system-card/ask-red-hat',
      },
      {
        text: 'Red Hat OpenShift AI: the guardrails documentation uses the Granite Guardian HAP model as its example detector.',
        url: 'https://docs.redhat.com/en/documentation/red_hat_openshift_ai_self-managed/3.2/html-single/enabling_ai_safety_with_guardrails/index',
      },
      {
        text: 'Traefik Hub ships an LLM Guard built on Granite Guardian, alongside guards from Microsoft and NVIDIA.',
        url: 'https://traefik.io/press/traefik-labs-new-multi-vendor-composable-ai-safety-pipeline',
      },
    ],
  },
  {
    head: 'In open-source projects and tutorials',
    items: [
      {
        text: 'deepset’s Haystack safety cookbook covers Granite Guardian with Llama Guard, ShieldGemma and NemoGuard.',
        url: 'https://haystack.deepset.ai/cookbook/safety_moderation_open_lms',
      },
      {
        text: 'Mozilla.ai’s any-guardrail library includes a Granite Guardian guardrail.',
        url: 'https://github.com/mozilla-ai/any-guardrail',
      },
      {
        text: 'Red Hat AI Services packages the 3.x and 4.1 models in its model catalog and publishes a LangChain notebook for OpenShift.',
        url: 'https://github.com/rh-aiservices-bu/llm-on-openshift',
      },
    ],
  },
  {
    head: 'Used and built on in other research',
    items: [
      {
        text: 'Apple researchers name Granite Guardian among state-of-the-art guardrails (Krishna et al., 2025).',
        url: 'https://arxiv.org/abs/2506.00166',
      },
      {
        text: 'ROC Guardian, a family of Romanian offensive-language guard models, is fine-tuned from Granite Guardian (IEEE Access, 2026).',
      },
      {
        text: 'Evaluated as a reference guard model in DARWIN, the PolyGuard benchmark and LettuceDetect’s baselines.',
        url: 'https://arxiv.org/abs/2607.19829',
      },
      {
        text: 'DIP-VAE is among the methods in the ICML 2019 best paper by Locatello et al., which trained more than 12,000 disentanglement models.',
        url: 'https://arxiv.org/abs/1811.12359',
      },
    ],
  },
];
