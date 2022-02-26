# Exercices de Syntaxe

Utiliser le [REPL de Svelte](https://svelte.dev/repl). Il est recommander de se connecter (via Github par exemple), pour éviter de perdre vos modifications.

## Todo

- ajouter un Todo avec un input + bouton
- chaque todo est affiché avec un input checkbox et un bouton supprimer
- un bouton permet de n'afficher que les Todos restants à faire

## Trombi

- afficher les personnes suivantes sous forme d'un trombinoscope
- chaque carte représentant une personne doit afficher nom, prénom, âge (ou âge au moment de la mort)
- quand on clique sur une carte, on affiche le détail de la personne, dont la date de naissance et la description
- on a un filtre par nom dans un champ input, et un filtre par âge avec un `<input type='range'>`
- on peut également filtrer pour ne garder que les vivants

```js
const persons = [
  {
    name: 'Romain',
    surname: "l'Ourson",
    born: '1985-12-31',
    description: 'Someone who loves Svelte !',
  },
  {
    name: 'Harry',
    surname: 'Potter',
    born: '1980-07-31',
    description: 'A wizard who defeated He-who-must-not-be-named',
  },
  {
    name: 'Steve',
    surname: 'Jobs',
    born: '1955-02-24',
    dead: '2011-10-05',
    description: 'Someone who loved apples',
  },
  {
    name: 'Diego',
    surname: 'Maradona',
    born: '1960-10-30',
    dead: '2020-11-25',
    description: 'The hand of God',
  },
  {
    name: 'Osamu',
    surname: 'Tezuka',
    born: '1928-11-03',
    dead: '1989-02-09',
    description: "Astro boy's dad",
  },
  {
    name: 'Billie',
    surname: 'Eilish',
    born: '2001-12-18',
    description: 'Happier then ever',
  },
  {
    name: 'Bernard',
    surname: 'Minet',
    born: '1953-12-28',
    description: 'Un mec musclé',
  },
];
```

## à suivre: [3 - Composants] [Cycle de vie](../3_components/3-1_lifecycle.md)
