# Blocks de compilation

HTML ne permet pas d'exprimer de la logique, via des boucles ou encore des conditions. Svelte compense ce manque en ajoutant des blocks de compilation.

## [`if` / `else`](https://svelte.dev/docs#template-syntax-if)

On peut conditionner l'affichage au sein d'un composant Svelte avec `{#if}...{:else}...{/if}`.

```svelte
{#if ilPleut}
  <div>Prends ton parapluie</div>
{:else if ilFaitChaud}
  <div>Prends un éventail</div>
{:else}
  <div>Tout va bien</div>
{/if}
```

## [`each`](https://svelte.dev/docs#template-syntax-each)

`{#each}...{/each}` permet de boucler sur tableau et afficher du markup pour chaque élément.

```svelte
{#each names as name}
  <div>Bonjour {name} !</div>
{/each}
```

Avec `{:else}` au sein d'un block `{#each}`, on peut prévoir le cas d'un tableau vide.

```svelte
{#each names as name}
  <div>Bonjour {name} !</div>
{:else}
  <div>Il n'y a personne...</div>
{/each}
```

Il est possible de déstructurer notre élément courant.

```svelte
{#each friends as {name, surname}}
  <div>Bonjour {name} {surname} !</div>
{/each}
```

On peut également accéder à la position de l'élément courant dans la boucle:

```svelte
{#each top50 as song, position}
  <div>{position}) {song.name}</div>
{/each}
```

En ajoutant une clé unique et persistante, on peut aider le compilateur à déterminer précisément ce qui doit être mis à jour lorsque la donnée change.

```svelte
{#each top50 as song (song.id)}
  <div>{song.name}</div>
{/each}
```

## [`await`](https://svelte.dev/docs#template-syntax-await)

La gestion des Promesses est accessible grâce aux blocks `{#await}`.

```svelte
{#await somePromise}
  <div>Loading...</div>
{:then promisedValue}
  <div>Here is the data requested: {promisedValue}</div>
{:catch error}
  <div>Some problem occurred: {error}</div>
{/await}
```

Les blocks `{:then}` et `{:catch}` sont optionnels.

```svelte
{#await somePromise}
  <div>Loading...</div>
{:then promisedValue}
  <div>Here is the data requested: {promisedValue}</div>
{/await}
```

```svelte
{#await somePromise}
  <div>Loading...</div>
{:catch error}
  <div>Some problem occurred: {error}</div>
{/await}
```

Si on a pas besoin de gérer l'état d'attente, on peut écrire plus simplement:

```svelte
{#await somePromise then value}
  <div>Here is the data requested: {value}</div>
{/await}
```

```svelte
{#await somePromise catch error}
  <div>Some problem occurred: {error}</div>
{/await}
```

## Tags de compilation

En complément des blocks de compilation, il existe également des tags, préfixés avec `@`.

### [`@const`](https://svelte.dev/docs#template-syntax-const)

Le tag `@const` permet de définir une variable `const` dans certains blocks, comme `(#each}`, `{:then}`, ou `{:catch}`. Cela permet de faire des calculs spécifiques à une itération par exemple.

```svelte
<script>
  export let boxes;
</script>

{#each boxes as box}
  {@const {width, height} = box}
  {@const area = width * height}
  <div>Largeur: {width}</div>
  <div>Height: {height}</div>
  <div>Surface: {area}</div>
{/each}
```

### [`@html`](https://svelte.dev/docs#template-syntax-html)

On peut intégrer du HTML pur avec `{@html}`

```svelte
{@html someHTMLString}
```

**Attention**: dans ce cas, la string n'est pas nettoyée par Svelte.

## à suivre: [Bindings](./2-4_bindings.md)
