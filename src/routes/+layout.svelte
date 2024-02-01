<script>
	import { siteTitle } from '$lib/config';
	import { ModeWatcher } from 'mode-watcher';
	import '../app.postcss';
</script>

<svelte:head>
	<title>{siteTitle}</title>
	<meta property="og:description" content="dharmann drinking water" />
</svelte:head>

<ModeWatcher themeColors={{ dark: 'amongus', light: 'amongus' }} />
<div class="bg-background text-text min-h-screen selection:bg-black/30 dark:selection:bg-white/30">
	<slot />
</div>
