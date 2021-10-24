# [Slots](https://svelte.dev/docs#slot)

Les composants peuvent avoir des enfants, à la manière des éléments HTML.

```html
<Parent>
  <Enfant />
</Parent>
```

Les enfants d'un composant sont disposés dans un `<slot>`.

```html
<!-- Parent.svelte -->
<h1>Parent</h1>
<slot />
```

Cela permet d'adapter le contenu d'un composant en fonction de la situation.

```html
<Garage>
  {#if hasCar}
    <div>Voiture</div>
  {:else}
    <div>Vélo</div>
  {/if}
</Garage>
```

De plus, cela permet de faire exécuter des fonctions à des enfants sans passer par des `props`.

```html
<script>
  function iDontWantToBePassedAsProps () {
    console.log('Cette fonction deoit être définie dans ce composant')
  }
</script>
<Garage>
  <div on:click={iDontWantToBePassedAsProps}>
</Garage>
```

## Fallback

Un `<slot>` peut avoir un "fallback", qui sera utilisé si on ne fournit pas de slot.

```html
<!-- Garage.svelte -->
<h1>Garage</h1>
<slot>
  <div>Le garage est vide.</div>
</slot>

<!-- index.svelte -->
<Garage />
```

## Slots nommés

Il est possible d'envoyer des enfants dans des slots différents que l'on peut nommer.

```html
<!-- Maison.svelte -->
<h1>Maison</h1>
<slot />
<slot name='chambre' />
<slot name='cuisine' />

<!-- index.svelte -->
<Maison>
  <div>Canapé</div> <!-- est envoyé dans le slot par défaut -->
  <div slot='chambre'>Lit</div>
  <div slot='cuisine'>Frigo</div>
</Maison>
```

On peut également envoyer des composants dans des slots nommés.

```html
<Maison>
  <Frigo slot='cuisine' />
</Maison>
```

Les slots nommés sont particulièrement intéressants lorsque l'on construit un composant avec plusieurs zones différentes, le contenu de chaque zone pouvant varier selon les cas.

## Slot props

Un cas classique de l'usage des slots est les boucles.

Supposons le cas suivant:
```html
<!-- index.svelte -->
<script>
	import List from './List.svelte'

	const characters = [{
		name: 'Batman',
		type: 'hero'
	}, {
		name: 'Joker',
		type: 'villain'
	}]
</script>

<List items={characters}></List>
```

Notre composant `List` contient un `{#each}`. Nous voulons être capables d'instancier des `Hero` ou des `Villain` dans notre liste, mais sans que `<List>` n'ait à vérifier le type de chaque personnage. C'est important car nous voulons garder le composant `<List>` le plus générique possible.

Notre différenciation doit donc se faire au-dessus de `<List>`, dans `index.svelte`.

Mais il faut instancier un `Hero` ou un `Villain` en fonction du `type`, donc il faut avoir accès à chaque `item` de la boucle, qui se trouve dans `<List>`.

En résumé, la boucle est faite dans `<List>`, mais nous ne voulons pas différencier les personnages dans `<List>`.

On peut résoudre se problème en utilisant les `slot props`.

```html
<!-- index.svelte -->
<List items={characters} let:item>
  {#if item.type === 'hero'}
    <Hero name={item.name} />
  {:else}
    <Villain name={item.name} />
  {/if}
</List>
```

```html
<!-- List.svelte -->
<script>
	export let items = [];
</script>

{#each items as item}
	<slot item={item}>
			{item.name}
	</slot>
{/each}
```

Ainsi, on rend accessibles des variables de `<List>` dans son parent (en l'occurrence ici: chaque item).

Bien sûr,
- on peut déstructurer `let:item={{type, name}}`
- on peut écrire `{item}` à la place de `item={item}`


## Exos ??

## à suivre: [Stratégies de composition](./3-4_composition.md)
