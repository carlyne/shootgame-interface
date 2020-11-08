class Character {
    constructor(character) {
        this._id = character.id;
        this.name = character.name;
        this._img = character.img;
        this.description = character.description;
        this._isAvailable = true;
    }

    get id() {
        return this._id;
    }

    get img() {
        return this._img;
    }

    get isAvailable() {
        return this._isAvailable;
    }

    set isAvailable(newIsAvailable) {
        this._isAvailable = newIsAvailable;
        return this;
    }
}

