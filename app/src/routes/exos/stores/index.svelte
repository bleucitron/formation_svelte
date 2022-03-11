<script>
	import { name, surname } from './_stores.js';
	import Timer from './_Timer.svelte';

	let show = true;
</script>

<svelte:head>
	<title>Exo Stores</title>
</svelte:head>

{#if show}
	<Timer />
{/if}
<button on:click={() => (show = !show)}>Bouton</button>

<input bind:value={$name} />
<button on:click={name.toUppercase}>MAJ</button>
<button on:click={name.toLowercase}>min</button>
<button on:click={name.reset}>Reset</button>

<input bind:value={$surname} />
<button on:click={surname.toUppercase}>MAJ</button>
<button on:click={surname.toLowercase}>min</button>
<button on:click={surname.reset}>Reset</button>
