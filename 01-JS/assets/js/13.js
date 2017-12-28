/*--------------------------------------------------------------------
                            LES EVENEMENTS

    Les évènements vont me permettre de déclencher une fonction,
    c'est-à-dire: une série d'instructions suite à une action de 
    mon utilisateur.

    OBJECTIF : Etre en mesure de capturer ces évènements afin 
    d'exécuter une fonction.

    Les Evenements : MOUSE (souris)

        click      : au clic sur un élément
        mouseenter : la souris passe au dessus de la zone qu'occupe un 
                    élément
        mouseleaver: la souris sort de cette zone
    
    Les Evenements : KEYBOARD (Clavier)

        Keydown    : une touche du clavier est enfoncée
        keyup      : une touche du clavier est relachée

    Les Evenements : WINDOW (Fenetre)

        scroll     : défilement de la fenêtre
        resize     : redimensionnnement de la fenêtre

    Les Evenements : FORM (Formulaires)
        
        change     : pour les éléments <input>, <select>
                    et <textarea>
        submit     : à l'envoi (soumission) du formulaire
        input      : pour capter la saisie d'un utilisateur
                    sur un champ <input>

####################### LES ECOUTEURS D'EVENEMENTS #################

    Pour attacher un évènement à un élément, autrement dit,
    pour déclarer un écouteur d'évènement qui se chargera de 
    déclencher une fonction, je vais utiliser la syntaxe suivante:


--------------------------------------------------------------------------*/

var p = document.getElementById('MonParagraphe');

    // --  Je souhaite que mon paragraphe soit rouge au clic de la souris
    
    // -- 1. Je défini une fonction chargée d'executer cette action
    function changeColorToRed(){
        p.style.color = "red";
    }

    p.addEventListener('click', changeColorToRed);


/*---------------------------------------------------------------------
                    EXERCICE PRATIQUE
    A l'aide de javascript, créez un champ "input" type text avec
    un ID unique. Afficher ensuite dans une alerte, la saisie de
    l'utilisateur
---------------------------------------------------------------------*/

// -- Creation du champ Input
var input = document.createElement('input');

// -- Attribution d'un Attribut
input.setAttribute('type','text');
input.setAttribute('placeholder', 'Saisissez un contenu...');

// -- Attribution d'un id
input.id = 'MonInput';
document.body.appendChild(input);

// ----------------------------
function voirLaSaisieDeMonInput() {
    alert(input.value);
}

input.addEventListener('change', voirLaSaisieDeMonInput);