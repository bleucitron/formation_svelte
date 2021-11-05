<script>
  import { onMount } from 'svelte';

  let date = new Date();
  // let i;

  onMount(() => {
    const i = setInterval(() => {
      date = new Date();
      console.log('COUCOU');
    }, 1000);

    return () => clearInterval(i);
  });

  // onDestroy(() => {
  //   clearInterval(i)
  // })
</script>

<h2>Horloge</h2>
<div>{date.toLocaleTimeString()}</div>
