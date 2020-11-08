const activePlayersId = ['player-one', 'player-two'];

class GameInterface {
	constructor(activePlayersId) {
		this._activePlayersId = activePlayersId;

		this.addPlayerConfiguration();
	}

	get activePlayersId() {
		return this._activePlayersId;
	}

	set activePlayersId(newActivePlayersId) {
		this._activePlayersId = newActivePlayersId;
		return this;
	}

	/**
	 * Ajoute des événements à une liste de joueurs actifs
	 * @returns {GameInterface}
	 */
	addPlayerConfiguration() {
		const characterSelection = new CharacterSelection();
		
		this.activePlayersId.forEach(playerId => {
			const playerConfiguration = new PlayerConfiguration(playerId, characterSelection);
			playerConfiguration.addEvents();
		});

		return this;
	}
}

new GameInterface(activePlayersId);