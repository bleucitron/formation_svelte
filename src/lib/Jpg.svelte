<script>
  export let name;
  export let content;
</script>

<div class="jpg">
  <span>{name}</span>
  <span>{content}</span>
</div>

<style>
  .jpg {
    color: brown;
  }

  span:last-of-type {
    margin-left: 1rem;
  }
</style>
