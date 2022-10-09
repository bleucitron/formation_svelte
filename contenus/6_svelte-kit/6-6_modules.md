# [Modules](https://kit.svelte.dev/docs#modules)

Dans une page SvelteKit, il est possible d'accéder à différents modules super utiles.

## [`$app/stores`](https://kit.svelte.dev/docs/modules#$app-stores)

```js
import { navigating, page, session } from '$app/stores';
```

- [`page`](https://kit.svelte.dev/docs/modules#$app-stores-page) fournit des informations sur la page courante.
- [`navigating`](https://kit.svelte.dev/docs/modules#$app-stores-navigating) permet de savoir si je suis ou non en train de changer de page

```js
{
  from, to;
}
```

- [`session`](https://kit.svelte.dev/docs/modules#$app-stores-session) donne des infos sur la session courante, comme pour `load`.

## [`$app/navigation`](https://kit.svelte.dev/docs/modules#$app-navigation)

Permet de naviguer programmatiquement au sein de l'application.

```js
import { goto, invalidate, prefetch, prefetchRoutes } from '$app/navigation';
```

- `goto` est une fonction permettant de se déplacer sur une route de mon application
- `invalidate` permet de forcer le rechargement de `load` pour une certaine ressource
- `prefetch` permet de précharger une page
- `prefetchRoutes` permet de précharger plusieurs pages

## [`$app/env`](https://kit.svelte.dev/docs/modules#$app-env)

`$app/env` fournit des infos sur l'environnement courant.

```js
import { browser, dev } from '$app/env'; // non exhaustif
```

- `browser`, booléen informant si l'exécution est côté client ou serveur
- `dev`, booléen informant si l'on est en mode développement

## à suivre: [Builds et déploiements](./6-6_build_and_deploy.md)
