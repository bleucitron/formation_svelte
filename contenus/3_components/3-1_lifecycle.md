# Cycle de vie

À partir de maintenant, les exercices seront faits dans le dossier `project`.

## Rappels

Un composant est une fonction (ou une classe) permettant de générer des instances d'interface visuelle.

Un composant peut définir des données d'entrée (`props`), et des données internes (`state`), qui vont influencer l'affichage pour chaque instance.

Au cours de la vie d'une instance d'un composant, ses `props` et son `state` vont évoluer, modifiant son apparence.

En Svelte, un composant se définit dans un fichier `.svelte`. Il n'est pas possible de définir 2 composants dans le même fichier.

### Pas de boucle de rendu !

Les habitué•e•s de React peuvent tomber dans un piège assez grossier.

Contrairement au `render()` de React, **le `<script>` d'un composant Svelte n'est pas réexécuté à chaque mise à jour.** Il n'est exécuté qu'une seule fois, à l'instantiation du composant. C'est le principe même de la compilation de Svelte: effectuer les relations entre data et interfaces au moment de la compilation, et non à runtime.

En revanche, les assignations et instructions réactives sont réexécutées, lorsque les dépendances liées sont mises à jour.

## `onMount`

Le début de la vie d'une instance de composant comprend:
- l'instantiation: le script est exécuté
- le montage: les éléments sont accrochés au DOM

Cette séquence ne se produit qu'une fois par instance. Lorsque le montage se termine, on est certains que l'instance est présente dans le DOM et est fonctionnelle.

Il est possible de réagir à la fin du montage d'une instance, par exemple pour aller chercher de la donnée sur le réseau, lancer un timer, ou abonner l'instance à certains services.

Cela se fait avec `onMount`:

```js
import { onMount } from 'svelte';

let photos = [];

onMount(async () => {
  const res = await fetch("..."); // on récupère des photos sur le net par exemple
  photos = await res.json();
});
```

Il est important de faire ce genre d'opérations dans `onMount` plutôt que directement dans le `<script>` pour plusieurs raisons:
- s'assurer que le composant est 100% en place et fonctionnel
- éviter des problèmes liés au SSR

`onMount` ne s'exécute pas lors d'un éventuel SSR.


## `onDestroy`

Certaines opérations nécessitent d'être stoppées lorsque la destruction d'une instance. Par exemple, si l'on crée un `interval`:
```js
const interval = setInterval(() => console.log('HEY'), 1000);
```

Cet `interval` durera tant qu'il n'est pas arrêté, même si l'instance est détruite. Cela risque de provoquer des fuites de mémoire.

Pour éviter cela, on peut anticiper la destruction d'une instance avec `onDestroy`.

```js
import { onMount } from 'svelte';

const interval = setInterval(() => console.log('HEY'), 1000);

onDestroy(() => {
  clearInterval(interval);
})
```

À noter qu'il est aussi possible de faire la même en utilisant la valeur de retour de la fonction `onMount`: c'est une fonction qui sera exécutée juste avant la destruction de l'instance.

```js
import { onMount } from 'svelte';

onMount(() => {
  const interval = setInterval(() => console.log('HEY'), 1000);

  return () => clearInterval(interval);
})
```

**Utiliser `onDestroy` ou la fonction de retour de `onMount` est équivalent.**

## `beforeUpdate` / `afterUpdate`

Il est également possible de réagir à la mise à jour d'un composant.

- `beforeUpdate` s'exécute juste avant la mise à jour.
- `afterUpdate` s'exécute juste après la mise à jour.

Cela peut notamment aider pour recalculer régulièrement des positions, lorsque l'interface est à jour de la donnée.

```js
import { beforeUpdate, afterUpdate } from 'svelte';

beforeUpdate(() => {
  console.log('Before')
})
afterUpdate(() => {
  console.log('After')
})
```

## `tick`

Pour ne pas à multiplier les opérations sur le DOM, Svelte attend un peu avant de faire quoi que ce soit touchant aux éléments de la page. Cela permet éventuellement de cumuler d'autres opérations à faire, et de toutes les faire au même moment.

Cela implique que **la mise à jour du DOM est asynchrone**.

Si l'on veut faire des opérations spécifiques immédiatement après une mise à jour particulièrement du DOM, on peut utiliser `tick`.

`tick` renvoie une promesse qui résoud dès que toutes les mises à jour en attente sont appliquées.

```html
<script>
  import { tick } from 'svelte';

  let value = 50;
  let div;

  async function update() {
    value++;
    console.log('before tick', div.textContent);
    await tick();
    console.log('after tick', div.textContent);
  }
</script>

  <div bind:this={div}>
    {value}
  </div>
  <button on:click={update}>
    Click
  </button>
```

## Partage de cycle de vie

Svelte est construit de sorte à pouvoir partager facilement du code de cycle de vie. Il suffit d'inclure l'exécution des fonctions nécessaires dans une fonction à part.

```js
// utils.js
import { onMount, onDestroy } from 'svelte';

export default function() {
  onMount(() => {
    // ...
  });

  onDestroy(() => {
    // ...
  })
}
```

```html
<script>
  import setLifecycle from './utils.js';

  setLifecycle();
</script>
```


## Exos

- afficher une horloge lorsqu'on clique sur un bouton, et l'enlever en recliquant dessus
- afficher le premier tweet de https://raw.githubusercontent.com/iOiurson/data/master/data/tweets.json

## à suivre: [Évènements](./3-2_events.md)
