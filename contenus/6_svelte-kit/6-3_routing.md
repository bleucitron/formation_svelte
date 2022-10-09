# [Routing](https://kit.svelte.dev/docs#routing)

Tous les meta-frameworks proposent un système de routing, qui fonctionnent à peu près tous de la même manière.

Il s'agit de définir les routes via le système de fichiers directement:
- `src/routes` est la racine de votre app
- `src/routes/about` est la route `/about`
- `src/routes/pokemon/info` est la route `/pokemon/info`
- `src/routes/pokemon/[id]` est la route `/pokemon/[id]`, où `id` est un **paramètre** dynamique (`/pokemon/1`, `/pokemon/2`, ...)

## Pages

### [+page.svelte](https://kit.svelte.dev/docs/routing#page)

Dans SvelteKit, **toutes les pages de notre application sont des composants**.

**Les pages doivent être définies dans `src/routes`**, en tant que fichiers `+page.svelte`.

Ces fichiers seront **générés côté serveur pendant le SSR, ainsi que côté client pour le CSR**.

```html
<!-- src/routes/+page.svelte -->
<h1>Salut les copains !</h1>
```

```html
<!-- src/routes/about/+page.svelte -->
<h1>Plus d'infos sur ma modeste personne</h1>
```


```html
<!-- src/routes/pokemon/[id]/+page.svelte -->
<script>
  import { page } from '$app/stores';
</script>

<h1>Pokemon: {$page.params.id}</h1>
```

> On reparlera plus tard de `$page`.

Chacune de ces pages sera rendue côté serveur (SSR) avant d'être envoyée au client pour permettre un affichage optimisé (et ne pas heurter le SEO). Une fois que la page est construite côté serveur, elle est envoyée côté client, ce qui permet l'affichage de la page au moment même de sa réception: pas besoin d'attendre que Javascript ait fini de s'exécuter pour voir quelque chose à l'écran.

Toutefois, ce premier rendu, très rapide, n'est pas encore interactif. Il faut attendre que le router client (CSR) prenne le relais, et regénère la page pour que toute la logique Svelte soit en place.

### [+page.js](https://kit.svelte.dev/docs/routing#page-page-js)

Vous pouvez également définir un fichier `+page.js` pour chaque route. Ce fichier vous permet de définir le comportement de votre route, notamment concernant le chargement de données.


```js
// +page.js
export async function load () {
  const resp = await fetch('https://swapi.dev/api/people/1');
  const data = await resp.json();

  return {
    name: data.name
    birth_year: data.birth_year
  };
};
```


```html
<!-- +page.svelte -->
<script>
  export let data;
</script>

<h1>Moi</h1>
<p>{data.name}</p>
<p>{data.birth_year}</p>
```

> Comme la page `+page.svelte`, le script `+page.js` est **exécuté à la fois côté client ET côté serveur **!

#### [Options de page](https://kit.svelte.dev/docs/page-options)

Le fichier `+page.js` peut également exporter des options pour changer le comportement de la page:
- `prerender`: pour générer la page au build
- `ssr`: pour utiliser le SSR
- `csr`: pour utiliser le CSR

```js
export const prerender = true // ou false
export const ssr = true // ou false
export const csr = true // ou false
```

### [+page.server.js](https://kit.svelte.dev/docs/routing#page-page-server-js)

Si vous souhaitez que le chargement des données se fasse uniquement côté serveur, dans ce cas, renommez le fichier `+page.js` en `+page.server.js`.

Cela est utile par exemple si l'on souhaite accéder en direct à une base de données, ou si l'on veut cacher des variables d'environnement.

## [Paramètres dynamiques](https://kit.svelte.dev/docs#routing-advanced-rest-parameters)

Il est possible de fournir des arguments dynamiques à une route:

`https://www.jeSaisToutSurTout.com/pokemons/151`

Dans ce cas, on veut pouvoir avoir un seul fichier qui soit capable de gérer tous les numéros de Pokemons possibles (plus de 800).

On peut alors écrire un fichier `pokemons/[id]/+page.svelte`.

Dans ce fichier, il sera possible de récupérer les infos d'`id` pour ajuster le contenu.

Pour des cas plus complexes:

`https://www.univers.com/geographie/france/33/bordeaux`

On peut aussi fournir plusieurs arguments: `geographie/[pays]/[departement]/[ville]/+page.svelte` va définir dans notre page les paramètres suivants (dans `$page.params`):

```js
{
  pays: 'france',
  departement: '33',
  ville: 'bordeaux'
}
```

Si jamais on ne connait pas le nombre d'arguments à l'avance, il est possible d'utiliser le `...`: `geographie/[...args]/+page.svelte` donnera

```js
{
  args: 'france/33/bordeaux';
}
```

## [Pages d'erreur](https://kit.svelte.dev/docs/routing#error)

Vous pouvez prévoir des pages d'erreur pour chaque route, en créant un fichier `+error.svelte` dans votre route.

Dans ces pages, vous pouvez accéder aux détails de l'erreur via `$page.error` et `$page.status`.

> On reparlera plus tard de `$page`.

```html
<script>
  import { page } from '$app/stores';
</script>

<h1>{$page.status}: {$page.error.message}</h1>
```

## [Modules privés](https://kit.svelte.dev/docs/routing#other-files)

On verra qu'il y a d'autres fichiers spéciaux. Ces fichiers commencent tous par `+`.

Tout fichier ne commencant pas par `+` est ignoré par le router, et peut donc servir de fichier utilitaire, par exemple pour définir des composants locaux à la route.

---

## Exos

- créer l'arborescence suivante:

```
  src/
    routes/
      exos/
      touitter/
      about/
```

- créer une page d'accueil
- créer une page pour afficher le projet Touitter
- créer une page par exercice dans le dossier `src/routes/exos`

---

## à suivre: [Layouts](./6-4_layouts.md)
