<script lang="ts">
	import IllustrationPlaceholder from '$lib/components/IllustrationPlaceholder.svelte';
	import { fadeInUp } from '$lib/actions/animate.js';

	const areas = [
		{
			title: 'AI as a Data Interface',
			description: '[Research description stub — to be filled in.]',
			placeholderLabel: 'AI as a Data Interface illustration'
		},
		{
			title: 'HPC Telemetry Analysis Visualization',
			description: '[Research description stub — to be filled in.]',
			placeholderLabel: 'HPC Telemetry illustration'
		},
		{
			title: 'Notebook-Embedded Visualization Design',
			description: '[Research description stub — to be filled in.]',
			placeholderLabel: 'Notebook Visualization illustration'
		}
	];
</script>

<section id="research" class="bg-bg-subtle py-20">
	<div class="mx-auto max-w-4xl px-6">
		<h2 use:fadeInUp class="mb-12 font-serif text-3xl text-fg">Research</h2>

		<div class="space-y-16">
			{#each areas as area, i}
				<div
					use:fadeInUp={{ delay: i * 120, bounce: true }}
					class="grid grid-cols-1 items-start gap-8 md:grid-cols-3"
				>
					<div class="md:col-span-2">
						<h3
							class="mb-1 font-serif text-2xl text-fg transition-colors"
							style="border-left: 3px solid var(--color-accent-2); padding-left: 0.75rem;"
						>
							{area.title}
						</h3>
						<p class="mt-3 font-sans text-base leading-relaxed text-muted">
							{area.description}
						</p>
					</div>
					<div>
						<IllustrationPlaceholder label={area.placeholderLabel} aspectRatio="1/1" />
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
