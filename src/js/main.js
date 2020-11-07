const activePlayersId =['player-one', 'player-two'];

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

class PlayerConfiguration {
	constructor(playerId, gameInterface) {
		this.playerId = playerId;
		this.gameInterface = gameInterface;
		this.characterId = 'Punk';
	}

	confirmPlayerEvent() {
		const addBtn = document.querySelector('#' + this.playerId + ' .add');

		addBtn.addEventListener('click', () => {
			this.gameInterface.confirmedCharacters = this.characterId;
		})

		return this;
	}

	editCharacterEvents(){
		const nextBtn = document.querySelector('#' + this.playerId + ' .select-next');
		const prevBtn = document.querySelector('#' + this.playerId + ' .select-prev');

		nextBtn.addEventListener('click', () => {
			console.log('next character');
		})

		prevBtn.addEventListener('click', () => {
			console.log('prev character');
		})

		return this;
	};

	addEvents() {
		return this.confirmPlayerEvent().editCharacterEvents();
	}
}


class GameInterface {
	constructor(activePlayersId) {
		this._activePlayersId = activePlayersId;
		this._confirmedCharacters = [];

		this.addPlayerConfiguration();
	}

	get activePlayersId() {
		return this._activePlayersId;
	}

	get confirmedCharacters() {
		return this._confirmedCharacters;
	}

	set activePlayersId(newActivePlayersId) {
		this._activePlayersId = newActivePlayersId;
		return this;
	}

	set confirmedCharacters(newConfirmedCharacters) {
		this._confirmedCharacters.push(newConfirmedCharacters);

		return this;
	}

	addPlayerConfiguration() {
		this.activePlayersId.forEach(playerId => {
			this.updateInterface(playerId);
			
			const playerConfiguration = new PlayerConfiguration(playerId, this);
			playerConfiguration.addEvents();
		});

		return this;
	}

	updateInterface(playerId) {
		const card = document.getElementById(playerId);
		card.classList.remove('disabled');

		return this;
	}
}

new GameInterface(activePlayersId);