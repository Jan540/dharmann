<script lang="ts">
	import { Moon, Sun } from 'lucide-svelte';
	import { mode, toggleMode } from 'mode-watcher';
</script>

<!-- TODO: use bits-ui -->

<button
	on:click={toggleMode}
	class="fixed bottom-4 right-4 rounded-lg bg-background p-3 outline-none ring-1 ring-border transition-all hover:bg-border md:p-4"
>
	{#if $mode === 'dark'}
		<Sun class="h-[1.4rem] w-[1.4rem] transition-all" />
	{:else}
		<Moon
			class="h-[1.4rem] w-[1.4rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
		/>
	{/if}
	<span class="sr-only">Toggle theme</span>
</button>
