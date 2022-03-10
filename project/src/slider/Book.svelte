<script>
  export let book;
</script>

<div class="book">
  {book.name}
  {book.author}
</div>

<style>
  .book {
    background: lightgreen;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 300px;
  }
</style>
