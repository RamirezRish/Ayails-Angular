import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Meet } from '../../interfaces/meet-interface';

@Component({
  selector: 'app-create-event',
  imports: [FormsModule],
  templateUrl: './create-event.component.html',
  styleUrl: './create-event.component.scss'
})
export class CreateEventComponent {

  scrumType:string = "";
  currentGoal:string = "";
  goals:string[]=[];
  format:string = "";
  access:string = "";
  time!:Date;
  duration!:number;



  addScrumType(){
    
  }
  addGoal(){
    this.goals.push(this.currentGoal);
  }
  
  createEvent(){
    if(
      this.scrumType && this.goals && this.format && this.access && this.time && this.duration
    ){
      let meet:Meet = {
        scrumType:this.scrumType,
        goals:this.goals,
        format:this.format,
        access:this.access,
        time:this.time,
        duration:this.duration
      };
      console.log(meet);
      
    }
  }
}
