<script>
	import { siteTitle } from '$lib/config';
	import { ModeWatcher } from 'mode-watcher';
	import '../app.postcss';
</script>

<svelte:head>
	<title>{siteTitle}</title>
	<!-- <meta property="og:description" content="dharmann drinking water" /> -->
</svelte:head>

<ModeWatcher themeColors={{ dark: 'amongus', light: 'amongus' }} />
<slot />
