const activePlayersId =['player-one', 'player-two'];

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