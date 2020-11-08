class Vue {
    constructor(playerId) {
        this.card = document.getElementById(playerId);
        this.cardBg = document.querySelector('#' + playerId + ' .card-body');
        this.confirmBtn = document.querySelector('#' + playerId + ' .confirm');
        this.nextBtn = document.querySelector('#' + playerId + ' .select-next');
        this.prevBtn = document.querySelector('#' + playerId + ' .select-prev');
        this.playerDisabled = false;
    }

    updateVueMenu() {
        this.card.classList.remove('disabled');
        return this;
    }

    updateVueBtn() {
        return this._updateConfirm()._updateEdit();
    }

    _updateConfirm() {
        let textBtn = (this.playerDisabled) ? 'Confirmer' : 'Annuler';
        this.confirmBtn.innerText = textBtn;

        this.playerDisabled = !this.playerDisabled;
        
        return this;
    }

    _updateEdit() {
        if (this.playerDisabled) {
            this.nextBtn.setAttribute('disabled', true);
            this.prevBtn.setAttribute('disabled', true);
           
       } else {
            this.nextBtn.removeAttribute('disabled');
            this.prevBtn.removeAttribute('disabled');
       }
        
       return this;
    }
}

new Vue();