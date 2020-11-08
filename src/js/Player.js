class Player extends Vue {
    constructor(playerId) {
        super(playerId);

        this._id = playerId;
        this._character = {};
    }

    get id() {
        return this._id;
    }

    get character() {
        return this._character;
    }

    set character(newCharacter) {
        this._character = newCharacter;
        return this;
    }

    addConfirm() {
        this.confirmBtn.addEventListener('click', () => {
            console.log('confirm');
        })
    }

    addSelector() {
        console.log('selection');
    }
}