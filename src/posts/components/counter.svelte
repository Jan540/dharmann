<script lang="ts">
	let counter = 0;
</script>

<button
	class="rounded-lg px-4 py-2 outline-none ring-1 ring-border transition-all hover:bg-border"
	on:click={() => counter++}>{counter}</button
>
