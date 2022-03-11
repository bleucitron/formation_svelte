<script>
	import Clock from './_Clock.svelte';

	let show = false;
</script>

<svelte:head>
	<title>Exo Clock</title>
</svelte:head>

<button on:click={() => (show = !show)}>
	{#if !show}
		Show
	{:else}
		Hide
	{/if}
</button>
{#if show}
	<Clock />
{/if}
