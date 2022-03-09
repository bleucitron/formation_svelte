<script>
  import { onMount } from 'svelte';
  let date = new Date();

  onMount(() => {
    let interval = setInterval(() => {
      date = new Date();
      console.log('Date', date);
    }, 1000);

    return () => clearInterval(interval);
  });
</script>

<div>{date}</div>
