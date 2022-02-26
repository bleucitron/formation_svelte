# [Slots](https://svelte.dev/docs#template-syntax-slot)

Les composants peuvent avoir des enfants, à la manière des éléments HTML.

```svelte
<Parent>
  <Enfant />
</Parent>
```

Les enfants d'un composant sont disposés dans un `<slot>`.

```svelte
<!-- Parent.svelte -->
<h1>Parent</h1>
<slot />
```

Cela permet d'adapter le contenu d'un composant en fonction de la situation.

```svelte
<Garage>
  {#if hasCar}
    <div>Voiture</div>
  {:else}
    <div>Vélo</div>
  {/if}
</Garage>
```

De plus, cela permet de faire exécuter des fonctions à des enfants sans passer par des `props`.

```svelte
<script>
  function handleClick () {
    console.log('Je suis exécutée depuis un slot !')
  }
</script>
<Garage>
  <div on:click={handleClick}>
</Garage>
```

## Fallback

Un `<slot>` peut avoir un "fallback", qui sera utilisé si on ne fournit pas de slot.

```svelte
<!-- Garage.svelte -->
<h1>Garage</h1>
<slot>
  <div>Le garage est vide.</div>
</slot>

<!-- index.svelte -->
<Garage />
```

## [Slots nommés](https://svelte.dev/docs#template-syntax-slot-slot-name-name)

Il est possible d'envoyer des enfants dans des slots différents que l'on peut nommer.

```svelte
<!-- Maison.svelte -->
<h1>Maison</h1>
<slot />
<slot name="chambre" />
<slot name="cuisine" />

<!-- index.svelte -->
<Maison>
  <div>Canapé</div>
  <!-- est envoyé dans le slot par défaut -->
  <div slot="chambre">Lit</div>
  <div slot="cuisine">Frigo</div>
</Maison>
```

On peut également envoyer des composants dans des slots nommés.

```svelte
<Maison>
  <Frigo slot="cuisine" />
</Maison>
```

Les slots nommés sont particulièrement intéressants lorsque l'on construit un composant avec plusieurs zones différentes, le contenu de chaque zone pouvant varier selon les cas.

## [Slot props](https://svelte.dev/docs#template-syntax-slot-slot-key-value)

Un cas classique de l'usage des slots est les boucles.

Supposons le cas suivant:

```svelte
<!-- index.svelte -->
<script>
  import List from './List.svelte';

  const characters = [
    {
      name: 'Batman',
      type: 'hero',
    },
    {
      name: 'Joker',
      type: 'villain',
    },
  ];
</script>

<List items="{characters}"></List>
```

Notre composant `List` contient un `{#each}`. Nous voulons être capables d'instancier des `Hero` ou des `Villain` dans notre liste, mais sans que `<List>` n'ait à vérifier le type de chaque personnage. C'est important car nous voulons garder le composant `<List>` le plus générique possible.

Notre différenciation doit donc se faire au-dessus de `<List>`, dans `index.svelte`.

Mais il faut instancier un `Hero` ou un `Villain` en fonction du `type`, donc il faut avoir accès à chaque `item` de la boucle, qui se trouve dans `<List>`.

En résumé, la boucle est faite dans `<List>`, mais nous ne voulons pas différencier les personnages dans `<List>`.

On peut résoudre ce problème en utilisant les `slot props`.

```svelte
<!-- index.svelte -->
<List items="{characters}" let:item>
  {#if item.type === 'hero'}
  <Hero name="{item.name}" />
  {:else}
  <Villain name="{item.name}" />
  {/if}
</List>
```

```svelte
<!-- List.svelte -->
<script>
  export let items = [];
</script>

{#each items as item}
<slot item="{item}"> {item.name} </slot>
{/each}
```

Ainsi, on rend accessibles des variables de `<List>` dans son parent (en l'occurrence ici: chaque item).

Bien sûr,

- on peut déstructurer `let:item={{type, name}}`
- on peut écrire `{item}` à la place de `item={item}`

## Exos

Créer un composant Slider qui prend en props une tableau et affiche les détails de chaque élément.

Le tableau de données peut représenter des objets culturels différents (films, chansons, livres), et donc est générique. Ce qui signifie que Slider ne sait pas à l'avance le type de données qu'on lui fournit, et ne doit pas s'en soucier.

- le Slider n'affiche toujours qu'un seul élément à la fois (la fiche d'un film, ou d'un livre)
- le Slider permet de passer au film suivant ou précédent via des boutons.
- le Slider doit être complètement agnostique du type de données qu'on lui fournit

## à suivre: [Le contexte module](./3-4_context_module.md)
