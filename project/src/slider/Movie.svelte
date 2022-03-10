<script>
  export let movie;
</script>

<div class="movie">
  {movie.name}
  {movie.director}
</div>

<style>
  .movie {
    background: lightblue;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 300px;
  }
</style>
