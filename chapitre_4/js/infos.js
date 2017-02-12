/*
Exercice : informations sur un élément
*/

// Récupération du style css de "contenu"
var contenuElt = getComputedStyle(document.getElementById("contenu"));
var hauteur = contenuElt.height;
var longueur = contenuElt.width;

// Création du paragraphe
var divElt = document.createElement("div");
divElt.id = "div";
divElt.textContent = "Informations sur l'élément";

// Création de la liste
var list = document.createElement("ul");
list.id = "list";

// Création de l'élément hauteur
var hauteurLi = document.createElement("li");
hauteurLi.textContent = "Hauteur : " + hauteur;

// Création de l'élément longueur
var longueurLi = document.createElement("li");
longueurLi.textContent = "Longueur : " + longueur;

// Ajout des deux éléments à la liste
list.appendChild(hauteurLi);
list.appendChild(longueurLi);

// Ajout du paragraphe au DOM
document.body.appendChild(divElt);

// Ajout de la liste au paragraphe
document.getElementById("div").appendChild(list);

/*
Version correcteur

var styleElement = getComputedStyle(document.getElementById("contenu"));
var listeElt = document.createElement("ul");
var longueurElt = document.createElement("li");
longueurElt.textContent = "Longueur : " + styleElement.width;
var hauteurElt = document.createElement("li");
hauteurElt.textContent = "Hauteur : " + styleElement.height;
listeElt.appendChild(hauteurElt);
listeElt.appendChild(longueurElt);
document.getElementById("infos").appendChild(document.createTextNode("Informations sur l'élément"));
document.getElementById("infos").appendChild(listeElt);

*/