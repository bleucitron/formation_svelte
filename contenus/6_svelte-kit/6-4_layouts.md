# [Layouts](https://kit.svelte.dev/docs/routing#layout)

Souvent, plusieurs pages partagement un agencement similaire, avec par exemple un header et un footer en commun.

SvelteKit propose une solution simple pour partager des éléments sur plusieurs pages: les layouts.

Chaque route peut avoir un `+layout.svelte`, qui s'appliquera à toutes les routes enfants.

> Le layout à la racine `src/routes/+layout.svelte` s'appliquera à toutes les pages.

## [+layout.svelte](https://kit.svelte.dev/docs/routing#layout-layout-svelte)

Ce `+layout.svelte` doit au moins contenir un `<slot />` pour pouvoir être utilisé, mais on peut y ajouter tout le markup que l'on désire.

```html
<nav>
  <a href="/">Home</a>
  <a href="/about">About</a>
  <a href="/settings">Settings</a>
</nav>
<slot></slot>
```

Dès lors, toutes mes pages auront ce `<nav>` en plus, sans avoir besoin de le préciser.

```html
<!-- about.svelte -->
<h1>À propos</h1>
```

> Chaque layout ne sera pas reconstruit si cela n'est pas nécessaire.

## [+layout.js](https://kit.svelte.dev/docs/routing#layout-layout-js)

Comme pour les fichiers `+page.js`, il est possible d'avoir un fichier `+layout.js`, qui pourra charger de la donnée, et définir des options de page.

Dans ce cas, les données retournées par `load` sont rendues disponibles dans la props `data` de `+layout.svelte`, ainsi que dans la props `data` de `+page.js`.

```js
// +layout.js
export function load() {
  return {
    date: '2022-10-09'
  };
}
```

```js
// +page.js
export function load() {
  return {
    name: 'Romain'
  };
}
```

```html
<!-- +layout.svelte -->
<script>
  export let data; // { date: '2022-10-09' }
</script>

<header>Date: {data.date}</header>
```

```html
<!-- +page.svelte -->
<script>
  export let data; // { date: '2022-10-09', name: 'Romain' }
</script>

<h1>Je m'appelle {data.name}</h1>
```

### Options de layout

Si `+layout.js` exporte les options de page `prerender`, `ssr`, ou `csr`, ces options s'appliqueront par défaut à toutes les pages concernées par ce layout.

Si une de ces page précise des options différentes, alors les options appliquées seront celles de la page.


## [+layout.server.js](https://kit.svelte.dev/docs/routing#layout-layout-server-js)

De même que pour les pages, il est possible d'utiliser un fichier `+layout.server.js`, qui sera uniquement exécuté côté serveur.


## Layout nestés

On peut également ajouter des layouts nestés, c'est-à-dire des layouts qui vont venir se cumuler avec d'autres layouts.

Supposons cette architecture:

```
src/
  routes/
    projects/
      alpha/
        +page.svelte
      beta/
        +page.svelte
      +layout.svelte
    about/
      +page.svelte
    +page.svelte
    +layout.svelte
```

Dans ce cas, le `projects/+layout.svelte` va se cumuler avec le `+layout.svelte` pour tous les fichiers de la route `projects`, ainsi que les éventuelles `data` chargées par chaque layout.

## Autres

Vous pouvez également créer des [groupes de layout](https://kit.svelte.dev/docs/advanced-routing#advanced-layouts-group), ainsi que des [resets de layout](https://kit.svelte.dev/docs/advanced-routing#advanced-layouts-page)

---

## Exos

- créer un layout de base
- créer un layout nesté pour touitter
- créer une page d'erreur pour touitter

---

## à suivre: [Loading](./6-5_loading.md)
