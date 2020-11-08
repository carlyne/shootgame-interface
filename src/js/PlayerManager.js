class PlayerManager {
	constructor(activePlayersId) {
		this._activePlayersId = activePlayersId;
		this._players = [];
	}

	get activePlayersId() {
		return this._activePlayersId;
	}

	get players() {
		return this._players;
	}

	set players(newPlayer) {
		this._players.push(newPlayer);
		return this;
	}

	addPlayers() {
		this.activePlayersId.forEach(playerId => {
			const player = new Player(playerId);
			player.displayPlayer();
			this.players = player;
		});
		return this;
	}

	addPlayerEvents() {
		this._players.forEach(player => {
			console.log(player);
			player.addConfirm();
			player.addSelector();
		})
	}
}