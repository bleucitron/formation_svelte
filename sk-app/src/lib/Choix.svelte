<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let question;
</script>

<h2>{question}</h2>

<button on:click={() => dispatch('accept')}>Oui</button>
<button on:click={() => dispatch('refuse', 'je suis malade')}>Non</button>
