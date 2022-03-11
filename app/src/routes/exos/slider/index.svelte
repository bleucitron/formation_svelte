<script>
	import data from './_components/data';
	import Slider from './_components/Slider.svelte';
	import Book from './_components/Book.svelte';
	import Movie from './_components/Movie.svelte';
	import Song from './_components/Song.svelte';

	let sliderPosition;
</script>

<svelte:head>
	<title>Exo Slider</title>
</svelte:head>

<h1>Exo Slider</h1>

<Slider items={data} let:current on:position={(e) => (sliderPosition = e.detail)}>
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
