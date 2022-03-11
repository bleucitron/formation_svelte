<script context="module">
	const url1 = 'https://raw.githubusercontent.com/iOiurson/data/master/data/tweets.json';
	const url2 = 'https://raw.githubusercontent.com/iOiurson/data/master/data/tweets2.json';

	export async function load({ fetch }) {
		const p1 = fetch(url1).then((resp) => resp.json());
		const p2 = fetch(url2).then((resp) => resp.json());

		return Promise.all([p1, p2])
			.then((data) => {
				const allTweets = data.flat();
				return {
					props: {
						tweets: allTweets
					}
				};
			})
			.catch(() => {
				return {
					error: 'Pas cool',
					status: 500
				};
			});
	}
</script>

<script>
	import MyComponent from '$components/MyComponent.svelte';
	export let tweets = [];

	$: names = [...new Set(tweets.map((t) => t.user.screen_name))];
</script>

<svelte:head>
	<title>Touitter</title>
</svelte:head>

<h1>Touitter</h1>
<MyComponent />

{#each names as name}
	{@const href = '/touitter/profil/' + name}
	<a {href}>{name}</a>
{/each}
{#each tweets as tweet}
	<div>{tweet.full_text}</div>
{/each}

<style>
	a {
		display: block;
		margin: 1rem;
	}
</style>
