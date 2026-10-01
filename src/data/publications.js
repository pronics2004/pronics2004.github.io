// One list feeds both the home page (entries with `selected: true`) and the CV (everything).
// `themes` drives the filter on the home page.

export const themes = [
  { id: 'agents', label: 'Agents' },
  { id: 'guardrails', label: 'Guardrails & judges' },
  { id: 'uncertainty', label: 'Uncertainty & abstention' },
  { id: 'attribution', label: 'Attribution & interpretability' },
  { id: 'human-ai', label: 'Human–AI teams' },
  { id: 'generative', label: 'Generative modeling' },
  { id: 'foundations', label: 'Fairness, causality and transfer' },
];

export const publications = [
  // 2026
  {
    title: 'Decocted Experience Improves Test-Time Inference in LLM Agents',
    authors: 'M. Shen, K. Zha, Z. He, Z.-W. Hong, S. Ouyang, J. J. Ryu, P. Sattigeri, S. Diggavi, G. Wornell',
    venue: 'COLM', year: 2026, url: 'https://arxiv.org/abs/2604.04373',
    themes: ['agents'], selected: true,
    id: 'decocted',
    summary:
      'Treats context as a scaling axis alongside test-time compute. Agents improve when experience is distilled, organized and retrieved rather than appended, across math reasoning, web browsing and software engineering.',
  },
  {
    title: 'Building a Foundational Guardrail for General Agentic Systems via Synthetic Data',
    authors: 'Y. Huang, H. Hua, Y. Zhou, P. Jing, M. Nagireddy, I. Padhi, G. Dolcetti, Z. Xu, et al., P. Sattigeri, X. Zhang',
    venue: 'ICLR', year: 2026, url: 'https://arxiv.org/abs/2510.09781',
    themes: ['agents', 'guardrails'], selected: true,
    id: 'agentic-guardrail',
    summary:
      'Moves the guardrail to the planning stage, before any action runs. AuraGen synthesizes agent trajectories with injected, labeled risks; Safiron, a compact guardian with a cross-planner adapter, flags the risk, names its type and explains it; Pre-Exec Bench measures detection, categorization and cross-planner transfer.',
    note: 'Co-corresponding author',
  },
  {
    title: 'Answering the Wrong Question: Reasoning Trace Inversion for Abstention in LLMs',
    authors: 'A. Gourabathina, I. Padhi, M. Nagireddy, S. Chaudhury, P. Sattigeri',
    venue: 'ACL', year: 2026, url: 'https://aclanthology.org/2026.acl-long.608/',
    themes: ['uncertainty'], selected: true,
    id: 'trace-inversion',
    summary:
      'Reframes failed abstention as answering the wrong question. Reconstructs the query from the reasoning trace alone and abstains when it diverges from the original. Best in 33 of 36 settings across four frontier LLMs and nine datasets.',
    note: 'Senior author',
  },
  {
    title: 'Multi-component Causal Tracing in Large Language Models',
    authors: 'Z. Yan, D. Wei, D. A. Katz, P. Sattigeri, A. Tajer',
    venue: 'ACL', year: 2026, url: 'https://aclanthology.org/2026.acl-long.154/',
    themes: ['attribution'], selected: true,
    id: 'causal-tracing',
    summary:
      'Finds the subsets of attention heads and MLP neurons that jointly drive a target metric. Soft interventions and a metric transformation turn the combinatorial search into a continuous optimization.',
  },
  {
    title: 'TrustGen: A Platform of Dynamic Benchmarking on the Trustworthiness of Generative Foundation Models',
    authors: 'Y. Huang, C. Gao, S. Wu, H. Wang, X. Wang, et al., incl. P. Sattigeri',
    venue: 'ICLR', year: 2026, url: 'https://arxiv.org/abs/2502.14296',
    themes: ['guardrails'], selected: true,
  },
  {
    title: 'BLINDSPOT: A Benchmark for Safety and Refusal Calibration in Long-Horizon Tool-Using Agents',
    authors: 'S. Asif, M. M. Amiri, M. Abbas, T. Pedapati, P. Sattigeri',
    venue: 'arXiv', year: 2026, url: 'https://arxiv.org/abs/2609.16305', preprint: true,
    themes: ['agents', 'guardrails'], selected: true,
    id: 'blindspot',
    summary:
      'Evaluates whole trajectories, not single responses: 22 attack families, 35 scenarios and seven domains yield over 2,500 trajectories averaging 14.7 turns, each judged as safe completion, correct refusal, unsafe completion, over-refusal or indeterminate.',
    note: 'Senior author',
  },
  {
    title: 'LCGuard: Latent Communication Guard for Safe KV Sharing in Multi-Agent Systems',
    authors: 'S. Asif, M. M. Amiri, M. Abbas, P. Sattigeri, K. N. Ramamurthy',
    venue: 'arXiv', year: 2026, url: 'https://arxiv.org/abs/2605.22786', preprint: true,
    themes: ['agents'], selected: true,
    id: 'lcguard',
    summary:
      'Agents that share KV caches can leak private context through that latent channel. LCGuard learns a transformation of the cache that keeps task information while limiting what an adversarial decoder can reconstruct.',
  },

  // 2025
  {
    title: 'Granite Guardian: Comprehensive LLM Safeguarding',
    authors: 'I. Padhi, M. Nagireddy, G. Cornacchia, S. Chaudhury, T. Pedapati, P. Dognin, K. Murugesan, E. Miehling, et al., P. Sattigeri',
    venue: 'NAACL', track: 'Industry', year: 2025, url: 'https://aclanthology.org/2025.naacl-industry.49/',
    themes: ['guardrails'], selected: true,
    id: 'granite-guardian',
    summary:
      'One model for harm, jailbreak and RAG-hallucination detection, trained on human annotations plus synthetic data. AUC 0.871 on harmful-content benchmarks and 0.854 on RAG-hallucination benchmarks.',
    note: 'Senior author',
  },
  {
    title: 'Multi-Level Explanations for Generative Language Models',
    authors: 'L. M. Paes, D. Wei, H. J. Do, H. Strobelt, R. Luss, A. Dhurandhar, M. Nagireddy, K. N. Ramamurthy, P. Sattigeri, W. Geyer, S. Ghosh',
    venue: 'ACL', year: 2025, url: 'https://aclanthology.org/2025.acl-long.1553/',
    themes: ['attribution'], selected: true,
    id: 'mexgen',
    summary:
      'MExGen extends LIME- and SHAP-style attribution to context-grounded generation, where inference is costly, inputs are long and the output is text. More faithful than alternatives, including LLM self-explanations, in automated and human evaluation.',
    note: 'Oral',
  },
  {
    title: 'Evaluating the Prompt Steerability of Large Language Models',
    authors: 'E. Miehling, M. Desmond, K. N. Ramamurthy, E. M. Daly, K. R. Varshney, et al., P. Sattigeri',
    venue: 'NAACL', year: 2025, url: 'https://aclanthology.org/2025.naacl-long.400/',
    themes: ['guardrails'], selected: true,
  },
  {
    title: 'When in Doubt, Cascade: Towards Building Efficient and Capable Guardrails',
    authors: 'M. Nagireddy, I. Padhi, S. Ghosh, P. Sattigeri',
    venue: 'AIES', year: 2025, url: 'https://arxiv.org/abs/2407.06323',
    themes: ['guardrails'], selected: true,
    id: 'cascade',
    summary:
      'Traces a bias detector’s errors to the use–mention distinction, then builds a taxonomy-driven synthetic data pipeline (over 300K contrastive samples) that yields competitive detectors at a fraction of the compute.',
    note: 'Senior author',
  },
  {
    title: 'Contextual Value Alignment',
    authors: 'P. Dognin, J. Rios, R. Luss, P. Sattigeri, M. Liu, I. Padhi, M. Riemer, et al.',
    venue: 'ICASSP', year: 2025, themes: ['guardrails'],
  },
  {
    title: 'Agentic AI Needs a Systems Theory',
    authors: 'E. Miehling, K. N. Ramamurthy, K. R. Varshney, M. Riemer, D. Bouneffouf, et al., incl. P. Sattigeri',
    venue: 'arXiv', year: 2025, url: 'https://arxiv.org/abs/2503.00237', preprint: true,
    themes: ['agents'],
  },
  {
    title: 'Adversarial Prompt Evaluation: Systematic Benchmarking of Guardrails Against Prompt Input Attacks on LLMs',
    authors: 'G. Zizzo, G. Cornacchia, K. Fraser, M. Z. Hameed, A. Rawat, B. Buesser, et al., incl. P. Sattigeri',
    venue: 'arXiv', year: 2025, preprint: true, themes: ['guardrails'],
  },

  // 2024
  {
    title: 'Thermometer: Towards Universal Calibration for Large Language Models',
    authors: 'M. Shen, S. Das, K. Greenewald, P. Sattigeri, G. Wornell, S. Ghosh',
    venue: 'ICML', year: 2024, url: 'https://arxiv.org/abs/2403.08819',
    themes: ['uncertainty'], selected: true,
    id: 'thermometer',
    summary:
      'Learns an auxiliary model across many tasks that calibrates an LLM on new tasks. Cheap at inference, and it leaves the model’s accuracy unchanged.',
  },
  {
    title: 'Graph-based Uncertainty Metrics for Long-form Language Model Generations',
    authors: 'M. Jiang, Y. Ruan, P. Sattigeri, S. Roukos, T. Hashimoto',
    venue: 'NeurIPS', year: 2024, url: 'https://arxiv.org/abs/2410.20783',
    themes: ['uncertainty'], selected: true,
    id: 'graph-uncertainty',
    summary:
      'Represents sampled generations and their claims as a bipartite graph and scores each claim by centrality. Self-consistency is the degree-centrality special case; closeness centrality does better, and uncertainty-aware decoding keeps only the reliable claims.',
  },
  {
    title: 'Are Uncertainty Quantification Capabilities of Evidential Deep Learning a Mirage?',
    authors: 'M. Shen, J. J. Ryu, S. Ghosh, Y. Bu, P. Sattigeri, S. Das, G. W. Wornell',
    venue: 'NeurIPS', year: 2024, themes: ['uncertainty'], selected: true,
    id: 'edl-mirage',
    summary:
      'Unifies the objectives of evidential deep learning, shows its epistemic uncertainty does not behave as claimed, and reinterprets the methods as energy-based out-of-distribution detectors.',
  },
  {
    title: 'WikiContradict: A Benchmark for Evaluating LLMs on Real-World Knowledge Conflicts from Wikipedia',
    authors: 'Y. Hou, A. Pascale, J. Carnerero-Cano, T. Tchrakian, R. Marinescu, E. Daly, I. Padhi, P. Sattigeri',
    venue: 'NeurIPS', track: 'Datasets & Benchmarks', year: 2024,
    themes: ['guardrails'], selected: true,
  },
  {
    title: 'Interventional Causal Discovery in a Mixture of DAGs',
    authors: 'B. Varıcı, D. A. Katz, D. Wei, P. Sattigeri, A. Tajer',
    venue: 'NeurIPS', year: 2024, themes: ['foundations'],
  },
  {
    title: 'Language Models in Dialogue: Conversational Maxims for Human-AI Interactions',
    authors: 'E. Miehling, M. Nagireddy, P. Sattigeri, E. M. Daly, D. Piorkowski, J. T. Richards',
    venue: 'EMNLP', track: 'Findings', year: 2024, url: 'https://aclanthology.org/2024.findings-emnlp.843/',
    themes: ['human-ai'], selected: true,
  },
  {
    title: 'Value Alignment from Unstructured Text',
    authors: 'I. Padhi, K. N. Ramamurthy, P. Sattigeri, M. Nagireddy, P. Dognin, K. R. Varshney',
    venue: 'EMNLP', track: 'Industry', year: 2024, themes: ['guardrails'],
  },
  {
    title: 'Causal Bandits with General Causal Models and Interventions',
    authors: 'Z. Yan, D. Wei, D. A. Katz, P. Sattigeri, A. Tajer',
    venue: 'AISTATS', year: 2024, themes: ['foundations'],
  },
  {
    title: "ComVas: Contextual Moral Values Alignment System",
    authors: 'I. Padhi, P. L. Dognin, J. Rios, R. Luss, S. Achintalwar, M. Riemer, M. Liu, et al., incl. P. Sattigeri',
    venue: 'IJCAI', year: 2024, themes: ['guardrails'],
  },
  {
    title: 'Large Language Model Confidence Estimation via Black-Box Access',
    authors: 'T. Pedapati, A. Dhurandhar, S. Ghosh, S. Dan, P. Sattigeri',
    venue: 'arXiv', year: 2024, url: 'https://arxiv.org/abs/2406.04370', preprint: true,
    themes: ['uncertainty'],
  },
  {
    title: 'The RealHumanEval: Evaluating Large Language Models’ Abilities to Support Programmers',
    authors: 'H. Mozannar, V. Chen, M. Alsobay, S. Das, S. Zhao, D. Wei, M. Nagireddy, et al., incl. P. Sattigeri',
    venue: 'arXiv', year: 2024, preprint: true, themes: ['human-ai'],
  },
  {
    title: 'Alignment Studio: Aligning Large Language Models to Particular Contextual Regulations',
    authors: 'S. Achintalwar, I. Baldini, D. Bouneffouf, et al., incl. P. Sattigeri',
    venue: 'IEEE Internet Computing', year: 2024, themes: ['guardrails'],
  },
  {
    title: 'Fourier Neural Operators for Arbitrary Resolution Climate Data Downscaling',
    authors: 'Q. Yang, A. Hernandez-Garcia, P. Harder, V. Ramesh, P. Sattigeri, et al.',
    venue: 'JMLR', year: 2024, themes: ['foundations'],
  },
  {
    title: 'Separability Analysis for Causal Discovery in Mixture of DAGs',
    authors: 'B. Varıcı, D. Katz, D. Wei, P. Sattigeri, A. Tajer',
    venue: 'TMLR', year: 2024, themes: ['foundations'],
  },

  // 2023
  {
    title: 'Effective Human-AI Teams via Learned Natural Language Rules and Onboarding',
    authors: 'H. Mozannar, J. J. Lee, D. Wei, P. Sattigeri, S. Das, D. Sontag',
    venue: 'NeurIPS', year: 2023, themes: ['human-ai'], selected: true,
    id: 'onboarding',
    summary:
      'Finds regions where people over- or under-rely on a model, describes each in natural language with an LLM, and teaches the rules in an onboarding stage. User studies show more accurate human–AI teams.',
    note: 'Spotlight',
  },
  {
    title: 'Who Should Predict? Exact Algorithms for Learning to Defer to Humans',
    authors: 'H. Mozannar, H. Lang, D. Wei, P. Sattigeri, S. Das, D. Sontag',
    venue: 'AISTATS', year: 2023, themes: ['human-ai'], selected: true,
    id: 'who-should-predict',
    summary:
      'Proves that learning a linear classifier–rejector pair is NP-hard even when a perfect pair exists, gives an exact MILP for the linear case, and proposes a realizable-consistent surrogate loss that scales.',
  },
  {
    title: 'Efficient Equivariant Transfer Learning from Pretrained Models',
    authors: 'S. Basu, P. Katdare, P. Sattigeri, V. Chenthamarakshan, K. Driggs-Campbell, P. Das, L. R. Varshney',
    venue: 'NeurIPS', year: 2023, themes: ['foundations'], selected: true,
    id: 'equivariant',
    summary:
      'Makes a pretrained model equivariant by a weighted average over group-transformed features, with the weights learned from data.',
  },
  {
    title: 'Post-hoc Uncertainty Learning Using a Dirichlet Meta-Model',
    authors: 'M. Shen, Y. Bu, P. Sattigeri, S. Ghosh, S. Das, G. Wornell',
    venue: 'AAAI', year: 2023, themes: ['uncertainty'],
  },
  {
    title: 'Equi-Tuning: Group Equivariant Fine-Tuning of Pretrained Models',
    authors: 'S. Basu, P. Sattigeri, K. N. Ramamurthy, V. Chenthamarakshan, K. R. Varshney, et al.',
    venue: 'AAAI', year: 2023, themes: ['foundations'],
  },
  {
    title: 'Reliable Gradient-free and Likelihood-free Prompt Tuning',
    authors: 'M. Shen, S. Ghosh, P. Sattigeri, S. Das, Y. Bu, G. Wornell',
    venue: 'EACL', track: 'Findings', year: 2023, themes: ['uncertainty'],
  },
  {
    title: 'Add-Remove-or-Relabel: Practitioner-Friendly Bias Mitigation via Influential Fairness',
    authors: 'B. Richardson, P. Sattigeri, D. Wei, K. N. Ramamurthy, K. Varshney, et al.',
    venue: 'FAccT', year: 2023, themes: ['foundations'],
  },
  {
    title: 'Hard-Constrained Deep Learning for Climate Downscaling',
    authors: 'P. Harder, A. Hernandez-Garcia, V. Ramesh, Q. Yang, P. Sattigeri, et al.',
    venue: 'JMLR', year: 2023, themes: ['foundations'],
  },
  {
    title: 'Causal Bandits for Linear Structural Equation Models',
    authors: 'B. Varici, K. Shanmugam, P. Sattigeri, A. Tajer',
    venue: 'JMLR', year: 2023, themes: ['foundations'],
  },
  {
    title: 'The Incentive Gap in Data Work in the Era of Large Models',
    authors: 'K. I. Gero, P. Das, P. Dognin, I. Padhi, P. Sattigeri, K. R. Varshney',
    venue: 'Nature Machine Intelligence', year: 2023, themes: ['foundations'],
  },

  // 2022
  {
    title: 'Fair Infinitesimal Jackknife: Mitigating the Influence of Biased Training Data Points Without Refitting',
    authors: 'P. Sattigeri, S. Ghosh, I. Padhi, P. Dognin, K. R. Varshney',
    venue: 'NeurIPS', year: 2022, themes: ['foundations'], selected: true,
    id: 'fair-ij',
    summary:
      'Uses infinitesimal-jackknife influence to find the training points that most hurt a fairness metric, and removes their effect without refitting the model.',
    note: 'First author',
  },
  {
    title: 'Selective Regression Under Fairness Criteria',
    authors: 'A. Shah, Y. Bu, J. K. Lee, S. Das, R. Panda, P. Sattigeri, G. W. Wornell',
    venue: 'ICML', year: 2022, themes: ['uncertainty'],
  },
  {
    title: 'Intervention Target Estimation in the Presence of Latent Variables',
    authors: 'B. Varici, K. Shanmugam, P. Sattigeri, A. Tajer',
    venue: 'UAI', year: 2022, themes: ['foundations'],
  },
  {
    title: 'Causal Feature Selection for Algorithmic Fairness',
    authors: 'S. Galhotra, K. Shanmugam, P. Sattigeri, K. R. Varshney',
    venue: 'SIGMOD', year: 2022, themes: ['foundations'],
  },
  {
    title: 'AI Explainability 360: Impact and Design',
    authors: 'V. Arya, R. K. E. Bellamy, P.-Y. Chen, A. Dhurandhar, M. Hind, S. C. Hoffman, et al., incl. P. Sattigeri',
    venue: 'AAAI', year: 2022, themes: ['attribution'],
  },

  // 2021
  {
    title: 'Uncertainty as a Form of Transparency: Measuring, Communicating, and Using Uncertainty',
    authors: 'U. Bhatt, J. Antorán, Y. Zhang, Q. V. Liao, P. Sattigeri, R. Fogliato, et al.',
    venue: 'AIES', year: 2021, themes: ['uncertainty', 'human-ai'], selected: true,
    id: 'uncertainty-transparency',
    summary:
      'Argues that communicating uncertainty is a form of model transparency, and sets out how to measure it, communicate it and use it with stakeholders.',
  },
  {
    title: 'Fair Selective Classification via Sufficiency',
    authors: 'J. K. Lee, Y. Bu, D. Rajan, P. Sattigeri, R. Panda, S. Das, G. W. Wornell',
    venue: 'ICML', year: 2021, themes: ['uncertainty'],
  },
  {
    title: 'Scalable Intervention Target Estimation in Linear Models',
    authors: 'B. Varici, K. Shanmugam, P. Sattigeri, A. Tajer',
    venue: 'NeurIPS', year: 2021, themes: ['foundations'],
  },
  {
    title: 'AdaFuse: Adaptive Temporal Fusion Network for Efficient Action Recognition',
    authors: 'Y. Meng, R. Panda, C.-C. Lin, P. Sattigeri, L. Karlinsky, K. Saenko, A. Oliva, R. Feris',
    venue: 'ICLR', year: 2021, themes: ['foundations'],
  },
  {
    title: 'Leveraging Latent Features for Local Explanations',
    authors: 'R. Luss, P.-Y. Chen, A. Dhurandhar, P. Sattigeri, Y. Zhang, K. Shanmugam, et al.',
    venue: 'KDD', year: 2021, themes: ['attribution'],
  },
  {
    title: 'Conditionally Independent Data Generation',
    authors: 'K. Ahuja, P. Sattigeri, K. Shanmugam, D. Wei, K. N. Ramamurthy, M. Kocaoglu',
    venue: 'UAI', year: 2021, themes: ['foundations'],
  },

  // 2020
  {
    title: 'not-so-BigGAN: Generating High-Fidelity Images on Small Compute with Wavelet-based Super-Resolution',
    authors: 'S. Han, A. Srivastava, C. Hurwitz, P. Sattigeri, D. D. Cox',
    venue: 'arXiv', year: 2020, url: 'https://arxiv.org/abs/2009.04433', preprint: true,
    themes: ['generative'], selected: true,
    id: 'nsb-gan',
    summary:
      'Samples in the wavelet domain and super-resolves to pixels. FID 10.59 on ImageNet 512×512, better than the BigGAN baseline at half the compute.',
  },
  {
    title: 'Optimizing Mode Connectivity via Neuron Alignment',
    authors: 'N. Tatro, P.-Y. Chen, P. Das, I. Melnyk, P. Sattigeri, R. Lai',
    venue: 'NeurIPS', year: 2020, themes: ['foundations'],
  },
  {
    title: 'AR-Net: Adaptive Frame Resolution for Efficient Action Recognition',
    authors: 'Y. Meng, C.-C. Lin, R. Panda, P. Sattigeri, L. Karlinsky, A. Oliva, K. Saenko, R. Feris',
    venue: 'ECCV', year: 2020, themes: ['foundations'],
  },
  {
    title: 'TAFSSL: Task-Adaptive Feature Sub-Space Learning for Few-Shot Classification',
    authors: 'M. Lichtenstein, P. Sattigeri, R. Feris, R. Giryes, L. Karlinsky',
    venue: 'ECCV', year: 2020, themes: ['foundations'],
  },
  {
    title: 'Fairness of Classifiers Across Skin Tones in Dermatology',
    authors: 'N. M. Kinyanjui, T. Odonga, C. Cintas, N. C. F. Codella, R. Panda, P. Sattigeri, K. R. Varshney',
    venue: 'MICCAI', year: 2020, themes: ['foundations'],
  },
  {
    title: 'Building Calibrated Deep Models via Uncertainty Matching with Auxiliary Interval Predictors',
    authors: 'J. J. Thiagarajan, B. Venkatesh, P. Sattigeri, P.-T. Bremer',
    venue: 'AAAI', year: 2020, themes: ['uncertainty'],
  },

  // 2019
  {
    title: 'Learning New Tricks From Old Dogs: Multi-Source Transfer Learning From Pre-Trained Networks',
    authors: 'J. Lee, P. Sattigeri, G. Wornell',
    venue: 'NeurIPS', year: 2019, themes: ['foundations'],
  },
  {
    title: 'AI Fairness 360: An Extensible Toolkit for Detecting and Mitigating Algorithmic Bias',
    authors: 'R. K. E. Bellamy, K. Dey, M. Hind, S. C. Hoffman, S. Houde, K. Kannan, P. Lohia, et al., incl. P. Sattigeri',
    venue: 'IBM Journal of Research and Development', year: 2019, themes: ['foundations'], selected: true,
  },
  {
    title: 'Fairness GAN: Generating Datasets with Fairness Properties Using a Generative Adversarial Network',
    authors: 'P. Sattigeri, S. C. Hoffman, V. Chenthamarakshan, K. R. Varshney',
    venue: 'IBM Journal of Research and Development', year: 2019, themes: ['generative'], selected: true, url: 'https://arxiv.org/abs/1805.09910',
    id: 'fairness-gan',
    summary:
      'An auxiliary-classifier GAN that generates a dataset close to the original but satisfying demographic parity or equality of opportunity.',
    note: 'First author',
  },
  {
    title: 'Understanding Behavior of Clinical Models under Domain Shifts',
    authors: 'J. J. Thiagarajan, D. Rajan, P. Sattigeri',
    venue: 'KDD Applied Data Science for Healthcare Workshop', year: 2019, note: 'Best Paper',
    themes: ['foundations'],
  },

  // 2018 and earlier
  {
    title: 'Variational Inference of Disentangled Latent Concepts from Unlabeled Observations',
    authors: 'A. Kumar, P. Sattigeri, A. Balakrishnan',
    venue: 'ICLR', year: 2018, themes: ['generative'], selected: true, url: 'https://arxiv.org/abs/1711.00848',
    id: 'dip-vae',
    summary:
      'DIP-VAE: a regularizer on the aggregate approximate posterior that encourages disentangled latents without supervision, plus the SAP score for measuring disentanglement.',
  },
  {
    title: 'Co-regularized Alignment for Unsupervised Domain Adaptation',
    authors: 'A. Kumar, P. Sattigeri, K. Wadhawan, L. Karlinsky, R. Feris, W. T. Freeman, G. Wornell',
    venue: 'NeurIPS', year: 2018, themes: ['foundations'], selected: true, url: 'https://arxiv.org/abs/1811.05443',
    id: 'coreg',
    summary:
      'Aligns source and target distributions in several diverse feature spaces and regularizes the resulting target predictions to agree.',
  },
  {
    title: 'Semi-supervised Learning with GANs: Manifold Invariance with Improved Inference',
    authors: 'A. Kumar, P. Sattigeri, P. T. Fletcher',
    venue: 'NeurIPS', year: 2017, themes: ['generative'], selected: true, url: 'https://arxiv.org/abs/1705.08850',
    id: 'ssl-gan',
    summary:
      'Estimates the tangent space of the data manifold from a GAN generator and makes the classifier invariant along it, with an improved encoder for inference. The gains are largest when labels are scarce.',
  },
];
