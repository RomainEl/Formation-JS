/*----------------------------------------------------------------
                    LA DISPONIBILITE DU DOM
    
    A partir du moment ou mon DOM, c'est à dire l'ensemble de
    l'arborescence de ma page est complètement chargé; je 
    peux commencer à utiliser jQuery.

    Je vais mettre l'ensemble de mon code dans une fonction,
    cette fonction sera appelée AUTOMATIQUEMENT par jQuery
    lorsque le DOM sera entièrement défini.

    3 façons de faire:
---------------------------------------------------------------*/

// -- 1ere
jQuery(document).ready(function() {
    // -- Ici, le DOM est entièrement chargé, je peux procéder à mon code JS.
});

// -- 2eme
//  $ equivalent a jQuery en JS
$(document).ready(function(){
    // -- Ici, le DOM est entièrement chargé, je peux procéder à mon code JS.
});

// -- 3eme
$(function(){
    alert("J'ai 20 ans");

    // -- en JS :
    document.getElementById('TexteEnJQuery').innerHTML ="<strong>Mon texte en JS</strong>";

    // -- en jQuery, les sélecteurs sont les même qu'en CSS :
    $('#TexteEnJQuery').html('Mon Texte en JQ');
});