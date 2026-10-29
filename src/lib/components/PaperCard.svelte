<script lang="ts">
	import IllustrationPlaceholder from './IllustrationPlaceholder.svelte';
	import BibTexToggle from './BibTexToggle.svelte';
	import TapedFigure from './TapedFigure.svelte';
	import { fadeInUp } from '$lib/actions/animate.js';

	let { paper }: { paper: import('$lib/data/papers.js').Paper } = $props();

	let expanded = $state(false);
</script>

<article use:fadeInUp class="flex flex-col gap-4 border-b border-border py-10">
	<div class="grid grid-cols-1 items-center gap-5 sm:grid-cols-[16rem_1fr]">
		<TapedFigure seed={paper.id}>
			{#if paper.image}
				<img
					src={paper.image}
					alt="Teaser figure from {paper.title}"
					class="aspect-[5/2] w-full object-contain p-1.5"
					loading="lazy"
				/>
			{:else}
				<IllustrationPlaceholder label="Paper figure" aspectRatio="5/2" />
			{/if}
		</TapedFigure>

		<div class="flex flex-col gap-1.5">
			<p class="font-sans text-xs tracking-widest text-muted uppercase">
				{paper.venue} · {paper.year}
			</p>
			<h3 class="font-serif text-xl leading-snug text-fg">{paper.title}</h3>
			<p class="font-sans text-sm text-muted">
				{#each paper.authors as author, i}
					<span class={author === 'Connor Scully-Allison' ? 'font-semibold text-fg' : ''}
						>{author}</span
					>{i < paper.authors.length - 1 ? ', ' : ''}
				{/each}
			</p>
		</div>
	</div>

	<div class="flex flex-col gap-2">
		<p class="font-sans text-sm leading-relaxed text-fg" class:line-clamp-3={!expanded}>
			{paper.abstract}
		</p>
		<button
			type="button"
			class="self-start font-sans text-xs text-accent transition-colors hover:text-accent-hover"
			aria-expanded={expanded}
			onclick={() => (expanded = !expanded)}
		>
			{expanded ? 'less' : 'more'}
		</button>

		<div class="mt-1 flex flex-wrap items-center gap-3">
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
