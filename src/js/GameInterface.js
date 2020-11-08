const activePlayersId = ['player-one', 'player-two'];

class GameInterface {
	constructor(activePlayersId) {
		this._activePlayersId = activePlayersId;
		this.characterSelection = new CharacterSelection();
		this.players = [];
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
		this.activePlayersId.forEach(playerId => {
			const playerConfiguration = new PlayerConfiguration(playerId, this.characterSelection, this);
			this.players.push({ "id" : playerId, "config": playerConfiguration });

			playerConfiguration.addEvents();
		});

		return this;
	}

	/**
	 * Met à jour l'affichage des autres joueurs
	 * @param {String} indice 
	 * @param {number} playerId 
	 */
	updatePlayersInterface(indice, playerId) {
		const playersToChange = this.players.filter(player => player.id !== playerId);

		playersToChange.forEach(player => {
			const playerConfig = player.config;

			if (playerConfig.characterIndice == indice ) {
				const newCharacter = playerConfig.characterSelection.findNextCharacter(indice);
				playerConfig.characterChange(newCharacter);
			}
		})
	}
}

new GameInterface(activePlayersId);