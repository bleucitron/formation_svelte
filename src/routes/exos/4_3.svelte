<script>
  import text from '$lib/utils/stores.js';

  import Other from '$lib/Other.svelte';
</script>

<h3>Stores</h3>

<div class="ici">
  <input bind:value={$text} />
  <div>{$text}</div>
  <button on:click={text.uppercase}>Upper</button>
  <button on:click={text.lowercase}>Lower</button>
  <button on:click={text.snakecase}>Snake</button>
  <button on:click={text.reset}>Reset</button>
  <Other />
</div>

<style>
  div {
    color: burlywood;
  }
</style>
