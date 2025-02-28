import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Team } from '../../interfaces/team-interface';

@Component({
  selector: 'app-create-team',
  imports: [CommonModule, FormsModule],
  templateUrl: './create-team.component.html',
  styleUrl: './create-team.component.scss'
})
export class CreateTeamComponent {


  ttlDisplay:boolean = false;
  expandCT:boolean = false;

  currentEmail:string = "";

  teamTitle:string ="";
  memberEmail:string[] = [];
  joinCode:string = "lknsdafJBNFK";

  members = [
    {
      name: 'John',
      description: 'Frontend Developer',
      id:1
    },
    {
      name: 'Jane',
      description: 'Backend Developer',
      id:2
    },
    {
      name: 'Bob',
      description: 'UI/UX Designer',
      id:3
    }
  ]

  addMember(){
    this.members.push({
      name: this.currentEmail,
      description: 'Developer',
      id:this.members.length+1
    })
    this.currentEmail = "";
  }

  createTeam(){
    if(this.teamTitle && this.members && this.joinCode){
      let team:Team = {
        title: this.teamTitle,
        idMembers: this.members.map(member => member.id),
        joinCode: this.joinCode
      }
      console.log(team);
      
    }
  }
}
