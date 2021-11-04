<script>
  import Clock from './Clock.svelte';

  let show = false;
</script>

<h2>Exo 3-1</h2>
<button on:click={() => (show = !show)}>Afficher heure</button>
{#if show}
  <Clock />
{/if}
