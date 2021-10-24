# Bindings

Prenons le cas simple de la modification d'un `<input>`:

```html
<script>
  let text = 'Du texte';

  function setText(e) {
    text = e.target.value;
  }
</script>

<input value={text} on:input={setText} />
```

Ce genre de code respecte la règle de la donnée "descendante". La donnée initiale de `text` est fournie par le parent à `<input>`. Lorsque l'évènement `input` se déclenche sur `<input>`, on exécute `setText` qui va modifier la value de `text`, qui est redescendue comme valeur de `<input>`.

> La donnée descend, les évènements remontent.

Ce principe de donnée descendante a été popularisé par React, en réaction au "two-way data binding" qui était le standard avant React.
La donnée "descandante" permet de clarifier le parcours des données au sein d'une application complexe. En React il est impossible de déroger à ce principe.

En Svelte, il est généralement recommandé de suivre également ce principe.

Mais dans certains cas, notamment celui présenté juste au-dessus, le flux de donnée est très simple. Imposer un flux de données descendant (via `setText`) ne clarifie pas spécialement grand chose, et rajoute du boilerplate.

Svelte propose une solution pour utiliser du "two-way data binding".

```html
<script>
  let text = 'Du texte';
</script>

<input bind:value={text} />
```

La valeur `value` est alors liée à la variable `text`. Si l'une change, l'autre sera mise à jour automatiquement.

Il y a un raccourci de syntaxe lorsque la variable a la même nom que la prop.

```html
<script>
  let value = 'Du texte';
</script>

<input bind:value />
```

Ce genre de binding fonctionne pour tous les éléments de formulaire classique, ainsi que pour tous les composants Svelte que l'on imaginer. Néanmoins, **il est recommandé d'éviter de s'en servir trop souvent pour les composants**.

Personnellement, j'essaie de ne m'en servir que pour les éléments de formulaire, et éventuellement des composants de wrapper autour d'éléments de formulaire.

## Bindings de groupe

Pour les inputs qui fonctionnent à plusieurs (radios, checkboxes), il faut utiliser un `bind:group`

```html
<script>
  let favoriteMusic = 'Rap';
  let artists = [];
</script>

<!-- Les inputs radio sont ainsi mutuellement exclusifs -->
<input type="radio" bind:group={favorite} value="Rap" />
<input type="radio" bind:group={favorite} value="Rock" />
<input type="radio" bind:group={favorite} value="Classique" />

<!-- Les inputs checkbox s'ajoutent au sein d'un même tableau -->
<input type="checkbox" bind:group={artists} value="John Lemon" />
<input type="checkbox" bind:group={artists} value="Georges Bras-Pince" />
<input type="checkbox" group={artists} value="Les Rollings Scones" />
<input type="checkbox" bind:group={artists} value="Kanye Sud-Ouest" />
```

## Binding de boucle

Les bindings fonctionnent également pour les boucles `{#each}`.

```html
<script>
  let todos = [
    { done: false, text: 'faire des pâtes' },
    { done: false, text: 'jouer à Candy Crush' },
    { done: false, text: 'devenir riche' }
  ];

  $: remaining = todos.filter(t => !t.done).length;
</script>

{#each todos as todo}
  <div class:done={todo.done}>
    <input
      type=checkbox
      bind:checked={todo.done}
    >

    <span>{todo.text}</span>
  </div>
{/each}
```

## Dimensions

On peut accéder facilement aux dimensions d'un élément via des bindings de dimensions: `clientWidth`, `clientHeight`, `offsetWidth` et `offsetHeight`.

```html
<script>
  let w;
  let h;
</script>

<div bind:clientWidth={w} bind:clientHeight={h}>Coucou</div>
```

## `this`

En Svelte comme dans les autres frameworks, on ne manipule pas directement les éléments HTML.

Mais il peut être intéressant, voire nécessaire, d'accéder à certains éléments HTML, par exemple pour faire des calculs précis de positionnement.

Dans ce cas, il faut utiliser un binding d'élément:

```html
<script>
  let monElement;
</script>

<div bind:this={monElement}>Coucou</div>
```

Alors, la variable `monElement` devient une référence vers l'élément HTML bindé.


On peut également binder des instances de composants pour accéder directement à des valeurs que l'instance exporte.

```html
<!-- Parent.svelte -->
<script>
  import InputField from './InputField.svelte';

  let field;
</script>

<InputField bind:this={field}/> <!-- field est une référence vers cette instance de InputField -->

<button on:click={() => field.focus()}>Focus field</button> <!-- je peux alors me servir des exports de field -->

<!-- InputField.svelte -->
<script>
  let input;

  export function focus() {
    input.focus();
  }
</script>

<input bind:this={input} />
```

## à suivre: [Exercices](./2-4_exos.md)
