// TODO : écrire la fonction compterElements

/*
* Permet de compter le nombre d'élément du selecteur css en paramètre
* @css : Le selecteur qui doit être compté
* return : le nombre d'élément pour ce css
*/
function compterElements(css) {
    return document.querySelectorAll(css).length;
};

console.log(compterElements("p")); // Doit afficher 4
console.log(compterElements(".adjectif")); // Doit afficher 3
console.log(compterElements("p .adjectif")); // Doit afficher 3
console.log(compterElements("p > .adjectif")); // Doit afficher 2