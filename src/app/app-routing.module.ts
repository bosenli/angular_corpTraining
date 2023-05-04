import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from './auth/auth.component';
import {AuthModule} from './auth/auth.module';
import {LoginComponent} from './auth/components/login/login.component';
import {HomeComponent} from './home/home.component';
import {PartTypeComponent} from './part-type/part-type.component';

import {PartsComponent} from './parts/parts.component';
import {RegistrationComponent} from './auth/components/registration/registration.component';
import {UsersComponent} from './users/users.component';

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  //loadChildren is lazy load method return promise to improve performance
  // {path:'auth',  loadChildren: () => import('./auth/auth.module').then(m=>m.AuthModule)
  // },
  {path: 'auth', component: AuthComponent},
  {path: 'users', component: UsersComponent},
  {path: 'part-type', component: PartTypeComponent},
  {path:'parts',component: PartsComponent},





];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers:[]
})
export class AppRoutingModule { }
