---
slug: 'bien-structurer-l-etat-de-ses-composants-react-grouper-les-etats'
date: '2024-10-20'
title: "Bien structurer l'état de ses composants react Partie 1: Grouper les états"
language: 'french'
---

# Bien structurer l'état de ses composants react. Partie 1: Grouper les états

Dans React, le state d’un composant est un objet qui contient des données qui, en changeant, peuvent impacter le rendu ou le comportement d’un composant.

À chaque fois que le state d’un composant change, le composant est re-rendu. Le state permet de créer des interfaces utilisateur dynamiques et interactives en permettant aux composants React de réagir aux interactions de l'utilisateur, aux réponses de l'API ou à d'autres événements.

Au fur et à mesure que la taille de ton application React augmente, la structure de l'état (le state) de tes composants devient un point sur lequel tu dois être très attentif.

En effet, tu dois faire attention à ne pas avoir des états redondants ou dupliqués afin d'éviter des erreurs (ou des omissions) lors de la mise à jour de ce dernier.

Dans cette série d’articles, nous allons voir quelques règles qui peuvent t’aider à bien structurer l'état de tes composants de manière à éviter les states redondants ou dupliqués et les erreurs de mise à jour.

## Part 1 : Grouper les états

Le premier principe que nous allons voir concerne le groupement de plusieurs variables du state dans un seul objet.
Il t’arrive peut-être de te demander si tu dois créer une variable pour chaque état dans ton composant ou bien créer un objet qui va regrouper plusieurs états.

```js
const [fistName, setFistName] = useState('');
const [lastName, setLastName] = useState('');
```

Ou

```js
const [names, setNames] = useState({ firstName: '', lastName: '' });
```

Dans la plupart des cas, ces deux approches fonctionnent très bien.

Cependant, tu dois faire attention au scénario où tu as deux ou plusieurs variables d'état que tu modifies souvent ensemble.

Dans ce cas, il est intéressant d’utiliser un objet qui regroupe ces états.

En utilisant un objet pour grouper le state de ton composant, tu seras forcé de modifier tous les états qui sont groupés (ou du moins de copier les anciennes valeurs explicitement) chaque fois qu'une partie de ton objet qui contient tes états sera modifiée.

Ce comportement t'empêche d’oublier de modifier une partie de ton state et d'avoir des comportements inattendus.

Pour illustrer ce principe, supposons que tu essaies de mettre en place un point (de couleur rouge 😉) qui suit le mouvement du pointeur sur une page web.

À chaque fois que le pointeur change de position sur ta page, tu vas récupérer sa position et modifier l’emplacement du point pour qu’il corresponde au nouvel emplacement.

