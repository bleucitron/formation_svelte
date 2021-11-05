<script context="module">
  export async function load({ page, fetch }) {
    console.log('LOAD');
    const { name } = page.params;

    const user_resp = await fetch(`/api/users/${name}`);
    const user = await user_resp.json();
    const users_resp = await fetch(`/api/users`);
    const users = await users_resp.json();

    return {
      props: {
        user,
        users,
      },
    };
  }
</script>

<script>
  import { navigating } from '$app/stores';

  export let user;
  export let users;

  $: isChangingName =
    $navigating &&
    $navigating.from.path.includes('touitter/user') &&
    $navigating.to.path.includes('touitter/user');
</script>

{#each users as u}
  <a href={`./${u}`}>{u}</a>
{/each}

{#if isChangingName}
  Loading
{:else}
  <h1>{user.name}</h1>
  <h2>{user.screen_name}</h2>
{/if}

<style>
  a {
    margin: 0 1rem;
  }
</style>
