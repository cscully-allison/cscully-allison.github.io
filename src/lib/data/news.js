/**
 * @typedef {{
 *   date: string,
 *   text: string,
 *   url: string | null
 * }} NewsItem
 */

/**
 * Career news items in reverse chronological order (newest first).
 * date: ISO 8601 string (YYYY-MM-DD)
 * url: optional link; set to null if not applicable
 *
 * @type {NewsItem[]}
 */
export const news = [
	{
		date: '2026-10-01',
		text: 'Gave invited talk to GOAID AI Special Interest Group on "Integrating LLM-Powered Analysis Assistants into Existing Analytical Workflows"',
		url: 'https://gwdg.de/en/hpc/events/goeaid/'
	},
	{
		date: '2026-06-01',
		text: 'Gave invited talk on "Bridging the Human-Data gap in HPC Tooling" to HPC group at UIC.',
		url: null
	},
	{
		date: '2026-01-01',
		text: 'Paper accepted to IEEE TVCG: "Same Data, Different Audiences: Using Personas to Scope a Supercomputing Job Queue Visualization."',
		url: 'https://doi.org/10.1109/TVCG.2026.3666137'
	},
	{
		date: '2025-08-01',
		text: 'Started postdoctoral position at the University of Chicago.',
		url: null
	}
];
