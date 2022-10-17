# Outillage de base

## Pour se familiariser

Dans un premier temps, on va utiliser le [REPL](https://svelte.dev/repl) de Svelte pour se familiariser avec la syntaxe, sans avoir besoin d'installer quoi que ce soit.

## Dans la vraie vie

Pour travailler avec Svelte sur votre machine, vous avez besoin de:

- [Node](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)
- un IDE, disons [VS Code](https://code.visualstudio.com/)

### [Installer un projet Svelte](https://svelte.dev/docs#getting-started)

```bash
npm create vite@latest myapp -- --template svelte
cd myapp
npm install
npm run dev
```

### Configurer VSCode

1. Ajouter l'extension [Svelte for VSCode](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode).

2. Vérifier que le formatteur par défault est bien `svelte.svelte-vscode`. Deux options:

_Via Command Palette_

Dans VSCode => `Ctrl` + `Shift` + `P`

=> `Format Document With...`
=> `Configure Default Formatter`
=> `Svelte`

_Manuellement_

Dans VSCode => `Ctrl` + `Shift` + `P`

=> `Preferences: Open Settings`

Ajouter:

```json
"[svelte]": {
  "editor.defaultFormatter": "svelte.svelte-vscode"
},
```

3. Activer le formattage à la sauvegarde

Ouvrir les préférences de VSCode (avec le menu tout en haut).

Écrire `format on save` dans la barre de recherche, puis activer la checkbox "Format on Save".

4. Maintenant, à chaque sauvegarde, votre fichier `.svelte` sera correctement formatté

---

## à suivre: [2 - Syntaxe] [Bases](../2_syntax/2-1_bases.md)
