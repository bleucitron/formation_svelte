# Composants spéciaux

Il existe certains composants spéciaux en Svelte.

## [`<svelte:self>`](https://svelte.dev/docs#template-syntax-svelte-self)

Permet à un composant de s'inclure lui-même.

**Ne peut pas être placé à la racine du markup**, au risque de provoquer une boucle infinie.

```svelte
<script>
  export let count = 10;
</script>

{#if count > 0}
  <p>counting down... {count}</p>
  <svelte:self count="{count - 1}"/>
{:else}
  <p>lift-off!</p>
{/if}
```

## [`<svelte:fragment>`](https://svelte.dev/docs#template-syntax-svelte-fragment)

Permet d'utiliser des slots nommés sans rajouter un étage artificiel.

```svelte
<!-- Widget.svelte -->
<div>
  <slot name="header">No header was provided</slot>
  <p>Some content between header and footer</p>
  <slot name="footer"></slot>
</div>

<!-- App.svelte -->
<Widget>
  <h1 slot="header">Hello</h1>
  <svelte:fragment slot="footer">
    <p>All rights reserved.</p>
    <p>Copyright (c) 2019 Svelte Industries</p>
  </svelte:fragment>
</Widget>
```

## [`<svelte:component>`](https://svelte.dev/docs#template-syntax-svelte-component)

Permet d'instancier un composant dynamiquement.

```svelte
<svelte:component this={blabla.component} />
```

## [`<svelte:window>`](https://svelte.dev/docs#template-syntax-svelte-window)

Permet d'utiliser des event listeners sur la `window` sans se soucier de les supprimer lors de l'éventuelle destruction du composant.

```svelte
<svelte:window on:scroll={() => console.log('Scrolling')}/>
```

`<svelte:window>` doit être placé à la racine du markup.

## [`<svelte:body>`](https://svelte.dev/docs#template-syntax-svelte-body)

Permet d'utiliser des event listeners sur le `body` sans se soucier de les supprimer lors de l'éventuelle destruction du composant.

```svelte
<svelte:body on:mouseenter={() => console.log('Entering body')}/>
```

`<svelte:body>` doit être placé à la racine du markup.

## [`<svelte:head>`](https://svelte.dev/docs#template-syntax-svelte-head)

Permet d'ajouter des éléments dans le `<head>`.

```svelte
<svelte:head>
  <link rel="stylesheet" href="tutorial/dark-theme.css">
</svelte:head>
```

`<svelte:head>` doit être placé à la racine du markup.

## [`<svelte:options>`](https://svelte.dev/docs#template-syntax-svelte-options)

Permet de fournir au compilateur des options spécifiques au composant.

```svelte
<svelte:options tag="my-custom-element"/>
```

## Exos

### Système de fichiers

Afficher un système de fichiers en utilisant `<svelte:self>` et `<svelte:component>`.

- à chaque étage, un objet est un dossier, le reste sont des fichiers
- on peut différencier les objets avec `typeof x === 'object'`
- Créer un composant différent pour chaque extension de fichier

```js
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
    'image01.jpg': 'image de chien',
    'image02.gif': 'gif de chat',
    'image03.jpg': 'image de cheval',
    'image04.png': 'image de carotte',
    'image05.jpg': 'image de jacuzzi',
  },
};
```

## à suivre: [4 - Stores] [Concept](../4_stores/4-1_concept.md)
