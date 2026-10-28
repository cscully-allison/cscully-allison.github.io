<script lang="ts">
	let {
		label = 'Illustration',
		aspectRatio = '1/1'
	}: {
		label?: string;
		aspectRatio?: string;
	} = $props();
</script>

<div
	class="flex w-full items-center justify-center rounded-sm border-2 border-dashed border-border bg-bg-subtle"
	style="aspect-ratio: {aspectRatio}"
>
	<span class="px-4 text-center font-mono text-xs text-muted">[ {label} ]</span>
</div>
