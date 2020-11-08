class PlayerConfiguration {
	constructor(playerId, characterSelection) {
		this.playerId = playerId;
        this.characterSelection = characterSelection;
		this._characterIndice = 0;
    }
    
    get characterIndice() {
        return this._characterIndice;
    }

    set characterIndice(newCharacterIndice) {
        this._characterIndice = newCharacterIndice;
        return this;
    }

	/**
	 * Ajoute un événement de validation de personnage
	 * @returns {PlayerConfiguration}
	 */
	confirmPlayerEvent() {
		const addBtn = document.querySelector('#' + this.playerId + ' .add');
		
		addBtn.addEventListener('click', () => {
			const characterId = this.characterSelection.availableCharactersList[this.characterIndice].id;
			this.characterSelection.updateAvailableCharacters(characterId);
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
			const newCharacter = this.characterSelection.findNextCharacter(this.characterIndice + 1);
		    this.characterChange(newCharacter);
		})

		prevBtn.addEventListener('click', () => {
			const newCharacter = this.characterSelection.findPrevCharacter(this.characterIndice - 1);
			this.characterChange(newCharacter);
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
	 * Met à jour l'indice du personnage choisit et sa vue html
	 * @param {Object} newCharacter 
	 */
	characterChange(newCharacter) {
		const vue = document.querySelector('#' + this.playerId + ' .card-body');
		vue.setAttribute('style', "background-image: url('" + newCharacter.img + "')");

		this.characterIndice = this.characterSelection.availableCharactersList.indexOf(newCharacter);
	}
}