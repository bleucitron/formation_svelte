<script>
  import { onMount } from 'svelte';

  let tweets;
  $: ready = !!tweets;

  // onMount(() => {
  //   fetch(
  //     'https://raw.githubusercontent.com/iOiurson/data/master/data/tweets.json',
  //   )
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(data => {
  //       console.log('DATA', data);
  //       tweets = data;
  //     });
  // });

  const urls = [
    'https://raw.githubusercontent.com/iOiurson/data/master/data/tweets.json',
    'https://raw.githubusercontent.com/iOiurson/data/master/data/tweets2.json',
  ];

  function getJson(url) {
    return fetch(url).then(resp => resp.json());
  }

  onMount(async () => {
    const data = await Promise.all(urls.map(getJson));
    tweets = data.flat();
  });
</script>

<h2>Exo 3-2</h2>
{#if ready}
  {#if tweets.length}
    <div>{tweets.length}</div>
    <div>{tweets[0].full_text}</div>
  {:else}
    Pas de tweets
  {/if}
{/if}
