<script>
  import data from './data';
  import Slider from './Slider.svelte';
  import Book from './Book.svelte';
  import Movie from './Movie.svelte';
  import Song from './Song.svelte';

  let sliderPosition;
</script>

<h1>Exo Slider</h1>

<Slider items={data} let:current on:position={e => (sliderPosition = e.detail)}>
  {#if current.type === 'movie'}
    <Movie movie={current} />
  {:else if current.type === 'song'}
    <Song song={current} />
  {:else}
    <Book book={current} />
  {/if}
</Slider>

{#if sliderPosition !== undefined}
  <div>{sliderPosition}</div>
{/if}
