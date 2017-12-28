/* ----------------------------------------
            LES SELECTEURS JQUERY
------------------------------------------*/

// -- Format : $('selecteur')
// -- En jQuery, tous les sélecteurs css sont disponibles

$(function(){
    // -- DOM ready !
    function l(e){
        console.log(e);
    }
    
    // -- Sélectionner les balises SPAN:

        // -- Version JS:
        l(document.getElementsByTagName('span'));

        // -- Version jQuery:
        l($('span'));

    // -- Selectionner mon Menu :
        // -- Version JS:
        l(document.getElementById('menu'));

        // -- Version jQuery:
        l($('#menu'));
    
    // -- Selectionner une Classe:
        // -- Version JS:
        l(document.getElementsByClassName('MaClasse'));
        // -- Version jQuery:
        l($('.MaClasse'));
    
    // -- Selectionner un Attribut

        // -- Version jQuery:
        l($("[href= 'http://google.fr']"));
});