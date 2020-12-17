class Perso extends ElementHtml{
    constructor($html) {
        super($html);
        this.$bulle=$html.find(".bulle");
        this.mots=[
            "Askip Yoda se tape la mère de Vador"
            ,"Presque froid le vide sidéral non ?"
            ,"Je suis ton père... Enfin je crois"
            ,"vous auriez pas vu passer mon sabre laser ?"
            ,"Comment on en est arrivé là ?"
            ,"Téma les drifts du vaisseau !"
            ,"que la force soit avec toi, mon cul oui !"
            ,"Je veux retourner sur ma planète moi !"
            ,"C'est bien gentil tout ça mais faut attaquer !"
            ,"ils sont vraiment en train de jouer avec l'étoile de la mort ?"
        ];
    }
    parle(blabla){
        let ici=this;
        this.$bulle.text(blabla);
        setTimeout(function(){
            ici.$bulle.text("");
        },1500);
    }

    /**
     * Renvoie un mot aléatoire
     * @returns {string}
     */
    get motAleatoire(){
        return this.mots[Math.floor(Math.random() * this.mots.length)];
    }

}