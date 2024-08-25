<script lang="ts">
	import { siteTitle } from '$lib/config';
	import { ModeWatcher } from 'mode-watcher';
	import '../app.postcss';
</script>

<svelte:head>
	<title>{siteTitle}</title>
</svelte:head>

<ModeWatcher themeColors={{ dark: 'amongus', light: 'amongus' }} />
<slot />
