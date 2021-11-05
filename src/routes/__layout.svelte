<script>
  import { page } from '$app/stores';

  $: isHome = $page.path === '/';
</script>

<header>
  <h1>Formation SvelteKit</h1>
  <nav>
    {#if !isHome}
      <a href="/">Home</a>
    {/if}
    <a href="/about">About</a>
    <a href="/exos/3_1">Exo 3-1</a>
    <a href="/exos/3_2">Exo 3-2</a>
    <a href="/exos/3_6">Exo 3-6</a>
    <a href="/touitter">Touitter</a>
  </nav>
</header>

<main>
  <slot />
</main>

<footer>Copyright Romain</footer>

<style>
  header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }
</style>
