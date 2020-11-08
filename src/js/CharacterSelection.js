class CharacterSelection {
    constructor() {
        this._charactersList = charactersList;
        this._availableCharactersList = charactersList;
        this._selectedCharacters = [];
    }

    get charactersList() {
        return this._charactersList;
    }

    get selectedCharacters() {
        return this._selectedCharacters;
    }

    get availableCharactersList() {
        return this._availableCharactersList;
    }

    set availableCharactersList(newAvailableCharactersList) {
        this._availableCharactersList = newAvailableCharactersList;
        return this;
    }

    set selectedCharacters(newSelectedCharacters) {
        this._selectedCharacters.push(newSelectedCharacters);
    }
    
    /**
     * Retourne un personnage supérieur à l'indice donné
     * @param {number} characterIndice 
     * @returns {Object}
     */
    findNextCharacter(characterIndice) {        
        let character = {};

        for (let i = 0; i < this.availableCharactersList.length; i++) {
            if (i >= characterIndice) {
                return character = this.availableCharactersList[i];
            }
         }
        
        // Si l'id n'est pas valable, retourne le premier personnage de la liste
        if (!character.length) {
            return this.availableCharactersList[0];
        } 

        return character;
    }

    /**
     * Retrouve un personnage anterieur à l'indice donné
     * @param {number} characterIndice 
     * @returns {Object}
     */
    findPrevCharacter(characterIndice) {
        let character = {};

        for (let i = this.availableCharactersList.length - 1; i >= 0; i--) {
           if (i <= characterIndice) {
               return character = this.availableCharactersList[i];
           }
        }
        
        // Si l'id n'est pas valable, retourne le dernier personnage de la liste
        if (!character.length) {
            return this.availableCharactersList[this.availableCharactersList.length - 1];
        } 

        return character;
    }

    /**
     * Met à jour la liste des personnages disponibles
     * @param {number} characterId 
     */
    updateAvailableCharacters(characterId) {
        const indice = this.selectedCharacters.indexOf(characterId);

        if (indice !== -1) {
            this.selectedCharacters.splice(indice, 1);

        } else {
            this.selectedCharacters = characterId;
        }

        const newAvailableCharacters = this.charactersList.filter(character => !this.selectedCharacters.includes(character.id));
        return this.availableCharactersList = newAvailableCharacters;
    }
}