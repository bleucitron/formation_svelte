<script context="module">
  const urls = [
    'https://raw.githubusercontent.com/iOiurson/data/master/data/tweets.json',
    'https://raw.githubusercontent.com/iOiurson/data/master/data/tweets2.json',
  ];

  export async function load({ fetch }) {
    function getJson(url) {
      return fetch(url).then(resp => resp.json());
    }

    const data = await Promise.all(urls.map(getJson));
    const twts = data.flat();
    const tweets = twts.sort(
      (t1, t2) => new Date(t2.created_at) - new Date(t1.created_at),
    );

    return {
      props: {
        tweets,
      },
    };
  }
</script>

<script>
  import Tweet from './_Tweet.svelte';

  export let tweets;
  let text = '';
  let author = null;

  function selectAuthor(name) {
    author = author === name ? null : name;
  }

  $: filteredByText = text
    ? tweets?.filter(t => t.full_text.includes(text))
    : tweets;
  $: displayed = author
    ? filteredByText?.filter(t => t.user.screen_name === author)
    : filteredByText;
  $: authors = [...new Set(tweets?.map(t => t.user.screen_name))];
</script>

<input bind:value={text} />

<div>
  {#each authors as a}
    <button class:active={author === a} on:click={() => selectAuthor(a)}
      >{a}</button
    >
  {/each}
</div>

<div class="Touitter">
  {#if tweets}
    <div>{displayed.length}</div>
    {#each displayed as tweet}
      <Tweet {tweet} />
    {:else}
      Pas de tweets
    {/each}
  {:else}
    Loading
  {/if}
</div>

<style>
  .active {
    background: darkblue;
    color: white;
  }
</style>
