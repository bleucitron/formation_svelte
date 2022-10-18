<script>
  import { onMount } from 'svelte';

  export let name;
  export let power = 206;

  let exp = 0;

  onMount(() => {
    let id = setInterval(() => {
      exp++;
    }, 100);

    return () => {
      clearInterval(id);
    };
  });
</script>

<div class="Guerrier">
  <h1>Guerrier</h1>
  <div>Name: {name}</div>
  <div>Power: {power}</div>
  <div>Exp: {exp}</div>
</div>

<style>
  .Guerrier {
    margin: 1rem;
  }
</style>
