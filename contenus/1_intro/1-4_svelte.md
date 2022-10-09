# Svelte

> Frameworks are not tools to organise your code, they are tools for organising your mind.

L'approche que prend Svelte est donc de supprimer le plus de code possible, pour **ne garder que le code nécessaire à votre application**.

Ça permet de **se concentrer sur le code qui donne vraiment de la valeur ajoutée**, et non sur du code qui ne sert qu'à bien faire marcher le framework.

## Compiler c'est la vie

Javascript est un langage interprété. Ça veut dire qu'il n'a pas besoin d'être compilé en binaire pour être compris par le navigateur.

Néanmoins dans le web front-end moderne, il est presque impossible de ne pas compiler son code Javascript:

- ESNext => ES5
- TS => JS
- JSX => JS

Ces compilations, parfois même cumulées, se font toutes à build-time par des bundlers (Webpack, Rollup, Parcel, ...), et ce qui est envoyé au navigateur est un bundle JS optimisé.

Le bundle inclut le code de votre application, ainsi que toutes les dépendances nécessaires à sont fonctionnement.

Donc également le code de votre éventuel framework, qui pour React pèse environ 40kb gzippé (en gros: le moteur de la boucle de rendu, plus le virtual DOM).

Du coup, plutôt que d'embarquer tout le code lié au fonctionnement du framework dans le bundle pour qu'il tourne dans le navigateur, pourquoi ne pas faire tout le travail difficile (= la logique du framework) au moment du build, puisque de toutes façons il y a une étape de compilation ?

**Svelte est donc un compilateur**. Ce qui en fait un framework vraiment à part.

Toute la logique liée aux composants et à la mise à jour du DOM est donc prévue programmatiquement à build-time. Le code Svelte buildé contient déjà toute l'intelligence nécessaire pour que le DOM se mette à jour correctement et de manière optimale lors des futurs interactions. Il n'y a donc pas du tout besoin de boucle de rendu, ni de Virtual DOM.

=> moins de code embarqué
=> moins de code exécuté
=> moins de code écrit

## Proche du HTML

**HTML est le language du web.** Pas Javascript.

Svelte peut être considéré comme **un superset du HTML**, c'est-à-dire qu'il se base sur du HTML, et l'enrichit.

```html
<script>
  console.log('COUCOU');
</script>

<style>
  h1 {
    color: red;
  }
</style>

<h1>Ceci</h1>
<p>Ceci peut être un composant Svelte à part entière</p>
<p>
  Il est donc tout à fait possible d'écrire une application web en n'écrivant
  que du HTML en Svelte.
</p>
```

## Avantages

- Très rapide
- Moins de code embarqué
- Moins de code à écrire => moins de bugs potentiels
- Facile à apprendre
- Styles scopés
- Stores natifs
- Checks d'accessibilité intégrés
- SvelteKit (par les mêmes gens)

```jsx
import react, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(c => c - 1)}>Decrease</button>
      <div>{count}</div>
      <button onClick={() => setCount(c => c + 1)}>Increase</button>
    </div>
  );
}
```

```html
<script>
  let count = 0;
</script>

<div>
  <button on:click={() => {count = count - 1}}>Decrease</button>
  <div>{count}</div>
  <button on:click={() =>  {count = count + 1}}>Increase</button>
</div>
```

Au final, la DX (Developer Experience) est vraiment soignée.

## Inconvénients

### Communauté moins large que celle de React

Mais grandissante.

### Scalabilité moindre ?

La contrepartie à ne pas embarquer de code de moteur de rendu, est que le code compilé de chaque composant Svelte est un petit peu plus gros que son équivalent React.

Pour de grosses applications, il y aurait donc [un point d'inflexion](https://github.com/halfnelson/svelte-it-will-scale#calculating-the-inflection-point) au delà duquel le bundle Svelte serait plus gros que celui de React, ce qui contredit un de ses principaux arguments.

Ce point est estimé à entre 120kb et 140kb de code source. C'est tout à fait atteignable pour une application SPA, mais en pratique cela ne pose pas vraiment de souci pour une application sur plusieurs pages associée à du code splitting et du SSR, qui sont les nouveaux standards de l'industrie.

[GRAPHIQUES SUR LA TAILLE DES BUNDLE]

---

## à suivre: [Liens utiles](./1-5_links.md)
