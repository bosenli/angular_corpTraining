import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ConfirmationService} from 'primeng/api';
import {RegistrationComponent} from './registration.component';

@NgModule({
  declarations: [
    RegistrationComponent],
  imports: [


  ],
  exports: [
    RegistrationComponent,
  ],
  providers:[ConfirmationService]
})
export class RegistrationModule{ }
