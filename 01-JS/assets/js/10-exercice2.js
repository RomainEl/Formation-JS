/*
 I. Créer un Tableau 3D "PremierTrimestre" contenant la moyenne d'un étudiant pour plusieurs matières.

    Nous auront donc pour un étudiant, sa moyenne à plusieurs matières.
    
    Par exemple : Hugo LIEGEARD : [ Francais : 12, Math : 19, Physique 4], ... etc
    
    **** Vous allez créez au minimum 5 étudiants ****

II. Afficher sur la page (à l'aide de document.write) pour chaque étudiant, la liste (ul et li) de sa moyenne à chaque matière, puis sa moyenne générale. 
*/

var PremierTrimestre = [
    {
        prenom   : "Hugo",
        nom      : "LIEGEARD",
        matieres : {
                        Francais      : 12,
                        Mathematiques : 19,
                        Physiques     :  4,
                        Anglais       : 16,
        }
    },
    {
        prenom   : "Romain",
        nom      : "ELIE",
        matieres : {
                        Francais      : 15,
                        Mathematiques : 12,
                        Physiques     : 10,
                        Anglais       : 14,
                        Latin         : 17,
        }
    },
    {
        prenom   : "Olivier",
        nom      : "BRASSART",
        matieres : {
                        Francais      : 9,
                        Mathematiques : 17,
                        Physiques     : 11,
                        Anglais       : 12,
                        Histoire      : 16,
        }
    },
    {
        prenom   : "Thierry",
        nom      : "CARON",
        matieres : {
                        Francais      : 19,
                        Mathematiques : 14,
                        Physiques     : 11,
                        Anglais       : 17,
        }
    },
    {
        prenom   : "Toto",
        nom      : "LATETEA",
        matieres : {
                        Francais      : 3,
                        Mathematiques : 5,
                        Physiques     : 8,
                        Anglais       : 6,
        }
    }
];
 
console.log(PremierTrimestre);
/*
var i = 0;
var somme = 0;
for (i = 0; i <= PremierTrimestre.matieres[i]; i++){
    somme += matieres[i];
}
var moyenneG = (somme / i);*/

// -- lesFlemmards.js

function w(CeciEstUnParametreDeMaFonction){
    document.write(CeciEstUnParametreDeMaFonction);
}

function l(e){
    console.log(e);
}

l(PremierTrimestre);

w('<ol>');
// -- Je souhaite afficher la liste de mes étudiants.
for(let i = 0; i < PremierTrimestre.length; i++){
    // -- On récupère l'Objet Etudiant de l'Iteration
    let Etudiant = PremierTrimestre[i];
    // -- Apercu dans la console
    l(Etudiant);
    // -- Ici, mes variables seront remises à 0 à chaque nouvel étudiant(itération)
    var NombreDeMatiere = 0, SommeDesNotes = 0;
    // -- Afficher le Prénom et le Nom d'un Etudiant
    w('<li>');
        w(Etudiant.prenom + ' ' + Etudiant.nom);
        // -- Afficher la moyenne de l'étudiant aux différentes matières
        w('<ul>');
        for(let moyenne in Etudiant.matieres){
            l(moyenne);
            l(Etudiant.matieres[moyenne]);

            NombreDeMatiere++;
            SommeDesNotes += Etudiant.matieres[moyenne];
            w('<li>');
                w(moyenne + ' : ' + Etudiant.matieres[moyenne]);
            w('</li>');
        } // -- Fin de la boucle Moyenne
            w('<li>');
                w('<strong>Moyenne Générale : </strong>' + (SommeDesNotes / NombreDeMatiere).toFixed(2) );
            w('</li>');
        w('</ul>');
    w('</li>');
} // -- fin de la Boucle Etudiant
w('</ol>');