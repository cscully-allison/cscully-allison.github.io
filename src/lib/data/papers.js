/**
 * @typedef {{
 *   id: string,
 *   disabled: boolean,
 *   title: string,
 *   authors: string[],
 *   year: number,
 *   venue: string,
 *   abstract: string,
 *   image: string | null,
 *   links: Array<{label: string, url: string}>,
 *   bibtex: string
 * }} Paper
 */

/**
 * Research papers in reverse chronological order.
 * Set disabled: true to hide a paper from the public list without deleting it.
 * Images: place files at static/paper-images/{id}.png and update the image field.
 *
 * @type {Paper[]}
 */
export const papers = [
	{
		id: 'same-data-2026',
		disabled: false,
		title:
			'Same Data, Different Audiences: Using Personas to Scope a Supercomputing Job Queue Visualization',
		authors: [
			'Connor Scully-Allison',
			'Kevin Menear',
			'Kristin Potter',
			'Andrew McNutt',
			'Katherine E. Isaacs',
			'Dmitry Duplyakin'
		],
		year: 2026,
		venue: 'IEEE Transactions on Visualization and Computer Graphics',
		abstract:
			'Domain-specific visualizations sometimes focus on narrow, albeit important, tasks for one group of users. This focus limits the utility of a visualization to other groups working with the same data. We present Guidepost, a visualization tool designed to serve multiple stakeholder groups—scientists assessing compute wait times, machine learning researchers evaluating prediction accuracy, and system administrators examining usage patterns. Through a personas-based design methodology, we categorized tasks as either shared across groups (supported through interactive visualizations) or unique to individual personas (addressed via scripting capabilities). Real-world case studies and task-focused evaluation with nine participants demonstrated that Guidepost\'s visual encodings, interactions, and export capabilities support the tasks of our differing personas.',
		image: null,
		links: [{ label: 'DOI', url: 'https://doi.org/10.1109/TVCG.2026.3666137' }],
		bibtex: `@article{scullyallison2026samedata,
  title   = {Same Data, Different Audiences: Using Personas to Scope a Supercomputing Job Queue Visualization},
  author  = {Scully-Allison, Connor and Menear, Kevin and Potter, Kristin and McNutt, Andrew and Isaacs, Katherine E. and Duplyakin, Dmitry},
  year    = {2026},
  journal = {IEEE Transactions on Visualization and Computer Graphics},
  doi     = {10.1109/TVCG.2026.3666137}
}`
	},
	{
		id: 'tale-two-models-2025',
		disabled: false,
		title:
			"A Tale of Two Models: Understanding Data Workers' Internal and External Representations of Complex Data",
		authors: [
			'Connor Scully-Allison',
			'Katy Williams',
			'Stephanie Brink',
			'Olga Pearce',
			'Katherine E. Isaacs'
		],
		year: 2025,
		venue: 'arXiv preprint',
		abstract:
			'Data workers may have a different mental model of their data than the one reified in code. We examine how individuals conceptualize data organization through interviews and sketching exercises with a team performing complex performance data analysis. We found that team members working with identical data structures held divergent mental representations, resulting in parallel hazards limiting their ability to reason about the data. We propose design recommendations for improving data analysis tools and workflows based on these findings.',
		image: null,
		links: [
			{ label: 'arXiv', url: 'https://arxiv.org/abs/2501.09862' },
			{ label: 'DOI', url: 'https://doi.org/10.48550/arXiv.2501.09862' }
		],
		bibtex: `@misc{scullyallison2025tale,
  title         = {A Tale of Two Models: Understanding Data Workers' Internal and External Representations of Complex Data},
  author        = {Scully-Allison, Connor and Williams, Katy and Brink, Stephanie and Pearce, Olga and Isaacs, Katherine E.},
  year          = {2025},
  eprint        = {2501.09862},
  archivePrefix = {arXiv},
  doi           = {10.48550/arXiv.2501.09862}
}`
	},
	{
		id: 'evaluating-communication-2024',
		disabled: false,
		title: 'Evaluating Communication Pattern Representations in Execution Trace Gantt Charts',
		authors: ['Connor Scully-Allison', 'Katherine E. Isaacs'],
		year: 2024,
		venue: 'IEEE Working Conference on Software Visualization (VISSOFT)',
		abstract:
			'Gantt charts are frequently used to explore execution traces of large-scale parallel programs. In these visualizations, each parallel processor is assigned a row showing the computation state of a processor at a particular time. Lines are drawn between rows to show communication between these processors. When drawn to align equivalent calls across rows, visual patterns can emerge reflecting communication behavior of the executing code. However, though these patterns have the same definition at any scale, they can be obscured by the density of rendered lines when displaying more than a few hundred processors. We seek to understand the effectiveness of various strategies for recognizing these patterns in Gantt charts. Specifically, we conduct a pre-registered user study comparing recognition of patterns when viewing all processors, a subset of processors, or a set of abstracted glyphs overlaid on the chart. We find that for simple patterns, the glyphs are more effective in general pattern recognition while the zoomed subsets provide nuance to specific characteristics, such as offsets, in patterns. These results suggest the development of a combined approach may be appropriate to enable pattern comprehension in large-scale Gantt charts.',
		image: null,
		links: [{ label: 'DOI', url: 'https://doi.org/10.1109/VISSOFT64034.2024.00011' }],
		bibtex: `@inproceedings{scullyallison2024evaluating,
  title     = {Evaluating Communication Pattern Representations in Execution Trace Gantt Charts},
  author    = {Scully-Allison, Connor and Isaacs, Katherine E.},
  year      = {2024},
  booktitle = {2024 IEEE Working Conference on Software Visualization (VISSOFT)},
  doi       = {10.1109/VISSOFT64034.2024.00011}
}`
	},
	{
		id: 'quantifying-uncertainty-2024',
		disabled: false,
		title: 'Quantifying Uncertainty in HPC Job Queue Time Predictions',
		authors: ['Kevin Menear', 'Connor Scully-Allison', 'Dmitry Duplyakin'],
		year: 2024,
		venue: 'Practice and Experience in Advanced Research Computing (PEARC)',
		abstract:
			'We address a significant gap in HPC Operational Data Analytics by focusing on uncertainty quantification in predictive models. Only 1 out of 14 existing studies focused on job queue time prediction investigates the uncertainty aspect. We develop a methodology for establishing confidence bounds around queue time predictions from regression models and demonstrate that uncertainty analysis provides critical context for helping stakeholders interpret predictive insights accurately. While our current work targets queue time forecasting, our approach extends to predicting other operational metrics in high-performance computing environments.',
		image: null,
		links: [{ label: 'DOI', url: 'https://doi.org/10.1145/3626203.3670627' }],
		bibtex: `@inproceedings{menear2024quantifying,
  title     = {Quantifying Uncertainty in {HPC} Job Queue Time Predictions},
  author    = {Menear, Kevin and Scully-Allison, Connor and Duplyakin, Dmitry},
  year      = {2024},
  booktitle = {Practice and Experience in Advanced Research Computing 2024 (PEARC '24)},
  doi       = {10.1145/3626203.3670627}
}`
	},
	{
		id: 'design-concerns-2024',
		disabled: false,
		title:
			'Design Concerns for Integrated Scripting and Interactive Visualization in Notebook Environments',
		authors: [
			'Connor Scully-Allison',
			'Ian Lumsden',
			'Katy Williams',
			'Jessica Bartels',
			'Michela Taufer',
			'Stephanie Brink',
			'Abhinav Bhatele',
			'Olga Pearce',
			'Katherine E. Isaacs'
		],
		year: 2024,
		venue: 'IEEE Transactions on Visualization and Computer Graphics',
		abstract:
			'We examine how to effectively combine interactive visualization with scripting capabilities in computational notebooks. Conducting a design study focused on calling context trees for performance analysis, we explored how to balance direct manipulation with programmatic querying. We performed task analysis to determine which interactions suit graphical versus scripting contexts, then developed and validated a notebook-embedded visualization prototype. Follow-up testing with multiple interaction modes revealed user support for the proposed design approach, yielding insights on merging visualization and scripting in notebook environments.',
		image: null,
		links: [
			{ label: 'DOI', url: 'https://doi.org/10.1109/TVCG.2024.3354561' },
			{ label: 'arXiv', url: 'https://arxiv.org/abs/2205.04557' }
		],
		bibtex: `@article{scullyallison2024design,
  title   = {Design Concerns for Integrated Scripting and Interactive Visualization in Notebook Environments},
  author  = {Scully-Allison, Connor and Lumsden, Ian and Williams, Katy and Bartels, Jessica and Taufer, Michela and Brink, Stephanie and Bhatele, Abhinav and Pearce, Olga and Isaacs, Katherine E.},
  year    = {2024},
  journal = {IEEE Transactions on Visualization and Computer Graphics},
  doi     = {10.1109/TVCG.2024.3354561}
}`
	},
	{
		id: 'thicket-2023',
		disabled: false,
		title:
			'Thicket: Seeing the Performance Experiment Forest for the Individual Run Trees',
		authors: [
			'Stephanie Brink',
			'Michael McKinsey',
			'David Boehme',
			'Connor Scully-Allison',
			'Ian Lumsden',
			'Daryl Hawkins',
			'Treece Burgess',
			'Vanessa Lama',
			'Jakob Lüttgau',
			'Katherine E. Isaacs',
			'Michela Taufer',
			'Olga Pearce'
		],
		year: 2023,
		venue: 'ACM International Symposium on High-Performance Parallel and Distributed Computing (HPDC)',
		abstract:
			'Thicket is an open-source Python toolkit for Exploratory Data Analysis (EDA) of multi-run performance experiments. It facilitates analysis of optimal performance configurations for large-scale applications across multiple dimensions—platforms, measurement tools, and scales. The toolkit comprises three modular components: a data structure for multi-dimensional performance data built from call trees, metadata for dimension distinction and sub-selection, and a dimensionality reduction mechanism for statistical aggregation. It integrates extensible analysis capabilities including performance modeling and interactive visualization. We demonstrate effectiveness through case studies using the RAJA Performance Suite and a physics simulation across HPC and cloud environments.',
		image: null,
		links: [
			{ label: 'DOI', url: 'https://doi.org/10.1145/3588195.3592989' },
			{ label: 'PDF', url: 'https://dl.acm.org/doi/pdf/10.1145/3588195.3592989' }
		],
		bibtex: `@inproceedings{brink2023thicket,
  title     = {Thicket: Seeing the Performance Experiment Forest for the Individual Run Trees},
  author    = {Brink, Stephanie and McKinsey, Michael and Boehme, David and Scully-Allison, Connor and Lumsden, Ian and Hawkins, Daryl and Burgess, Treece and Lama, Vanessa and L{\\"u}ttgau, Jakob and Isaacs, Katherine E. and Taufer, Michela and Pearce, Olga},
  year      = {2023},
  booktitle = {Proceedings of the 32nd International Symposium on High-Performance Parallel and Distributed Computing},
  doi       = {10.1145/3588195.3592989}
}`
	},
	{
		id: 'vfirelib-2023',
		disabled: false,
		title: 'vFirelib: A GPU-Based Fire Simulation and Visualization Tool',
		authors: [
			'Rui Wu',
			'Connor Scully-Allison',
			'Chase D. Carthen',
			'Andy Garcia',
			'R. Hoang',
			'Christopher Lewis',
			'Ronn Siedrik Quijada',
			'Jessica Smith',
			'Sergiu Dascalu',
			'Frederick C. Harris Jr.'
		],
		year: 2023,
		venue: 'SoftwareX',
		abstract:
			'[Abstract to be added.]',
		image: null,
		links: [{ label: 'DOI', url: 'https://doi.org/10.1016/j.softx.2023.101411' }],
		bibtex: `@article{wu2023vfirelib,
  title   = {{vFirelib}: A {GPU}-Based Fire Simulation and Visualization Tool},
  author  = {Wu, Rui and Scully-Allison, Connor and Carthen, Chase D. and Garcia, Andy and Hoang, R. and Lewis, Christopher and Quijada, Ronn Siedrik and Smith, Jessica and Dascalu, Sergiu and Harris, Frederick C.},
  year    = {2023},
  journal = {SoftwareX},
  doi     = {10.1016/j.softx.2023.101411}
}`
	},
	{
		id: 'traveler-2022',
		disabled: false,
		title: 'Traveler: Navigating Task Parallel Traces for Performance Analysis',
		authors: [
			'Sayef Azad Sakin',
			'Alex Bigelow',
			'R. Tohid',
			'Connor Scully-Allison',
			'Carlos Scheidegger',
			'Steven R. Brandt',
			'Christopher Taylor',
			'Kevin Huck',
			'Hartmut Kaiser',
			'Katherine E. Isaacs'
		],
		year: 2022,
		venue: 'IEEE Transactions on Visualization and Computer Graphics',
		abstract:
			'Understanding the behavior of software in execution is a key step in identifying and fixing performance issues, particularly in high-performance computing. We describe Traveler, an interactive visualization platform designed to help performance analysts explore execution traces from task-parallel programs. Traveler provides multiple linked interfaces to help navigate trace data from multiple contexts and addresses challenges posed by large-scale, nanosecond-level event data across parallel processes. Testing revealed the platform supported analytical tasks and uncovered previously undetected behavior in a distributed array library.',
		image: null,
		links: [
			{ label: 'DOI', url: 'https://doi.org/10.1109/TVCG.2022.3209375' },
			{ label: 'PDF', url: 'https://arxiv.org/pdf/2208.00109' }
		],
		bibtex: `@article{sakin2022traveler,
  title   = {Traveler: Navigating Task Parallel Traces for Performance Analysis},
  author  = {Sakin, Sayef Azad and Bigelow, Alex and Tohid, R. and Scully-Allison, Connor and Scheidegger, Carlos and Brandt, Steven R. and Taylor, Christopher and Huck, Kevin and Kaiser, Hartmut and Isaacs, Katherine E.},
  year    = {2022},
  journal = {IEEE Transactions on Visualization and Computer Graphics},
  doi     = {10.1109/TVCG.2022.3209375}
}`
	},
	{
		id: 'call-path-querying-2022',
		disabled: false,
		title:
			'Enabling Call Path Querying in Hatchet to Identify Performance Bottlenecks in Scientific Applications',
		authors: [
			'Ian Lumsden',
			'Jakob Lüttgau',
			'Vanessa Lama',
			'Connor Scully-Allison',
			'Stephanie Brink',
			'Katherine E. Isaacs',
			'Olga Pearce',
			'Michela Taufer'
		],
		year: 2022,
		venue: 'IEEE International Conference on e-Science',
		abstract:
			'We address complexity in analyzing performance data from large-scale HPC systems by extending Hatchet, a performance analysis library. We introduce a Call Path Query Language that leverages relational data in the performance analysis of scientific applications, enabling pattern matching for data reduction across call paths. Three case studies demonstrate the approach: examining sequential versus multi-threaded versions of Fido (revealing memory inefficiencies), analyzing MPI function performance in AMG2013 across different implementations, and showcasing interactive visualization capabilities that substantially reduce profiling datasets.',
		image: null,
		links: [
			{ label: 'DOI', url: 'https://doi.org/10.1109/eScience55777.2022.00039' },
			{
				label: 'PDF',
				url: 'https://zenodo.org/records/7158671/files/ql_paper_esceince_presentation_final.pdf'
			}
		],
		bibtex: `@inproceedings{lumsden2022callpath,
  title     = {Enabling Call Path Querying in Hatchet to Identify Performance Bottlenecks in Scientific Applications},
  author    = {Lumsden, Ian and L{\\"u}ttgau, Jakob and Lama, Vanessa and Scully-Allison, Connor and Brink, Stephanie and Isaacs, Katherine E. and Pearce, Olga and Taufer, Michela},
  year      = {2022},
  booktitle = {2022 IEEE 18th International Conference on e-Science (e-Science)},
  doi       = {10.1109/eScience55777.2022.00039}
}`
	},
	{
		id: 'usability-hatchet-2020',
		disabled: false,
		title: 'Usability and Performance Improvements in Hatchet',
		authors: [
			'Stephanie Brink',
			'Ian Lumsden',
			'Connor Scully-Allison',
			'Katy Williams',
			'Olga Pearce',
			'Todd Gamblin',
			'Michela Taufer',
			'Katherine E. Isaacs',
			'Abhinav Bhatele'
		],
		year: 2020,
		venue: 'IEEE/ACM International Workshop on HPC User Support Tools (HUST)',
		abstract:
			'Performance analysis is critical for pinpointing bottlenecks in parallel applications. We describe enhancements to Hatchet, an open-source Python library for reading and analyzing profiling output from several tools. Key improvements include introducing a query mechanism for identifying call path patterns, adding visualization capabilities for interactive profile exploration, and developing analytical operations for handling multiple datasets. We also detail performance optimizations in Hatchet\'s HPCToolkit reader and the unify operation to enable scalable analysis of large datasets.',
		image: null,
		links: [{ label: 'DOI', url: 'https://doi.org/10.1109/HUSTProtools51951.2020.00013' }],
		bibtex: `@inproceedings{brink2020usability,
  title     = {Usability and Performance Improvements in Hatchet},
  author    = {Brink, Stephanie and Lumsden, Ian and Scully-Allison, Connor and Williams, Katy and Pearce, Olga and Gamblin, Todd and Taufer, Michela and Isaacs, Katherine E. and Bhatele, Abhinav},
  year      = {2020},
  booktitle = {2020 IEEE/ACM International Workshop on HPC User Support Tools (HUST) and Workshop on Programming and Performance Visualization Tools (ProTools)},
  doi       = {10.1109/HUSTProtools51951.2020.00013}
}`
	},
	{
		id: 'nraqc-2018',
		disabled: false,
		title: 'Near Real-time Autonomous Quality Control for Streaming Environmental Sensor Data',
		authors: [
			'Connor Scully-Allison',
			'Vinh D. Le',
			'Eric Fritzinger',
			'Scott Strachan',
			'Frederick C. Harris Jr.',
			'Sergiu Dascalu'
		],
		year: 2018,
		venue: 'Procedia Computer Science (KES Conference)',
		abstract:
			'[Abstract to be added.]',
		image: null,
		links: [{ label: 'DOI', url: 'https://doi.org/10.1016/J.PROCS.2018.08.139' }],
		bibtex: `@article{scullyallison2018nraqc,
  title   = {Near Real-time Autonomous Quality Control for Streaming Environmental Sensor Data},
  author  = {Scully-Allison, Connor and Le, Vinh D. and Fritzinger, Eric and Strachan, Scott and Harris, Frederick C. and Dascalu, Sergiu},
  year    = {2018},
  journal = {Procedia Computer Science},
  doi     = {10.1016/J.PROCS.2018.08.139}
}`
	},

	// --- Disabled: dissertation, workshop organization papers, early non-primary-focus work ---

	{
		id: 'drawing-in-cursive-2025',
		disabled: true,
		title:
			'Drawing in Cursive: Intentional Visualization Design for Computational Notebooks',
		authors: ['Connor Scully-Allison'],
		year: 2025,
		venue: 'PhD Dissertation, University of Utah',
		abstract: '[Dissertation — not displayed by default.]',
		image: null,
		links: [],
		bibtex: `@phdthesis{scullyallison2025dissertation,
  title  = {Drawing in Cursive: Intentional Visualization Design for Computational Notebooks},
  author = {Scully-Allison, Connor},
  year   = {2025},
  school = {University of Utah}
}`
	},
	{
		id: 'automated-programmatic-2024',
		disabled: true,
		title: 'Automated Programmatic Performance Analysis of Parallel Programs',
		authors: [
			'Onur Cankur',
			'Aditya Tomar',
			'Daniel Nichols',
			'Connor Scully-Allison',
			'Katherine E. Isaacs',
			'Abhinav Bhatele'
		],
		year: 2024,
		venue: 'arXiv preprint',
		abstract:
			'[Abstract to be added.]',
		image: null,
		links: [{ label: 'arXiv', url: 'https://arxiv.org/abs/2401.13150' }],
		bibtex: `@misc{cankur2024automated,
  title         = {Automated Programmatic Performance Analysis of Parallel Programs},
  author        = {Cankur, Onur and Tomar, Aditya and Nichols, Daniel and Scully-Allison, Connor and Isaacs, Katherine E. and Bhatele, Abhinav},
  year          = {2024},
  eprint        = {2401.13150},
  archivePrefix = {arXiv},
  doi           = {10.48550/arXiv.2401.13150}
}`
	},
	{
		id: 'scalable-representations-2021',
		disabled: true,
		title:
			'Design and Evaluation of Scalable Representations of Communication in Gantt Charts for Large-scale Execution Traces',
		authors: ['Connor Scully-Allison', 'Katherine E. Isaacs'],
		year: 2021,
		venue: 'arXiv preprint',
		abstract: '[arXiv preprint — may be superseded by the VISSOFT 2024 paper.]',
		image: null,
		links: [{ label: 'arXiv', url: 'https://arxiv.org/abs/2107.00065' }],
		bibtex: `@misc{scullyallison2021scalable,
  title         = {Design and Evaluation of Scalable Representations of Communication in {Gantt} Charts for Large-scale Execution Traces},
  author        = {Scully-Allison, Connor and Isaacs, Katherine E.},
  year          = {2021},
  eprint        = {2107.00065},
  archivePrefix = {arXiv},
  doi           = {10.48550/arXiv.2107.00065}
}`
	}
];
