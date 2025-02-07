import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path:'',
        component:AppComponent
    },
    {
        path:'login',
        loadChildren:() =>
            import('./login/login.module').then(m => m.LoginModule)
    }
];
