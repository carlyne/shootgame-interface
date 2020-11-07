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

	confirmPlayerEvent() {
		const addBtn = document.querySelector('#' + this.playerId + ' .add');

		addBtn.addEventListener('click', () => {
			this.gameInterface.confirmedCharacters = this.characterId;
		})

		return this;
	}

	editCharacterEvents(){
		const nextBtn = document.querySelector('#' + this.playerId + ' .select-next');
		const prevBtn = document.querySelector('#' + this.playerId + ' .select-prev');

		nextBtn.addEventListener('click', () => {
           const nextCharacter = this.nextCharacter(this.characterId);
           this.characterId = nextCharacter.id;

            const vue = document.querySelector('#' + this.playerId + ' .card-body');
            vue.setAttribute('style', "background-image: url('" + nextCharacter.img + "')");
		})

		prevBtn.addEventListener('click', () => {
			console.log('prev character');
		})

		return this;
	};

	addEvents() {
		return this.confirmPlayerEvent().editCharacterEvents();
	}
}