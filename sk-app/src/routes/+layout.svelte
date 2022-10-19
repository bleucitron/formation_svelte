<script>
  export let data;

  $: console.log('Data layout principal', data);
</script>

<header>
  <nav>
    <ul>
      <li><a href="/exos">Exos</a></li>
      <li><a href="/pokemons">Pokemons</a></li>
      <li><a href="/about">About</a></li>
    </ul>
  </nav>
</header>

<slot />

<footer>Mon super site</footer>

<style>
  ul {
    display: flex;
    gap: 2rem;
  }
</style>
