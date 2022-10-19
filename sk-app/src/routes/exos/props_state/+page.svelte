<script>
  import Guerrier from '$lib/Guerrier.svelte';

  let warriors = [
    { id: 1, name: 'Romain', power: 12 },
    { id: 2, name: 'Broly', power: 21312 },
  ];
</script>

<h1>Props et state</h1>

{#each warriors as warrior (warrior.id)}
  <Guerrier name={warrior.name} power={warrior.power} />
{/each}
