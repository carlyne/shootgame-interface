class Vue {
    constructor(playerId) {
        this.card = document.getElementById(playerId);
        this.confirmBtn = document.querySelector('#' + playerId + ' .confirm');
    }

    updateOnConfirm() {
        console.log('confirmed color');
    }

    displayPlayer() {
        this.card.classList.remove('disabled');
        return this;
    }
}