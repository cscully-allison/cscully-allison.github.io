<script lang="ts">
	import IllustrationPlaceholder from '$lib/components/IllustrationPlaceholder.svelte';
	import { fadeInUp } from '$lib/actions/animate.js';
	import visScriptingImg from '$lib/assets/vis-scripting-interactions.png';
	import guidepostImg from '$lib/assets/guidepost.png';
	import llmComicImg from '$lib/assets/llm_grammar_comic.png';

	const areas = [
		{
			title: 'Theory and Design of Multimodal Data Interaction',
			description:
				'Domain-specific data workers hold surprisingly diverse mental models of their data yet most design guidance for analysis tools necessarily reifies these models into rigid tools by providing a single interface to that data through one interaction modality like visualization or scripting. Using ethnographic interviews and qualitative research to characterize how data workers reason about their data, I developed two design frameworks that provide guidance on designing analysis tools that span these interaction modalities. One framework assigns representational responsibility based on task specificity and frequency, placing exploratory tasks in visualization and precise, infrequent tasks in scripting. The second uses personas derived from multi-stakeholder feedback to scope the development of analysis software for multiple users. These frameworks are foundational contributions to design research that explores truly integrated software design in federated workflows and informs my future research into supporting federated data analysis work across disparate software platforms.',
			image: visScriptingImg,
			imageAlt: 'Diagram showing the model for assigning tasks to visualization or scripting',
			image2: null,
			imageAlt2: '',
			placeholderLabel: ''
		},
		{
			title: 'Research in Practice: Building Data Analysis Tools in Coordination with National Labs',
			description:
				'Generic charting libraries and standalone dashboards commonly used by HPC data workers like system administrators leave significant usability gaps in high performance computing, where data is large, hierarchical, and demands fluid movement between visual exploration and code-based analysis. I use software engineering and visualization design to build and deploy practical tools directly within the workflows of data workers investigating the behavior and health of Supercomputers and and the software run on them. My %cct visualization embeds interactive calling context tree exploration inside computational notebooks and is deployed in the Hatchet and Thicket libraries used at Lawrence Livermore National Laboratory. My Guidepost tool supports multivariate exploratory analysis of supercomputer job queue and telemetry data, enabling seamless data export back to notebook contexts for confirmatory analysis; it actively supported and updated and being used by researchers at the National Labratory of the Rockies, Lawerence Livermore National Lab, and Argonne National Laboratory.',
			image: guidepostImg,
			imageAlt: 'Guidepost visualization for supercomputer queue data',
			image2: null,
			imageAlt2: '',
			placeholderLabel: ''
		},
		{
			title: 'Statistical Analysis Workflow Support with LLMs and Formal Grammars',
			description:
				'A persistent gap presented by my work on multimodal data tools is what analysts should actually do with data once they leave an interactive visualization. Leaving data workers to their existing workflows ignores the problems posed by the ad hoc, fragile, and highly individualized nature of those worklows. LLM-powered assistants show promise for supporting analysis code generation but are constrained by generative randomness that can silently distort analytical intent leading to subtly misleading visualizations. To address this, I developed a formal grammar-guided approach that structures hypothesis translation into an intermediate representation before code or visualization generation, and a measurement methodology adapted from software testing to identify precisely where and when an LLM fails to capture a user\'s intent when generating visualizations from hypotheses alone. This work — currently under review at ACM CHI — is being integrated into Mentor, an extension to Guidepost that explores how LLM assistants can be embedded across the federated software environments data workers already use.',
			image: llmComicImg,
			imageAlt: 'Comic highlighting the dangers and benefits of naive LLM use in analytical workflows',
			image2: null,
			imageAlt2: '',
			placeholderLabel: ''
		},
		{
			title: 'Qualifying Uncertainty and Error in Scientific Data With QA Software',
			description: '',
			image: null,
			imageAlt: '',
			image2: null,
			imageAlt2: '',
			placeholderLabel: 'Qualifying Uncertainty'
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
					<div class="flex flex-col gap-4">
						{#if area.image}
							<img src={area.image} alt={area.imageAlt} class="w-full rounded-md object-cover" />
						{:else}
							<IllustrationPlaceholder label={area.placeholderLabel} aspectRatio="1/1" />
						{/if}
						{#if area.image2}
							<img src={area.image2} alt={area.imageAlt2} class="w-full rounded-md object-cover" />
						{:else}
							<IllustrationPlaceholder label="" aspectRatio="1/1" />
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
