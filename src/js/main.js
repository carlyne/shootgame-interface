const nextBtns = document.querySelectorAll('.select-next');
const prevBtns = document.querySelectorAll('.select-prev');
const playersId = ['player-one', 'player-two', 'player-three', 'player-four'];

const team = [];

class Player {
	constructor(playerId) {
		this.playerId = playerId;
	}
}

function trigger(playersId) {
	playersId.forEach(playerId => {
		const addBtn = document.querySelector('#' + playerId + ' .add');

		addBtn.addEventListener('click', () => {
			console.log('click', playerId);
			return team.push(new Player(playerId));
		})
	});
}

trigger(playersId);