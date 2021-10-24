# [Loading](https://kit.svelte.dev/docs#loading)

SvelteKit propose un chargement de données côté serveur.

Si on le désire, on peut faire en sorte que le `fetch` de données soit fait en même temps que la génération de la page côté serveur.

Avantages:
- Moins d'aller-retours entre le serveur et le client
- Plus besoin d'afficher un loader côté client (la page arrive déjà prête)
- On peut rediriger avant même d'envoyer du HTML au client
- Gestion des promesses allégée côté client

Inconvénients:
- si le chargement de données est vraiment très conséquent, la page risque d'arriver tard

## [La fonction `load`](https://kit.svelte.dev/docs#loading)

Pour exécuter un chargement lors du SSR, **il faut exporter une fonction `load` dans le `<script context='module'>`**:

```html
<script context="module">
  export async function load() {
    console.log('Chargement des données'); // exécutée côté serveur ET côté client
  }
</script>
```

Cette fonction `load` est fournie avec les arguments suivants: `page`, `fetch`, `session`, `stuff`.

```html
<script context="module">
  export async function load({ page, fetch, session, stuff }) {
    const url = `/blog/${page.params.slug}.json`; // on vient chercher le param dynamique [slug]
    const res = await fetch(url);

    if (res.ok) {
      return {
        props: {
          article: await res.json()
        }
      };
    }

    return {
      status: res.status,
      error: new Error(`Could not load ${url}`)
    };
  }
</script>
```

**Attention**: `load` est exécutée côté client ET côté serveur. Il faut donc faire attention à ne pas utiliser des APIs navigateur telles que `window` ou `document`.

### [Inputs](https://kit.svelte.dev/docs#loading-input)

- [`page` permet d'avoir des infos sur la page](https://kit.svelte.dev/docs#loading-input-page), ses paramètres, sa query string
```js
{
  host,
  path,
  params,
  query
}
```
- `fetch` est une méthode à utiliser plutôt que le `fetch` standard, pour éviter de charger 2 fois la donnée, et permettre de faire des requêtes authentifiées
- `session` donne des infos sur la session courante (en général sur l'utilisateur courant)
- `stuff` c'est juste des trucs en plus si besoin

### Réactivité

Un gros avantage d'utiliser `load` est la réactivité induite.

**Si quoi que ce soit des inputs de `load` change, `load` est ré-exécutée.**

Dans l'exemple au-dessus, si je change de page en changeant de `slug`, `load` est de nouveau exécutée, même si je ne change pas formellement de composant.

### [Outputs](https://kit.svelte.dev/docs#loading-output)

Selon l'objet renvoyé en `return` de la fonction `load`, plusieurs choses peuvent se passer.

#### Tout se passe bien

Si tout se passe bien, je peux renvoyer des `props` à mon client;
```js
return {
  props: {
    tweets // la donnée que j'ai chargé
  }
}
```

Dans ce cas, j'aurai accès à `tweets` en tant que props de ma page.

#### Quelque chose s'est mal passé

Si lors du chargement, je détecte une erreur, je peux y réagir en renvoyant une `error`, ainsi qu'un `status` associé.
```js
return {
  error: new Error('i hate tea'),
  status: 518
}
```

Si le `status` est un code d'erreur, la page `__error.svelte` la plus proche sera affichée.

#### J'ai envie de rediriger ailleurs

Parfois, j'ai besoin de rediriger avant de renvoyer la page au client. Il suffit juste de préciser une route dans `redirect`, ainsi qu'un `status` (`301` ou `302`).

```js
return {
  redirect: '/elsewhere',
  status: 301
}
```


## Exos

- Charger les tweets via `load`
- Exemple guidé de page de sélection d'auteur

## à suivre: [Modules](./6-5_modules.md)
