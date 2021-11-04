<script>
  export let name;
  export let content;
</script>

<div class="doc">
  <span>{name}</span>
  <span>{content}</span>
</div>

<style>
  .doc {
    color: darkblue;
  }

  span:last-of-type {
    margin-left: 1rem;
  }
</style>
