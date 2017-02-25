/* 
Activité 1
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
var listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];

// TODO : compléter ce fichier pour ajouter les liens à la page web
listeLiens.forEach( function(lien) {
    // Création de l'élément div par liens
    var lienDivElt = document.createElement("div");
    lienDivElt.setAttribute("class", "lien");
    
    // Création du lien
    var lienElt = document.createElement("a");
    lienElt.href = lien.url;
    lienElt.textContent = lien.titre;
    lienElt.style.color = "#428bca"
    
    // Ligne concernant l'auteur
    var auteurElt = document.createTextNode("Ajouter par : " + lien.auteur);
    
    // Ajout des éléments à la div
    lienDivElt.appendChild(lienElt);
    lienDivElt.appendChild(document.createTextNode(" "+lien.url));
    lienDivElt.appendChild(document.createElement("br"));
    lienDivElt.appendChild(auteurElt);
    
    // Ajout de la div au document
    document.getElementById("contenu").appendChild(lienDivElt);
});