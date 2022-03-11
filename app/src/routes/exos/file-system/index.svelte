<script>
	import Browser from './_components/Browser.svelte';
	import data from './_data.js';
</script>

<svelte:head>
	<title>Exo File System</title>
</svelte:head>

<Browser tree={data} />
