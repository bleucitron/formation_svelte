<script>
  import { text } from './store.js';
</script>

<input bind:value={$text} />
<button on:click={text.toUpperCase}>MAJ</button>
<button on:click={text.toLowerCase}>min</button>
<button on:click={text.reset}>reset</button>

<style>
  input {
    margin-top: 4rem;
  }
</style>
