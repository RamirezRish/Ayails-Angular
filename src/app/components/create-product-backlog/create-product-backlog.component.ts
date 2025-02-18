import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Task } from '../../interfaces/task-interface';

@Component({
  selector: 'app-create-product-backlog',
  imports: [CommonModule],
  templateUrl: './create-product-backlog.component.html',
  styleUrl: './create-product-backlog.component.scss'
})
export class CreateProductBacklogComponent {

constructor(){
  this.goalsList = [
    "goal 1",
    "Goal 2",
    "goal 3"
  ]

  this.tasksList.push(
      {
        title:"First task",
        description: "This is the first task",
        acceptance_criteria:["Create a good and clean code"],
        dependency:["i dont know"],
        history_points:75,
        spring_assigned:1,
        date_creation: new Date(),
        time_limit: new Date("Febrero 25, 2025 00:00:00"),
        status: "pending",
        priority: "1"
      }
    )
  console.log(this.tasksList);
  
}

goalsList:string[]= []

tasksList:Task[]= []


}
