
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {GmButtonModule} from '@gds/prime-ng/button';
import {GmFormFieldModule} from '@gds/prime-ng/form-field';
import {GmStickyTableModule} from '@gds/prime-ng/sticky-table';
import {GmStickyTreeTableModule} from '@gds/prime-ng/sticky-tree-table';
import {MessageService} from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {DialogModule} from 'primeng/dialog';
import {ToastModule} from 'primeng/toast';

import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import {HomeModule} from './home/home.module';
import {PartTypeModule} from './part-type/part-type.module';
import {PartsModule} from './parts/parts.module';
import {RegistrationModule} from './auth/registration/registration.module';
import {HeaderModule} from './shared/header/header.module';
import {PrimengModule} from './shared/modules/primeng/primeng.module';
import {MyNewService} from './shared/services/myNew.service';
import {UsersService} from './shared/services/users.service';
import {EditUserComponent} from './users/edit-user/edit-user.component';
import {UsersComponent} from './users/users.component';
import {UsersModule} from './users/users.module';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { LogOutComponent } from './auth/log-out/log-out.component';






@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    LogOutComponent,
  ],
  imports: [

    BrowserModule, //to show in browser
    HttpClientModule, //to make http call works
    PrimengModule,
    BrowserAnimationsModule,//make use of User dialog animation box

    HomeModule,
    HeaderModule,
    UsersModule,
    PartTypeModule,
    PartsModule,
    AppRoutingModule,
    RegistrationModule,

    RouterModule.forRoot([]),
  ],
  bootstrap: [AppComponent],
  providers: [MessageService, UsersService, MyNewService]
})

export class AppModule { }
