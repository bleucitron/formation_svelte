# Outillage de base

## [Node](https://nodejs.org/en/)

## [NPM](https://www.npmjs.com/)

## [VS Code](https://code.visualstudio.com/)

Avec l'extension [Svelte for VSCode](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode).

Vérifier que le formatteur par défault est bien `svelte.svelte-vscode`.

### Command Palette

Dans VSCode => `Ctrl` + `Shift` + `P`

=> `Format Document With...`
=> `Configure Default Formatter`
=> `Svelte`

### Dans les settings

Dans VSCode => `Ctrl` + `Shift` + `P`

=> `Preferences: Open Settings`

Ajouter:

```json
"[svelte]": {
      "editor.defaultFormatter": "svelte.svelte-vscode"
  },
```

## [Installer un projet Svelte](https://svelte.dev/blog/the-easiest-way-to-get-started)

```bash
npx degit sveltejs/template my-new-project
```

## [REPL](https://svelte.dev/repl)

## à suivre: [2 - Syntaxe] [Bases](../2_syntax/2-1_bases.md)
