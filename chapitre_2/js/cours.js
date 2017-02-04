
// Renvoie "Merveilles du monde antique" 2 enfants du sixième noeud
log("Affiche le deuxième enfants du sixième noeud");
console.log(document.body.childNodes[5].childNodes[1]);

// Selection d'un élément par sa balise : getElementsByTagName
log("Affiche le premier titre h2 et leur nombre");
var titresElts = document.getElementsByTagName("h2"); // Tous les titres h2
console.log(titresElts[0]); // Affiche le premier titre h2
console.log(titresElts.length); // Affiche 3

function log(titre) {
    console.log("###################################################");
    console.log("### "+ titre +" ###");
    console.log("###################################################");
};

// Selection d'un élément par sa class : getElementsByClassName
// Tous les éléments ayant la classe "merveilles"
log("Affiche les éléments ayant la classe merveilles");
var merveillesElts = document.getElementsByClassName("merveilles");
for (var i = 0; i < merveillesElts.length; i++) {
    console.log(merveillesElts[i]);
}

// Selection d'un élément par son id : getElementById
// Elément portant l'identifiant "nouvelles"
log("Affiche l'élément ayant l'id nouvelles");
console.log(document.getElementById("nouvelles"));

//------------------------------------------------------------------------//
//------------------------------------------------------------------------//

log("querySelectorAll");
// Rechercher des éléments à partir d'un sélecteur CSS : querySelectorAll
// Tous les paragraphes
console.log(document.querySelectorAll("p").length); // Affiche 3

// Tous les paragraphes à l'intérieur de l'élément identifié par "contenu"
console.log(document.querySelectorAll("#contenu p").length); // Affiche 2

// Tous les éléments ayant la classe "existe"
console.log(document.querySelectorAll(".existe").length); // Affiche 8

// Tous les éléments fils de l'élément identifié par "antiques" ayant la classe "existe"
console.log(document.querySelectorAll("#antiques > .existe").length); // Affiche 1

log("querySelector");

// Identique à querySelectorAll, mais renvoie seulement le premier élément
// Le premier paragraphe
console.log(document.querySelector("p"));

//------------------------------------------------------------------------//
//------------------------------------------------------------------------//

log("Contenu de l'élément qui a l'id contenu");
// Le contenu HTML de l'élément identifié par "contenu"
console.log(document.getElementById("contenu").innerHTML);

log("Contenu textuel (sans balises) de l'élément qui a l'id contenu");
// Le contenu textuel de l'élément identifié par "contenu"
console.log(document.getElementById("contenu").textContent);

log("Récupère l'attribut href du premier lien");
// L'attribut href du premier lien
console.log(document.querySelector("a").getAttribute("href"));

// Pour id value et href on peut recupérer directement la valeur
// L'identifiant de la première liste
console.log(document.querySelector("ul").id);

// L'attribut href du premier lien
console.log(document.querySelector("a").href);

log("Vérification de la possession d'un attribut");
if (document.querySelector("a").hasAttribute("target")) {
    console.log("Le premier lien possède l'attribut target");
} else {
    console.log("Le premier lien ne possède pas l'attribut target");
}

log("La liste des classes d'un élément");
// Liste des classes de l'élément identifié par "antiques"
var classes = document.getElementById("antiques").classList;
console.log(classes.length); // Affiche 1 : l'élément possède une seule classe
console.log(classes[0]); // Affiche "merveilles"

log("Tester la présence d'une classe d'un élément");
if (document.getElementById("antiques").classList.contains("merveille")) {
    console.log("L'élément identifié par antiques possède la classe merveille");
} else {
    console.log("L'élément identifié par antiques ne possède pas la classe merveille");
}