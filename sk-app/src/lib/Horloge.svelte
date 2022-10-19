<script>
  import { onMount } from 'svelte';

  let date = new Date();

  onMount(() => {
    let id = setInterval(() => {
      console.log('Clock');
      date = new Date();
    }, 1000);

    return () => clearInterval(id);
  });
</script>

<div>{date.toLocaleTimeString()}</div>
