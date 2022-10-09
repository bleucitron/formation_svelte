# [SvelteKit](https://kit.svelte.dev/docs)

SvelteKit fait partie de la famille des meta-frameworks, aussi appelés application-frameworks.

Parmi ces meta-frameworks, on retrouve:

- [Next](https://nextjs.org/), pour React
- [Gatsby](https://www.gatsbyjs.com/), pour React
- [Nuxt](https://nuxtjs.org/), pour Vue
- [SvelteKit](https://kit.svelte.dev/), pour Svelte
- [Astro](https://astro.build/blog/introducing-astro/), carrément agnostique
- et pleins d'autres...

Mais...

## C'est quoi un meta-framework ?

Svelte, comme React ou Vue, est un framework de composants. C'est-à-dire qu'il fournit tout un tas d'outils pour écrire des briques d'interface unitaires, mais également une certaine méthodologie dans la construction et l'interopérabilité de ces briques.

Utiliser un framework de composants, c'est embrasser une certaine philosophie, souvent différente des autres frameworks.

Un meta-framework (ou application-framework) pousse le curseur encore plus loin: les frameworks de composants ne fournissent pas de méthodes ou de bonnes pratiques pour construire une application web. On a certes des briques unitaires, les composants, mais c'est tout.

Au contraire, **un meta-framework fournit une boite à outils permettant d'assister les équipes de développement dans la construction d'une application**. Ils permettent de structurer, d'optimiser, de build et de déployer facilement le code d'une application.

Les outils généralement incluent:

- la configuration rapide d'un projet: bundlers, transpilers, Typescript, SASS, etc...
- des principes d'organisation de code
- un système de routing
- du code splitting pour ne charger que le JS strictement nécessaire
- du Server-side Rendering (SSR) et du Static Site Generation (SSG)

## SSR, SSG, SPA ?

### Single Page Applications

Avec les premiers frameworks, et notamment React, est arrivé le concept de Single Page Application (SPA).

**Une SPA est une application entièrement contenue sur une seule page**, et dont la navigation se fait entièrement côté client.

L'usage des SPA s'est rapidement démocratisé, et a amené 2 soucis:

- le SEO des SPA est catastrophique, puisque tout est généré côté client
- les performances au premier rendu des SPA sont nazes, puisque tout le code est contenu dans une seule page

### Server Side Rendering

Est alors apparu le concept de SSR. Les applications sont de nouveau découpées en pages, et **chaque page servie est systématiquement générée à la demande**, envoyée au client, affichée par le client (sans JS), puis regénérée par le navigateur (_hydratation_) pour mettre en place le JS des moteurs des frameworks de composants, et rendre la page dynamique.

Mais le SSR pose également quelques problèmes:

- le serveur est énormément sollicité, car il doit regénérer plusieurs fois des pages qui parfois sont toujours les mêmes (appelées pages statiques)
- les performances au premier rendu ne sont pas optimales pour les pages statiques, qui doivent être générés dynamiquement

### Static Site Generation

Une autre mode est venue compenser ces problématiques: la SSG.

**Il s'agit de générer toutes les pages d'un site une seule fois, au moment du build**. Les performances sont alors optimales, puisqu'aucun travail n'est à faire lorsqu'une page est servie.

Les SSG sont donc idéales pour les blogs.

Néanmoins, les SSG ne permettent pas d'avoir des sites dynamiques, c'est-à-dire dont le contenu dépend de l'utilisateur qui le visite.

### Euh... du coup je fais quoi Michel ?

Il est souvent nécessaire de choisir une stratégie parmi ces 3 au début d'un projet, car les frameworks d'applications permettent l'une ou l'autre, mais rarement plusieurs.

**SvelteKit a la particularité de permettre de choisir pour chaque page quelle stratégie à adopter**.

Rich Harris appelle ça des [transitional apps](https://www.youtube.com/watch?v=860d8usGC0o).

## [Sapper](https://sapper.svelte.dev/) ?

**Il n'y a plus de Sapper**. C'est l'ancêtre de SvelteKit, et n'a jamais atteint une version 1.0.

Sapper a été lancé assez vite après Svelte, mais à ce moment, l'effort de développement a été plutôt axé sur la v3 de Svelte. Une fois celle-ci sortie, Sapper a continué de stagner, la core team n'étant pas satisfaite de la direction qu'avait pris le projet.

Tout s'est débloqué avec le déploiement du standard `import`/`export` dans les navigateurs, et l'arrivée de nouveaux outils de bundling tels que [Snowpack](https://www.snowpack.dev/) ou [Vite](https://vitejs.dev/). Ces outils tirent un maximum profit des modules ES, et permettent entre autres des rafraîchissements quasi instantanés lors des développements.

SvelteKit a choisi Vite comme bundler de développement par défaut.

## [Installer SvelteKit](https://kit.svelte.dev/docs/introduction#getting-started)

```bash
npm create svelte@latest my-app
cd my-app
npm install # installe les dépendances
npm run dev -- --open # lance le serveur de développement
```

## à suivre: [Structure d'un projet](./6-2_structure.md)
