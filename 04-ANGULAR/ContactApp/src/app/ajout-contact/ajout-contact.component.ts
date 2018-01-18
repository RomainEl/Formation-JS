import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Contact } from "../model/contact.interface";

@Component({
  selector: 'app-ajout-contact',
  templateUrl: './ajout-contact.component.html',
  styleUrls: ['./ajout-contact.component.css']
})
export class AjoutContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() unContactEstCree = new EventEmitter();

  nouveauContact = {};
  active: boolean = true;

  submitContact(){
    console.log(this.nouveauContact);
    this.unContactEstCree.emit({
      contact: this.nouveauContact
    })
    this.nouveauContact = {};
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }
}
