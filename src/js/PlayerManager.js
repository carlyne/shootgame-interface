class PlayerManager {
	constructor(activePlayersId, characterManager) {
		this._activePlayersId = activePlayersId;
		this._characterManager = characterManager;
		this._players = [];
	}

	get activePlayersId() {
		return this._activePlayersId;
	}

	get players() {
		return this._players;
	}

	get characterManager() {
		return this._characterManager;
	}

	set players(newPlayer) {
		this._players.push(newPlayer);
		return this;
	}

	addPlayers() {
		this.activePlayersId.forEach(playerId => {
			const player = new Player(playerId, this.characterManager);
			player.displayPlayer();
			this.players = player;
		});
		return this;
	}

	addPlayerEvents() {
		this._players.forEach(player => {
			player.confirmEvent();
			player.selectorEvent();
		})
		return this;
	}
}