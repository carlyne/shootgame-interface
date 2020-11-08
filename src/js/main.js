/**
 * Charge un script dans le <head> du html
 * @param {String} url 
 * @returns {Promise}
 */
const scriptLoader = (url) => {
	return new Promise((res, rej) => {
		var script = document.createElement("script"); 
		script.src = url; 
		script.onload = res;

		document.head.appendChild(script);
	}) 
}

scriptLoader('./src/js/data.js')
	.then(() => scriptLoader('./src/js/Vue.js'))
	.then(() => scriptLoader('./src/js/Character.js'))	
	.then(() => scriptLoader('./src/js/CharacterManager.js'))
	.then(() => scriptLoader('./src/js/Player.js'))
	.then(() => scriptLoader('./src/js/PlayerManager.js'))
	.then(() => scriptLoader('./src/js/GameManager.js'));