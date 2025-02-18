import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEventComponent } from '../components/create-event/create-event.component';
import { CreateProductBacklogComponent } from '../components/create-product-backlog/create-product-backlog.component';
import { CreateProjectComponent } from '../components/create-project/create-project.component';
import { CreateTeamComponent } from '../components/create-team/create-team.component';
import { JoinTeamComponent } from '../components/join-team/join-team.component';
import { PersonalInfComponent } from '../components/personal-inf/personal-inf.component';
import { DevBldInterfaceComponent } from './dev-bld-interface/dev-bld-interface.component';

const routes: Routes = [
  {
      path: '',
      component: DevBldInterfaceComponent,
      children:[
        {path : 'ce'  , component:CreateEventComponent},
        {path : 'cpb' , component:CreateProductBacklogComponent},
        {path : 'cp'  , component:CreateProjectComponent},
        {path : 'ct'  , component:CreateTeamComponent},
        {path : 'jt'  , component:JoinTeamComponent},
        {path : 'cpi' , component:PersonalInfComponent}
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeveloperBuildRoutingModule { }
