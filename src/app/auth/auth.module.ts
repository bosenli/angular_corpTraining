import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {GmFormFieldModule} from '@gds/prime-ng/form-field';
import {GmTabMenuModule} from '@gds/prime-ng/tab-menu';
import {ButtonModule} from 'primeng/button';
import {DividerModule} from 'primeng/divider';
import {MessagesModule} from 'primeng/messages';
import {PasswordModule} from 'primeng/password';
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

    GmFormFieldModule,


    AuthRoutingModule,
    ButtonModule,
    FormsModule,
    PasswordModule,
    DividerModule,
    MessagesModule,
    CommonModule,
    //inside the auth module , not the app module to make it work
  ],
  providers:[]
})
export class AuthModule { }
