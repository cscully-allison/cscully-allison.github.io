<script lang="ts">
	import type { Snippet } from 'svelte';

	let { seed, children }: { seed: string; children: Snippet } = $props();

	// Stable placement derived from the seed so each figure looks hand-placed but
	// doesn't jump around between renders. Different bits of the hash drive each
	// value so tilt, tape position and tape angle vary independently.
	const hash = $derived.by(() => {
		let h = 0;
		for (const c of seed) h = (h * 31 + c.charCodeAt(0)) | 0;
		return Math.abs(h);
	});
	const tilt = $derived(((hash % 25) - 12) / 10); // -1.2deg to 1.2deg
	const tapeX = $derived(22 + ((hash >> 5) % 57)); // 22% to 78% across the top
	const tapeAngle = $derived(((hash >> 11) % 13) - 6); // -6deg to 6deg
</script>

<figure
	class="taped"
	style="--tilt: {tilt}deg; --tape-x: {tapeX}%; --tape-angle: {tapeAngle}deg"
>
	<span class="tape" aria-hidden="true"></span>
	{@render children()}
</figure>

<style>
	.taped {
		position: relative;
		margin: 0;
		background: var(--color-bg);
		border: 1px solid var(--color-border);
		border-radius: 2px;
		box-shadow: 0 2px 6px rgb(0 0 0 / 0.06);
		transform: rotate(var(--tilt));
		transition:
			transform 300ms cubic-bezier(0.34, 1.56, 0.64, 1),
			box-shadow 300ms ease;
	}

	.taped:hover {
		transform: rotate(0deg) translateY(-2px);
		box-shadow: 0 8px 20px rgb(0 0 0 / 0.1);
	}

	/* The outer span carries the shadow; the inner layer is clipped to torn ends.
	   (clip-path would otherwise clip the shadow away.) */
	.tape {
		position: absolute;
		top: -7px;
		left: var(--tape-x);
		z-index: 1;
		width: 54px;
		height: 14px;
		transform: translateX(-50%) rotate(var(--tape-angle));
		filter: drop-shadow(0 1px 1px rgb(0 0 0 / 0.18));
		pointer-events: none;
	}

	.tape::before {
		content: '';
		position: absolute;
		inset: 0;
		background:
			/* soft sheen across the middle */
			linear-gradient(
				to bottom,
				rgb(255 255 255 / 0.35),
				rgb(255 255 255 / 0) 45%,
				rgb(0 0 0 / 0.04)
			),
			/* faint fibers in the paper */
			repeating-linear-gradient(
				90deg,
				rgb(255 255 255 / 0.12) 0 1px,
				transparent 1px 3px
			),
			color-mix(in srgb, var(--color-accent-3) 55%, white);
		/* zig-zag torn ends */
		clip-path: polygon(
			0% 0%,
			100% 0%,
			97% 20%,
			100% 40%,
			96% 60%,
			100% 80%,
			97% 100%,
			0% 100%,
			3% 80%,
			0% 60%,
			4% 40%,
			0% 20%
		);
	}

	@media (prefers-reduced-motion: reduce) {
		.taped {
			transition: none;
		}
		.taped:hover {
			transform: rotate(var(--tilt));
		}
	}
</style>
