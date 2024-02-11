<script lang="ts">
	import { Moon, Sun } from 'lucide-svelte';
	import { mode, toggleMode } from 'mode-watcher';
</script>

<!-- TODO: use bits-ui -->

<button
	on:click={toggleMode}
	class="group fixed bottom-4 right-4 rounded-lg bg-background p-3 outline-none ring-1 ring-border transition-all hover:bg-primary md:p-4"
>
	{#if $mode === 'dark'}
		<Sun class="h-[1.4rem] w-[1.4rem] transition-all group-hover:stroke-black" />
	{:else}
		<Moon class="h-[1.4rem] w-[1.4rem] transition-all group-hover:stroke-white" />
	{/if}
	<span class="sr-only">Toggle theme</span>
</button>
