# Évènements

On a vu que l'on pouvait déclarer des listeners de cette façon.

```svelte
<div on:click={clickHandler} />
<div on:mousemove={moveHandler} />
<div on:scroll={scrollHandler} />

<!-- Inline handlers -->
<div on:click={() => console.log("click")} />
```

## [Modificateurs](https://svelte.dev/tutorial/event-modifiers)

Svelte propose des raccourcis pour gérer certains cas.

```svelte
<div on:click={e => {
  e.stopPropagation(); console.log('click');
}} />
<div on:click|stopPropagation={() => console.log('click')} />
```

Les cas possibles sont:

```svelte
<div on:click|stopPropagation />
<div on:click|preventDefault />
<div on:click|trusted />
<div on:click|passive />
<div on:click|self />
<div on:click|capture />
<div on:click|once />
```

Il est possible de chainer les modificateurs:

```svelte
<div on:click|once|stopPropagation|preventDefault />
```

## [Evènements de composants](https://svelte.dev/tutorial/component-events)

Il est possible de générer des évènements de composants via `createEventDispatcher`.

```svelte
<!-- Coucou.svelte -->
<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  function sayHello() {
    dispatch('message', {
      text: 'Coucou !',
    });
  }
</script>

<button on:click="{sayHello}">Hey</button>
```

Dans ce cas, un évènement personnalisé est généré, et peut être écouté par le parent comme avec un évènement DOM normal.

La donnée éventuellement fournie lors du `dispatch` est disponible dans le `e.detail`.

```svelte
<!-- index.svelte -->
<script>
  import Coucou from './Coucou.svelte';

  function handleMessage(e) {
    console.log('Message', e.detail.text);
  }
</script>

<Coucou on:message="{handleMessage}">
  <!-- on écrit on:message parce que l'on a écrit dispatch('message') --></Coucou
>
```

_`createEventDispatcher` doit être appelé à la racine du script._

## Relais d'évènements (event forwarding)

Lorsque l'on travaille avec des arbres de composants un peu profonds, il arrive d'avoir à faire relayer une `prop` de type fonction sur plusieurs étages pour la fournir à un composant enfant.

Dans ce cas on dit souvent que **les évènements remontent**, mais cela peut s'interprêter comme **donner procuration aux enfants**.

Sur plusieurs étages, ça rajoute du boilerplate, c'est un peu pénible à écrire, et donc à maintenir.

Svelte propose une syntaxe pour simplifier le relais: **le relais d'évènements**, qui pour le coup fait réellement remonter les évènements, plutôt que descendre des callbacks.

```svelte
<!-- Supposons une architecture imbriquée dans plusieurs fichiers -->
<Parent on:message />
<Enfant on:message />
<PetitEnfant on:message />
```

Cela fonctionne aussi bien pour les évènements de composants que pour les évènements de composants.

## à suivre: [Composition](./3-3_slots.md)
