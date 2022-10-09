# Réactivité

## Comparaison avec React

Si on veut calculer des valeurs dépendantes d'un état, il faut absolument utiliser la notion de réactivité.

Pour calculer le nombre de mois équivalent à un âge, les habitués de React écrivent ce genre de réflexe:

```jsx
function MyComponent() {
  const [age, setAge] = useState(0);

  const ageEnMois = age * 12;

  return (
    <div>
      <div>J'ai {age + 1} ans</div>
      <div>({ageEnMois} en mois)</div>
      <button onClick={() => setAge(a => a + 1)}>Joyeux anniversaire !</button>
    </div>
  );
}
```

On pourrait transposer ça en Svelte :

```html
<script>
  let age = 35; // state local

  const ageEnMois = age * 12;
</script>

<div>J'ai {age + 1} ans</div>
<div>({ageEnMois} en mois)</div>
<button on:click={() => age = age + 1}>Joyeux anniversaire !</button>
```

Dans ce cas, le nombre de mois est dérivé du nombre d'années, et devrait changer en même temps que le nombre d'années. Cela fonctionne en React car le code du script est exécuté à chaque mise à jour du composant, ce qui n'est pas vraiment de la réactivité.

Mais en Svelte ce n'est pas le cas. **Un script Svelte ne tourne qu'une seule fois**, à l'instanciation du composant. `ageEnMois` ne sera donc évalué qu'une seule fois, même si `age` évolue dans le temps.

## L'opérateur de réactivité `$:`

La _vraie_ réactivité correspond plutôt à réagir de manière ciblée aux changements qui ont lieu dans le composant.

Pour déclarer une variable comme étant réactive, il faut utiliser la syntaxe `$:`. Dès lors, **une variable réactive sera révaluée à chaque fois que l'une de ses dépendances change, jamais sinon**.

L'équivalent en Vue est `computed`.

```html
<script>
  let age = 35; // state local

  $: ageEnMois = age * 12; // variable réactive
</script>

<div>J'ai {age + 1} ans</div>
<div>({ageEnMois} en mois)</div>
<button on:click={() => age = age + 1}>Joyeux anniversaire !</button>
```

La variable `ageEnMois` ne sera recalculée qui si `age` est mise à jour. La ligne `$: ageEnMois = age * 12` est compilée par Svelte en un équivalent qui écoute les changements de `age`, et recalcule `ageEnMois` le cas échéant.

### Instructions réactives

Il est aussi possible de déclarer des instructions comme réactives.

```html
<script>
  $: console.log('Coucou', name); // sera réexécuté à chaque fois que `name` change
</script>
```

```html
<script>
  let prixCarotte = 30;
  let prixBanane = 50;

  $: prixCarotteYen = prixCarotte * 100;
  $: prixBananeYen = prixBanane * 100;

  $: console.log('Prix carotte en Yen', prixCarotteYen);
  $: console.log('Prix banane en Yen', prixBananeYen);
</script>

<h2>Prix Carotte</h2>
<div>{prixCarotte}€ ({prixCarotteYen}¥)</div>
<button on:click={() => prixCarotte += 1}>Monter le prix de la carotte</button>

<h2>Prix Banane</h2>
<div>{prixBanane}€ ({prixBananeYen}¥)</div>
<button on:click={() => prixBanane += 2}>Monter le prix de la banane</button>
```

### Blocks réactifs

Il est aussi possible de déclarer des blocks réactifs. Le block est réévalué dès que l'une de ses dépendances change.

```html
<script>
  let prixCarotte = 30;
  let prixBanane = 50;

  $: {
    console.log('Changement de prix');
    console.log('Carotte', prixCarotte);
    console.log('Banane', prixBanane);
  }
</script>

<h2>Prix Carotte</h2>
<button on:click={() => prixCarotte += 1}>Monter le prix de la carotte</button>

<h2>Prix Banane</h2>
<button on:click={() => prixBanane += 2}>Monter le prix de la banane</button>
```

---

## à suivre: [Blocks de compilation](./2-3_blocks.md)
