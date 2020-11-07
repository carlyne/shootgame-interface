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
        const vue = document.querySelector('#' + this.playerId + ' .card-body');

		nextBtn.addEventListener('click', () => {
           const nextCharacter = this.nextCharacter(this.characterId);
           this.characterId = nextCharacter.id;

           vue.setAttribute('style', "background-image: url('" + nextCharacter.img + "')");
		})

		prevBtn.addEventListener('click', () => {
            const prevCharacter = this.prevCharacter(this.characterId);
            this.characterId = prevCharacter.id;
 
            vue.setAttribute('style', "background-image: url('" + prevCharacter.img + "')");
		})

		return this;
	};

	/**
	 * List des évenements attachés à un joeur
	 */
	addEvents() {
		return this.confirmPlayerEvent().editCharacterEvents();
	}
}