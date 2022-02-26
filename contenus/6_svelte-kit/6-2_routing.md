# [Routing](https://kit.svelte.dev/docs#routing)

Tous les meta-frameworks proposent un système de routing, qui fonctionnent à peu près tous de la même manière.

## [Pages](https://kit.svelte.dev/docs#routing-pages)

Dans SvelteKit, **toutes les pages de notre application sont des composants**.

**Les pages doivent être définies dans `src/routes`**, en tant que fichiers `.svelte`.

```html
<!-- src/routes/index.svelte -->
<svelte:head>
  <title>Bonjour !</title>
</svelte:head>

<h1>Salut les copains !</h1>
```

```html
<!-- src/routes/about.svelte -->
<svelte:head>
  <title>Qui suis-je ?</title>
</svelte:head>

<h1>Plus d'infos sur ma modeste personne</h1>
```

Chacune de ces pages sera rendue côté serveur avant d'être envoyée au client pour permettre un affichage optimisé (et ne pas heurter le SEO). Une fois que la page est construite côté serveur, elle est envoyée côté client, ce qui permet l'affichage de la page au moment même de sa réception: pas besoin d'attendre que Javascript ait fini de s'exécuter pour voir quelque chose à l'écran.

Toutefois, ce premier rendu, très rapide, n'est pas encore interactif. Il faut attendre que le router client prenne le relais, et regénère la page pour que toute la logique Svelte soit en place.

## [Paramètres dynamiques](https://kit.svelte.dev/docs#routing-advanced-rest-parameters)

Il est possible de fournir des arguments dynamiques à une route:

`https://www.jeSaisToutSurTout.com/pokemons/151`

Dans ce cas, on veut pouvoir avoir un seul fichier qui soit capable de gérer tous les numéros de Pokemons possibles (plus de 800).

On peut alors écrire un fichier `pokemons/[id].svelte`.

Dans ce fichier, il sera possible de récupérer les infos d'`id` pour ajuster le contenu.

Pour des cas plus complexes:

`https://www.univers.com/geographie/france/33/bordeaux`

On peut aussi fournir plusieurs arguments: `geographie/[pays]/[departement]/[ville].svelte` rendra disponible dans notre composant de page les infos:

```js
{
  pays: 'france',
  departement: '33',
  ville: 'bordeaux'
}
```

Si jamais on ne connait pas le nombre d'arguments à l'avance, il est possible d'utiliser le `...`: `geographie/[...args].svelte` donnera

```js
{
  args: 'france/33/bordeaux';
}
```

## [Modules privés](https://kit.svelte.dev/docs#routing-private-modules)

Dans le dossier `src/routes`, chaque fichier `.svelte` est une route. Mais aussi tous les `.ts` ou `.js` (on parle alors de [enpoints](https://kit.svelte.dev/docs#routing-endpoints)).

Mais parfois, on a besoin d'avoir des fichiers dans `src/routes` qui ne sont pas des routes.

Il suffit de préfixer notre fichier avec `_`: **`src/routes/_notARoute.svelte` ne sera pas une route**.

## Exos

- créer l'arborescence suivante:

```
  src/
    routes/
      exos/
      touitter/
      about.svelte
      index.svelte
```

- créer une page par exercice dans le dossier `src/routes/exos`
- faire en sorte que les composants qui ne le nécessitent pas ne soient pas des pages

## à suivre: [Layouts](./6-3_layouts.md)
