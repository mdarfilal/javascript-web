
/*
* Affiche le nombre de liens ainsi que la cible du premier et du dernier
*/
function infosLiens() {
    var liensElts = document.querySelectorAll("a");
    var nbrLientsElts = liensElts.length;
    console.log(nbrLientsElts);   
    
    if (nbrLientsElts > 0) {
        console.log(liensElts[0].href);
        // Ou bien console.log(liensElts[0].getAttribute("href"));
        console.log(liensElts[nbrLientsElts - 1].href);
    }
};

/*
* Vérifie si une classe est contenu dans un id
* @id : id dont on vérifie les classes
* @classe : classe recherchée
* return : true si la classe est trouvée dans l'id
* return : false si la class n'est pas trouvée
* return : message d'erreur si l'id n'existe pas
* Renvoie true si la classe est existante dans l'id
*/
function possede(id, classe) {
    var idInstrument = document.getElementById(id);
    if (idInstrument !== null) {
        var containClass = idInstrument.classList.contains(classe);
        console.log(containClass);
    } else {
        console.error("Aucun élément ne possède l'identifiant "+id);
    }
    
};

infosLiens();
possede("saxophone", "bois"); // Doit afficher true
possede("saxophone", "cuivre"); // Doit afficher false
possede("trompette", "cuivre"); // Doit afficher true
possede("contrebasse", "cordes"); // Doit afficher une erreur