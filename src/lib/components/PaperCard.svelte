<script lang="ts">
	import IllustrationPlaceholder from './IllustrationPlaceholder.svelte';
	import BibTexToggle from './BibTexToggle.svelte';
	import { fadeInUp } from '$lib/actions/animate.js';

	/** @typedef {import('$lib/data/papers.js').Paper} Paper */

	let { paper }: { paper: import('$lib/data/papers.js').Paper } = $props();
</script>

<article use:fadeInUp class="grid grid-cols-1 gap-6 border-b border-border py-10 md:grid-cols-3">
	<!-- Image column -->
	<div class="md:col-span-1">
		{#if paper.image}
			<img
				src={paper.image}
				alt="Figure from {paper.title}"
				class="w-full rounded-sm object-cover"
				style="aspect-ratio: 4/3"
			/>
		{:else}
			<IllustrationPlaceholder label="Paper figure" aspectRatio="4/3" />
		{/if}
	</div>

	<!-- Content column -->
	<div class="flex flex-col gap-3 md:col-span-2">
		<h3 class="font-serif text-xl leading-snug text-fg">{paper.title}</h3>
		<p class="font-sans text-sm text-muted">
			{paper.authors.join(', ')} &mdash; <em>{paper.venue}</em>, {paper.year}
		</p>
		<p class="font-sans text-sm leading-relaxed text-fg">{paper.abstract}</p>

		<div class="flex flex-wrap items-center gap-3">
			{#each paper.links as link}
				<a
					href={link.url}
					target="_blank"
					rel="noopener noreferrer"
					class="rounded-sm border border-accent px-2.5 py-1 font-sans text-xs font-medium text-accent transition-colors hover:border-accent-hover hover:text-accent-hover"
				>
					{link.label}
				</a>
			{/each}
			<BibTexToggle bibtex={paper.bibtex} />
		</div>
	</div>
</article>
