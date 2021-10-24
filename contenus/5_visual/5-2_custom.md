# Transitions custom

Si d'aventure les 7 transitions disponibles ne suffisaient pas, il est tout à fait possible d'en créer de nouvelles.

Une transition Svelte est simplement une fonction prenant 2 arguments:
- `node`: l'élément sur lequel s'applique la transition)
- `params`: un objet précisant des paramètres

et qui renvoie un objet de transition:

```js
function newTransition(node, params) {
  return {
    delay, // délai
    duration, // durée
    easing, // fonction de lissage (voir chapitre suivant)
    css, // fonction de transition CSS
    tick, // fonction de transition JS
  }
}
```

## [Les transitions CSS](https://svelte.dev/tutorial/custom-css-transitions)

Pour exemple, la transition `fade` est en fait la fonction suivante:

```js
function fade(node, {
	delay = 0,
	duration = 400
}) {
	const o = +getComputedStyle(node).opacity;

	return {
		delay,
		duration,
		css: t => `opacity: ${t * o}`
	};
}
```

Une fonction de transition CSS est donc une fonction qui prend en entrée
- `t`, représentant le pourcentage de complétion de la transition entrante (`0` est le début, `1` la fin)
- `u` (optionnel), égal à `1 - t`, représentant le pourcentage de complétion de la transition sortante

et renvoie un string de style.

`t`:

0 --- intro ---> 1 --- outro ---> 0

`u`:

1 --- intro ---> 0 --- outro ---> 1

On peut imaginer une transition de zoom de police écrite ainsi:

```js
function fontZoom(node, {
	delay = 0,
	duration = 400
}) {
	return {
		delay,
		duration,
		css: t => `font-size: ${t}rem`
	};
}
```

## [Les transitions JS](https://svelte.dev/tutorial/custom-js-transitions)

Dans la plupart des cas, on peut se débrouiller avec simplement des transitions CSS. Et c'est d'ailleurs recommendé, car les calculs CSS se font dans un thread séparé du thread principal du navigateur.

Mais parfois il est nécessaire de passer par du JS pour calculer une transition.

Dans ce cas, Svelte permet de renvoyer une fonction `tick` dans l'objet de transition.

Ce genre de cas étant assez rare, nous ne le traiterons pas ici, mais [un exemple est proposé dans le tutoriel Svelte](https://svelte.dev/tutorial/custom-js-transitions).

## à suivre: [Divers](./5-3_misc.md)
