/* ------------------------------------------------
            LE CHAINAGE DE METHODE AVEC JQUERY
--------------------------------------------------*/

$(function(){

    // -- Je souhaite cacher toutes les div de ma page HTML
    console.log($('div'));
    $('div').hide('slow', function(){
        // -- Une fois que la méthode hide est terminée, mon alerte peut
        //s'executer.
        alert('Fin du Hide');
        // -- NB : La fonction s'executera pour l'ensemble des éléments
        // de notre sélecteur.

        $('div').css('background','yellow');
        $('div').css('color', 'red');

        //-- Je fais réapparaitre les div
        $('div').show('slow');
    });// fin de fonction anonyme;
    
    $('p').hide(1000).css('color','blue').css('font-size','20px').delay(2000).show(500);

    $('p').hide(1000).css({'color':'green', 'font-size':'20px'}).delay(2000).show(500);
});