class Vue {
    constructor(playerId) {
        this.card = document.getElementById(playerId);
        this.cardBg = document.querySelector('#' + playerId + ' .card-body')
        this.confirmBtn = document.querySelector('#' + playerId + ' .confirm');
        this.nextBtn = document.querySelector('#' + playerId + ' .select-next');
        this.prevBtn = document.querySelector('#' + playerId + ' .select-prev');
    }

    updateOnConfirm() {
        console.log('confirmed color');
    }

    displayPlayer() {
        this.card.classList.remove('disabled');
        return this;
    }

    updateVueImg(img) {
        this.cardBg.setAttribute('style', "background-image: url('" + img + "')");
    }
}