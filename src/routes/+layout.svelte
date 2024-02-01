<script>
	import { siteTitle } from '$lib/config';
	import '../app.postcss';
</script>

<svelte:head>
	<title>{siteTitle}</title>
</svelte:head>

<slot />
