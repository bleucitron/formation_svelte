<script>
  import { onMount } from 'svelte';
  import Clock from './Clock.svelte';

  let show = false;

  let promise;

  onMount(() => {
    promise = fetch(
      'https://raw.githubusercontent.com/iOiurson/data/master/data/tweets.json',
    ).then(resp => resp.json());
  });

  // let tweets;
  // onMount(async () => {
  //   const resp = await fetch(
  //     'https://raw.githubusercontent.com/iOiurson/data/master/data/tweets.json',
  //   );
  //   tweets = await resp.json();
  // });
</script>

<button on:click={() => (show = !show)}>
  {#if !show}
    Show
  {:else}
    Hide
  {/if}
</button>
{#if show}
  <Clock />
{/if}

{#await promise}
  <div>Loading...</div>
{:then tweets}
  <div>{tweets?.[0].full_text}</div>
{/await}

<!-- {#if tweets}
  <div>{tweets[0].full_text}</div>
{:else}
  <div>Loading</div>
{/if} -->
