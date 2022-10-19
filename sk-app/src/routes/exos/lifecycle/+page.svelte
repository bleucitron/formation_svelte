<script>
  import Tweet from '$lib/Tweet.svelte';
  import Horloge from '$lib/Horloge.svelte';

  let clock = false;
</script>

<h1>Lifecycle</h1>

{#if clock}
  <Horloge />
{/if}
<button on:click={() => (clock = !clock)}>
  {clock ? 'Pas clock' : 'Clock'}
</button>

<Tweet />
