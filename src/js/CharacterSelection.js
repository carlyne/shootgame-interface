class CharacterSelection {
    constructor() {
        this._charactersList = charactersList;
    }

    get charactersList() {
        return this._charactersList;
    }

    nextCharacter(id) {
        const character = this.charactersList.find(character => character.id === id + 1);

        if (character === undefined) {
            return this.charactersList[0];
        }

        return character;
    }

    prevCharacter(id) {
        const character = this.charactersList.find(character => character.id === id - 1);

        if (character === undefined) {
            return this.charactersList[this.charactersList.length - 1];
        }

        return character;
    }
}

new CharacterSelection();