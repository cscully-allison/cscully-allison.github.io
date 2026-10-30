<script lang="ts">
	import { papers } from '$lib/data/papers.js';
	import PaperCard from '$lib/components/PaperCard.svelte';
	import { fadeInUp } from '$lib/actions/animate.js';

	const visiblePapers = $derived(papers.filter((p) => !p.disabled));
</script>

<section id="papers" class="bg-bg-subtle py-20">
	<div class="mx-auto max-w-4xl px-6">
		<h2 use:fadeInUp class="mb-2 font-serif text-3xl text-fg">Papers</h2>
		<p use:fadeInUp={{ delay: 100 }} class="mb-10 font-sans text-sm text-muted">
			<a
				href="https://scholar.google.com/citations?user=ms-QI24AAAAJ&hl=en"
				target="_blank"
				rel="noopener noreferrer"
				class="transition-colors hover:text-accent"
			>
				Google Scholar ↗
			</a>
		</p>
		{#each visiblePapers as paper (paper.id)}
			<PaperCard {paper} />
		{/each}
	</div>
</section>
