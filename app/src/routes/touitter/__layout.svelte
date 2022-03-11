<script>
	import { navigating } from '$app/stores';
</script>

<slot />

{#if $navigating}
	<div class="loader">Loading...</div>
{/if}

<footer>Footer de touitter</footer>

<style>
	.loader {
		position: absolute;
		top: 1rem;
		right: 1rem;
	}
</style>
