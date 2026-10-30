import guidepostImg from '$lib/assets/guidepost.png';
import roundtripDiagram from '$lib/assets/roundtrip-explination-revised-with-text.png';
import cctTreeImg from '$lib/assets/table_link.png';
import cctTableImg from '$lib/assets/table_view.png';

/**
 * @typedef {{ src: string, alt: string }} Figure
 *
 * @typedef {{
 *   id: string,
 *   name: string,
 *   kind: string,
 *   license: string,
 *   tagline: string,
 *   description: string,
 *   install: string,
 *   links: Array<{label: string, url: string}>,
 *   tagLabel: string,
 *   tags: string[],
 *   figure: Figure,
 *   linkedViews?: { left: Figure, right: Figure, caption: string }
 * }} Software
 */

/**
 * Software Connor has built and deployed, shown on the home page.
 *
 * @type {Software[]}
 */
export const software = [
	{
		id: 'guidepost',
		name: 'Guidepost',
		kind: 'Python package',
		license: 'MIT',
		tagline: 'Visual analytics for supercomputer job queues and telemetry data',
		description:
			'An interactive overview visualization for supercomputer job-queue data that empowers system administrators, systems researchers, and operations specialists to explore many different data variables at one time and then export any selection straight back into their notebook as a complex selection object for script-based analysis.',
		install: 'pip install guidepost',
		links: [
			{ label: 'GitHub', url: 'https://github.com/cscully-allison/guidepost' },
			{ label: 'PyPI', url: 'https://pypi.org/project/guidepost/' },
			{ label: 'Paper', url: 'https://doi.org/10.1109/TVCG.2026.3666137' }
		],
		tagLabel: 'Used at',
		tags: [
			'Lawrence Livermore National Lab',
			'National Laboratory of the Rockies',
			'Argonne National Lab'
		],
		figure: {
			src: guidepostImg,
			alt: 'Guidepost visualization of supercomputer queue wait times'
		}
	},
	{
		id: 'roundtrip',
		name: 'Roundtrip',
		kind: 'Python + JavaScript library',
		license: 'MIT',
		tagline: 'Two-way sync between notebook visualizations and code',
		description:
			'A Python/JavaScript library that embeds JavaScript visualizations in Jupyter cells and binds them to notebook data in both directions. Selections in a visualization flow back into code, and code changes re-render bound visualizations automatically, enabling linked views across cells.',
		install: 'pip install roundtrip-lib',
		links: [
			{ label: 'GitHub', url: 'https://github.com/hdc-arizona/roundtrip' },
			{ label: 'PyPI', url: 'https://pypi.org/project/roundtrip-lib/' },
			{ label: 'Paper', url: 'https://doi.org/10.1109/TVCG.2024.3354561' }
		],
		tagLabel: 'Powers',
		tags: ['%cct in Hatchet', 'Thicket'],
		figure: {
			src: roundtripDiagram,
			alt: 'Diagram of Roundtrip syncing data from visualization to script and from script to visualization'
		},
		linkedViews: {
			left: {
				src: cctTreeImg,
				alt: 'The %cct calling context tree visualization in a Jupyter notebook cell'
			},
			right: {
				src: cctTableImg,
				alt: 'The %table output in a Jupyter notebook cell listing the selected tree nodes'
			},
			caption: 'Select nodes in the tree and the table cell updates automatically.'
		}
	}
];
