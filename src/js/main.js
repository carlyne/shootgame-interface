
/*class CharacterSelection {
	constructor(playerId) {
		this.playerId = playerId;
	}

	changeNext() {
		console.log('next character');
	}

	changePrev() {
		console.log('prev character');
	}
}

*/

function scriptLoader(url) {
	return new Promise((res, rej) => {
		var script = document.createElement("script"); 
		script.src = url; 
		script.onload = res;

		document.head.appendChild(script);
	}) 
}

scriptLoader('./src/js/data.js')
	.then(() => scriptLoader('./src/js/CharacterSelection.js'))
	.then(() => scriptLoader('./src/js/PlayerConfiguration.js'))
	.then(() => scriptLoader('./src/js/GameInterface.js'));