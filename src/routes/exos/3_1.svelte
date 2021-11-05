<script>
  import Clock from '$lib/Clock.svelte';

  let show = false;
</script>

<h3>Exo 3-1</h3>
<button on:click={() => (show = !show)}>Afficher heure</button>
{#if show}
  <Clock />
{/if}
