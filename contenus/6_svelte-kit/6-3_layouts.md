# [Layouts](https://kit.svelte.dev/docs#layouts)

Souvent, plusieurs pages partagement un agencement similaire, avec par exemple un header et un footer en commun.

SvelteKit propose une solution simple pour partager des layouts: créer un `__layout.svelte` à la racine de `src/routes`.

Ce `__layout.svelte` doit au moins contenir un `<slot />` pour pouvoir être utilisé, mais on peut y ajouter tout le markup que l'on désire.

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

## Layout nestés

On peut également ajouter des layouts nestés, c'est-à-dire des layouts qui vont venir se cumuler avec d'autres layouts.

Supposons cette architecture:
```
src/
  routes/
    projects/
      alpha.svelte
      beta.svelte
      __layout.svelte
    about.svelte
    index.svelte
    __layout.svelte
```

Dans ce cas, le `projects/__layout.svelte` va se cumuler avec le `__layout.svelte`.

## Reset de layouts

Le cumul de layouts peut parfois être contraignant. Il est donc possible d'annuler un `__layout.svelte` précédent.

Si l'on veut annuler le layout racine dans le cas précédent, il suffit de renommer `projects/__layout.svelte` en `projects/__layout.reset.svelte`.

```
src/
  routes/
    projects/
      alpha.svelte
      beta.svelte
      __layout.reset.svelte
    about.svelte
    index.svelte
    __layout.svelte
```

## [Pages d'erreur](https://kit.svelte.dev/docs#layouts-error-pages)

De la même façon que pour les layouts, on peut préparer des pages d'erreur. Ces pages s'afficheront si quelque chose se passe mal sur votre page.

Une page d'erreur est simplement une page s'appelant `__error.svelte`.

```
src/
  routes/
    people/
      romain.svelte
    projects/
      alpha.svelte
      beta.svelte
      __layout.reset.svelte
      __error.svelte
    about.svelte
    index.svelte
    __layout.svelte
    __error.svelte
```

On peut nester les pages d'erreur, mais leur layout ne se cumule pas. De plus, si un dossier n'a pas de page `__error.svelte`, comme le dossier `people`, la page d'erreur qui s'affichera en cas de pépin est la page `__error.svelte` du parent si elle existe.

Par défaut, SvelteKit propose une page d'erreur, mais il est recommandé de se l'approprier.

## Exos

- créer un layout de base
- créer un reset de layout pour les exos
- créer un layout nesté pour touitter
- créer une page d'erreur pour touitter

## à suivre: [Loading](./6-4_loading.md)
