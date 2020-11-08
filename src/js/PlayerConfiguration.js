class PlayerConfiguration extends Vue {
	constructor(playerId, characterSelection) {
		super(playerId);

		this.playerId = playerId;
        this.characterSelection = characterSelection;
		this._characterIndice = 0;

		this.updateVueMenu();
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
		this.confirmBtn.addEventListener('click', () => {
			const characterId = this.characterSelection.availableCharactersList[this.characterIndice].id;
			this.characterSelection.updateAvailableCharacters(characterId);

			this.updateVueBtn();
		})

		return this;
	}

	/**
	 * Ajoute des évenemnts de selection de personnages
	 * @returns {PlayerConfiguration}
	 */
	editCharacterEvents(){
		this.nextBtn.addEventListener('click', () => {
			const newCharacter = this.characterSelection.findNextCharacter(this.characterIndice + 1);
		    this.characterChange(newCharacter);
		})

		this.prevBtn.addEventListener('click', () => {
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
		this.cardBg.setAttribute('style', "background-image: url('" + newCharacter.img + "')");
		this.characterIndice = this.characterSelection.availableCharactersList.indexOf(newCharacter);
	}
}