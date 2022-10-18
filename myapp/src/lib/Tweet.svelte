<script>
  import { onMount } from 'svelte/internal';

  let tweet;

  onMount(async () => {
    const resp = await fetch(
      'https://raw.githubusercontent.com/iOiurson/data/master/data/tweets.json',
    );
    const tweets = await resp.json();
    tweet = tweets[0];
  });
</script>

{#if !tweet}
  <div>Loading</div>
{:else}
  <div>{tweet.full_text}</div>
{/if}
