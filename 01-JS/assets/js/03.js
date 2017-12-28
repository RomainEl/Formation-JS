/* -----------------------
        LA CONCATENATION
-------------------------*/

var debutDePhrase       = "Aujourd'hui ";
var laDate              = new Date();
var suiteDePhrase       = ", sont présents : ";
var nombreDeStagiaires  = 18;
var finDePhrase         = " stagiares.<br>";

// -- Nous souhaitons maintenant, grace à la concaténation afficher 
// tout ce petit monde en un seul morceau !

document.write(debutDePhrase + laDate.getDate() + '/' +(laDate.getMonth() + 1) + '/' 
+ '/' + laDate.getFullYear() + suiteDePhrase + nombreDeStagiaires + finDePhrase);

/**
 * Exercice : Créer une concaténation à partir des éléments suivants :
 */

 var phrase1 = "Je m'appelle ";
 var phrase2 = "Romain et j'ai ";
 var age     = 30;
 var phrase3 = " ans !";

 document.write(phrase1 + phrase2 + age + phrase3);