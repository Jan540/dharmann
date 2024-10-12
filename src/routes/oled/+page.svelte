<script lang="ts">
	import { LucideMaximize } from 'lucide-svelte';

	let fullscreenDiv: HTMLDivElement;
	let colorDiv: HTMLDivElement;
	let idx = 0;

	const colors = ['blue', 'green', 'yellow', 'purple', 'white', 'red'];

	const changeColor = () => {
		colorDiv.style.backgroundColor = colors[idx];
		idx = (idx + 1) % colors.length;
	};

	const toggleFullscreen = () => {
		if (document.fullscreenElement) {
			document.exitFullscreen();
		} else {
			fullscreenDiv.requestFullscreen();
		}
	};
</script>

<svelte:head>
	<title>OLED Test</title>
</svelte:head>

<div bind:this={fullscreenDiv}>
	<button on:click={toggleFullscreen} class="fixed bottom-4 right-4"><LucideMaximize /></button>
	<div
		bind:this={colorDiv}
		class="h-screen w-screen"
		style="background-color: red;"
		role="button"
		tabindex="0"
		on:click={changeColor}
		on:keydown={(e) => e.key === ' ' && changeColor()}
		aria-label="Change background color"
	></div>
</div>