![alt text](https://res.cloudinary.com/dvrppkins/image/upload/v1730127540/image1_maakll.gif)

Pour l’instant, voici à quoi ressemble ton composant :

```js
import { useState } from 'react';

function App() {
	return (
		<main>
			<div />
		</main>
	);
}

export default App;
```

Pour stocker l’emplacement du pointeur, tu as besoin de deux variables d'état qui vont stocker l'emplacement du pointeur sur l’axe vertical et sur l’axe horizontal.

```js
import { useState } from 'react';

function App() {
	const [positionX, setPositionX] = useState(0);
	const [positionY, setPositionY] = useState(0);

	return (
		<main>
			<div />
		</main>
	);
}

export default App;
```

Ajoute maintenant un peu de style pour rendre ton point bien visible sur la page.

```js
import { useState } from 'react';
import './app.css';

function App() {
	const [positionX, setPositionX] = useState(0);
	const [positionY, setPositionY] = useState(0);

	return (
		<main
			style={{
				position: 'relative',
				width: '100vw',
				minHeight: '100vh',
			}}
		>
			<div
				style={{
					position: 'absolute',
					backgroundColor: 'red',
					borderRadius: '50%',
					transform: `translate(${positionX}px, ${positionY}px)`,
					left: -10,
					top: -10,
					width: 20,
					height: 20,
				}}
			/>
		</main>
	);
}

export default App;
```

![alt text](https://res.cloudinary.com/dvrppkins/image/upload/v1730127540/image4_nzpde5.gif)

**Note** que, pour l’instant, le point rouge ne suit pas encore les mouvements du pointeur.

Pour que le point suive le pointeur, ajoute un gestionnaire d'événements qui va écouter les déplacements du pointeur.

À chaque déplacement, le gestionnaire d'événements récupère la position du pointeur et l'attribue aux variables d'état.

Ensuite, il te suffit de déplacer le point au nouvel emplacement du pointeur en modifiant ses coordonnées sur la page avec [la propriété css transforme](https://developer.mozilla.org/fr/docs/Web/CSS/transform).

```js
import { useState } from 'react';
import './app.css';

function App() {
	const [positionX, setPositionX] = useState(0);
	const [positionY, setPositionY] = useState(0);

	function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
		setPositionX(e.clientX);
		setPositionY(e.clientY);
	}

	return (
		<main
			onPointerMove={onPointerMove}
			style={{
				position: 'relative',
				width: '100vw',
				minHeight: '100vh',
			}}
		>
			<div
				style={{
					position: 'absolute',
					backgroundColor: 'red',
					borderRadius: '50%',
					transform: `translate(${positionX}px, ${positionY}px)`,
					left: -10,
					top: -10,
					width: 20,
					height: 20,
				}}
			/>
		</main>
	);
}

export default App;
```

Et maintenant le point suit le pointeur

![alt text](https://res.cloudinary.com/dvrppkins/image/upload/v1730127540/image2_gp4eou.gif)

Ta petite application fonctionne correctement. En regardant le code, tu te rends compte que les variables d'état "positionY" et "positionX" changent souvent ensemble. Si nous modifions l’une sans l’autre, cela peut entraîner des comportements inattendus.

Par exemple, si tu modifies uniquement la valeur de "positionY" sans toucher à celle de "positionX", voici le comportement que tu auras :

```js
// ...
function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
	setPositionY(e.clientY);
}
//...
```

![alt text](https://res.cloudinary.com/dvrppkins/image/upload/v1730127540/image5_navi1v.gif)

Pour éviter de modifier accidentellement une seule variable de ton state, tu peux grouper tes deux variables d'état dans un objet.

```js
import { useState } from 'react';
import './app.css';

function App() {
	const [position, setPosition] = useState({ x: 0, y: 0 });

	function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
		setPosition({ x: e.clientX, y: e.clientY });
	}
	return (
		<main
			onPointerMove={onPointerMove}
			style={{
				position: 'relative',
				width: '100vw',
				minHeight: '100vh',
			}}
		>
			<div
				style={{
					position: 'absolute',
					backgroundColor: 'red',
					borderRadius: '50%',
					transform: `translate(${position.x}px, ${position.y}px)`,
					left: -10,
					top: -10,
					width: 20,
					height: 20,
				}}
			/>
		</main>
	);
}

export default App;
```

Du point de vue de l'interface utilisateur, ton application fonctionne exactement comme avant, mais maintenant ton code est moins vulnérable aux erreurs dues à la modification de l'état.

Maintenant, si tu tentes de modifier la valeur de position.x sans modifier celle de position.y, tu auras une erreur de syntaxe.

![alt text](https://res.cloudinary.com/dvrppkins/image/upload/v1730127540/image3_z65ats.png)

Si tu te demandes ce qu'il en est lorsque tu souhaites modifier position.x sans toucher à position.y, cela reste possible. Cependant, tu dois le faire explicitement en copiant la valeur de position.y.

Le code ressemble à ceci :

```js
function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
	setPosition({ ...position, x: e.clientX });
}
```

En conclusion, si tu mets toujours à jour deux ou plusieurs variables d'état en même temps, envisage de les regrouper en une seule variable d'état. Tu peux trouver le code source que tu as écrit ici.

Dans la deuxième partie de cette série d’articles, nous allons voir comment éviter les contradictions dans le state de tes composants.
