# Outillage de base

## Pour se familiariser

Dans un premier temps, on va utiliser le [REPL](https://svelte.dev/repl) de Svelte pour se familiariser avec la syntaxe, sans avoir besoin d'installer quoi que ce soit.

## Dans la vraie vie

Pour travailler avec Svelte sur votre machine, vous avez besoin de:

- [Node](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)
- un IDE, disons [VS Code](https://code.visualstudio.com/)

### [Installer un projet Svelte](https://svelte.dev/blog/the-easiest-way-to-get-started)

```bash
npx degit sveltejs/template my-new-project
```

### Configurer VSCode

Ajouter l'extension [Svelte for VSCode](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode).

Vérifier que le formatteur par défault est bien `svelte.svelte-vscode`. Deux options:

#### Command Palette

Dans VSCode => `Ctrl` + `Shift` + `P`

=> `Format Document With...`
=> `Configure Default Formatter`
=> `Svelte`

#### Dans les settings

Dans VSCode => `Ctrl` + `Shift` + `P`

=> `Preferences: Open Settings`

Ajouter:

```json
"[svelte]": {
      "editor.defaultFormatter": "svelte.svelte-vscode"
  },
```

## à suivre: [2 - Syntaxe] [Bases](../2_syntax/2-1_bases.md)
