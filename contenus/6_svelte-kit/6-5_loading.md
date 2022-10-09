# [Loading](https://kit.svelte.dev/docs/load)

On a vu que SvelteKit permettait de charger de la donnée côté serveur.

Avantages:

- Moins d'aller-retours entre le serveur et le client
- Plus besoin d'afficher un loader côté client (la page arrive déjà prête)
- On peut rediriger avant même d'envoyer du HTML au client
- Gestion des promesses allégée côté client

Inconvénients:

- si le chargement de données est vraiment très conséquent, la page risque d'arriver tard. Dans ce cas, éventuellement prévoir une autre stratégie

On a vu que cela était possible grâce à la fonction `load` de `+page.js` (et/ou `+layout.js`).

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

Néanmoins cet exemple présente un défaut majeur: le `fetch` est effectué 2 fois: côté serveur, puis de nouveau côté client.

Comment peut-on éviter ça ? En utilisant correctement les inputs de la fonction `load`.

## `load` inputs

Dans SvelteKit, toute fonction `load` a des inputs qui permettent d'obtenir des infos sur la page en cours, ainsi que modifier le comportement du chargement.

### `fetch`

Parmi ces inputs, on peut utiliser `fetch`, qui remplace le `fetch` habituel, et permettant d'inliner les données dans le HTML produit pendant le SSR. Ainsi, la donnée n'est chargée qu'une fois.

```js
export async function load ({ fetch }) { // il est important d'utiliser ce fetch ci
  const resp = await fetch('https://swapi.dev/api/people/1');
  const data = await resp.json();

  return {
    name: data.name
    birth_year: data.birth_year
  };
};
```

Ce `fetch` spécial a d'autres avantages:
- hérite des cookies et permet de faire des requêtes authentifiées
- permet de faire des requêtes avec des urls relatives
- les requêtes internes au serveur sont relayées directement à la fonction concernée, sans appel HTTP


### [Propriétés](https://kit.svelte.dev/docs/load#input-properties)

- `params`: les paramètres de route de la page
- `routeId`: l'identifiant de la route (ex: `/pokemon/[id]`)
- `url`: un objet URL contenant toutes les infos sur l'url de la page

### [Autres méthodes](https://kit.svelte.dev/docs/load#input-methods)

- `depends`: permet de gérer les conditions de rechargement du `load`
- `parent`: permet de récupérer la donnée des `load` de tous les `+layout.js` concernés
- `setHeaders`: permet de modifier les headers de réponse

Les fonctions `load` server-only ont [accès à d'autres informations](https://kit.svelte.dev/docs/types#sveltejs-kit-requestevent)


## [`load` outputs](https://kit.svelte.dev/docs/load#output)

La fonction `load` doit renvoyer un objet, qui sera transmis en props `data` à la page ou au layout concerné.

## [Erreurs](https://kit.svelte.dev/docs/load#errors)

Si quelque chose est *jeté* dans la fonction `load`, la page `+error.svelte` la plus proche sera affichée.

Il est notamment recommandé de prévoir les comportements pour les erreurs attendues, en utilisant `error`:

```js
import { error } from '@sveltejs/kit';

export function load({ locals }) { // locals est accessible uniquement par les load server-only
  if (!locals.user) {
    throw error(401, 'not logged in');
  }

  if (!locals.user.isAdmin) {
    throw error(403, 'not an admin');
  }
}
```

## [Redirections](https://kit.svelte.dev/docs/load#redirects)

Il est également possible de rediriger directement depuis la fonction `load`.

```js
import { error, redirect } from '@sveltejs/kit';

export function load({ locals }) {
  if (!locals.user) {
		throw redirect(307, '/login');
  }

  if (!locals.user.isAdmin) {
    throw error(403, 'not an admin');
  }
}
```

## [Invalidation](https://kit.svelte.dev/docs/load#invalidation)

Par défaut, **les `load` ne sont pas relancés si ce n'est pas nécessaire**.

En revanche, **le `load` sera automatiquement rechargé dans le cas où les données de `params` ou d'url ont changé**.

Par exemple, la navigation entre 2 pages concernées par le même layout ne déclenchera pas un 2e `load` du layout, si les données de `params` ou d'url n'ont pas changé.

Dans le cas où `load` est réexécuté, la page n'est pas remontée entièrement, on se contente de mettre à jour les composants via les nouvelles props.

## L'état partagé

Dans la plupart des cas, vous aurez une instance de votre serveur SvelteKit qui servira plusieurs usagers.

Il est important de comprendre que **les données spécifiques à un user ou à une requête ne doivent pas être stockées dans des variables en dehors de `load`**, ce qui les rendrait accessibles lors de la prochaine requête.

Des options existent pour traiter ce genre de cas : `event.locals`, `$page.data`, le contexte de Svelte).

---

## Exos

- Charger les pokémons via `load`
- Faire une page avec la liste complète à gauche et le détail du pokémon a droite

## à suivre: [Modules](./6-5_modules.md)
