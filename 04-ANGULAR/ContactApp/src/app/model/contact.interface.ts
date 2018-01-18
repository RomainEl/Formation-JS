/**
 * Création d'une Interface Contact.
 * Cela me permet de définir la forme/structure 
 * de mes objets contacts.
*/

export interface Contact {
    id?    : number;
    prenom: string;
    nom   : string;
    email?: string;
  }