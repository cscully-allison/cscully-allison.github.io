import { animate } from 'animejs';

/**
 * Svelte action: fades the element in and slides it up when it enters the viewport.
 * Sets opacity:0 synchronously (before first paint) so there is no visible flash.
 *
 * @param {HTMLElement} node
 * @param {{ delay?: number, duration?: number, y?: number, bounce?: boolean }} [options]
 * @returns {{ destroy(): void }}
 */
export function fadeInUp(node, options = {}) {
	const { delay = 0, duration = 700, y = 28, bounce = false } = options;

	node.style.opacity = '0';
	node.style.transform = `translateY(${y}px)`;

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					animate(node, {
						opacity: [0, 1],
						translateY: [y, 0],
						duration: bounce ? Math.round(duration * 1.6) : duration,
						delay,
						ease: bounce ? 'outElastic(1, 0.5)' : 'outCubic'
					});
					observer.unobserve(node);
				}
			});
		},
		{ threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
