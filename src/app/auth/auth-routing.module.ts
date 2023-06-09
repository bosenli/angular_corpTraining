import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from './auth.component';
import {LoginComponent} from './components/login/login.component';
import {RegistrationComponent} from './components/registration/registration.component';

const routes: Routes = [

  {
    path: '', component: AuthComponent,
    children: [
      {path:'', redirectTo:'/login', pathMatch: 'full'},
      { path: 'login', component: LoginComponent,
        // canActivate: [SchemasGuard],
        // canLoad: [SchemasGuard]
      },
      { path: 'registration', component: RegistrationComponent,
        // canActivate: [UmmdTablesGuard],
        // canLoad: [UmmdTablesGuard]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
