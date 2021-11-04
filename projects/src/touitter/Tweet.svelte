<script>
  export let tweet;

  $: ({
    full_text,
    user: { name },
    created_at,
  } = tweet);
</script>

<div class="Tweet">
  <div class="user">
    {name}
  </div>
  <div class="text">
    {full_text}
  </div>
  <div class="date">
    {new Date(created_at).toLocaleDateString()}
  </div>
</div>

<style>
  .Tweet {
    margin: 2rem;
    padding: 1rem;
    border: 1px solid black;
  }

  .user {
    font-weight: bold;
  }

  .text {
    font-size: 1.2rem;
    margin: 0.5rem;
  }

  .date {
    font-style: italic;
  }
</style>
