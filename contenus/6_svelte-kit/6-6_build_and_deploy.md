# [Builds et déploiements](https://kit.svelte.dev/docs/modules)

## [SSR et hydratation](https://kit.svelte.dev/docs/appendix)

Par défault, toutes les pages d'une application SvelteKit utilisent

- le SSR
- le router client
- l'hydratation JS

Il est possible de modifier ce comportement pour les pages qui vous arrangent.

Si je veux **désactiver le router**, pour que la navigation normalement:

```js
<script context="module">export const router = false;</script>
```

Si je veux **désactiver l'hydratation**, pour ne plus avoir de javascript qui tourne sur ma page:

```js
<script context="module">export const hydrate = false;</script>
```

Si je veux **générer une page au moment du build**, et donc la rendre **statique**:

```js
<script context="module">export const prerender = true;</script>
```

Si je veux **désactiver le SSR**, et donc rendre ma page équivalente à une SPA, [c'est un peu particulier](https://kit.svelte.dev/docs/hooks#handle), et nous ne le traiterons pas ici.

## [Configuration](https://kit.svelte.dev/docs/configuration)

**Il est également possible de modifier le comportement de SvelteKit pour l'intégralité de votre app**, en utilisant [les configurations d'app SvelteKit](https://kit.svelte.dev/docs#configuration).

Cette configuration se modifie dans le fichier `svelte.config.js`.

## [CLI](https://kit.svelte.dev/docs/cli)

SvelteKit propose quelques options de CLI:

```bash
svelte-kit dev # lance le serveur de dev
svelte-kit build # build l'app pour la prod
svelte-kit preview # une fois l'app buildée, permet de previsualiser l'app en local
svelte-kit package # pour faire de votre app une librairie
```

## [Adapters](https://kit.svelte.dev/docs/adapters)

Vous avez fini votre app, vous êtes super content, vous allez devenir riche.

**MAIS !**

Avant de build votre app, il va falloir l'adapter au futur environnement de déploiement.

Selon vos choix et vos besoins, votre app peut être déployée en tant que:

- **app statique**, tous vos fichiers sont préconstruits d'avance (parfait pour un blog)
- **app Node**, pour être déployée sur votre serveur NodeJS
- **app serverless**, pour être déployée sur une plateforme type [Vercel](https://vercel.com/home), [Netlify](https://www.netlify.com/) ou [Cloudfare](https://workers.cloudflare.com/)
- autre chose, on sait jamais

Pour cela, il faut installer un Adapter Sveltekit:

- [adapter-auto](https://github.com/sveltejs/kit/tree/master/packages/adapter-auto)
- [adapter-static](https://github.com/sveltejs/kit/tree/master/packages/adapter-static)
- [adapter-node](https://github.com/sveltejs/kit/tree/master/packages/adapter-node)
- [adapter-vercel](https://github.com/sveltejs/kit/tree/master/packages/adapter-vercel)
- [adapter-netlify](https://github.com/sveltejs/kit/tree/master/packages/adapter-netlify)
- [adapter-cloudfare-workers](https://github.com/sveltejs/kit/tree/master/packages/adapter-cloudflare-workers)

ou éventuellement d'[autres](https://sveltesociety.dev/components/#adapters).

Une fois votre adapter choisi, il faut le préciser dans le `svelte.config.js`.

```js
// svelte.config.js
import node from '@sveltejs/adapter-node';
// import static from '@sveltejs/adapter-static';
// import vercel from '@sveltejs/adapter-vercel';

export default {
  kit: {
    adapter: node(),
    // adapter: static()
    // adapter: vercel()
  },
};
```

## Exos

- déployer l'app sur Vercel

## à suivre: [Aller plus loin](../7_beyond/7-1_index.md)
