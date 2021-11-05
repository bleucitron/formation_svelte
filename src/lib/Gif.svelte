<script>
  export let name;
  export let content;
</script>

<div class="gif">
  <span>{name}</span>
  <span>{content}</span>
</div>

<style>
  .gif {
    color: orange;
  }

  span:last-of-type {
    margin-left: 1rem;
  }
</style>
