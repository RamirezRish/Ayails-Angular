import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductBacklog } from '../../interfaces/product-backlog-interface';
import { Task } from '../../interfaces/task-interface';

@Component({
  selector: 'app-create-product-backlog',
  imports: [CommonModule, FormsModule],
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

  title:string = "";
  description:string = "";
  acceptance_criteria:string[] = [];
  currentAccCrit:string="";
  dependency:string[] = [];
  currentDep:string ="";
  history_points?:number;
  spring_assigned?:number;
  priority:string="";

  currentGoal:string = "";


  goalsList:string[]= []
  tasksList:Task[]= []

  addAccCrit(){
    this.acceptance_criteria.push(this.currentAccCrit);
    this.currentAccCrit = "";
  }
  addDep(){
    this.dependency.push(this.currentDep);
    this.currentDep = "";
  }
  addGoal(){
    this.goalsList.push(this.currentGoal);
    this.currentGoal = "";
  }

  addTask(){
    if(
      this.title && this.description && this.acceptance_criteria && this.dependency && this.history_points && this.spring_assigned && this.priority
    ){
      let task:Task = {
        title:this.title,
        description:this.description,
        acceptance_criteria:this.acceptance_criteria,
        dependency:this.dependency,
        history_points:this.history_points,
        spring_assigned:this.spring_assigned,
        date_creation: new Date(),
        priority:this.priority,
        status:"Pending"
      }
      this.tasksList.push(task);
      
      this.title = "";
      this.description = "";
      this.acceptance_criteria = [];
      this.currentAccCrit="";
      this.dependency= [];
      this.currentDep ="";
      this.history_points = undefined;
      this.spring_assigned = undefined;
      this.priority="";
    }
  }

  createPB(){
    if (this.tasksList && this.goalsList){
      let productBacklog:ProductBacklog = {
        goals:this.goalsList,
        tasks:this.tasksList
      }
    }
  }

}
