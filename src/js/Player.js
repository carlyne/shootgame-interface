class Player extends Vue {
    constructor(playerId, characterManager) {
        super(playerId);

        this._id = playerId;
        this._characterManager = characterManager;
        this._character = characterManager.charactersList[0];
    }

    get id() {
        return this._id;
    }

    get character() {
        return this._character;
    }

    get characterManager() {
        return this._characterManager;
    }

    set character(newCharacter) {
        this._character = newCharacter;
        return this;
    }

    confirmEvent() {
        this.confirmBtn.addEventListener('click', () => {
            console.log("confirm current character", this.character);
        })
    }

    selectorEvent() {
        this.nextBtn.addEventListener('click', () => {
            const nextCharacterId = this.character.id + 1;
            const newCharacter = this.characterManager.nextCharacter(nextCharacterId);
            this.changeCharacter(newCharacter);
        });

        this.prevBtn.addEventListener('click', () => {
            const prevCharacterId = this.character.id - 1;
            const newCharacter = this.characterManager.prevCharacter(prevCharacterId);
            this.changeCharacter(newCharacter);      
        })
    }

    changeCharacter(newCharacter) {
        this.updateVueImg(newCharacter.img);
        this.character = newCharacter;
        return this;
    }
}