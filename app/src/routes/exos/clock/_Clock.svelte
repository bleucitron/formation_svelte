<script lang="ts">
	import { onMount } from 'svelte';
	let date = new Date();

	let x: number = 1;

	onMount(() => {
		let interval = setInterval(() => {
			date = new Date();
			console.log('Date', date);
		}, 1000);

		return () => clearInterval(interval);
	});
</script>

<div>{date}</div>
