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

	nextCharacter(characterId) {
		let newCharacter = {};

		for (let i = 0; i < this.characters.length; i++) {
			const character = this.characters[i];
			if (character.id >= characterId) {
				return newCharacter = character;
			}
		}

		if (!newCharacter.length) {
			return this.characters[0];
		}

		return newCharacter;
	}

	prevCharacter(characterId) {
		let newCharacter = {};

		for (let i = this.characters.length - 1; i >= 0; i--) {
			const character = this.characters[i];
			if (character.id <= characterId) {
				return newCharacter = character;
			}
		}

		if (!newCharacter.length) {
			return this.characters[this.characters.length - 1];
		}

		return newCharacter;
	}
	
	updateCharacters(playerCharacter) {
		const character = this.characters.find(c => c.id === playerCharacter.id);
		character.isAvailable = false;
		console.log(character);
	}
}