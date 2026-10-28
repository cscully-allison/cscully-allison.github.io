<script lang="ts">
	import { news } from '$lib/data/news.js';

	function formatDate(iso: string): string {
		return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
	}
</script>

<aside>
	<h3 class="mb-3 font-sans text-xs font-medium uppercase tracking-widest text-muted">News</h3>
	<ul class="m-0 list-none space-y-4 p-0">
		{#each news as item}
			<li class="border-l-2 border-border pl-3 text-sm">
				<time class="mb-0.5 block font-mono text-xs text-muted">{formatDate(item.date)}</time>
				{#if item.url}
					<a href={item.url} class="text-fg transition-colors hover:text-accent">{item.text}</a>
				{:else}
					<span class="text-fg">{item.text}</span>
				{/if}
			</li>
		{/each}
	</ul>
</aside>
