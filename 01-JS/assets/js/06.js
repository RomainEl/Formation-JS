/*----------------------------------------------
                LES FONCTIONS
----------------------------------------------*/

// -- Déclarer une fonction
// -- Cette fonction ne retourne aucune valeur

function ditBonjour() {
    /**
     * Lors de l'appel de cette fonction, les instructions ci-dessous seront executées...
     */
    alert("Bonjour !");
}

/**
 * Je vais appeler ma fonction "ditBonjour" et déclencer ses instructions.
 */
ditBonjour();

// -- Déclarer une fonction qui prend une variable en parametre
function Bonjour(Prenom, Nom){
    document.write("<p>Bonjour <strong>" + Prenom + " " + Nom + "</strong> ! <p>");
}

// -- Appeler / Utiliser une fonction avec des paramètres
Bonjour('Romain', 'ELIE');

/*----------------------------

EXERCICE:
Créez une fonction permettant d'effectuer l'addition de deux nombres 
passés en paramètre.
----------------------------*/

function Addition(nb1, nb2){
    return nb1 + nb2;
}

document.write("<p>" + Addition(10, 5) + "<p>" );