# Concept de Stores

Un des grands classiques du développement front-end moderne est l'usage de **stores**.

Vous avez probablement entendu parler de librairies telles que [Redux](https://redux.js.org/), [MobX](https://mobx.js.org/README.html), [VueX](https://vuex.vuejs.org/). Toutes ces librairies font plus ou moins la même chose: du **state management**.

## Le problème du `state` local

Avec l'avènement du modèle d'architecture par composants (en gros depuis 2014), la notion de `props` et de `state` s'est assez largement répandue. Les `props` sont fournies par le parent et ne sont pas censées changer (l'ADN). Le `state` est interne (ou local), et peut évoluer (l'expérience).

Dans ce modèle là, un des grands principes est que le `state` d'un composant a une zone d'influence.

Cette zone d'influence est l'ensemble des composants où un `state` donné existe. Elle inclut donc:

- le composant qui définit le state, et est donc le seul à pouvoir le modifier
- tous les enfants de ce composant, où le state peut être fourni en props, et où on peut utiliser une procuration pour modifier le state du parent

Si un `state` est nécessaire en dehors de sa zone d'influence, il faut remonter sa définition (et donc changer son propriétaire) jusqu'au plus proche parent commun à tous les composants le nécessitant.

Cette contrainte conduit à un phénomène de concentration du `state`: **plus les applications se complexifient, plus le `state` a tendance à se concentrer à la racine de l'application**.

Cela induit de devoir relayer le `state` en tant que `props` de plus en plus profondément, ainsi que les "procurations" pour modifier le `state`.

## `state` global

Une solution a ce problème est d'introduire la notion de **`state` global**.

Un `state` global est déporté en dehors du flux normal de données de l'application, et auquel peut avoir potentiellement accès n'importe quel composant de l'application.
Les entités gérant ce `state` global sont généralement appelées des **`stores`**.

## Dangers

De manière générale, il faut essayer d'éviter de connecter trop de composants aux `stores`, car dans ce cas, tout le `state` devient global, ce qui peut avoir des effets pervers.

### Mauvaise lisibilité

Trop de composants connectés rend difficile la compréhension de comment circule la donnée. Pour être plus précis, la donnée circule alors toujours en passant par le store, ce qui fait des aller-retours pas toujours strictement nécessaires.

### Compromission du `state`

Certains `state` n'ont pas besoin d'être globaux. Les rendre globaux les exposent potentiellement à une mauvaise utilisation.

### Des composants moins réutilisables

Dès lors qu'un composant est connecté à un store, il devient dépendant du store, et donc n'est plus générique.

Un composant non générique est plus difficilement réutilisable, et plus difficilement testable.

---

Redux, MobX, VueX, ... sont donc des librairies qui proposent des stores connectables à n'importe quelle application.

Néanmoins, ces solutions ont une certaine courbe d'apprentissage, sont souvent complexes à mettre en place, et ajoutent une bonne dose de boilerplate. Je pense notamment à Redux.

Svelte a la particularité de proposer des stores parfaitement intégrés au framework, qui tirent profit du concept de réactivité de Svelte, et sont d'une grande simplicité d'utilisation.

## à suivre: [Le store `writable`](../4_stores/4-2_writable.md)
