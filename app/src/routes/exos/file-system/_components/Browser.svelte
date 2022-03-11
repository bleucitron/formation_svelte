<script>
	import Doc from './Doc.svelte';
	import Png from './Png.svelte';
	import Pdf from './Pdf.svelte';
	import Gif from './Gif.svelte';
	import Jpg from './Jpg.svelte';

	export let tree;

	const dict = {
		doc: Doc,
		jpg: Jpg,
		pdf: Pdf,
		gif: Gif,
		png: Png
	};

	$: keys = Object.keys(tree);
</script>

<div class="tree">
	{#each keys as key}
		{@const value = tree[key]}
		{@const type = typeof value}
		{@const ext = key.split('.')[1]}
		{#if type === 'object'}
			<div>{key}</div>
			<svelte:self tree={value} />
		{:else}
			<svelte:component this={dict[ext]} name={key} />
		{/if}
	{/each}
</div>

<style>
	.tree {
		margin-left: 1rem;
	}
</style>
