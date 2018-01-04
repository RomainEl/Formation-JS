// -- Initialisation jQuery
$(() =>{

    // -- Les Flemmards.js
    function l(e){console.log(e)};

    // -- Je souhaite sélectionner toutes mes divs
    l($('div'));

    // -- Je souhaite sélectionner mon menu
    l($('nav'));

    // -- Je souhaite connaitre tous les éléments descendants directs(enfants) qui sont dans le menu
    l($('nav').children());

    // -- Je souhaite parmi ces enfants, uniquement les éléments "ul"
    l($('nav').children('ul'));

    // -- Je souhaite récupérer tous les éléments "li" de mon "ul"
    l($('nav').children('ul').find('li'));

    // -- Je souhaite récupérer uniquement le 2eme élément de mes "li"
    l($('nav').children('ul').find('li').eq(1));

    // -- Je souhaite connaitre le voisin immédiat de mon menu
    l($('nav').next());
    l($('nav').next().next()); // -- le voisin du voisin
    l($('nav').prev());        // -- le voisin d'avant

    // -- Les Parents
    l($('nav').parent());
});