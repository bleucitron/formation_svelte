<script>
  import Choix from '$lib/Choix.svelte';

  export let data;

  $: console.log('Data page events', data);
</script>

<h1>Events</h1>

<Choix
  question="Voulez-vous aller au cinéma ?"
  on:accept={() => console.log('Ok on y va !')}
  on:refuse={e => console.log('Raison', e.detail)}
/>
