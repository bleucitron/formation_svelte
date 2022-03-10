<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  export let items;

  let position = 0;

  function prev() {
    const pos = (position - 1) % items.length;
    position = pos < 0 ? pos + items.length : pos;
  }
  function next() {
    position = (position + 1) % items.length;
  }

  $: current = items[position];
  $: dispatch('position', position);
</script>

<div class="Slider">
  <button on:click={prev}>Précédent</button>
  <slot {current} {position} />
  <button on:click={next}>Suivant</button>
</div>

<style>
  .Slider {
    display: flex;
    align-items: center;
  }
</style>
