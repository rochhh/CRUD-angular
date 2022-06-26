import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs';
import { Mycontacts } from '../models/mycontacts';
import { Mygroup } from '../models/mygroup';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private baseUrl  = `http://localhost:4000`

  constructor( private http : HttpClient) { }

  // Get All contacts 
  public getAllContacts () : Observable<Mycontacts> {
    let dataUrl : string = `${this.baseUrl}/contacts`
    return  this.http.get<Mycontacts>(dataUrl).pipe(catchError(this.handleError))
  }

  // Get a single contact 

  getContacts(contactId : string) : Observable<Mycontacts> {
    let dataUrl : string = `${this.baseUrl}/contacts/${contactId}`
    return this.http.get<Mycontacts>(dataUrl).pipe(
      catchError(this.handleError)
    )
  }

  // create contacts 

  createContacts( contact : Mycontacts ) : Observable<Mycontacts> {
    let dataUrl : string = `${this.baseUrl}/contacts`
    return this.http.post<Mycontacts>(dataUrl , contact ).pipe(
      catchError(this.handleError)
    ) 
  }

  // update contact

  updateContacts( contact : Mycontacts , contactId : string ) : Observable<Mycontacts> {
    let dataUrl : string = `${this.baseUrl}/contacts/${contactId}`
    return this.http.put<Mycontacts>(dataUrl , contact ).pipe(
      catchError(this.handleError)
    ) 
  }

  // delete contact 

  deleteContacts( contactId : string ) : Observable<Mycontacts> {
    let dataUrl : string = `${this.baseUrl}/contacts/${contactId}`
    return this.http.delete<Mycontacts>(dataUrl).pipe(
      catchError(this.handleError)
    ) 
  }

  // get all groups 

  getAllGroups () : Observable<Mygroup> {
    let dataUrl : string  = `${this.baseUrl}/contacts`
    return this.http.get<Mygroup>(dataUrl).pipe(
      catchError(this.handleError)
    )
  }

  // get single group 

  getGroups(contact : Mycontacts) : Observable<Mygroup> {
    let dataUrl : string = `${this.baseUrl}/groups/${contact.groupId}`
    return this.http.get<Mygroup>(dataUrl).pipe(
      catchError(this.handleError)
    )
  }

  

  // error handling 

  handleError( error: HttpErrorResponse ) :any {
    let errorMessage : string = '';

    if (error.error instanceof ErrorEvent ) {
      // client error 
      errorMessage = `Error : ${error.error.message} ` 
    } else {
      // server side error 
      errorMessage = `Error Status : ${error.status} \n ${error.message}`
    }
    return throwError(errorMessage)
  }

}
