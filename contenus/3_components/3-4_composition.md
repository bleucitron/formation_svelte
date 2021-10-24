# Stratégies de composition

Il est possible de réagir à des interactions au sein d'un composant de 3 manières:
- `props`
- `events`
- `slots`

```html
<script>
  import Selector from './Selector.svelte';
</script>

<Selector select={item => console.log('Item', item)}/>
<Selector on:select={e =>  console.log('Item', e.detail)} />
<Selector>
  <div on:click={() => console.log('Item', item)}></div>
</Selector>
```

## Props

Passer des fonctions à un composant en tant que `props` est une technique qui vient de React.

Cela permet de "donner procuration" au composant. Le parent définit la fonction, et donc a accès à toutes son `state` local, puis passe cette fonction à son enfant, qui l'exécutera lorsque nécessaire. L'enfant n'a alors aucun info sur ce que fait la fonction, mais il peut tout de même l'exécuter.

De manière générale, je pense qu'il faut privilégier cette technique par défaut.

**Avantages**
- Documente le composant
- Accès direct aux arguments de la fonction

**Inconvénients**
- Transport pénible sur plusieurs étages
- Lourd lorsque l'on a un parent qui doit gérer plusieurs situations de l'enfant

## Events

Certaines situations sont pénibles à gérer avec des `props`.

Utiliser des évènements est une technique complémentaire qui peut simplifier ces situations.

### Relais sur plusieurs étages

Le cas classique est lorsque l'on doit faire remonter plusieurs étages à un callback. Le relais d'évènements est bien plus simple à mettre en place.

### Composants `input`-like

Parfois il est nécessaire de faire des composants "coquilles" autour d'`input`s.

Prenons pour exemple ce cas de composant qui affiche le label d'un input.

```html
<script>
	export let value;
	export let name;
</script>


<label>
	<div>
		{name}
	</div>
	<input {name} bind:value type='text' on:input on:change />
</label>
```

Dans ce genre de cas, ajouter une `prop` pour réagir aux changements sur l'`input` est un peu bizarre: on rajoute du code qui rend complexe le composant.

De plus, notre nouveau composant peut être utilisé de la même manière qu'un `input`, avec un `on:input`, ce qui fluidifie son usage.

### Effets de bord

Certains composants n'ont pas spécialement besoin de leur parent pour fonctionner, mais le parent peut avoir besoin d'être mis au courant de certaines mises à jour de son enfant. Il faut alors gérer ces "effets de bord".

Par exemple, un composant de Chat gère lui-même son contenu, mais un parent peut avoir besoin de savoir lorsque le Chat a reçu un nouveau message.

Il est tout à fait possible de fournir un `props` pour réagir à l'arrivée du nouveau message. Mais ça alourdit la syntaxe, et donne l'impression d'avoir une fonctionnalité supplémentaire du composant (car une nouvelle `prop` suggère une nouvelle fonctionnalité). En réalité, ce n'est pas une nouvelle fonctionnalité du composant, mais plutôt le parent qui veut se tenir au courant.

Dans ce cas, créer un évènement personnalisé est une bonne solution.

```html
<Chat on:newMessage={toggleNotification} />
```

Ici, `toggleNotification` pourrait être intégré au `<Chat />`, mais ce n'est pas réellement le job du `<Chat />`.

### Résumé

On pourrait être tenté de n'utiliser que des évènements pour gérer les callbacks d'un composant, mais il y a des désavantages.

**Avantages**
- Multi-étages
- Simulation d'inputs
- Effets de bord

**Inconvénients**
- Générer un évènement n'est pas gratuit
- Documentation moins explicite
- Un peu de boilerplate pour générer un évènement personnalisé
- Accès au `e.detail` un peu lourd

## Slots

Le cas des `slots` est un peu différent, même s'il permet des choses similaires.

Si l'on veut afficher un contenu différent selon les situations, on peut très bien gérer ça avec des props.

Néanmoins, le nombre de cas à gérer peut augmenter et complexifier la logique du composant. Cela revient à déporter la logique du contexte dans le parent, là où ça a probablement plus de sens de gérer le contexte en amont.

```html
<Profil>
  {#if isDev}
    <h3>Langages</h3>
    <ul>
      <li>C++</li>
      <li>Javascript</li>
      <li>Rust</li>
    </ul>
    <button on:click={refreshLanguages}/>
  {:else if isMilitary}
    <h3>Armes</h3>
    <ul>
      <li>Glock</li>
      <li>Kalachnikov</li>
      <li>Arc</li>
    </ul>
    <button on:click={refreshWeapons}/>
  {:else}
    <h3>Compétences</h3>
    <ul>
      <li>Jonglage</li>
      <li>Calcul mental</li>
      <li>Gestion de crise</li>
    </ul>
    {#if displayLink}
      <a href='https://www.seeMoreSkills.com' />
    {/if}
  {/if}
</Profil>
```

On peut également créer des composants intermédiaires.

```html
<Profil>
  {#if isDev}
    <Languages {refreshLanguages} />
  {:else if isMilitary}
    <Weapons {refreshWeapons} />
  {:else}
    <Skills {displayLink} />
  {/if}
</Profil>
```

Il est tout à fait possible d'écrire cet exemple avec uniquement des `props`.

```html
<Profil {isDev} {refreshLanguages} {isMilitary} {refreshWeapons} {displayLink} />
```

Dans ce cas, toute la logique est déportée dans `<Profil />`. Mais il n'est pas forcément pertinent que `<Profil />` ait ce genre de décisions à prendre. Si le `<Profil />` a plutôt vocation à orchestrer la disposition des éléments, lui fournir de la logique à implémenter peut s'avérer un mauvais choix si cette logique se complexifie.

De plus, n'utiliser que des `props` ici réitère le problème la succession d'étages à relayer.

**Avantages**
- Permet d'ajuster le contenu d'un enfant
- Compartimente mieux la logique

**Inconvénients**
- Lourd pour des cas simples
- Fragmente les fonctionnalités

## à suivre: [Le contexte module](./3-5_context_module.md)
