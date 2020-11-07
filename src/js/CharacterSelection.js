class CharacterSelection {
    constructor() {
        this._charactersList = charactersList;
    }

    get charactersList() {
        return this._charactersList;
    }

    /**
     * Trouve et retourne le personnage avec l'id suivant celui donné en paramètre
     * @param {number} characterId
     * @returns {Object}
     */
    nextCharacter(characterId) {
        const character = this.charactersList.find(character => character.id === characterId + 1);
        
        // Si il n'existe pas d'id supérieur, retourne le premier personnage de la liste
        if (character === undefined) {
            return this.charactersList[0];
        }

        return character;
    }

    /**
     * Trouve et retourne le personnage avec l'id précédant celui donné en paramètre
     * @param {number} characterId 
     * @returns {Object}
     */
    prevCharacter(characterId) {
        const character = this.charactersList.find(character => character.id === characterId - 1);

        // Si il n'existe pas d'id antérieur, retourne le dernier personnage de la liste
        if (character === undefined) {
            return this.charactersList[this.charactersList.length - 1];
        }

        return character;
    }
}

new CharacterSelection();