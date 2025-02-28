import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../interfaces/user-interface';

@Component({
  selector: 'app-personal-inf',
  imports: [CommonModule, FormsModule],
  templateUrl: './personal-inf.component.html',
  styleUrl: './personal-inf.component.scss'
})
export class PersonalInfComponent {

  roleList:string[] = [
    "Developer",
    "Scrum Master",
    "Product Owner"
  ]

  name:string = "";
  lastname:string = "";
  roles:string[] = [];

  addInfo(){
    this.userMock.name = this.name;
    this.userMock.lastname = this.lastname;
    this.userMock.roles = this.roles;
    console.log(this.userMock);
  }

  addRole(role:string){
    if(!this.roles.includes(role)){
      this.roles.push(role);
    }
    console.log(this.userMock);
    
  }

  userMock:User = {
    email: "john@gmail.com",
    username: "john",
    password: "john_1234"
  }
}
