<script>
  export let song;
</script>

<div class="song">
  {song.name}
  {song.band}
</div>

<style>
  .song {
    background: lightslategray;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 300px;
  }
</style>
