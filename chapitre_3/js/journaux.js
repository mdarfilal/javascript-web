/*
Exercice : construire une liste de journaux
*/

// Liste des journaux
var journaux = ["http://lemonde.fr", "http://lefigaro.fr", "http://liberation.fr"];

// TODO : ajouter la liste des journaux sur la page, dans la div "contenu"

journaux.forEach(function(journal) {
    var journalElt = document.createElement("a");
    journalElt.href = journal;
    journalElt.textContent = journal;
    document.getElementById("contenu").appendChild(journalElt);
    document.getElementById("contenu").appendChild(document.createElement("br"));
});

/*
journaux.forEach(function(journal) {
    document.getElementById("contenu").insertAdjacentHTML("beforeEnd", '<a href=' + journal + '>' + journal + '</a>');
    var brElt = document.createElement("br");
    document.getElementById("contenu").appendChild(brElt);
});

// Version correcteur
/*
for (var i = 0; i < journaux.length; i++) {
    var lienElt = document.createElement("a");
    lienElt.textContent = journaux[i];
    lienElt.href = journaux[i];
    // Ajoute un lien
    document.getElementById("contenu").appendChild(lienElt);
    // Ajoute une balise <br>
    document.getElementById("contenu").appendChild(document.createElement("br"));
}
*/