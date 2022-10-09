# [Structure d'un projet SvelteKit](https://kit.svelte.dev/docs/project-structure)

```bash
my-project/
├ src/
│ ├ lib/
│ │ ├ server/
│ │ │ └ [your server-only lib files]
│ │ └ [your lib files]
│ ├ params/
│ │ └ [your param matchers]
│ ├ routes/
│ │ └ [your routes]
│ ├ app.html
│ ├ error.html
│ └ hooks.js
├ static/
│ └ [your static assets]
├ tests/
│ └ [your tests]
├ package.json
├ svelte.config.js
├ tsconfig.json
└ vite.config.js
```

## `src`

Votre dossier principal.

Il contient:

### `lib`

Le dossier de vos fichiers génériques. On peut y accéder partout dans `src` via `$lib`.

Vous pouvez aussi créer un sous-dossier `lib/server`, qui contiendra vos fichiers à utiliser uniquement côté serveur.


### `params`

Contient des fonctions pour matcher les paramètres.

### `routes`

Le dossier de toutes vos routes. C'est ici que se contruit le coeur de votre application.

Ce dossier contient également:
- `index.html`: le fichier servant de racine à votre app
- `error.html`: (optionnel) un fichier permettant d'afficher une page d'erreur si rien ne va
- `hooks.js`: (optionnel) pour gérer vos hooks
- `service-worker.js`: (optionnel) pour gérer vos *service workers*

## `static`

Le dossier pour vos assets statiques.

## `tests`

Le dossier pour vos tests éventuels.

## Autres fichiers

- `package.json`: référence de votre projet
- `svelte.config.json`: config SvelteKit
- `tsconfig.json`: config Typescript, si vous avez choisi Typescript
- `vite.config.json`: config Vite
- `.svelte-kit`: dossier utilisé par le mode développement

---

## à suivre: [Routes](./6-3_routes.md)
