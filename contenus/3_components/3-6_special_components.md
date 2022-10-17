# Composants spéciaux

Il existe certains composants spéciaux en Svelte.

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

## [`<svelte:window>`](https://svelte.dev/docs#template-syntax-svelte-window)

Permet d'utiliser des event listeners sur la `window` sans se soucier de les supprimer lors de l'éventuelle destruction du composant.

```svelte
<svelte:window on:scroll={() => console.log('Scrolling')}/>
```

`<svelte:window>` doit être placé à la racine du markup.

## [`<svelte:body>`](https://svelte.dev/docs#template-syntax-svelte-body)

Permet d'utiliser des event listeners sur le `body`.

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

## Autres

Il existe d'autres composants spéciaux, qui relèvent plus d'un cours avancé.

- [`<svelte:self>`](https://svelte.dev/docs#template-syntax-svelte-self)
- [`<svelte:component>`](https://svelte.dev/docs#template-syntax-svelte-component)
- [`<svelte:options>`](https://svelte.dev/docs#template-syntax-svelte-options)

---

## à suivre: [Stores](../4_stores/index.md)
