class PlayerConfiguration extends CharacterSelection {
	constructor(playerId, gameInterface) {
        super();

		this.playerId = playerId;
        this.gameInterface = gameInterface;
		this._characterId = 1;
    }
    
    get characterId() {
        return this._characterId;
    }

    set characterId(newCharacterId) {
        this._characterId = newCharacterId;
        return this;
    }

	/**
	 * Ajoute un événement de validation de personnage
	 * @returns {PlayerConfiguration}
	 */
	confirmPlayerEvent() {
		const addBtn = document.querySelector('#' + this.playerId + ' .add');

		addBtn.addEventListener('click', () => {
			this.gameInterface.confirmedCharacters = this.characterId;
			this.availableCharactersList = this.availableCharactersList.filter(character => character.id !== this.characterId);
		})

		return this;
	}

	/**
	 * Ajoute des évenemnts de selection de personnages
	 * @returns {PlayerConfiguration}
	 */
	editCharacterEvents(){
		const nextBtn = document.querySelector('#' + this.playerId + ' .select-next');
        const prevBtn = document.querySelector('#' + this.playerId + ' .select-prev');

		nextBtn.addEventListener('click', () => {
		  console.log(this._availableCharactersList);
		  const nextCharacter = this.nextCharacter(this.characterId);
		  this.characterChange(nextCharacter);
		})

		prevBtn.addEventListener('click', () => {
            const prevCharacter = this.prevCharacter(this.characterId);
		    this.characterChange(prevCharacter);
		})

		return this;
	};

	/**
	 * Liste des évenements attachés à un joueur
	 */
	addEvents() {
		return this.confirmPlayerEvent().editCharacterEvents();
	}

	/**
	 * Met à jour le nouveau personnage dans l'hmtl et son id dans PlayerConfiguration
	 * @param {Object} newCharacter 
	 */
	characterChange(newCharacter) {
		const vue = document.querySelector('#' + this.playerId + ' .card-body');
		vue.setAttribute('style', "background-image: url('" + newCharacter.img + "')");
		
		this.characterId = newCharacter.id;
	}
}