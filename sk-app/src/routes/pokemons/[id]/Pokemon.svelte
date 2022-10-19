<script>
  export let data;

  $: ({
    id,
    name,
    base_experience: xp,
    sprites: { front_default: src },
    types,
  } = data);

  $: labels = types.map(t => t.type.name);
</script>

<div class="Pokemon">
  <h2>{id}. {name}</h2>
  <img {src} alt={name} />
  <div>{xp}</div>
  {#each labels as label}
    <span>{label}</span>
  {/each}
</div>

<style>
  .Pokemon {
  }
</style>
