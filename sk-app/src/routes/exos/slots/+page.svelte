<script>
  import Slider from '$lib/Slider.svelte';
  import Movie from '$lib/Movie.svelte';
  import Book from '$lib/Book.svelte';
  import Song from '$lib/Song.svelte';

  import { items } from './items.js';
</script>

<h1>Slots</h1>

<Slider {items} let:current={{ type, name, author, band, director }}>
  {#if type === 'book'}
    <Book {name} {author} />
  {:else if type === 'movie'}
    <Movie {name} {director} />
  {:else}
    <Song {name} {band} />
  {/if}
</Slider>
