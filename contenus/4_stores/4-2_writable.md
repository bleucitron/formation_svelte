# [Le store `writable`](https://svelte.dev/docs#svelte_store)

Le store Svelte de base est `writable`.

## Définition

```js
import { writable } from 'svelte/store';

const count = writable(0);
```

Dans l'exemple ci-dessous, on a créé un store `count` dont la valeur initiale est `0`.

Un store `writable` a 3 méthodes: `subscribe`, `set` et `update`.

- `subscribe` permet de s'abonner à un store
- `set` permet de modifier la valeur courante du store
- `update` permet de modifier la valeur courante du store **en fonction de la valeur courante**

```js
count.subscribe(value => console.log('Nouvelle valeur', value)) // lorsque count change de valeur, je réagis
count.set(1); // je me fiche de la valeur actuelle
count.update(value => value + 1); // je veux incrémenter la valeur actuelle
```

Il également possible de fournir un 2e argument lors de l'initialisation du store:

```js
const count = writable(0, () => {
  console.log("Exécuté lorsque le nombre d'abonné passe de 0 à 1");

  return () => console.log("Exécuté lorsque le nombre d'abonné passe de 1 à 0");
});
```

Ce deuxième argument est une fonction qui sera exécutée lorsqu'un premier abonnement est effectuée. Si cette fonction renvoie une fonction, cette dernière sera exécutée lorsqu'il y aura plus d'abonné.

## Abonnement et réactivité

Voici un exemple simple d'usage dans un composant:

```html
<script>
  import { onDestroy } from 'svelte';
  import { count } from './stores.js';

  let count_value;

  const unsubscribe = count.subscribe(value => { // .subscribe() renvoie une fonction
    count_value = value;
  });
  onDestroy(unsubscribe); // se désabonner au onDestroy permet d'éviter les fuites de mémoire

  function increment() {
    count.update(value => value + 1); // on incrémente de 1 en 1
  }
  function reset() {
    count.set(0); // on remet à 0
  }
</script>

<h1>The count is {count_value}</h1>
<button on:click={increment}>+</button>
<button on:click={reset}>Reset</button>
```

Dans cet exemple, on s'abonne au store via `.subscribe`. La fonction que l'on passe à `subscribe` est exécutée à chaque fois que la valeur du store change, et permet de garder `count_value` en phase avec la valeur du store.

S'abonner à un store est bien sûr indispensable, mais le désabonnement également pour éviter les fuites de mémoire.

**Mettre à jour la valeur d'un store (via `.set()` ou `.update()`) déclenche la réactivité**.

## Auto-abonnement

Utiliser un store dans un composant revient grosso modo à s'abonner, se désabonner, lire et mettre à jour la valeur du store. Pour éviter d'écrire souvent la même chose, Svelte a une syntaxe simplifiée pour l'accès aux stores dans les composants.

**Écrire `$count` dans un composant, permet de s'abonner automatiquement au store, et d'accéder et modifier à sa valeur courante en permanence**. De plus, le désabonnement est automatique.

```html
<script>
  import { onDestroy } from 'svelte';
  import { count } from './stores.js';

  function increment() {
    $count = $count + 1 // on incrémente de 1 en 1
  }
  function reset() {
    $count = 0; // on remet à 0
  }
</script>

<h1>The count is {$count}</h1>
<button on:click={increment}>+</button>
<button on:click={reset}>Reset</button>
```

`count` représente le store, `$count` représente sa valeur courante.

**La syntaxe `$count` n'est disponible que dans un composant `.svelte`**, pas dans un fichier `.js`.

## à suivre: [Autres stores](../4_stores/4-3_other.md)
