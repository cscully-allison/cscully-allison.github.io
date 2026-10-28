<script lang="ts">
	let { bibtex }: { bibtex: string } = $props();

	let open = $state(false);
	let copied = $state(false);

	async function copy() {
		await navigator.clipboard.writeText(bibtex);
		copied = true;
		setTimeout(() => (copied = false), 2000);
	}
</script>

<div>
	<button
		onclick={() => (open = !open)}
		class="rounded-sm border border-border px-2 py-1 font-mono text-xs text-muted transition-colors hover:border-accent hover:text-accent"
	>
		{open ? '▾ BibTeX' : '▸ BibTeX'}
	</button>

	{#if open}
		<div class="relative mt-2">
			<pre
				class="overflow-x-auto whitespace-pre rounded-sm border border-border bg-bg-subtle p-4 font-mono text-xs text-fg">{bibtex}</pre>
			<button
				onclick={copy}
				class="absolute right-2 top-2 font-sans text-xs text-muted transition-colors hover:text-accent"
			>
				{copied ? 'Copied!' : 'Copy'}
			</button>
		</div>
	{/if}
</div>
