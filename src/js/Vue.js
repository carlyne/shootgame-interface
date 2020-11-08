class Vue {
    constructor(playerId) {
        this.card = document.getElementById(playerId);
        this.cardBg = document.querySelector('#' + playerId + ' .card-body');
        this.confirmBtn = document.querySelector('#' + playerId + ' .confirm');
        this.nextBtn = document.querySelector('#' + playerId + ' .select-next');
        this.prevBtn = document.querySelector('#' + playerId + ' .select-prev');

        this.playerDisabled = false;
    }

    /**
     * Met à jour l'interface du menu en général
     * @returns {Vue}
     */
    updateVueMenu() {
        this.card.classList.remove('disabled');
        return this;
    }

    /**
     * Met à jour les boutons de l'interface d'un joueur
     * @returns {Vue}
     */
    updateVueBtn() {
        this._updateConfirm()._updateEdit();
    }

    /**
     * Met à jour le bouton de confirmation de personnage
     * @returns {boolean}
     */
    _updateConfirm() {
        let textBtn = (this.playerDisabled) ? 'Confirmer' : 'Annuler';
        this.confirmBtn.innerText = textBtn;

        this.playerDisabled = !this.playerDisabled;
        
        return this;
    }

    /**
     * Met à jour les boutons de sélections de personnages
     * @returns {Vue}
     */
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