import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-inf',
  imports: [CommonModule],
  templateUrl: './personal-inf.component.html',
  styleUrl: './personal-inf.component.scss'
})
export class PersonalInfComponent {

  roles:string[] = [
    "Developer",
    "Scrum Master",
    "Product Owner"
  ]

}
