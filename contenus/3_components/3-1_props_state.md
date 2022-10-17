# Instanciation

Un composant est un "moule" à instances, qui nous permet de créer des individus sur un modèle commun, tout en ayant la possibilité de particulariser l'individu.

```html
<script>
  import Warrior from './Warrior.svelte';
</script>


<Warrior />
```

## Props

Les `props` sont la donnée "ADN" d'une instance.

Elles sont déclarées avec `export let`:

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
<script>
  import Profile from './Profile.svelte';
</script>

<Profile nom="Romain" age="{35}" />
```

Comme en JSX, on peut également déstructurer un objet pour envoyer tous les champs en tant que `props`:

```html
<!-- fichier Trombinoscope.svelte -->
<script>
  import Profile from './Profile.svelte';

  const moi = {
    nom: 'Romain',
    age: 35,
  };
</script>

<Profile {...moi} />
```

Si l'on définit pas de valeur par défaut à une `prop`, et qu'on l'intancie un composant sans cette `prop`, le compilateur va afficher un warning. De même si l'on fournit un `prop` qui n'existe pas à une instance.

```html
<!-- Cette instanciation va déclencher 2 warnings: 1 pour le `nom` manquant, et 1 pour la `taille` qui n'est pas prévue -->
<Profile taille="{180}" />
```

## Props et state

On a vu qu'on pouvait définir des variables dans le `<script>`.

```html
<script>
  let count = 0; // state
</script>
```

De même qu'en Javascript, une variable définie avec `let` représente une variable que l'on peut faire évoluer, en Svelte, **une variable définie avec `let` représente un state**.

Et on a vu que la réassignation d'une variable en Svelte déclenche la réactivité.

Les `props` et les `state` peuvent tout à fait cohabiter.
```html
<script>
  export let name = 'Romain'; // props

  let count = 0; // state
</script>
```

Il est également possible de faire évoluer les `props`, de la manière qu'un `state`. Néanmoins dans ce cas, la `props` concernée ne change qu'à l'intérieur de l'instance concernée, elle ne sera pas mise à jour dans le parent qui fournit cette `props`.


---

## Exos

- Créer un composant Guerrier, qui prend en `props` un `name` et un `power`, et afficher ces informations dans le composant
- Ajouter un `state` `exp` au Guerrier, qui évolue au `mousemove` sur l'instance du Guerrier
- Afficher l'`exp` dans le composant

---

## à suivre: [Cycle de vie](./3-2_lifecycle.md)
