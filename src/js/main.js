const players = [...document.querySelectorAll('.card')];
const activePlayers = players
						.filter(player => !player.classList.contains('disabled'))
						.map(activePlayer => activePlayer.getAttribute('id'));

const team = [];

class CharacterSelection {
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

class Player extends CharacterSelection {
	constructor(playerId) {
		super(playerId);
	}
}

class Game {
	constructor(playerId) {
		this.playerId = playerId;
		this.trigger();
	}

	trigger() {
		const character = new CharacterSelection(this.playerId);

		const addBtn = document.querySelector('#' + this.playerId + ' .add');
		const nextBtn = document.querySelector('#' + this.playerId + ' .select-next');
		const prevBtn = document.querySelector('#' + this.playerId + ' .select-prev');

		nextBtn.addEventListener('click', () => {
			character.changeNext();
		})

		prevBtn.addEventListener('click', () => {
			character.changePrev();
		})

		addBtn.addEventListener('click', () => {
			team.push(new Player(this.playerId));
			console.log(team);
		})
	}
}

activePlayers.forEach(player => {
	new Game(player);
})