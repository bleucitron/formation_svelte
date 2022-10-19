<script>
  export let data;

  $: console.log('Data layout exos', data);
</script>

<nav>
  Exos
  <ul>
    <li>
      <a href="/exos/props_state">Props et State</a>
    </li>
    <li>
      <a href="/exos/lifecycle">Cycle de vie</a>
    </li>
    <li>
      <a href="/exos/events">Events</a>
    </li>
    <li>
      <a href="/exos/slots">Slots</a>
    </li>
    <li>
      <a href="/exos/stores">Stores</a>
    </li>
  </ul>
</nav>

<slot />

<style>
  nav ul {
    display: flex;
    gap: 2rem;
  }
</style>
