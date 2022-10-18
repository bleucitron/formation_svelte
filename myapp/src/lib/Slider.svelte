<script>
  export let items;

  let position = 0;

  $: current = items[position];

  function next() {
    if (position < items.length - 1) {
      position = position + 1;
    }
  }

  function previous() {
    if (position > 0) {
      position = position - 1;
    }
  }
</script>

<div class="Slider">
  <button on:click={previous}>Previous</button>
  <div class="content">
    <slot {current} />
  </div>
  <button on:click={next}>Next</button>
</div>

<style>
  .Slider {
    display: flex;
  }

  .content {
    width: 10rem;
  }
</style>
