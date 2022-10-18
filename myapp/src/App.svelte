<script>
  import Guerrier from './lib/Guerrier.svelte';
  import Horloge from './lib/Horloge.svelte';
  import Tweet from './lib/Tweet.svelte';
  import Choix from './lib/Choix.svelte';
  import Movie from './lib/Movie.svelte';
  import Book from './lib/Book.svelte';
  import Song from './lib/Song.svelte';
  import Slider from './lib/Slider.svelte';
  import Input from './lib/Input.svelte';

  import { items } from './items.js';

  let warriors = [
    { id: 1, name: 'Romain', power: 12 },
    { id: 2, name: 'Broly', power: 21312 },
  ];
  let clock = false;
</script>

<main>Coucou</main>

{#each warriors as warrior (warrior.id)}
  <Guerrier name={warrior.name} power={warrior.power} />
{/each}

{#if clock}
  <Horloge />
{/if}
<button on:click={() => (clock = !clock)}>
  {clock ? 'Pas clock' : 'Clock'}
</button>

<Tweet />
<Choix
  question="Voulez-vous aller au cinéma ?"
  on:accept={() => console.log('Ok on y va !')}
  on:refuse={e => console.log('Raison', e.detail)}
/>

<Slider {items} let:current={{ type, name, author, band, director }}>
  {#if type === 'book'}
    <Book {name} {author} />
  {:else if type === 'movie'}
    <Movie {name} {director} />
  {:else}
    <Song {name} {band} />
  {/if}
</Slider>

<Input />

<style>
</style>
