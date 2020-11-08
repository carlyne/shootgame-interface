class CharacterManager {
	constructor(charactersList) {
		this._charactersList = charactersList;
		this._characters = [];
    }
    
    get charactersList() {
		return this._charactersList;
	}

	get characters() {
		return this._characters;
	}

	set characters(newCharacter) {
		this._characters.push(newCharacter);
		return this;
	}

	addCharacters() {
		this.charactersList.forEach(character => {
			const newCharacter = new Character(character);
			this.characters = newCharacter;
		});
	}
    
}