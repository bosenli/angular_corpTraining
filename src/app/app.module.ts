
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {ConfirmationService, MessageService} from 'primeng/api';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthRoutingModule} from './auth/auth-routing.module';
import {AuthModule} from './auth/auth.module';
import {HomeModule} from './home/home.module';
import {PartTypeModule} from './part-type/part-type.module';
import {PartsModule} from './parts/parts.module';
import {HeaderModule} from './shared/header/header.module';
import {PrimengModule} from './shared/modules/primeng/primeng.module';
import {UsersService} from './shared/services/users.service';
import {UsersModule} from './users/users.module';








@NgModule({
  declarations: [
    AppComponent,
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

    AuthModule,    //includes login and sign up components with routes


    RouterModule.forRoot([]),
  ],
  bootstrap: [AppComponent],
  providers: [MessageService, UsersService, ConfirmationService]
})

export class AppModule { }
