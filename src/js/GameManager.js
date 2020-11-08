const activePlayersId = ['player-one', 'player-two'];

class GameManager {
	constructor(activePlayersId, charactersList) {
		this._activePlayersId = activePlayersId;
		this._charactersList = charactersList;

		this._addCharacterManager()._addPlayerManager();
	}

	get activePlayersId() {
		return this._activePlayersId;
	}

	get charactersList() {
		return this._charactersList;
	}

	set activePlayersId(newPlayersId) {
		this._activePlayersId = newPlayersId;
	}

	_addCharacterManager() {
		const characterManager = new CharacterManager(this.charactersList);
		characterManager.addCharacters();
		return this;
	}

	_addPlayerManager() {
		const playerManager = new PlayerManager(this.activePlayersId);
		playerManager.addPlayers().addPlayerEvents();

		return this;
	}
}

new GameManager(activePlayersId, charactersList);