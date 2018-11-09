import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  };
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;
  @ViewChild('userForm') form: any;
 
  constructor() { }

  ngOnInit() { //nesto kao konstruktor
    
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

        this.loaded = true;

  }

  // addUser(){

  //  this.user.isActive = true;
  //  this.user.registered = new Date();
  //  this.users.unshift(this.user);

  //  this.user = {
  //   firstName: '',
  //   lastName: '',
  //   email: 'nesiba@gradient.ba',
  // };
  //  }

  //value je User object
   onSubmit({value, valid}: {value: User, valid: boolean}){
    if(!valid){
      console.log('Form is not valid');
    }else{
      value.isActive= true;
      value.registered=new Date();
      value.hide=true;
      this.users.unshift(value);

      this.form.reset();

    }
   }

  //  fireEvent(e){
  //   console.log(e.type);
  //    console.log(e.target.value);
  //  }

   
// toggleHide(user: User){
//   user.hide = !user.hide;
// }
 


}
