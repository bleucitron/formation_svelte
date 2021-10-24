# Pourquoi Svelte existe ?

Svelte a créé principalement par [Rich Harris](https://twitter.com/Rich_Harris), graphics editor au Guardian, puis au New York Times.

Rich ayant beaucoup de data viz à produire, était souvent confronté à des problèmes de performances, malgré les optimisations proposées par les frameworks existants, notamment React.

Il a donc créé son propre framework, Svelte, pour corriger les faiblesses de React, qui souvent sont partagées avec d'autres frameworks.

Mais il n'a pas non plus hésité à s'inspirer d'autres frameworks, notamment Vue.

## Ce que garde Svelte

- Les composants
- Le data-flow descendant (sauf cas exceptionnel)

## Les problèmes de React (et des autres)

La plupart des frameworks modernes ont un système de boucle de rendu, permettant d'être mis au courant des mises à jour effectuées dans l'application, et d'y réagir.

Cela est pratique, mais regénère en permanence les composants, ce qui risque d'alourdir la tâche du navigateur pour mettre à jour l'interface. C'est la raison d'être du Virtual DOM, qui représente les futures modifications du vrai DOM, et permet d'analyser ce qui a réellement besoin d'être modifié.

#### React n'est pas **vraiment** réactif

À cause de sa boucle de rendu, ainsi que du Virtual DOM. Cela suffit à donner le change dans plein de cas, mais bon, c'est nul parce que:

- du code exécuté même quand c'est pas nécessaire
- du temps perdu à comparer pleins d'éléments
- des optimisations de performance possibles via opt-ins

#### React pèse lourd

La plus petite application React pèse a minima ~40k gzippé, car le moteur de rendu ainsi que le Virtual DOM sont envoyés dans le navigateur.

#### React est complexe à écrire

Il est possible d'optimiser plein de choses avec React, mais cela augmente beaucoup la quantité de code à écrire, même en utilisant les React Hooks.

Plus de code à écrire = plus de bugs potentiels.

De plus, cela rend les choses plus dures à apprendre.

## La solution de Svelte ?

**Supprimer tout le code inutile.**

## à suivre: [Mais c'est quoi Svelte ?](./1-4_svelte.md)
