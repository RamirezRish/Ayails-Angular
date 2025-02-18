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
    },
    {
        path:'dev-build',
        loadChildren:() =>
            import('./developer-build/developer-build.module').then(m => m.DeveloperBuildModule)
    }
];
