# Autres stores

## [`readable`](https://svelte.dev/docs#run-time-svelte-store-readable)

Parfois, on ne souhaite pas qu'un store puisse être modifié de l'"extérieur", tout en ayant sa valeur globalement accessible en lecture.

Dans ce cas, il est possible d'utiliser un store `readable`. La définition du store se fait de la même façon qu'un store `writable`.

```js
import { readable } from 'svelte/store';

const count = readable(0);
```

Des cas d'utilisation classiques:

- position géolocalisée
- heure actuelle
- position de la souris

## [`derived`](https://svelte.dev/docs#run-time-svelte-store-derived)

Le store `derived` permet de créer des stores dérivés d'un ou plusieurs autres stores.

```js
import { writable, derived } from 'svelte/store';

const savings = writable(0);
const money = writable(0);

const total = derived(
  [savings, money],
  ([$savings, $money]) => $savings + $money,
); // dépend de plusieurs autres stores
const totalInYens = derived(total, $total => $total * 100); // dépend de un seul autre store
```

## Customs stores

La seule réelle condition nécessaire pour créer un store est d'avoir une méthode `subscribe`.

On peut créer des stores personnalisés qui exposent des méthodes particulières, voire même en cachent certaines autres.

Par exemple, on peut créer un store à partir d'un `writable` qui n'expose pas `set` et `update` (pour empêcher des usages maladroits), et à la place expose `increment`, `decrement`, et `reset`.

```js
function createCount() {
  const { subscribe, set, update } = writable(0); // on initialise un writable classique

  return {
    // on retourne un store custom
    subscribe,
    increment: () => update(n => n + 1),
    decrement: () => update(n => n - 1),
    reset: () => set(0),
  };
}

export const count = createCount();

// Qq part dans un composant
import { count } from './count.js';

count.increment();
count.decrement();
count.reset();
```

## Exos

- Créer un store `readable` qui compte le temps en secondes depuis l'ouverture de la page, et afficher la valeur à l'écran
- Dériver ce store pour afficher également cette même valeur, mais en millisecondes, dans un composant différent
- Créer un custom store qui expose des méthodes pour
  - mettre en majuscules
  - mettre en minuscules
  - mettre en SnakeCase
  - supprimer le contenu

et utiliser ce store avec un `<input>` pour changer le texte, et des `<button>` pour utiliser les méthodes.

## à suivre: [5 - Visual] [Transitions](../5_visual/5-1_transitions.md)
