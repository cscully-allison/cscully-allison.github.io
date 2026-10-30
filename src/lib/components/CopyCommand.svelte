<script lang="ts">
	let { command }: { command: string } = $props();

	let copied = $state(false);
	let timer: ReturnType<typeof setTimeout> | undefined;

	async function copy() {
		await navigator.clipboard.writeText(command);
		copied = true;
		clearTimeout(timer);
		timer = setTimeout(() => (copied = false), 1500);
	}
</script>

<div
	class="flex items-center justify-between gap-3 rounded-sm border border-border bg-bg-subtle px-3 py-2"
>
	<code class="font-mono text-sm text-fg"><span class="text-muted select-none">$ </span>{command}</code>
	<button
		type="button"
		onclick={copy}
		class="font-sans text-xs text-accent transition-colors hover:text-accent-hover"
		aria-label="Copy install command"
	>
		{copied ? 'copied!' : 'copy'}
	</button>
</div>
