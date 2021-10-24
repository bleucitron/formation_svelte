# Blocks de compilation

HTML ne permet pas d'exprimer de la logique, via des boucles ou encore des conditions. Svelte compense ce manque en ajoutant des blocks de compilation.

## [`if` / `else`](https://svelte.dev/docs#if)

On peut conditionner l'affichage au sein d'un composant Svelte avec `{#if}...{:else}...{/if}`.

```html
{#if ilPleut}
  <div>Prends ton parapluie</div>
{:else if ilFaitChaud}
  <div>Prends un chapeau</div>
{:else}
  <div>Tout va bien</div>
{/if}
```

## [`each`](https://svelte.dev/docs#each)

`{#each}...{/each}` permet de boucler sur tableau et afficher du markup pour chaque élément.

```html
{#each names as name}
  <div>Bonjour {nom} !</div>
{/each}
```

Avec `{:else}` au sein d'un block `{#each}`, on peut prévoir le cas d'un tableau vide.

```html
{#each names as name}
  <div>Bonjour {name} !</div>
{:else}
  <div>Il n'y a personne...</div>
{/each}
```

Il est possible de déstructurer notre élément courant.

```html
{#each friends as {name, surname}}
  <div>Bonjour {name} {surname} !</div>
{/each}
```

On peut également accéder à la position de l'élément courant dans la boucle:

```html
{#each top50 as song, position}
  <div>{position}) {song.name}</div>
{/each}
```

En ajoutant une clé unique et persistante, on peut aider le compilateur à déterminer précisément ce qui doit être mis à jour lorsque la donnée change.

```html
{#each top50 as song (song.id)}
  <div>{song.name}</div>
{/each}
```

## [`await`](https://svelte.dev/docs#await)

La gestion des Promesses est accessible grâce aux blocks `{#await}`.

```html
{#await somePromise}
  <div>Loading...</div>
{:then promisedValue}
  <div>Here is the data requested: {promisedValue}</div>
{:catch error}
  <div>Some problem occurred: {error}</div>
{/await}
```

Les blocks `{:then}` et `{:catch}` sont optionnels.

```html
{#await somePromise}
  <div>Loading...</div>
{:then promisedValue}
  <div>Here is the data requested: {promisedValue}</div>
{/await}
```

```html
{#await somePromise}
  <div>Loading...</div>
{:catch error}
  <div>Some problem occurred: {error}</div>
{/await}
```

Si on a pas besoin de gérer l'état d'attente, on peut écrire plus simplement:

```html
{#await somePromise then value}
  <div>Here is the data requested: {value}</div>
{/await}
```

```html
{#await somePromise catch error}
  <div>Some problem occurred: {error}</div>
{/await}
```

## [`@html`](https://svelte.dev/docs#html)

On peut intégrer un bloc HTML complet avec `{@html}`

```html
{@html someHTMLString}
```

**Attention**: dans ce cas, la string n'est pas nettoyée par Svelte.

## à suivre: [Bindings](./2-3_bindings.md)
