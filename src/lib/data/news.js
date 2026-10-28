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
		date: '2026-01-01',
		text: 'Paper accepted to IEEE TVCG: "Same Data, Different Audiences: Using Personas to Scope a Supercomputing Job Queue Visualization."',
		url: 'https://doi.org/10.1109/TVCG.2026.3666137'
	},
	{
		date: '2025-01-01',
		text: 'Started postdoctoral position at the University of Chicago.',
		url: null
	}
];
