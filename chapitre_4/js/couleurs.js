/*
Exercice : modifier les couleurs
*/

// Demande de saisir la couleur du texte et du fond
var couleurTexte = prompt("Saisissez la couleur du texte");
var couleurFond = prompt("Saisissez la couleur du fond");

// Récupère tous les div
var divElts = document.querySelectorAll("div");

// Parcours les divs et change la couleur et le fond
divElts.forEach(function(div){
    div.style.color = couleurTexte;
    div.style.backgroundColor = couleurFond;
});

/*
Version correcteur

var couleurTexte = prompt("Entrez la couleur du texte :");
var couleurFond = prompt("Entrez la couleur du fond :");

var divsElts = document.getElementsByTagName("div");
for (var i = 0; i < divsElts.length; i++) {
    divsElts[i].style.color = couleurTexte;
    divsElts[i].style.backgroundColor = couleurFond;
}

*/