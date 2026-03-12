window.PUBLICATIONS_DATA = [
  {
    "title": "AI for Science",
    "note": "AI methods used in service of natural science, especially materials,\n            physics, and related scientific imaging problems.",
    "papers": [
      {
        "slug": "texturesam",
        "year": "2025",
        "title": "TextureSAM: Towards a Texture Aware Foundation Model for Segmentation",
        "venue": "CoRR",
        "link": "https://doi.org/10.48550/arXiv.2505.16540",
        "authors": [
          "Inbal Cohen",
          "Boaz Meivar",
          "Peihan Tu",
          "Shai Avidan",
          "Gal Oren"
        ],
        "abstract": "Segment Anything Models (SAM) have achieved remarkable success in object segmentation tasks across diverse datasets. However, these models are predominantly trained on large-scale semantic segmentation datasets, which introduce a bias toward object shape rather than texture cues in the image. This limitation is critical in domains such as medical imaging, material classification, and remote sensing, where texture changes define object boundaries. In this study, we investigate SAM's bias toward semantics over textures and introduce a new texture-aware foundation model, TextureSAM, which performs superior segmentation in texture-dominant scenarios. To achieve this, we employ a novel fine-tuning approach that incorporates texture augmentation techniques, incrementally modifying training images to emphasize texture features. By leveraging a novel texture-alternation of the ADE20K dataset, we guide TextureSAM to prioritize texture-defined regions, thereby mitigating the inherent shape bias present in the original SAM model. Our extensive experiments demonstrate that TextureSAM significantly outperforms SAM-2 on both natural (+0.2 mIoU) and synthetic (+0.18 mIoU) texture-based segmentation datasets. The code and texture-augmented dataset will be publicly available.",
        "previewImage": "assets/papers/firstpage/texturesam.jpg"
      },
      {
        "slug": "reactor-rl",
        "year": "2024",
        "title": "Reactor Optimization Benchmark by Reinforcement Learning",
        "venue": "CoRR",
        "link": "https://doi.org/10.48550/arXiv.2403.14273",
        "authors": [
          "Deborah Schwarcz",
          "Nadav Schneider",
          "Gal Oren",
          "Uri Steinitz"
        ],
        "abstract": "Neutronic calculations for reactors are a daunting task when using Monte Carlo (MC) methods. As high-performance computing has advanced, the simulation of a reactor is nowadays more readily done, but design and optimization with multiple parameters is still a computational challenge. MC transport simulations, coupled with machine learning techniques, offer promising avenues for enhancing the efficiency and effectiveness of nuclear reactor optimization. This paper introduces a novel benchmark problem within the OpenNeoMC framework designed specifically for reinforcement learning. The benchmark involves optimizing a unit cell of a research reactor with two varying parameters (fuel density and water spacing) to maximize neutron flux while maintaining reactor criticality. The test case features distinct local optima, representing different physical regimes, thus posing a challenge for learning algorithms. Through extensive simulations utilizing evolutionary and neuroevolutionary algorithms, we demonstrate the effectiveness of reinforcement learning in navigating complex optimization landscapes with strict constraints. Furthermore, we propose acceleration techniques within the OpenNeoMC framework, including model updating and cross-section usage by RAM utilization, to expedite simulation times. Our findings emphasize the importance of machine learning integration in reactor optimization and contribute to advancing methodologies for addressing intricate optimization challenges in nuclear engineering. The sources of this work are available at our GitHub repository: https://github.com/Scientific-Computing-Lab-NRCN/RLOpenNeoMC",
        "previewImage": "assets/papers/firstpage/reactor-rl.jpg"
      },
      {
        "slug": "multiview-physics",
        "year": "2023",
        "title": "Explainable Multi-View Deep Networks Methodology for Experimental Physics",
        "venue": "CoRR",
        "link": "https://doi.org/10.48550/arXiv.2308.08206",
        "authors": [
          "Nadav Schneider",
          "Muriel Tzdaka",
          "Galit Sturm",
          "Guy Lazovski",
          "Galit Bar",
          "Gilad Oren",
          "Raz Gvishi",
          "Gal Oren"
        ],
        "abstract": "Physical experiments often involve multiple imaging representations, such as X-ray scans and microscopic images. Deep learning models have been widely used for supervised analysis in these experiments. Combining different image representations is frequently required to analyze and make a decision properly. Consequently, multi-view data has emerged - datasets where each sample is described by views from different angles, sources, or modalities. These problems are addressed with the concept of multi-view learning. Understanding the decision-making process of deep learning models is essential for reliable and credible analysis. Hence, many explainability methods have been devised recently. Nonetheless, there is a lack of proper explainability in multi-view models, which are challenging to explain due to their architectures. In this paper, we suggest different multi-view architectures for the vision domain, each suited to another problem, and we also present a methodology for explaining these models. To demonstrate the effectiveness of our methodology, we focus on the domain of High Energy Density Physics (HEDP) experiments, where multiple imaging representations are used to assess the quality of foam samples. We apply our methodology to classify the foam samples quality using the suggested multi-view architectures. Through experimental results, we showcase the improvement of accurate architecture choice on both accuracy - 78% to 84% and AUC - 83% to 93% and present a trade-off between performance and explainability. Specifically, we demonstrate that our approach enables the explanation of individual one-view models, providing insights into the decision-making process of each view. This understanding enhances the interpretability of the overall multi-view model. The sources of this work are available at: https://github.com/Scientific-Computing-Lab-NRCN/Multi-View-Explainability.",
        "previewImage": "assets/papers/firstpage/multiview-physics.jpg"
      },
      {
        "slug": "hedp-foams",
        "year": "2022",
        "title": "Determining HEDP Foams' Quality with Multi-View Deep Learning Classification",
        "venue": "AI4S",
        "link": "https://doi.org/10.1109/AI4S56813.2022.00009",
        "authors": [
          "Nadav Schneider",
          "Matan Rusanovsky",
          "Raz Gvishi",
          "Gal Oren"
        ],
        "abstract": "High energy density physics (HEDP) experiments commonly involve a dynamic wave-front propagating inside a low-density foam. This effect affects its density and hence, its transparency. A common problem in foam production is the creation of defective foams. Accurate information on their dimension and homogeneity is required to classify the foams' quality. Therefore, those parameters are being characterized using a 3D-measuring laser confocal microscope. For each foam, five images are taken: two 2D images representing the top and bottom surface foam planes and three images of side cross-sections from 3D scannings. An expert has to do the complicated, harsh, and exhausting work of manually classifying the foam's quality through the image set and only then determine whether the foam can be used in experiments or not. Currently, quality has two binary levels of normal vs. defective. At the same time, experts are commonly required to classify a sub-class of normal-defective, i.e., foams that are defective but might be sufficient for the needed experiment. This sub-class is problematic due to inconclusive judgment that is primarily intuitive. In this work, we present a novel state-of-the-art multi-view deep learning classification model that mimics the physicist's perspective by automatically determining the foams' quality classification and thus aids the expert. Our model achieved 86\\% accuracy on upper and lower surface foam planes and 82\\% on the entire set, suggesting interesting heuristics to the problem. A significant added value in this work is the ability to regress the foam quality instead of binary deduction and even explain the decision visually. The source code used in this work, as well as other relevant sources, are available at: https://github.com/Scientific-Computing-Lab-NRCN/Multi-View-Foams.git",
        "previewImage": "assets/papers/firstpage/hedp-foams.jpg"
      },
      {
        "slug": "metallography",
        "year": "2021",
        "title": "An End-to-End Computer Vision Methodology for Quantitative Metallography",
        "venue": "CoRR",
        "link": "https://arxiv.org/abs/2104.11159",
        "authors": [
          "Matan Rusanovsky",
          "Ofer Beeri",
          "Gal Oren"
        ],
        "abstract": "Metallography is crucial for a proper assessment of material's properties. It involves mainly the investigation of spatial distribution of grains and the occurrence and characteristics of inclusions or precipitates. This work presents an holistic artificial intelligence model for Anomaly Detection that automatically quantifies the degree of anomaly of impurities in alloys. We suggest the following examination process: (1) Deep semantic segmentation is performed on the inclusions (based on a suitable metallographic database of alloys and corresponding tags of inclusions), producing inclusions masks that are saved into a separated database. (2) Deep image inpainting is performed to fill the removed inclusions parts, resulting in 'clean' metallographic images, which contain the background of grains. (3) Grains' boundaries are marked using deep semantic segmentation (based on another metallographic database of alloys), producing boundaries that are ready for further inspection on the distribution of grains' size. (4) Deep anomaly detection and pattern recognition is performed on the inclusions masks to determine spatial, shape and area anomaly detection of the inclusions. Finally, the system recommends to an expert on areas of interests for further examination. The performance of the model is presented and analyzed based on few representative cases. Although the models presented here were developed for metallography analysis, most of them can be generalized to a wider set of problems in which anomaly detection of geometrical objects is desired. All models as well as the data-sets that were created for this work, are publicly available at https://github.com/Scientific-Computing-Lab-NRCN/MLography.",
        "previewImage": "assets/papers/firstpage/metallography.jpg"
      },
      {
        "slug": "cvdl-instabilities",
        "year": "2020",
        "title": "Complete CVDL Methodology for Investigating Hydrodynamic Instabilities",
        "venue": "CoRR",
        "link": "https://arxiv.org/abs/2004.03374",
        "authors": [
          "Re'em Harel",
          "Matan Rusanovsky",
          "Yehonatan Fridman",
          "Assaf Shimony",
          "Gal Oren"
        ],
        "abstract": "In fluid dynamics, one of the most important research fields is hydrodynamic instabilities and their evolution in different flow regimes. The investigation of said instabilities is concerned with the highly non-linear dynamics. Currently, three main methods are used for understanding of such phenomenon - namely analytical models, experiments and simulations - and all of them are primarily investigated and correlated using human expertise. In this work we claim and demonstrate that a major portion of this research effort could and should be analysed using recent breakthrough advancements in the field of Computer Vision with Deep Learning (CVDL, or Deep Computer-Vision). Specifically, we target and evaluate specific state-of-the-art techniques - such as Image Retrieval, Template Matching, Parameters Regression and Spatiotemporal Prediction - for the quantitative and qualitative benefits they provide. In order to do so we focus in this research on one of the most representative instabilities, the Rayleigh-Taylor one, simulate its behaviour and create an open-sourced state-of-the-art annotated database (RayleAI). Finally, we use adjusted experimental results and novel physical loss methodologies to validate the correspondence of the predicted results to actual physical reality to prove the models efficiency. The techniques which were developed and proved in this work can be served as essential tools for physicists in the field of hydrodynamics for investigating a variety of physical systems, and also could be used via Transfer Learning to other instabilities research. A part of the techniques can be easily applied on already exist simulation results. All models as well as the data-set that was created for this work, are publicly available at: https://github.com/scientific-computing-nrcn/SimulAI.",
        "previewImage": "assets/papers/firstpage/cvdl-instabilities.jpg"
      },
      {
        "slug": "mlography-an-automated-quantitative-metallography-model-for-impurities-anomaly-detection-using-novel-data-mining-and-deep-learning-approach",
        "year": "2020",
        "title": "MLography: An Automated Quantitative Metallography Model for Impurities Anomaly Detection using Novel Data Mining and Deep Learning Approach",
        "venue": "CoRR",
        "link": "https://arxiv.org/abs/2003.04226",
        "authors": [
          "Rusanovsky, Matan",
          "Oren, Gal",
          "Ifergane, Sigalit",
          "Beeri, Ofer"
        ],
        "abstract": "The micro-structure of most of the engineering alloys contains some inclusions and precipitates, which may affect their properties, therefore it is crucial to characterize them. In this work we focus on the development of a state-of-the-art artificial intelligence model for Anomaly Detection named MLography to automatically quantify the degree of anomaly of impurities in alloys. For this purpose, we introduce several anomaly detection measures: Spatial, Shape and Area anomaly, that successfully detect the most anomalous objects based on their objective, given that the impurities were already labeled. The first two measures quantify the degree of anomaly of each object by how each object is distant and big compared to its neighborhood, and by the abnormally of its own shape respectively. The last measure, combines the former two and highlights the most anomalous regions among all input images, for later (physical) examination. The performance of the model is presented and analyzed based on few representative cases. We stress that although the models presented here were developed for metallography analysis, most of them can be generalized to a wider set of problems in which anomaly detection of geometrical objects is desired. All models as well as the data-set that was created for this work, are publicly available at: https://github.com/matanr/MLography.",
        "previewImage": "assets/papers/firstpage/mlography-an-automated-quantitative-metallography-model-for-impurities-anomaly-detection-using-novel-data-mining-and-deep-learning-approach.jpg"
      }
    ]
  },
  {
    "title": "AI for Systems",
    "note": "AI and language-model work on parallel programming, code generation,\n            code translation, and performance reasoning.",
    "papers": [
      {
        "slug": "paracodex",
        "year": "2026",
        "title": "ParaCodex: A Profiling-Guided Autonomous Coding Agent for Reliable Parallel Code Generation and Translation",
        "venue": "CoRR",
        "link": "https://doi.org/10.48550/arXiv.2601.04327",
        "authors": [
          "Erel Kaplan",
          "Tomer Bitan",
          "Lian Ghrayeb",
          "Le Chen",
          "Tom Yotam",
          "Niranjan Hasabnis",
          "Gal Oren"
        ],
        "abstract": "Parallel programming is central to HPC and AI, but producing code that is correct and fast remains challenging, especially for OpenMP GPU offload, where data movement and tuning dominate. Autonomous coding agents can compile, test, and profile on target hardware, but outputs are brittle without domain scaffolding. We present ParaCodex, an HPC-engineer workflow that turns a Codex-based agent into an autonomous OpenMP GPU offload system using staged hotspot analysis, explicit data planning, correctness gating, and profiling-guided refinement. We evaluate translation from serial CPU kernels to OpenMP GPU offload kernels on HeCBench, Rodinia, and NAS. After excluding five kernels, ParaCodex succeeded on all 31 valid kernels. The generated kernels improved GPU time over reference OpenMP implementations in 25/31 cases, achieving geometric-mean speedups of 3x on HeCBench and 5x on Rodinia, and outperforming a zero-shot Codex baseline on all suites. We also evaluate CUDA to OpenMP offload translation on ParEval, where ParaCodex maintains high compilation and validation rates in code-only and end-to-end settings.",
        "previewImage": "assets/papers/firstpage/paracodex.jpg"
      },
      {
        "slug": "llm-performance",
        "year": "2025",
        "title": "Can Large Language Models Predict Parallel Code Performance?",
        "venue": "HPDC",
        "link": "https://doi.org/10.1145/3731545.3743645",
        "authors": [
          "Gregory Bolet",
          "Giorgis Georgakoudis",
          "Harshitha Menon",
          "Konstantinos Parasyris",
          "Niranjan Hasabnis",
          "Hayden Estes",
          "Kirk W. Cameron",
          "Gal Oren"
        ],
        "abstract": "Accurate determination of the performance of parallel GPU code typically requires execution-time profiling on target hardware -- an increasingly prohibitive step due to limited access to high-end GPUs. This paper explores whether Large Language Models (LLMs) can offer an alternative approach for GPU performance prediction without relying on hardware. We frame the problem as a roofline classification task: given the source code of a GPU kernel and the hardware specifications of a target GPU, can an LLM predict whether the GPU kernel is compute-bound or bandwidth-bound? For this study, we build a balanced dataset of 340 GPU kernels, obtained from HeCBench benchmark and written in CUDA and OpenMP, along with their ground-truth labels obtained via empirical GPU profiling. We evaluate LLMs across four scenarios: (1) with access to profiling data of the kernel source, (2) zero-shot with source code only, (3) few-shot with code and label pairs, and (4) fine-tuned on a small custom dataset. Our results show that state-of-the-art LLMs have a strong understanding of the Roofline model, achieving 100% classification accuracy when provided with explicit profiling data. We also find that reasoning-capable LLMs significantly outperform standard LLMs in zero- and few-shot settings, achieving up to 64% accuracy on GPU source codes, without profiling information. Lastly, we find that LLM fine-tuning will require much more data than what we currently have available. This work is among the first to use LLMs for source-level roofline performance prediction via classification, and illustrates their potential to guide optimization efforts when runtime profiling is infeasible. Our findings suggest that with better datasets and prompt strategies, LLMs could become practical tools for HPC performance analysis and performance portability.",
        "previewImage": "assets/papers/firstpage/llm-performance.jpg"
      },
      {
        "slug": "counting-without-running-evaluating-llms-reasoning-about-code-complexity",
        "year": "2025",
        "title": "Counting Without Running: Evaluating LLMs' Reasoning About Code Complexity",
        "venue": "CoRR",
        "link": "https://doi.org/10.48550/arXiv.2512.04355",
        "authors": [
          "Bolet, Gregory",
          "Georgakoudis, Giorgis",
          "Parasyris, Konstantinos",
          "Menon, Harshitha",
          "Hasabnis, Niranjan",
          "Cameron, Kirk W.",
          "Oren, Gal"
        ],
        "abstract": "Modern GPU software stacks demand developers who can anticipate performance bottlenecks before ever launching a kernel; misjudging floating-point workloads upstream can derail tuning, scheduling, and even hardware procurement. Yet despite rapid progress in code generation, today's Large Language Models (LLMs) are rarely tested on this kind of forward-looking reasoning. We close that gap with gpuFLOPBench, a benchmark that asks models to \"count without running\" by predicting single and double-precision FLOP counts for 577 CUDA kernels drawn from HeCBench, annotated with ground-truth profiles and eight execution attributes that distinguish trivially analyzable code from kernels whose FLOPs depend on hidden compiler or runtime behavior. Evaluating current closed-source reasoning models shows clear but uneven progress: the newest LLMs achieve perfect classification on straightforward kernels but still incur multiple order-of-magnitude errors whenever implicit FLOPs arise from division, intrinsic math functions, or common subexpressions. These results surface a core limitation of existing code assistants -- the inability to internalize hardware-specific microcode effects -- and position gpuFLOPBench as a focused testbed for developing LLM tooling that can reason about performance with the same rigor as experienced GPU developers. Sources are available at our repository: https://github.com/Scientific-Computing-Lab/gpuFLOPBench",
        "previewImage": "assets/papers/firstpage/counting-without-running-evaluating-llms-reasoning-about-code-complexity.jpg"
      },
      {
        "slug": "from-openacc-to-openmp5-gpu-offloading-performance-evaluation-on-nas-parallel-benchmarks",
        "year": "2025",
        "title": "From OpenACC to OpenMP5 GPU Offloading: Performance Evaluation on NAS Parallel Benchmarks",
        "venue": "ExHET@PPoPP",
        "link": "https://doi.org/10.1145/3720555.3721989",
        "authors": [],
        "abstract": "A performance study of GPU offloading portability when moving from OpenACC to OpenMP5 on standard NAS benchmarks.",
        "previewImage": null
      },
      {
        "slug": "pragformer",
        "year": "2025",
        "title": "PragFormer: Data-Driven Parallel Source Code Classification with Transformers",
        "venue": "International Journal of Parallel Programming",
        "link": "https://doi.org/10.1007/s10766-024-00778-9",
        "authors": [
          "Re’em Harel",
          "Tal Kadosh",
          "Niranjan Hasabnis",
          "Timothy Mattson",
          "Yuval Pinter",
          "Gal Oren"
        ],
        "abstract": "Multi-core shared memory architectures have become ubiquitous in computing hardware nowadays. As a result, there is a growing need to fully utilize these a",
        "previewImage": "assets/papers/firstpage/pragformer.jpg"
      },
      {
        "slug": "unipar",
        "year": "2025",
        "title": "UniPar: A Unified LLM-Based Framework for Parallel and Accelerated Code Translation in HPC",
        "venue": "HPEC",
        "link": "https://doi.org/10.1109/HPEC67600.2025.11196677",
        "authors": [
          "Tomer Bitan",
          "Tal Kadosh",
          "Erel Kaplan",
          "Shira Meiri",
          "Le Chen",
          "Peter Morales",
          "Niranjan Hasabnis",
          "Gal Oren"
        ],
        "abstract": "Translating programs between various parallel programming languages is an important problem in the high-performance computing (HPC) community. Existing tools for this problem are either too narrow in scope and/or outdated. Recent explosive growth in the popularity of large language models (LLMs) and their ability to generate and translate code offers a potential alternative approach. Toward that end, we first need to systematically evaluate the ability of LLMs to translate between parallel languages. In this work, we introduce UniPar, a systematic evaluation framework for LLM-based parallel code translation. Specifically, in this work, we target translations between serial code, CUDA, and OpenMP. Our goal is to assess how well current instruction-tuned LLMs -- specifically GPT-4o-mini and LLaMA-3.3-70B-Instruct -- can be used out of the box or enhanced through known strategies. We evaluated four major usage modes: hyperparameter optimization for decoding, zero- and few-shot prompting, supervised fine-tuning, and iterative feedback through compiler-based repair. As a part of the evaluation, we construct a new dataset called PARATRANS, covering both serial-to-parallel translation and cross-paradigm transformations. Our findings reveal that while off-the-shelf models struggle under the default settings (e.g., GPT-4o-mini achieves only 46% compilation and 15% functional correctness), our UniPar methodology -- combining fine-tuning, hyperparameter tuning, and compiler-guided repair -- improves performance by up to 2X (69% compilation and 33% correctness). We believe that our findings will provide useful insights for researchers to further improve LLMs for the parallel language translation problem. UniPar source code and PARATRANS dataset are available at our GitHub repository https://github.com/Scientific-Computing-Lab/UniPar_AI.",
        "previewImage": "assets/papers/firstpage/unipar.jpg"
      },
      {
        "slug": "mpirigen",
        "year": "2024",
        "title": "MPIrigen: MPI Code Generation through Domain-Specific Language Models",
        "venue": "CoRR",
        "link": "https://doi.org/10.48550/arXiv.2402.09126",
        "authors": [
          "Nadav Schneider",
          "Niranjan Hasabnis",
          "Vy A. Vo",
          "Tal Kadosh",
          "Neva Krien",
          "Mihai Capotă",
          "Guy Tamir",
          "Ted Willke",
          "Nesreen Ahmed",
          "Yuval Pinter",
          "Timothy Mattson",
          "Gal Oren"
        ],
        "abstract": "The imperative need to scale computation across numerous nodes highlights the significance of efficient parallel computing, particularly in the realm of Message Passing Interface (MPI) integration. The challenging parallel programming task of generating MPI-based parallel programs has remained unexplored. This study first investigates the performance of state-of-the-art language models in generating MPI-based parallel programs. Findings reveal that widely used models such as GPT-3.5 and PolyCoder (specialized multi-lingual code models) exhibit notable performance degradation, when generating MPI-based programs compared to general-purpose programs. In contrast, domain-specific models such as MonoCoder, which are pretrained on MPI-related programming languages of C and C++, outperform larger models. Subsequently, we introduce a dedicated downstream task of MPI-based program generation by fine-tuning MonoCoder on HPCorpusMPI. We call the resulting model as MPIrigen. We propose an innovative preprocessing for completion only after observing the whole code, thus enabling better completion with a wider context. Comparative analysis against GPT-3.5 zero-shot performance, using a novel HPC-oriented evaluation method, demonstrates that MPIrigen excels in generating accurate MPI functions up to 0.8 accuracy in location and function predictions, and with more than 0.9 accuracy for argument predictions. The success of this tailored solution underscores the importance of domain-specific fine-tuning in optimizing language models for parallel computing code generation, paving the way for a new generation of automatic parallelization tools. The sources of this work are available at our GitHub MPIrigen repository: https://github.com/Scientific-Computing-Lab-NRCN/MPI-rigen",
        "previewImage": "assets/papers/firstpage/mpirigen.jpg"
      },
      {
        "slug": "monocoder",
        "year": "2024",
        "title": "MonoCoder: Domain-Specific Code Language Model for HPC Codes and Tasks",
        "venue": "HPEC",
        "link": "https://doi.org/10.1109/HPEC62836.2024.10938441",
        "authors": [
          "Tal Kadosh",
          "Niranjan Hasabnis",
          "Vy A. Vo",
          "Nadav Schneider",
          "Neva Krien",
          "Mihai Capota",
          "Abdul Wasay",
          "Nesreen Ahmed",
          "Ted Willke",
          "Guy Tamir",
          "Yuval Pinter",
          "Timothy Mattson",
          "Gal Oren"
        ],
        "abstract": "With easier access to powerful compute resources, there is a growing trend in AI for software development to develop large language models (LLMs) to address a variety of programming tasks. Even LLMs applied to tasks from the high-performance computing (HPC) domain are huge in size and demand expensive compute resources for training. This is partly because LLMs for HPC tasks are obtained by finetuning existing LLMs that support several natural and/or programming languages. We found this design choice confusing - why do we need LLMs trained on natural languages and programming languages unrelated to HPC for HPC-specific tasks? In this line of work, we aim to question choices made by existing LLMs by developing smaller language models (LMs) for specific domains - we call them domain-specific LMs. Specifically, we start with HPC as a domain and build an HPC-specific LM, named MonoCoder, which is orders of magnitude smaller than existing LMs but delivers better performance on non-HPC and HPC codes. Specifically, we pre-trained MonoCoder on an HPC-specific dataset (named HPCorpus) of C and C++ programs mined from GitHub. We evaluated the performance of MonoCoder against state-of-the-art multi-lingual LLMs. Results demonstrate that MonoCoder, although much smaller than existing LMs, outperforms other LLMs on normalized-perplexity tests (in relation to model size) while also delivering competing CodeBLEU scores for high-performance and parallel code generations. In other words, results suggest that MonoCoder understands HPC code better than state-of-the-art LLMs.",
        "previewImage": "assets/papers/firstpage/monocoder.jpg"
      },
      {
        "slug": "ompgpt",
        "year": "2024",
        "title": "OMPGPT: A Generative Pre-trained Transformer Model for OpenMP",
        "venue": "Euro-Par",
        "link": "https://doi.org/10.1007/978-3-031-69577-3_9",
        "authors": [
          "Le Chen",
          "Arijit Bhattacharjee",
          "Nesreen Ahmed",
          "Niranjan Hasabnis",
          "Gal Oren",
          "Vy Vo",
          "Ali Jannesari"
        ],
        "abstract": "Large language models (LLMs)such as ChatGPT have significantly advanced the field of Natural Language Processing (NLP). This trend led to the development of code-based large language models such as StarCoder, WizardCoder, and CodeLlama, which are trained extensively on vast repositories of code and programming languages. While the generic abilities of these code LLMs are useful for many programmers in tasks like code generation, the area of high-performance computing (HPC) has a narrower set of requirements that make a smaller and more domain-specific model a smarter choice. This paper presents OMPGPT, a novel domain-specific model meticulously designed to harness the inherent strengths of language models for OpenMP pragma generation. Furthermore, we leverage prompt engineering techniques from the NLP domain to create Chain-of-OMP, an innovative strategy designed to enhance OMPGPT's effectiveness. Our extensive evaluations demonstrate that OMPGPT outperforms existing large language models specialized in OpenMP tasks and maintains a notably smaller size, aligning it more closely with the typical hardware constraints of HPC environments. We consider our contribution as a pivotal bridge, connecting the advantage of language models with the specific demands of HPC tasks.",
        "previewImage": "assets/papers/firstpage/ompgpt.jpg"
      },
      {
        "slug": "ompar",
        "year": "2024",
        "title": "OMPar: Automatic Parallelization with AI-Driven Source-to-Source Compilation",
        "venue": "CoRR",
        "link": "https://doi.org/10.48550/arXiv.2409.14771",
        "authors": [
          "Tal Kadosh",
          "Niranjan Hasabnis",
          "Prema Soundararajan",
          "Vy A. Vo",
          "Mihai Capota",
          "Nesreen Ahmed",
          "Yuval Pinter",
          "Gal Oren"
        ],
        "abstract": "Manual parallelization of code remains a significant challenge due to the complexities of modern software systems and the widespread adoption of multi-core architectures. This paper introduces OMPar, an AI-driven tool designed to automate the parallelization of C/C++ code using OpenMP pragmas. OMPar integrates Large Language Models (LLMs) through two key components: OMPify, which assesses loop parallelization potential, and MonoCoder-OMP, a new fine-tuned model which generates precise OpenMP pragmas. The evaluation of OMPar follows the same rigorous process applied to traditional tools like source-to-source AutoPar and ICPC compilers: (1) ensuring the generated code compiles and runs correctly in serial form, (2) assessing performance with the gradual addition of threads and corresponding physical cores, and (3) verifying and validating the correctness of the code's output. Benchmarks from HeCBench and ParEval are used to evaluate accuracy and performance. Experimental results demonstrate that OMPar significantly outperforms traditional methods, achieving higher accuracy in identifying parallelizable loops and generating efficient pragmas. Beyond accuracy, OMPar offers advantages such as the ability to work on partial or incomplete codebases and the capacity to continuously learn from new code patterns, enhancing its parallelization capabilities over time. These results underscore the potential of LLMs in revolutionizing automatic parallelization techniques, paving the way for more efficient and scalable parallel computing systems.",
        "previewImage": "assets/papers/firstpage/ompar.jpg"
      },
      {
        "slug": "landscape-hpc-llms",
        "year": "2024",
        "title": "The Landscape and Challenges of HPC Research and LLMs",
        "venue": "CoRR",
        "link": "https://doi.org/10.48550/arXiv.2402.02018",
        "authors": [
          "Le Chen",
          "Nesreen K. Ahmed",
          "Akash Dutta",
          "Arijit Bhattacharjee",
          "Sixing Yu",
          "Quazi Ishtiaque Mahmud",
          "Waqwoya Abebe",
          "Hung Phan",
          "Aishwarya Sarkar",
          "Branden Butler",
          "Niranjan Hasabnis",
          "Gal Oren",
          "Vy A. Vo",
          "Juan Pablo Munoz",
          "Theodore L. Willke",
          "Tim Mattson",
          "Ali Jannesari"
        ],
        "abstract": "Recently, language models (LMs), especially large language models (LLMs), have revolutionized the field of deep learning. Both encoder-decoder models and prompt-based techniques have shown immense potential for natural language processing and code-based tasks. Over the past several years, many research labs and institutions have invested heavily in high-performance computing, approaching or breaching exascale performance levels. In this paper, we posit that adapting and utilizing such language model-based techniques for tasks in high-performance computing (HPC) would be very beneficial. This study presents our reasoning behind the aforementioned position and highlights how existing ideas can be improved and adapted for HPC tasks.",
        "previewImage": "assets/papers/firstpage/landscape-hpc-llms.jpg"
      },
      {
        "slug": "advising-openmp",
        "year": "2023",
        "title": "Advising OpenMP Parallelization via A Graph-Based Approach with Transformers",
        "venue": "IWOMP",
        "link": "https://doi.org/10.1007/978-3-031-40744-4_1",
        "authors": [
          "Tal Kadosh",
          "Nadav Schneider",
          "Niranjan Hasabnis",
          "Timothy Mattson",
          "Yuval Pinter",
          "Gal Oren"
        ],
        "abstract": "There is an ever-present need for shared memory parallelization schemes to exploit the full potential of multi-core architectures. The most common parallelization API addressing this need today is OpenMP. Nevertheless, writing parallel code manually is complex and effort-intensive. Thus, many deterministic source-to-source (S2S) compilers have emerged, intending to automate the process of translating serial to parallel code. However, recent studies have shown that these compilers are impractical in many scenarios. In this work, we combine the latest advancements in the field of AI and natural language processing (NLP) with the vast amount of open-source code to address the problem of automatic parallelization. Specifically, we propose a novel approach, called OMPify, to detect and predict the OpenMP pragmas and shared-memory attributes in parallel code, given its serial version. OMPify is based on a Transformer-based model that leverages a graph-based representation of source code that exploits the inherent structure of code. We evaluated our tool by predicting the parallelization pragmas and attributes of a large corpus of (over 54,000) snippets of serial code written in C and C++ languages (Open-OMP-Plus). Our results demonstrate that OMPify outperforms existing approaches, the general-purposed and popular ChatGPT and targeted PragFormer models, in terms of F1 score and accuracy. Specifically, OMPify achieves up to 90% accuracy on commonly-used OpenMP benchmark tests such as NAS, SPEC, and PolyBench. Additionally, we performed an ablation study to assess the impact of different model components and present interesting insights derived from the study. Lastly, we also explored the potential of using data augmentation and curriculum learning techniques to improve the model's robustness and generalization capabilities.",
        "previewImage": "assets/papers/firstpage/advising-openmp.jpg"
      },
      {
        "slug": "compcodevet-a-compiler-guided-validation-and-enhancement-approach-for-code-dataset",
        "year": "2023",
        "title": "CompCodeVet: A Compiler-guided Validation and Enhancement Approach for Code Dataset",
        "venue": "CoRR",
        "link": "https://doi.org/10.48550/arXiv.2311.06505",
        "authors": [
          "Chen, Le",
          "Bhattacharjee, Arijit",
          "Ahmed, Nesreen K.",
          "Hasabnis, Niranjan",
          "Oren, Gal",
          "Lei, Bin",
          "Jannesari, Ali"
        ],
        "abstract": "Large language models (LLMs) have become increasingly prominent in academia and industry due to their remarkable performance in diverse applications. As these models evolve with increasing parameters, they excel in tasks like sentiment analysis and machine translation. However, even models with billions of parameters face challenges in tasks demanding multi-step reasoning. Code generation and comprehension, especially in C and C++, emerge as significant challenges. While LLMs trained on code datasets demonstrate competence in many tasks, they struggle with rectifying non-compilable C and C++ code. Our investigation attributes this subpar performance to two primary factors: the quality of the training dataset and the inherent complexity of the problem which demands intricate reasoning. Existing \"Chain of Thought\" (CoT) prompting techniques aim to enhance multi-step reasoning. This approach, however, retains the limitations associated with the latent drawbacks of LLMs. In this work, we propose CompCodeVet, a compiler-guided CoT approach to produce compilable code from non-compilable ones. Diverging from the conventional approach of utilizing larger LLMs, we employ compilers as a teacher to establish a more robust zero-shot thought process. The evaluation of CompCodeVet on two open-source code datasets shows that CompCodeVet has the ability to improve the training dataset quality for LLMs.",
        "previewImage": "assets/papers/firstpage/compcodevet-a-compiler-guided-validation-and-enhancement-approach-for-code-dataset.jpg"
      },
      {
        "slug": "monocoder",
        "year": "2023",
        "title": "Domain-Specific Code Language Models: Unraveling the Potential for HPC Codes and Tasks",
        "venue": "CoRR",
        "link": "https://doi.org/10.48550/arXiv.2312.13322",
        "authors": [
          "Tal Kadosh",
          "Niranjan Hasabnis",
          "Vy A. Vo",
          "Nadav Schneider",
          "Neva Krien",
          "Mihai Capota",
          "Abdul Wasay",
          "Nesreen Ahmed",
          "Ted Willke",
          "Guy Tamir",
          "Yuval Pinter",
          "Timothy Mattson",
          "Gal Oren"
        ],
        "abstract": "With easier access to powerful compute resources, there is a growing trend in AI for software development to develop large language models (LLMs) to address a variety of programming tasks. Even LLMs applied to tasks from the high-performance computing (HPC) domain are huge in size and demand expensive compute resources for training. This is partly because LLMs for HPC tasks are obtained by finetuning existing LLMs that support several natural and/or programming languages. We found this design choice confusing - why do we need LLMs trained on natural languages and programming languages unrelated to HPC for HPC-specific tasks? In this line of work, we aim to question choices made by existing LLMs by developing smaller language models (LMs) for specific domains - we call them domain-specific LMs. Specifically, we start with HPC as a domain and build an HPC-specific LM, named MonoCoder, which is orders of magnitude smaller than existing LMs but delivers better performance on non-HPC and HPC codes. Specifically, we pre-trained MonoCoder on an HPC-specific dataset (named HPCorpus) of C and C++ programs mined from GitHub. We evaluated the performance of MonoCoder against state-of-the-art multi-lingual LLMs. Results demonstrate that MonoCoder, although much smaller than existing LMs, outperforms other LLMs on normalized-perplexity tests (in relation to model size) while also delivering competing CodeBLEU scores for high-performance and parallel code generations. In other words, results suggest that MonoCoder understands HPC code better than state-of-the-art LLMs.",
        "previewImage": "assets/papers/firstpage/monocoder.jpg"
      },
      {
        "slug": "learning-to-parallelize",
        "year": "2023",
        "title": "Learning to Parallelize in a Shared-Memory Environment with Transformers",
        "venue": "PPoPP",
        "link": "https://doi.org/10.1145/3572848.3582565",
        "authors": [
          "Re'em Harel",
          "Yuval Pinter",
          "Gal Oren"
        ],
        "abstract": "In past years, the world has switched to many-core and multi-core shared memory architectures. As a result, there is a growing need to utilize these architectures by introducing shared memory parallelization schemes to software applications. OpenMP is the most comprehensive API that implements such schemes, characterized by a readable interface. Nevertheless, introducing OpenMP into code is challenging due to pervasive pitfalls in management of parallel shared memory. To facilitate the performance of this task, many source-to-source (S2S) compilers have been created over the years, tasked with inserting OpenMP directives into code automatically. In addition to having limited robustness to their input format, these compilers still do not achieve satisfactory coverage and precision in locating parallelizable code and generating appropriate directives. In this work, we propose leveraging recent advances in ML techniques, specifically in natural language processing (NLP), to replace S2S compilers altogether. We create a database (corpus), Open-OMP, specifically for this goal. Open-OMP contains over 28,000 code snippets, half of which contain OpenMP directives while the other half do not need parallelization at all with high probability. We use the corpus to train systems to automatically classify code segments in need of parallelization, as well as suggest individual OpenMP clauses. We train several transformer models, named PragFormer, for these tasks, and show that they outperform statistically-trained baselines and automatic S2S parallelization compilers in both classifying the overall need for an OpenMP directive and the introduction of private and reduction clauses. Our source code and database are available at: https://github.com/Scientific-Computing-Lab-NRCN/PragFormer.",
        "previewImage": "assets/papers/firstpage/learning-to-parallelize.jpg"
      },
      {
        "slug": "mpirical",
        "year": "2023",
        "title": "MPI-RICAL: Data-Driven MPI Distributed Parallelism Assistance with Transformers",
        "venue": "SC Workshops",
        "link": "https://doi.org/10.1145/3624062.3624063",
        "authors": [
          "Nadav Schneider",
          "Tal Kadosh",
          "Niranjan Hasabnis",
          "Timothy Mattson",
          "Yuval Pinter",
          "Gal Oren"
        ],
        "abstract": "Message Passing Interface (MPI) plays a crucial role in distributed memory parallelization across multiple nodes. However, parallelizing MPI code manually, and specifically, performing domain decomposition, is a challenging, error-prone task. In this paper, we address this problem by developing MPI-RICAL, a novel data-driven, programming-assistance tool that assists programmers in writing domain decomposition based distributed memory parallelization code. Specifically, we train a supervised language model to suggest MPI functions and their proper locations in the code on the fly. We also introduce MPICodeCorpus, the first publicly available corpus of MPI-based parallel programs that is created by mining more than 15,000 open-source repositories on GitHub. Experimental results have been done on MPICodeCorpus and more importantly, on a compiled benchmark of MPI-based parallel programs for numerical computations that represent real-world scientific applications. MPI-RICAL achieves F1 scores between 0.87-0.91 on these programs, demonstrating its accuracy in suggesting correct MPI functions at appropriate code locations.. The source code used in this work, as well as other relevant sources, are available at: https://github.com/Scientific-Computing-Lab-NRCN/MPI-rical",
        "previewImage": "assets/papers/firstpage/mpirical.jpg"
      },
      {
        "slug": "portability-and-scalability-of-openmp-offloading-on-state-of-the-art-accelerators",
        "year": "2023",
        "title": "Portability and Scalability of OpenMP Offloading on State-of-the-Art Accelerators",
        "venue": "ISC Workshops",
        "link": "https://doi.org/10.1007/978-3-031-40843-4_28",
        "authors": [
          "Fridman, Yehonatan",
          "Tamir, Guy",
          "Oren, Gal"
        ],
        "abstract": "An evaluation of OpenMP offloading portability and scalability across contemporary accelerator hardware.",
        "previewImage": "assets/papers/firstpage/portability-and-scalability-of-openmp-offloading-on-state-of-the-art-accelerators.jpg"
      },
      {
        "slug": "quantifying-openmp",
        "year": "2023",
        "title": "Quantifying OpenMP: Statistical Insights into Usage and Adoption",
        "venue": "HPEC",
        "link": "https://doi.org/10.1109/HPEC58863.2023.10363459",
        "authors": [
          "Tal Kadosh",
          "Niranjan Hasabnis",
          "Timothy Mattson",
          "Yuval Pinter",
          "Gal Oren"
        ],
        "abstract": "In high-performance computing (HPC), the demand for efficient parallel programming models has grown dramatically since the end of Dennard Scaling and the subsequent move to multi-core CPUs. OpenMP stands out as a popular choice due to its simplicity and portability, offering a directive-driven approach for shared-memory parallel programming. Despite its wide adoption, however, there is a lack of comprehensive data on the actual usage of OpenMP constructs, hindering unbiased insights into its popularity and evolution. This paper presents a statistical analysis of OpenMP usage and adoption trends based on a novel and extensive database, HPCORPUS, compiled from GitHub repositories containing C, C++, and Fortran code. The results reveal that OpenMP is the dominant parallel programming model, accounting for 45% of all analyzed parallel APIs. Furthermore, it has demonstrated steady and continuous growth in popularity over the past decade. Analyzing specific OpenMP constructs, the study provides in-depth insights into their usage patterns and preferences across the three languages. Notably, we found that while OpenMP has a strong \"common core\" of constructs in common usage (while the rest of the API is less used), there are new adoption trends as well, such as simd and target directives for accelerated computing and task for irregular parallelism. Overall, this study sheds light on OpenMP's significance in HPC applications and provides valuable data for researchers and practitioners. It showcases OpenMP's versatility, evolving adoption, and relevance in contemporary parallel programming, underlining its continued role in HPC applications and beyond. These statistical insights are essential for making informed decisions about parallelization strategies and provide a foundation for further advancements in parallel programming models and techniques.",
        "previewImage": "assets/papers/firstpage/quantifying-openmp.jpg"
      },
      {
        "slug": "scope",
        "year": "2023",
        "title": "Scope is all you need: Transforming LLMs for HPC Code",
        "venue": "CoRR",
        "link": "https://doi.org/10.48550/arXiv.2308.09440",
        "authors": [
          "Tal Kadosh",
          "Niranjan Hasabnis",
          "Vy A. Vo",
          "Nadav Schneider",
          "Neva Krien",
          "Abdul Wasay",
          "Nesreen Ahmed",
          "Ted Willke",
          "Guy Tamir",
          "Yuval Pinter",
          "Timothy Mattson",
          "Gal Oren"
        ],
        "abstract": "With easier access to powerful compute resources, there is a growing trend in the field of AI for software development to develop larger and larger language models (LLMs) to address a variety of programming tasks. Even LLMs applied to tasks from the high-performance computing (HPC) domain are huge in size (e.g., billions of parameters) and demand expensive compute resources for training. We found this design choice confusing - why do we need large LLMs trained on natural languages and programming languages unrelated to HPC for HPC-specific tasks? In this line of work, we aim to question design choices made by existing LLMs by developing smaller LLMs for specific domains - we call them domain-specific LLMs. Specifically, we start off with HPC as a domain and propose a novel tokenizer named Tokompiler, designed specifically for preprocessing code in HPC and compilation-centric tasks. Tokompiler leverages knowledge of language primitives to generate language-oriented tokens, providing a context-aware understanding of code structure while avoiding human semantics attributed to code structures completely. We applied Tokompiler to pre-train two state-of-the-art models, SPT-Code and Polycoder, for a Fortran code corpus mined from GitHub. We evaluate the performance of these models against the conventional LLMs. Results demonstrate that Tokompiler significantly enhances code completion accuracy and semantic understanding compared to traditional tokenizers in normalized-perplexity tests, down to ~1 perplexity score. This research opens avenues for further advancements in domain-specific LLMs, catering to the unique demands of HPC and compilation tasks.",
        "previewImage": "assets/papers/firstpage/scope.jpg"
      }
    ]
  },
  {
    "title": "Scientific Computing / HPC / Distributed Foundations",
    "note": "Earlier work that forms the substrate for the current research\n            directions.",
    "papers": [
      {
        "slug": "cxl-memory",
        "year": "2023",
        "title": "CXL Memory as Persistent Memory for Disaggregated HPC: A Practical Approach",
        "venue": "SC Workshops",
        "link": "https://doi.org/10.1145/3624062.3624175",
        "authors": [
          "Yehonatan Fridman",
          "Suprasad Mutalik Desai",
          "Navneet Singh",
          "Thomas Willhalm",
          "Gal Oren"
        ],
        "abstract": "In the landscape of High-Performance Computing (HPC), the quest for efficient and scalable memory solutions remains paramount. The advent of Compute Express Link (CXL) introduces a promising avenue with its potential to function as a Persistent Memory (PMem) solution in the context of disaggregated HPC systems. This paper presents a comprehensive exploration of CXL memory's viability as a candidate for PMem, supported by physical experiments conducted on cutting-edge multi-NUMA nodes equipped with CXL-attached memory prototypes. Our study not only benchmarks the performance of CXL memory but also illustrates the seamless transition from traditional PMem programming models to CXL, reinforcing its practicality. To substantiate our claims, we establish a tangible CXL prototype using an FPGA card embodying CXL 1.1/2.0 compliant endpoint designs (Intel FPGA CXL IP). Performance evaluations, executed through the STREAM and STREAM-PMem benchmarks, showcase CXL memory's ability to mirror PMem characteristics in App-Direct and Memory Mode while achieving impressive bandwidth metrics with Intel 4th generation Xeon (Sapphire Rapids) processors. The results elucidate the feasibility of CXL memory as a persistent memory solution, outperforming previously established benchmarks. In contrast to published DCPMM results, our CXL-DDR4 memory module offers comparable bandwidth to local DDR4 memory configurations, albeit with a moderate decrease in performance. The modified STREAM-PMem application underscores the ease of transitioning programming models from PMem to CXL, thus underscoring the practicality of adopting CXL memory.",
        "previewImage": "assets/papers/firstpage/cxl-memory.jpg"
      },
      {
        "slug": "distributed-backup-placement",
        "year": "2022",
        "title": "Distributed backup placement",
        "venue": "Distributed Computing",
        "link": "https://doi.org/10.1007/s00446-022-00423-z",
        "authors": [
          "Leonid Barenboim",
          "Gal Oren"
        ],
        "abstract": "A journal-level treatment of distributed backup placement and its algorithmic applications in overloaded and resource-constrained distributed settings.",
        "previewImage": "assets/papers/firstpage/distributed-backup-placement.jpg"
      },
      {
        "slug": "nvm-esr",
        "year": "2022",
        "title": "NVM-ESR: Using Non-Volatile Memory in Exact State Reconstruction of Preconditioned Conjugate Gradient",
        "venue": "CoRR",
        "link": "https://doi.org/10.48550/arXiv.2204.11584",
        "authors": [
          "Yehonatan Fridman",
          "Yaniv Snir",
          "Harel Levin",
          "Danny Hendler",
          "Hagit Attiya",
          "Gal Oren"
        ],
        "abstract": "HPC systems are a critical resource for scientific research. The increased demand for computational power and memory ushers in the exascale era, in which supercomputers are designed to provide enormous computing power to meet these needs. These complex supercomputers consist of numerous compute nodes and are consequently expected to experience frequent faults and crashes. Mathematical solvers, in particular, iterative linear solvers are key building block in numerous large-scale scientific applications. Consequently, supporting the recovery of distributed solvers is necessary for scaling scientific applications to exascale platforms. Previous recovery methods for iterative solvers are based on Checkpoint-Restart (CR), which incurs high fault tolerance overhead, or intrinsic fault tolerance, which require extra computation time to converge after failures. Exact state reconstruction (ESR) was proposed as an alternative mechanism to alleviate the impact of frequent failures on long-term computations. ESR has been shown to provide exact reconstruction of the computation state while avoiding the need for costly checkpointing. However, ESR currently relies on volatile memory for fault tolerance, and must therefore maintain redundancies in the RAM of multiple nodes, incurring high memory and network overheads. Recent supercomputer designs feature emerging non-volatile RAM (NVRAM) technology. This paper investigates how NVRAM can be utilized to devise an enhanced ESR-based recovery mechanism that is more efficient and provides full resilience. Our mechanism, called in-NVRAM ESR, is based on a novel MPI One-Sided Communication (OSC) over RDMA implementation, and provides full resiliency while significantly reducing both the memory footprint and the time overhead in comparison with the original ESR design (in-RAM ESR).",
        "previewImage": "assets/papers/firstpage/nvm-esr.jpg"
      },
      {
        "slug": "nvm-esr",
        "year": "2022",
        "title": "Recovery of Distributed Iterative Solvers for Linear Systems Using Non-Volatile RAM",
        "venue": "FTXS@SC",
        "link": "https://doi.org/10.1109/FTXS56515.2022.00007",
        "authors": [
          "Yehonatan Fridman",
          "Yaniv Snir",
          "Harel Levin",
          "Danny Hendler",
          "Hagit Attiya",
          "Gal Oren"
        ],
        "abstract": "HPC systems are a critical resource for scientific research. The increased demand for computational power and memory ushers in the exascale era, in which supercomputers are designed to provide enormous computing power to meet these needs. These complex supercomputers consist of numerous compute nodes and are consequently expected to experience frequent faults and crashes. Mathematical solvers, in particular, iterative linear solvers are key building block in numerous large-scale scientific applications. Consequently, supporting the recovery of distributed solvers is necessary for scaling scientific applications to exascale platforms. Previous recovery methods for iterative solvers are based on Checkpoint-Restart (CR), which incurs high fault tolerance overhead, or intrinsic fault tolerance, which require extra computation time to converge after failures. Exact state reconstruction (ESR) was proposed as an alternative mechanism to alleviate the impact of frequent failures on long-term computations. ESR has been shown to provide exact reconstruction of the computation state while avoiding the need for costly checkpointing. However, ESR currently relies on volatile memory for fault tolerance, and must therefore maintain redundancies in the RAM of multiple nodes, incurring high memory and network overheads. Recent supercomputer designs feature emerging non-volatile RAM (NVRAM) technology. This paper investigates how NVRAM can be utilized to devise an enhanced ESR-based recovery mechanism that is more efficient and provides full resilience. Our mechanism, called in-NVRAM ESR, is based on a novel MPI One-Sided Communication (OSC) over RDMA implementation, and provides full resiliency while significantly reducing both the memory footprint and the time overhead in comparison with the original ESR design (in-RAM ESR).",
        "previewImage": "assets/papers/firstpage/nvm-esr.jpg"
      },
      {
        "slug": "scalsale-scalable-sale-benchmark-framework-for-supercomputers",
        "year": "2022",
        "title": "ScalSALE: Scalable SALE Benchmark Framework for Supercomputers",
        "venue": "CoRR",
        "link": "https://doi.org/10.48550/arXiv.2209.01983",
        "authors": [
          "Harel, Re'em",
          "Rusanovsky, Matan",
          "Wagner, Ron",
          "Levin, Harel",
          "Oren, Gal"
        ],
        "abstract": "Supercomputers worldwide provide the necessary infrastructure for groundbreaking research. However, most supercomputers are not designed equally due to different desired figure of merit, which is derived from the computational bounds of the targeted scientific applications' portfolio. In turn, the design of such computers becomes an optimization process that strives to achieve the best performances possible in a multi-parameters search space. Therefore, verifying and evaluating whether a supercomputer can achieve its desired goal becomes a tedious and complex task. For this purpose, many full, mini, proxy, and benchmark applications have been introduced in the attempt to represent scientific applications. Nevertheless, as these benchmarks are hard to expand, and most importantly, are over-simplified compared to scientific applications that tend to couple multiple scientific domains, they fail to represent the true scaling capabilities. We suggest a new physical scalable benchmark framework, namely ScalSALE, based on the well-known SALE scheme. ScalSALE's main goal is to provide a simple, flexible, scalable infrastructure that can be easily expanded to include multi-physical schemes while maintaining scalable and efficient execution times. By expanding ScalSALE, the gap between the over-simplified benchmarks and scientific applications can be bridged. To achieve this goal, ScalSALE is implemented in Modern Fortran with simple OOP design patterns and supported by transparent MPI-3 blocking and non-blocking communication that allows such a scalable framework. ScalSALE is compared to LULESH via simulating the Sedov-Taylor blast wave problem using strong and weak scaling tests. ScalSALE is executed and evaluated with both rezoning options - Lagrangian and Eulerian.",
        "previewImage": "assets/papers/firstpage/scalsale-scalable-sale-benchmark-framework-for-supercomputers.jpg"
      },
      {
        "slug": "assessing-pmem",
        "year": "2021",
        "title": "Assessing the Use Cases of Persistent Memory in High-Performance Scientific Computing",
        "venue": "FTXS@SC",
        "link": "https://doi.org/10.1109/FTXS54580.2021.00006",
        "authors": [
          "Yehonatan Fridman",
          "Yaniv Snir",
          "Matan Rusanovsky",
          "Kfir Zvi",
          "Harel Levin",
          "Danny Hendler",
          "Hagit Attiya",
          "Gal Oren"
        ],
        "abstract": "As the High Performance Computing world moves towards the Exa-Scale era, huge amounts of data should be analyzed, manipulated and stored. In the traditional storage/memory hierarchy, each compute node retains its data objects in its local volatile DRAM. Whenever the DRAM's capacity becomes insufficient for storing this data, the computation should either be distributed between several compute nodes, or some portion of these data objects must be stored in a non-volatile block device such as a hard disk drive or an SSD storage device. Optane DataCenter Persistent Memory Module (DCPMM), a new technology introduced by Intel, provides non-volatile memory that can be plugged into standard memory bus slots and therefore be accessed much faster than standard storage devices. In this work, we present and analyze the results of a comprehensive performance assessment of several ways in which DCPMM can 1) replace standard storage devices, and 2) replace or augment DRAM for improving the performance of HPC scientific computations. To achieve this goal, we have configured an HPC system such that DCPMM can service I/O operations of scientific applications, replace standard storage devices and file systems (specifically for diagnostics and checkpoint-restarting), and serve for expanding applications' main memory. We focus on keeping the scientific codes with as few changes as possible, while allowing them to access the NVM transparently as if they access persistent storage. Our results show that DCPMM allows scientific applications to fully utilize nodes' locality by providing them with sufficiently-large main memory. Moreover, it can be used for providing a high-performance replacement for persistent storage. Thus, the usage of DCPMM has the potential of replacing standard HDD and SSD storage devices in HPC architectures and enabling a more efficient platform for modern supercomputing applications.",
        "previewImage": "assets/papers/firstpage/assessing-pmem.jpg"
      },
      {
        "slug": "backup-placement-in-wsns-in-the-network-management-distributed-setting",
        "year": "2021",
        "title": "Backup Placement in WSNs in the Network Management Distributed Setting",
        "venue": "ICDCS Workshops",
        "link": "https://doi.org/10.1109/ICDCSW53096.2021.00015",
        "authors": [],
        "abstract": "Backup placement framed in a wireless sensor network management setting with distributed constraints.",
        "previewImage": null
      },
      {
        "slug": "distributed-backup-k-placement-and-applications-to-virtual-memory-in-wireless-networks",
        "year": "2021",
        "title": "Distributed Backup K-Placement and Applications to Virtual Memory in Wireless Networks",
        "venue": "ICDCN Adjunct",
        "link": "https://doi.org/10.1145/3427477.3429466",
        "authors": [],
        "abstract": "Distributed backup k-placement with applications tied to virtual memory and wireless-network settings.",
        "previewImage": null
      },
      {
        "slug": "compar",
        "year": "2020",
        "title": "ComPar: Optimized Multi-Compiler for Automatic OpenMP S2S Parallelization",
        "venue": "IWOMP",
        "link": "https://doi.org/10.1007/978-3-030-58144-2_16",
        "authors": [
          "Idan Mosseri",
          "Lee-or Alon",
          "Re'em Harel",
          "Gal Oren"
        ],
        "abstract": "Parallelization schemes are essential in order to exploit the full benefits of multi-core architectures. In said architectures, the most comprehensive parallelization API is OpenMP. However, the introduction of correct and optimal OpenMP parallelization to applications is not always a simple task, due to common parallel management pitfalls, architecture heterogeneity and the current necessity for human expertise in order to comprehend many fine details and abstract correlations. To ease this process, many automatic parallelization compilers were created over the last decade. Harel et al. [2020] tested several source-to-source compilers and concluded that each has its advantages and disadvantages and no compiler is superior to all other compilers in all tests. This indicates that a fusion of the compilers' best outputs under the best hyper-parameters for the current hardware setups can yield greater speedups. To create such a fusion, one should execute a computationally intensive hyper-parameter sweep, in which the performance of each option is estimated and the best option is chosen. We created a novel parallelization source-to-source multi-compiler named ComPar, which uses code segmentation-and-fusion with hyper-parameters tuning to achieve the best parallel code possible without any human intervention while maintaining the program's validity. In this paper we present ComPar and analyze its results on NAS and PolyBench benchmarks. We conclude that although the resources ComPar requires to produce parallel code are greater than other source-to-source parallelization compilers - as it depends on the number of parameters the user wishes to consider, and their combinations - ComPar achieves superior performance overall compared to the serial code version and other tested parallelization compilers. ComPar is publicly available at: https://github.com/Scientific-Computing-Lab-NRCN/compar.",
        "previewImage": "assets/papers/firstpage/compar.jpg"
      },
      {
        "slug": "s2s-compilers",
        "year": "2020",
        "title": "Source-to-Source Parallelization Compilers for Scientific Shared-Memory Multi-core and Accelerated Multiprocessing: Analysis, Pitfalls, Enhancement and Potential",
        "venue": "International Journal of Parallel Programming",
        "link": "https://doi.org/10.1007/s10766-019-00640-3",
        "authors": [
          "Re’em Harel",
          "Idan Mosseri",
          "Harel Levin",
          "Lee-or Alon",
          "Matan Rusanovsky",
          "Gal Oren"
        ],
        "abstract": "Parallelization schemes are essential in order to exploit the full benefits of multi-core architectures, which have become widespread in recent years, espe",
        "previewImage": "assets/papers/firstpage/s2s-compilers.jpg"
      },
      {
        "slug": "distributed-backup-one-round",
        "year": "2020",
        "title": "Distributed Backup Placement in One Round and its Applications to Maximum Matching Approximation and Self-Stabilization",
        "venue": "SOSA",
        "link": "https://doi.org/10.1137/1.9781611976014.14",
        "authors": [
          "Leonid Barenboim",
          "Gal Oren"
        ],
        "abstract": "In the distributed backup-placement problem each node of a network has to select one neighbor, such that the maximum number of nodes that make the same selection is minimized. This is a natural relaxation of the perfect matching problem, in which each node is selected just by one neighbor. Previous (approximate) solutions for backup placement are non-trivial, even for simple graph topologies, such as dense graphs. In this paper we devise an algorithm for dense graph topologies, including unit disk graphs, unit ball graphs, line graphs, graphs with bounded diversity, and many more. Our algorithm requires just one round, and is as simple as the following operation. Consider a circular list of neighborhood IDs, sorted in an ascending order, and select the ID that is next to the selecting vertex ID. Surprisingly, such a simple one-round strategy turns out to be very efficient for backup placement computation in dense networks. Not only that it improves the number of rounds of the solution, but also the approximation ratio is improved by a multiplicative factor of at least $2$. Our new algorithm has several interesting implications. In particular, it gives rise to a $(2 + \\epsilon)$-approximation to maximum matching within $O(\\log^* n)$ rounds in dense networks. The resulting algorithm is very simple as well, in sharp contrast to previous algorithms that compute such a solution within this running time. Moreover, these algorithms are applicable to a narrower graph family than our algorithm. For the same graph family, the best previously-known result has $O(\\log {\\Delta} + \\log^* n)$ running time. Another interesting implication is the possibility to execute our backup placement algorithm as-is in the self-stabilizing setting. This makes it possible to simplify and improve other algorithms for the self-stabilizing setting, by employing helpful properties of backup placement.",
        "previewImage": "assets/papers/firstpage/distributed-backup-one-round.jpg"
      },
      {
        "slug": "fast-distributed-backup-placement-in-sparse-and-dense-networks",
        "year": "2020",
        "title": "Fast Distributed Backup Placement in Sparse and Dense Networks",
        "venue": "APOCS",
        "link": "https://doi.org/10.1137/1.9781611976021.7",
        "authors": [],
        "abstract": "A distributed algorithms paper on fast backup placement in sparse and dense network regimes.",
        "previewImage": null
      },
      {
        "slug": "acceleration-of-hydro-poro-elastic-damage-simulation-in-a-shared-memory-environment",
        "year": "2019",
        "title": "Acceleration of Hydro Poro-Elastic Damage Simulation in a Shared-Memory Environment",
        "venue": "PARCO",
        "link": "https://doi.org/10.3233/APC200059",
        "authors": [
          "Levin, Harel",
          "Oren, Gal",
          "Shalev, Eyal",
          "Lyakhovsky, Vladimir"
        ],
        "abstract": "Shared-memory acceleration of hydro poro-elastic damage simulation workloads.",
        "previewImage": null
      },
      {
        "slug": "backus",
        "year": "2019",
        "title": "BACKUS: Comprehensive High-Performance Research Software Engineering Approach for Simulations in Supercomputing Systems",
        "venue": "CoRR",
        "link": "http://arxiv.org/abs/1910.06415",
        "authors": [
          "Matan Rusanovsky",
          "Re'em Harel",
          "Lee-or Alon",
          "Idan Mosseri",
          "Harel Levin",
          "Gal Oren"
        ],
        "abstract": "High-Performance Computing (HPC) platforms enable scientific software to achieve breakthroughs in many research fields such as physics, biology, and chemistry, by employing Research Software Engineering (RSE) techniques. These include 1) novel parallelism paradigms such as Shared Memory Parallelism (with e.g. OpenMP 4.5); Distributed Memory Parallelism (with e.g. MPI 4); Hybrid Parallelism which combines them; and Heterogeneous Parallelism (for CPUs, co-processors and accelerators), 2) introducing advanced Software Engineering concepts such as Object Oriented Parallel Programming (OOPP); Parallel Unit testing; Parallel I/O Formats; Hybrid Parallel Visualization; and 3) Selecting the Best Practices in other necessary areas such as User Interface; Automatic Documentation; Version Control and Project Management. In this work we present BACKUS: Comprehensive High-Performance Research Software Engineering Approach for Simulations in Supercomputing Systems, which we found to fit best for long-lived parallel scientific codes.",
        "previewImage": "assets/papers/firstpage/backus.jpg"
      },
      {
        "slug": "graphix-a-fast-human-computer-interaction-symmetric-multiprocessing-parallel-scientific-visualization-tool",
        "year": "2019",
        "title": "GraphiX: A Fast Human-Computer Interaction Symmetric Multiprocessing Parallel Scientific Visualization Tool",
        "venue": "PARCO",
        "link": "https://doi.org/10.3233/APC200079",
        "authors": [
          "Harel, Re’em",
          "Oren, Gal"
        ],
        "abstract": "A parallel scientific visualization tool focused on symmetric multiprocessing settings and interactive use.",
        "previewImage": null
      }
    ]
  }
];
