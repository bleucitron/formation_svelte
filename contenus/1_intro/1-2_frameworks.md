# [WTF is a component framework ?](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks)

Svelte est un **framework de composants**.

> Hey Michel, c'est quoi un framework de composants ?

Un composant est une brique d'interface réplicable permettant d'afficher de la donnée de manière consistente.

Un framework de composants orchestre la manière dont la donnée est distribuée au sein des composants.

## Pourquoi a t'on besoin de frameworks ?

Au milieu des années 2000, le web était bien différent d'aujourd'hui, et l'importance des données n'était pas encore évidente pour tout le monde.

Quelques entreprises ont été confrontées avant les autres aux problématiques liées à **l'affichage massif de données dans une interface web**: Google (Angular) et Facebook (React).

La complexité des données à afficher ainsi que les besoins fréquents de maintenance liés au volume d'utilisateurs mettent en valeur le fait que les pratiques de développement de l'époque ne sont pas adaptées à ce nouveau contexte.

Les principaux problèmes à régler sont:

- l'**architecture des applications** est complexe à comprendre
- le **parcours des données** au sein de l'application est complexe à orchestrer
- les **performances d'exécution** de l'application sont difficiles à maitriser

Pour répondre à ces problématiques, plusieurs frameworks ont émergé, mais les frameworks dits "de composants" sont devenus particulièrement populaires depuis le milieu des années 2010: Angular, React, Vue.

## Principes généraux

Ces 3 frameworks partagent un consensus, en grande partie inspiré par React, et largement répandu aujourd'hui. Ce consensus s'est formé autour de 3 principes.

### Architecture par composants

**L'application est découpée en briques d'interface unitaires**, permettant de bien compartimenter les rôles et les designs.

Ces briques unitaires (ou plutôt, moules unitaires) sont des composants, qui dépendent de 2 types de données: les **`props`** et le **`state`**.

Les `props` sont fournies par le parent, et ne peuvent pas être modifiées par le composant. On les compare généralement à l'ADN.

Le `state` est interne au composant, ne peut en sortir, et décrit l'expérience d'un composant.

### Flux de données uni-directionnel descendant

Pour fluidifier le parcours des données au sein de l'app, et éviter de perdre de vue qui a le contrôle sur la donnée, un principe de flux de données descendant est proposé.

**La donnée va toujours du parent vers les enfants**, et ne remonte jamais (en tout cas, dans le cas de React).

Cette contrainte amène à la mise d'une boucle de rendu qui re-rend un composant dès qu'une de ses données change, ainsi que tous ses enfants.

### [DOM virtuel](https://youtu.be/AdNJ3fydeao?t=251)

À cause de la boucle de rendu, beaucoup de modifications de DOM sont à prévoir, puisque si un composant est re-rendu, tous ses enfants également. Et **manipuler le DOM coûte cher**, surtout si on le fait mal.

React propose le concept de DOM virtuel pour réduire le nombre d'opérations sur le DOM: on construit en mémoire un "faux" DOM qui représente le vrai DOM. Dès qu'une modification de données est à venir, elle est d'abord appliquée sur le faux DOM.

Cette opération est bien moins coûteuse que de toucher au vrai DOM. Puis on compare le faux DOM avec le vrai, on regarde ce qui est différent, et on applique uniquement les changements nécessaires sur le vrai DOM.

Le virtual DOM a permis de gagner en performances par rapport aux méthodes existantes jusque là, et a été adopté par plusieurs autres frameworks depuis (dont Vue).

## à suivre: [Pourquoi Svelte ?](./1-3_why_svelte.md)
