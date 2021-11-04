<script>
  export let name;
  export let content;
</script>

<div class="pdf">
  <span>{name}</span>
  <span>{content}</span>
</div>

<style>
  .pdf {
    color: green;
  }

  span:last-of-type {
    margin-left: 1rem;
  }
</style>
