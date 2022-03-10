# [Transitions](https://svelte.dev/docs#svelte_transition)

Animer des transitions, et surtout les synchroniser, est souvent compliqué à faire à la main. En React également, cela peut vite être compliqué, même en utilisant [des librairies dédiées](https://reactcommunity.org/react-transition-group/).

Svelte propose un système de transition à la fois simple et puissant.

## Principe de base

Il est possible d'importer des transitions depuis `svelte/transition`. Par exemple ici, `fade`.

```js
import { fade } from 'svelte/transition';
```

Il suffit alors d'ajouter `transition:fade` en attribut d'un élément pour que la transition soit jouée lorsque l'élément est ajouté ou supprimé du DOM.

```html
<script>
  import { fade } from 'svelte/transition';
  let displayed = true;
</script>

<button on:click={() => displayed = !displayed}>
  Afficher
</button>

{#if displayed}
  <h1 transition:fade>Hello !</h1>
{/if}
```

En utilisant `transition:`, **la transition est reversible**. Si on clique plusieurs fois sur le bouton, la transition ne repart pas de zéro, mais de là où elle en était.

Notez que la **transition n'est pas jouée à l'instanciation du composant**.

La plupart des transitions proposées par Svelte sont des animations CSS, qui tournent sur un thread différent de celui de JS, ce qui permet d'être plus efficace.

## Paramètres

On peut fournir des paramètres aux transitions pour ajuster l'effet désiré, en donnant un objet à la directive `transition`.

```html
<h1 transition:fade={{
  duration: 1000,
  delay: 250,
}}>Hello !</h1>
```

Les paramètres disponibles dépendent des types de transitions choisis, mais il y a toujours:

- `delay`, le temps au bout duquel la transition commence
- `duration`, la durée de la transition
- `easing`, une fonction de lissage

Les valeurs par défaut de ces paramètres dépendent des transitions choisies.

## `in` et `out`

Il est possible de choisir des transitions différentes en entrée et en sortie. Il suffit simplement de définir une transition avec la directive `in`, et une autre avec la directive `out`.

```html
<script>
  import { fade, slide } from 'svelte/transition';
  let displayed = true;
</script>

<button on:click={() => displayed = !displayed}>
  Afficher
</button>

{#if displayed}
  <h1 in:fade out:slide>Hello !</h1>
{/if}
```

À noter qu'avec `in` et `out`, les transitions ne sont pas réversibles.

## Transitions locales

Par défaut, les transitions sont jouées dès que l'élément est ajouté ou enlevé du DOM.

Cela peut poser des problèmes, par exemple lorsque l'on supprime un élément qui contient des enfants avec des transitions. Les transitions des enfants vont d'abord se jouer, puis le parent sera supprimé.

```html
<script>
  import { fade } from 'svelte/transition';
  let displayed = 'hello';

  let nbs = [1];
</script>

<button on:click={() => displayed = 'hello'}>
  Bonjour
</button>
<button on:click={() => displayed = 'bye'}>
  Au revoir
</button>

{#if displayed === 'hello'}
  <div>
    <button on:click={() => nbs = [...nbs, 1]}>
      Plus
    </button>
    {#each nbs as nb}
      <h2 transition:fade>Hello !</h2>
    {/each}
  </div>
{:else if displayed === 'bye'}
  <h2>
    Goodbye
  </h2>
{/if}
```

Dans ce cas, le temps de la transition, on voit apparaître `Hello` et `Goodbye` en même temps, le temps de la transition.

On peut régler ce souci en ajoutant `|local` à la fin de la directive.

`transition:fade|local`

`transition:fade|local={{ duration: 600 }}`

## Évènements

Il est possible de réagir aux débuts et fins des transitions avec des évènements spéciaux Svelte:

- `on:introstart`
- `on:outtrostart`
- `on:introend`
- `on:outroend`

## Toutes les transitions

Les transitions disponibles par défaut sont:

- [`fade`](https://svelte.dev/docs#fade)
- [`blur`](https://svelte.dev/docs#blur)
- [`slide`](https://svelte.dev/docs#slide)
- [`fly`](https://svelte.dev/docs#fly)
- [`scale`](https://svelte.dev/docs#scale)
- [`draw`](https://svelte.dev/docs#draw)
- [`crossfade`](https://svelte.dev/docs#crossfade)

## Transitions personnalisées

Si les différentes transitions disponibles ne suffisent pas, il est possible de définir ses propres transitions personnalisées, soit via du [CSS pur](https://svelte.dev/tutorial/custom-css-transitions), soit du [JS](https://svelte.dev/tutorial/custom-js-transitions).

Cet sujet sort du cadre de ce cours.

## à suivre: [Divers](./5-2_misc.md)
