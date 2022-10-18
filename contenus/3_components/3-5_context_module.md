# Module Contexte

On peut ajouter un `<script>` special à nos composants.

```svelte
<script context="module">
  // partagé entre toutes les instances
</script>
<script>
  // spécifique à l'instance
</script>
```

Le `<script context='module'>` est généralement peu utile, sauf avec SvelteKit.

## Partager du code entre instances

Ce `<script context='module'>` est exécuté une seule fois, pour toutes les instances futures d'un composant. Cela permet de gérer des variables partagées entre les instances.

**Attention !** La réactivité n'a pas d'effet dans un `<script context='module'>`.

## Exporter du code

Les `<script context='module'>` permettent également d'exporter du code à l'extérieur.

Ces exports fonctionnent comme des `export` classiques. La seule différence est que l'on ne peut pas exporter par défaut, car l'export par défaut d'un `.svelte` est le composant lui-même.

```svelte
<script context="module">
  export function maFonction() {}
</script>
```

```svelte
<script>
  import Enfant, { maFonction } from './Enfant.svelte';
</script>
```

---

## à suivre: [Composants spéciaux](./3-6_special_components.md)
