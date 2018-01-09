/**
 * Pour déclarer une classe comme composant de notre application,
 * on importe "Component" via @angular/core
 */  
import { Component } from '@angular/core';
import { Contact } from './model/contact.interface';


interface ContactArray{
  [index: number] : Contact;
}

/**
 * @Component est ce qu'on appelle un décorateur.
 * Il va nous permettre de définir 3 paramètres essentiels à
 * notre application...
 */

@Component({
  /**
   * Le sélecteur (selector) détermine la manière dont le composant 
   * sera affiché dans un template. On écrira dans notre HTML:
   * <app-root></app-root>.
   * On doit OBLIGATOIREMENT avoir la balise d'ouverture et la 
   * balise de fermeture.
   */
  selector: 'app-root',
  /**
   * "templateUrl" ou "template" est la partie visible du composant.
   * C'est ce qui s'affiche à l'écran lorsque le composant est
   * utilisé.
   */
  templateUrl: './app.component.html',
  /**
   * La déclaration des styles avec "styleUrls" ou "styles"
   */
  styleUrls: ['./app.component.css']
})
/**
 * La classe contient les données du composant, mais aussi son
 * comportement.
 * Dans le contexte MVVM, notre classe correspond au ViewModel.
 */
export class AppComponent {
  // -- Déclaration d'une variable title
  title  = 'ContactApp';

  // -- Déclaration d'un Objet Contact
  contact:Contact = {
    id    : 1,
    prenom: "Romain",
    nom   : "ELIE",
    email : "elie_romain@hotmail.com"
  }

  Contacts:ContactArray = [
    {id:1, prenom:"Romain", nom:"ELIE", email:"elie_romain@hotmail.com"},
    {id:2, prenom:"Hugo", nom:"LIEGEARD"},
    {id:3, prenom:"Kristie", nom:"SOUKAI"}
  ]

  getNomComplet = (UnContact:Contact) =>{
    return UnContact.prenom + ' ' + UnContact.nom; 
  }

  // -- Choix de mon utilisateur actif
  contactActif;
  /**
    * Permet de définir un contact actif
    * @param {Contact} UnContact
    */
  choisirUnContact = (UnContact:Contact) =>{
    this.contactActif = UnContact;
    console.log(this.contactActif);
  }
}
