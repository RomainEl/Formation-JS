/*------------------------------------------------
                LES CONDITIONS
------------------------------------------------*/

var MajoriteLegaleFR = 18;

if(19 >= MajoriteLegaleFR){
    alert('Bievenue !');
}
// -- le else n'est pas OBLIGATOIRE.
else {
    alert('Google');
}

/* --------------------------------------------------
EXERCICE
Créer une fonction permettant de vérifier l'age d'un 
visiteur (prompt).S'il a la majorité légale, alors je
lui souhaite la bienvenue,sinon, je fais une redirection
sur Google après lui avoir signalé le soucis.
------------------------------------------------------*/
/*
function Verification(){
    let age = parseInt(prompt("Quel est votre age ?"))

    if (age < MajoriteLegaleFR){
        alert( "Tu n'as pas l'âge requis")
        document.location.href="https://www.google.fr/"
    }
    else{
        alert("Bienvenue !")
    }
}
Verification()
*/

/*---------------  CORRECTION -------------------- */

// --1. Déclarer la Majorité Légale
var MajoriteLegaleFR = 18;

// --2.Créer une fonction pour demander son age.
/**
 * Si l'age de l'utilisateur passé en paramètre est supérieur
 * ou égal à la majorité légale, alors la fonction retourne
 * vrai. Sinon elle retourne faux
 * @param {Int} age 
 * @return {Boolean}
 */
function verifierAge(age){
    if(age >= MajoriteLegaleFR){
        return true;
    }
    else {
        return false;
    }
}

// --3.Je demande à l'utilisateur son age
var age =parseInt(prompt ("Bonjour, Quel age avez-vous ?", "<Saisissez votre age>") );

// --4. Verification de l'age de l'utilisateur
if(verifierAge(age)){
        // --4a. J'affiche un message de bienvenue
        alert('Bienvenue sur mon site internet reservé pour les majeurs');
        document.write('0_0 !!!!')

}
else {
        // --4b. J'effectue une redirection
        document.location.href="http://lmgtfy.com/?q=majorit%C3%A9+l%C3%A9gale+en+france"
}


/*---------------------------------------------------------------------
                    LES OPERATEURS DE COMPARAISON

    L'opérateur de comparaison " == " signifie: Egal à
    Il permet de vérifier que 2 variables sont identiques.

    L'opérateur de comparaison " === " signifie: Strictement
    égal à. Il va comparer la valeur et le type de donnée.

    L'opérateur de comparaison " != " signifie: Différent de.

    L'opérateur de comparaison " !== " signifie: Strictement différent
    de.

----------------------------------------------------------------------*/


/*----------------------------------------------------------------------

                EXERCICE :
J'arrive sur un Espace sécurisé au moyen d'un email et
d'un mot de passe.

Je dois saisir mon email et mon  mot de passe afin d'être authentifié
sur le site.

En cas d'échec une alert m'informe du problème.
Si tout se passe bien, un message de bienvenue m'accueil.
--------------------------------------------------------------------*/

// -- BASE DE DONNEES
var email, mdp;

email = "wf3@hl-media.fr";
mdp = "wf3";
/*
function VerifierId(mail, pass){
    if (email == mail && mdp == pass){
        return true;
    }
    else{
        return false;
    }
}

var mail = prompt("Bonjour, quel est votre email","Saisissez votre email");
var pass = prompt("Entrez votre mdp", "Saisissez votre password"); 

if (VerifierId(mail, pass)){
    alert("Bienvenue !")
}
else{
    if (email != mail){
        alert("Adresse mail non valide !")
    }
    if (mdp != pass){
        alert("Mot de passe non valide !")
    }
}
*/

/*------------------ CORRECTION ------------------------------- */


/*
// --1. Demander à l'utilisateur son email
var emailUser = prompt("Bonjour, Quel est votre email ?", "Saisissez votre email");

// --2. Je vérifie si l'email saisi (emailUser) correspond à celui
// en base de donnée (email)
if(emailUser == email){
    // --2a.Tout est ok, je continue la vérification avec le mdp.

    // --2a1. Je demande à l'utilisateur son mot de passe
    var mdpUser = prompt("Votre mot de passe ?", "Saisissez votre Mot de Passe");
    
    // --2a2. Vérification du mot de passe
    if(mdpUser == mdp){
        alert("Bienvenue !");
    }
    else{
        alert("ATTENTION, nous n'avons pas reconnu votre mot de passe")
    }
}else{
    // --2b.Les emails ne correspondent pas...
    alert("ATTENTION, nous n'avons pas reconnu votre adresse email");
}
*/


// -- EXEMPLE AVEC LES FONCTIONS

/**
 * Vérifie si le couple Email/Mdp est correct.
 * @param {*String} emailUser 
 * @param {*String} mdpUser
 * @return {Boolean} 
 */

function monUtilisateurEstCorrect(emailUser, mdpUser){
    if(emailUser === email && mdpUser === mdp){
        return true;
    }
    else{
        return false;
    }
}

var emailUser = prompt("Bonjour, Quel est votre email ?", "Saisissez votre email");
var mdpUser = prompt("Votre mot de passe ?", "Saisissez votre Mot de Passe");

if(monUtilisateurEstCorrect(emailUser, mdpUser) ){
    alert("Bienvenue " + emailUser);
}
else{
    alert("ATTENTION, email/mot de passe incorrect");
}

/*-----------------------------------------------------------------
                LES OPERATEURS LOGIQUES
    
    L'opérateur  ET : && ou AND
    Si la combinaison emailUser et email correspond ET la 
    combinaison mdpUser et mdp correspond.
    
    --> Dans cette condition, les 2 doivent OBLIGATOIREMENT 
    correspondre pour être valdidés.
    Ex. if(emailUser == email && mdpUser == mdp) {...}

    L'opérateur OU : || ou OR
    Si la combinaison emailUser et email correspond ET/OU la 
    combinaison mdpUser et mdp correspond.

    --> Dans cette condition, au moins l'une des deux doit
    correspondre pour être validée.
    Ex. if(emailUser == email || mdpUser == mdp) {...}

    L'opérateur ! ou NOT
    L'opérateur  ! signifie le CONTRAIRE DE... ou NOT
    var monUtilisateurEstApprouve = true;
    if(!monUtilisateurEstApprouve) {...} : Mon utilisateur n'est
    pas approuvé.
    Revient à écrire:
    if(monUtilisateurEstApprouve == false) {...}

---------------------------------------------------------------*/


