import { Component, OnInit } from '@angular/core';
import { Mycontacts } from '../models/mycontacts';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.scss']
})
export class ContactManagerComponent implements OnInit {

  loading : boolean = false ;
  contacts : Mycontacts[] = [];
  errorMessage : string | null = null;

  constructor( private cantService : ContactService ) { }

  ngOnInit(): void {
  }

}
