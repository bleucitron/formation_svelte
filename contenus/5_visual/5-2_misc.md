# Divers

D'autres utilitaires pratiques pour créer des effets visuels sont disponibles dans les outils Svelte.

## [`svelte/motion`](https://svelte.dev/docs#run-time-svelte-motion)

La librairie `motion` met à disposition des stores Svelte permettant de faire évoluer graduellement une valeur.

- `tweened`, évolue "normalement"
- `spring`, évolue "élastiquement"

Chacun de ces stores s'utilise comme suit:

```js
const value = tweened(initialValue, options); // initialisation avec des options

value.set(otherValue); // l'évolution vers cette nouvelle valeur sera graduelle
value.update(v => v * 10); // on peut aussi utiliser update
```

Pour ces 2 stores, `value.set` et `value.update` renvoient chacun une Promesse qui est résolue lorsque l'évolution est terminée.

### [`tweened`](https://svelte.dev/docs#run-time-svelte-motion-tweened)

Par exemple, si je définis une variable `progress` à `0`, et que je la passe à `1`, la valeur passe instantanément de `0` à `1`.

```js
let progress = 0;

progress = 1; // instantané
```

Mais si je veux la faire évoluer graduellement, je peux utiliser le store `tweened`:

```html
<script>
  import { tweened } from 'svelte/motion';

  const progress = tweened(0);

  progress.set(1); // évolue graduellement dans le temps

  $: value = Math.round($progress * 100);
</script>

<h1>Progression {value} %</h1>
```

Lors de la définition d'un store `tweened`, je peux fournir comme options:

- `delay`, délai en ms
- `duration`, durée en ms
- `easing`, fonction de lissage
- `interpolate` (pour interpoler des valeurs compliquées, comme des couleurs)

### [`spring`](https://svelte.dev/docs#run-time-svelte-motion-spring)

L'évolution élastique permet de simuler un comportement élastique.

Comme il s'agit de représenter un ressort, ces options sont naturellement:

- `stiffness`: la rigidité, entre `0` et `1`
- `damping`: l'amortissement, entre `0` et `1`
- `precision`: un seuil définissant la fin de l'évolution, `0` étant le plus précis

```html
<script>
  import { spring } from 'svelte/motion';

  const position = spring(50, {
    stiffness: 0.3,
    damping: 0.2,
  });

  position.set(200);
</script>

<div class="bar" style="{`left:" ${$position}px`} />

<style>
  .bar {
    width: 2px;
    height: 10rem;
    background: black;
    position: absolute;
  }
</style>
```

## [`svelte/animate`](https://svelte.dev/docs#run-time-svelte-animate)

Les animations fonctionnent sur le même principe que les transitions, sauf qu'**elles s'utilisent uniquement pour les éléments d'un block `{#each}` avec clés**.

À la différence des transitions, qui animent l'apparition ou la disparition de l'élément, **les animations Svelte permettent d'animer le déplacement d'un élément entre 2 positions**.

Elles ne se déclenchent que lors d'un réordonnement des éléments de la liste, et permettent d'animer le déplacement des éléments.

Il est possible d'utiliser:

- une [animation FLIP](https://svelte.dev/docs#flip), fournie par Svelte
- une [animation Custom](https://svelte.dev/docs#Custom_animation_functions), à définir soi-même

[Un exemple](https://svelte.dev/tutorial/animate) est fourni par le tutoriel de Svelte.

## [`svelte/easing`](https://svelte.dev/docs#run-time-svelte-easing)

Svelte fournit plusieurs fonctions de lissage.

Une fonction de lissage détermine le profil d'évolution d'une valeur au cours du temps.

À chaque fois que l'on se sert de `svelte/transition`, `svelte/animation` ou `svelte/motion`, on peut utiliser une des fonctions de lissage de Svelte. Mais ces fonctions peuvent être utilisées dans d'autres contextes, selon les besoins.

Pour mieux se rendre compte de ce à quoi ça ressemble, il suffit d'aller voir [ici](https://svelte.dev/examples/easing).

## à suivre: [6 - SvelteKit] [C'est quoi ?](../6_svelte-kit/6-1_intro.md)
