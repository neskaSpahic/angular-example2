import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;
 
  constructor() { }

  ngOnInit() { //nesto kao konstruktor
    
      this.users = [
        {
            firstName: 'John',
            lastName: 'Doe',
            age: 38,
            address: {
                street: '50 Main st',
                city: 'Boston',
                state: 'MA'
            },
            
            isActive: true,
            registered: new Date('01/02/2018 02:30:00'),
            hide: true

             
        },
      
        {
          firstName: 'Kevin',
          lastName: 'Doe',
          age: 35,
          address: {
              street: '50 Main st',
              city: 'Boston',
              state: 'MA'
          },
         
          isActive: false,
          registered: new Date('04/03/2018 02:30:00'),
          hide: true
        },
    
        {
          firstName: 'Berbian',
          lastName: 'Doe',
          age: 34,
          address: {
              street: '50 Main st',
              city: 'Lynn',
              state: 'BE'
          },
          image: 'http://lorempixel.com/600/600/people/3',
          isActive: true,
          balance: 200,
          registered: new Date('01/04/2019 02:30:00'),
          hide: true
         }
        ];

        this.loaded = true;

  }

  addUser(user: User){
   this.users.push(user);
   }

   
// toggleHide(user: User){
//   user.hide = !user.hide;
// }
 


}
