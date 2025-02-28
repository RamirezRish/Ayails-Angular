import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-create-team',
  imports: [CommonModule],
  templateUrl: './create-team.component.html',
  styleUrl: './create-team.component.scss'
})
export class CreateTeamComponent {


  ttlDisplay:boolean = false;
  expandCT:boolean = false;

  members = [
    {
      name: 'John',
      description: 'Frontend Developer'
    },
    {
      name: 'Jane',
      description: 'Backend Developer'
    },
    {
      name: 'Bob',
      description: 'UI/UX Designer'
    }
  ]

}
