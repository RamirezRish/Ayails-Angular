import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Project } from '../../interfaces/project-interface';

@Component({
  selector: 'app-create-project',
  imports: [FormsModule],
  templateUrl: './create-project.component.html',
  styleUrl: './create-project.component.scss'
})
export class CreateProjectComponent {

  title:string ="";
  description:string ="";


  createProject(){
    if(this.title && this.description){
      let project:Project ={
        title:this.title,
        description:this.description
      }
      console.log(project);
      
    }


  }
}
