<script>
  import Files from './Files.svelte';
  const files = {
    documents: {
      CVs: {
        'fr.pdf': 'Mon CV en français',
        'en.pdf': 'My CV in english',
      },
      recettes: {
        desserts: {
          'flan.doc': 'Une recette de flan',
          'carrot cake.doc': 'Une recette de carrot cake',
        },
        'ratatouille.doc': 'Une recette de ratatouille',
        'kebab.doc': 'Une recette de kebab',
        'sushi.doc': 'Une recette de sushi',
      },
    },
    images: {
      'image01.jpg': 'image01.jpg',
      'image02.gif': 'image02.gif',
      'image03.jpg': 'image03.jpg',
      'image04.png': 'image04.png',
      'image05.jpg': 'image05.jpg',
    },
  };
</script>

<h2>Exo 3-6</h2>

<Files {files} />
