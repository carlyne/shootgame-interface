class Vue {
    constructor(playerId) {
        this.card = document.getElementById(playerId);
        this.cardBg = document.querySelector('#' + playerId + ' .card-body');
        this.confirmBtn = document.querySelector('#' + playerId + ' .confirm');
        this.nextBtn = document.querySelector('#' + playerId + ' .select-next');
        this.prevBtn = document.querySelector('#' + playerId + ' .select-prev');
      }

    updateVue() {
        console.log(this.card);
    }
}

new Vue();