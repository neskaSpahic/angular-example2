import { Injectable } from '@angular/core';

import { User } from '../models/User';

import { Observable } from "rxjs";
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  users: User[];
  data: Observable<any>;


  constructor() { 

    this.users = [
      {
          firstName: 'John',
          lastName: 'Doe',
          email: 'nesiba@gradient.ba',
          isActive: true,
          registered: new Date('01/02/2018 02:30:00'),
          hide: true   
      },
    
      {
        firstName: 'Kevin',
        lastName: 'Doe',
        email: 'nesiba@gradient.ba',
        isActive: false,
        registered: new Date('04/03/2018 02:30:00'),
        hide: true
      },
  
      {
        firstName: 'Berbian',
        lastName: 'Doe',
        email: 'nesiba@gradient.ba',
        image: 'http://lorempixel.com/600/600/people/3',
        isActive: true,
        balance: 200,
        registered: new Date('01/04/2019 02:30:00'),
        hide: true
       }
      ];
  }


getData(){
  this.data = new Observable(observer => {
    
      observer.next(1);
      observer.next(1);
      observer.next(1);
      observer.next(1);

   

    setTimeout(() =>{
      observer.next(2);
    }, 2000);

    setTimeout(() =>{
      observer.next(3);
    }, 3000);

    setTimeout(() =>{
      observer.next({imee: 'neskic'});
    }, 4000);
  });

  return this.data;
}


  //metod se vracat value tipa User
  getUsers(): Observable<User[]>{
    console.log("Fetching  users from service..");
    return of(this.users);

  } 

  addUser(user: User){
      this.users.unshift(user);
  }
}
