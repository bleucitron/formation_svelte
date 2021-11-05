<script context="module">
  import { compByExt } from './utils';
</script>

<script>
  export let files;

  $: filesAsArray = Object.entries(files);
</script>

<div class="tree">
  {#each filesAsArray as [name, content]}
    {#if typeof content === 'string'}
      <svelte:component this={compByExt[name.split('.')[1]]} {name} {content} />
    {:else}
      <div class="folder">{name}</div>
      <svelte:self files={content} />
    {/if}
  {/each}
</div>

<style>
  .tree {
    padding-left: 2rem;
  }

  .folder {
    font-weight: bold;
  }
</style>
