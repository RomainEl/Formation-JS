 // -- Déclarer un Tableau Indexé
 var monTableau = [];
 var myArray    = new Array;

 // -- Affecter des valeurs à un tableau indexé
 monTableau[0] = "Marie-Pierre";
 monTableau[1] = "Hugo";
 monTableau[2] = "Hamid";

 // -- Afficher le contenu de mon tableau dans la console
 console.log(monTableau[1]); // -- Hugo
 console.log(monTableau[2]); // -- Hamid
 console.log(monTableau);    // -- Afficher toutes les données.

 // -- Déclarer et Affecter des valeurs à un tableau indexé.
 var NosPrenoms = ["Marie-Pierre","Thomas","Olivier","Chloé","Riad","Hugo"];
 console.log(NosPrenoms);

 // --  Déclarer et Affecter des valeurs à un Objet
 // -- PAS DE TABLEAU ASSOCIATIF EN JS !!!!!

var Coordonnees = {
    prenom : "Hugo",
    nom    : "LIEGEARD",
    age    : 28
 };

 console.log(Coordonnees);
 console.log(typeof Coordonnees);

 // -- On crée 2 tableaux indexés
 var listeDePrenoms = ["Hugo","Marie-Pierre","Lounis","Romain"];
 var listeDeNoms = ["LIEGEARD","DUPOUX","DGADEN","ELIE"];

 // -- Je vais créer un tableau à 2 dimensions à partir de mes 2 tableaux précendents
 var Annuaire = [ listeDePrenoms, listeDeNoms ];
 console.log(Annuaire);

 // -- Hugo LIEGEARD
 console.log(Annuaire[0][0]);
 console.log(Annuaire[1][0]);

 // EXERCICE: Creer un Tableau 2 dimensions appelé "AnnuaireDesStagiaires" qui contiendra toutes les coor
 //données pour chaque stagiaire. Ex: Nom, Prenom, Tel...

 var AnnuairedeNoms    = ["BRASSART","CARON","ELIE"];
 var AnnuairedePrenoms = ["Olivier","Thierry","Romain"];
 var AnnuairedeTels    = ["0609088645","0768359015", "0784394378"];

 var AnnuaireDesStagiaires = [AnnuairedeNoms,AnnuairedePrenoms,AnnuairedeTels];
 console.log(AnnuaireDesStagiaires);

 // -- Correction :

var AnnuaireDesStagiaires2 = [
    { prenom : 'Hugo', nom : 'LIEGEARD', tel : '0783 97 15 15'},
    { prenom : 'Chloé', nom : 'THUILLIER', tel : 'XXXX XX XX XX'},
    { prenom : 'Anis', nom : 'CHAHBANI', tel : 'XXXX XX XX XX'}
 ];

 console.log(AnnuaireDesStagiaires2);
 console.log(AnnuaireDesStagiaires2[1]);
 console.log(AnnuaireDesStagiaires2[1]['prenom']);
 console.log(AnnuaireDesStagiaires2[1].prenom);

 // -- Exemple de Tableau 3D

var Contacts = [

    {
        prenom      : "Hugo",
        nom         : "LIEGEARD",
        coordonnees : {
                        email   : "wf3@hl-media.fr",
                        adresse : {
                                    ville   : "Ducos",
                                    cp      : 97224,
                                    region  : "Martinique",
                                    pays    : "France"
                                  },
                        tel     : {
                                    fixe    : "0596 108 328",
                                    fax     : "0596 108 632",
                                    port    : "0783 97 15 15"
                                  }
                      }
    },
    {
        prenom      : "Rodrigue",
        nom         : "NOUEL",
        coordonnees : {
                        email   : "wellcommunication.net@gmail.com",
                        adresse : {
                                    ville   : "Fort-de-France",
                                    cp      : 97200,
                                    region  : "Martinique",
                                    pays    : "France"
                                  },
                        tel     : {
                                    fixe    : "0596 XXX XXX",
                                    fax     : "0596 XX XX XX",
                                    port    : "0696 07 04 34"
                                  }
                      }
    }

];

console.log(Contacts);
console.log(Contacts[0].coordonnees.tel.port);
console.log(Contacts[1].coordonnees.tel.port);


/* ----------------------
    AJOUTER UN ELEMENT
-----------------------*/

var Couleurs =["Rouge","Jaune", "Vert"];

/*
    Si je souhaite  ajouter un élément dans mon tableau.
    Je fait appel à la fonction push() qui me renvoie le
    nombre d'éléments de mon tableau ;  que je peux récupérer
    facultativement dans une variable.
*/

console.log(Couleurs);
var nombreElementsDeMonTableau = Couleurs.push("Orange");
console.log(Couleurs);
console.log(nombreElementsDeMonTableau);

/**
 * NB : La fonction unshift() permet d'ajouter un ou plusieurs éléments
 * en début de tableau.
 */



 /* ----------------------------------------------
        RECUPERER ET SORTIR LE DERNIER ELEMENT
 -----------------------------------------------*/

/**
 * La fonction pop() me permet de supprimer le dernier élément de
 * mon tableau et d'en récupérer la valeur.
 * 
 * La même chose est possible avec le premier élément; en utilisant la
 * fonction shift()
 * 
 * NB : La fonction splice() vous permet de faire sortir un ou plusieurs
 * éléments de votre tableau
 */

 var monDernierElement = Couleurs.pop();
 console.log(monDernierElement);
 console.log(Couleurs);
