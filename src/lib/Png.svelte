<script>
  export let name;
  export let content;
</script>

<div class="png">
  <span>{name}</span>
  <span>{content}</span>
</div>

<style>
  .png {
    color: grey;
  }

  span:last-of-type {
    margin-left: 1rem;
  }
</style>
