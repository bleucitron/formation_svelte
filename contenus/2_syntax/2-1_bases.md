# Syntaxe de base

(Utiliser le [REPL](https://svelte.dev/repl))

## Structure d'un fichier `.svelte`

Un composant Svelte s'écrit dans un fichier `.svelte`.

La syntaxe Svelte étant un superset du HTML, vous pouvez écrire comme vous le faites déjà dans du HTML.

On peut voir ça comme du templating inspiré de Vue.

Les commentaires s'écrivent comme d'habitude, les attributs HTML s'écrivent comme d'habitude.

```html
<script>
  // Script
  console.log('Je suis dans la partie script');
</script>

<!-- Markup -->
<h1>Markup</h1>
<div>Je suis dans le markup</div>
<a href="https://www.lemonde.fr">Aller sur LeMonde.fr</a>

<style>
  /* Style */
  h1 {
    color: blue;
  }
</style>
```

En général, un fichier `.svelte` est séparé en 3 sections:

- Script
- Markup
- Style

Selon vos préférences de formattage, l'ordre peut être différent.

**Les `<style>` sont scopés par défaut !!** Ce qui signifie que les styles définis dans un fichier de composant ne s'appliqueront que pour le HTML de ce composant.

## Expressions

La syntaxe Svelte étant un superset du HTML, elle l'enrichit. À la manière du JSX, on peut écrire des expressions JS dans le HTML.

```html
<script>
  const a = 20;
</script>

<div>J'ai {a + 1} euros</div>
```

## Directive de classe

On peut définir des classes de la même manière qu'en HTML.

```html
<div class="active">Item</div>
```

Souvent on écrit des choses dans ce goût là:

```html
<div class={selected === item.position  ? 'active' : ''}>Item</div>
```

Pour ce cas-là, Svelte a une directive de classe qui permet l'écriture `class:maClasse={...}`.

```html
<div class:active={selected === item.position}>Item</div>
```

Si une variable `active` correspondant à la condition de notre classe, on peut utiliser la forme raccourcie:

```html
<div class:active>Item</div>
```

## State Local

Un composant peut avoir un `state` local. C'est-à-dire de la donnée qu'il peut faire évoluer lui-même.

En Svelte, déclarer un `state` local se fait simplement en déclarant un variable avec `let`.

```html
<script>
  let age = 35; // state local
</script>

<div>J'ai {age + 1} ans</div>
```

En Svelte, mettre à jour du `state` et déclencher une mise à jour de l'interface est aussi simple qu'une assignation.

```html
<script>
  let age = 35;

  function grandir() {
    age = age + 1; // lorsque 'grandir' est exécutée, cela va déclencher la mise à jour de l'interface
  }
</script>

<div>J'ai {age + 1} ans</div>
<button on:click="{grandir}">Joyeux anniversaire !</button>
```

**C'est la réassignation via le `=` qui fait office de déclencheur** de la mise à jour.

## Directive d'évènements

Dans l'exemple juste au-dessus se trouve `on:click`, et non `onclick` comme on aurait dans du HTML classique.

On appelle ça une directive d'événement. Vous pouvez mettre n'importe quel évènement DOM classique:

- `on:mousemove`
- `on:load`
- `on:keyup`
- ...

On peut écouter des évènements via ces directives, on fournissant simplement une fonction: `on:click={listener}`.

```html
<button on:click={grandir}>Joyeux anniversaire !</button>
<button on:click={() => age = age + 1}>Joyeux anniversaire !</button> <!-- ça marche aussi -->
```

## Props

Les `props` d'un composant sont déclarées avec `export let`:

```html
<script>
  // fichier Profile.svelte
  export let nom;
  export let age = 0; // cela permet de définir une valeur par défaut
</script>
```

Cela permet de fournir de la donnée au composant de la façon suivante, comme en JSX:

```html
<!-- fichier Trombinoscope.svelte -->
<Profile nom="Romain" age="{35}" />
```

Comme en JSX, on peut également déstructurer un objet pour envoyer tous les champs en tant que `props`:

```html
<script>
  const moi = {
    nom: 'Romain',
    age: 35,
  };
</script>

<!-- fichier Trombinoscope.svelte -->
<Profile {...moi} />
```

Si l'on définit pas de valeur par défaut à une `prop`, et qu'on l'intancie un composant sans cette `prop`, le compilateur va afficher un warning. De même si l'on fournit un `prop` qui n'existe pas à une instance.

```html
<!-- Cette instanciation va déclencher 2 warnings: 1 pour le `nom` manquant, et 1 pour la `taille` qui n'est pas prévue -->
<Profile taille="{180}" />
```

## à suivre: [Réactivité](./2-2_reactivity.md)
