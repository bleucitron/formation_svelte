<script>
  import { page } from '$app/stores';

  export let data;

  $: pathname = $page.url.pathname;
</script>

<h1>Pokemons {data.pokemons.length}</h1>

<ul>
  {#each data.pokemons as { id, name, sprites }}
    <a href="{pathname}/{id}">
      <li>
        <div>{name}</div>
        <img src={sprites.front_default} alt={name} />
      </li>
    </a>
  {/each}
</ul>
