import {NgModule} from '@angular/core';
import {GmTabMenuModule} from '@gds/prime-ng/tab-menu';
import {AuthRoutingModule} from './auth-routing.module';
import {AuthComponent} from './auth.component';
import {LoginComponent} from './components/login/login.component';
import {RegistrationComponent} from './components/registration/registration.component';

@NgModule({
  declarations: [
   AuthComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    GmTabMenuModule,
    AuthRoutingModule
  ],
  providers:[]
})
export class AuthModule { }
