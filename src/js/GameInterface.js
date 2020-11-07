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

	/**
	 * Ajoute des événements à une liste de joueurs actifs
	 * @returns {GameInterface}
	 */
	addPlayerConfiguration() {
		this.activePlayersId.forEach(playerId => {
			const playerConfiguration = new PlayerConfiguration(playerId, this);
			playerConfiguration.addEvents();

			this.updateVue(playerId);
		});

		return this;
	}

	/**
	 * Met à jour l'affichage de l'élément html lié au joueur actif
	 * @param {String} playerId 
	 * @returns {GameInterface}
	 */
	updateVue(playerId) {
		const card = document.getElementById(playerId);
		card.classList.remove('disabled');

		return this;
	}
}

new GameInterface(activePlayersId);