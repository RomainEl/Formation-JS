import { Component, Input, OnInit } from '@angular/core';
import { Contact } from "../model/contact.interface";

@Component({
  selector: 'app-profil-contact',
  templateUrl: './profil-contact.component.html',
  styleUrls: ['./profil-contact.component.css']
})
export class ProfilContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  @Input() contact:Contact;
}
