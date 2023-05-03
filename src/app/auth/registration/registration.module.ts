import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {GmFormFieldModule} from '@gds/prime-ng/form-field';
import {ConfirmationService} from 'primeng/api';
import {PrimengModule} from '../../shared/modules/primeng/primeng.module';
import {RegistrationComponent} from './registration.component';

@NgModule({
  declarations: [
    RegistrationComponent],
  imports: [
    GmFormFieldModule,
    PrimengModule,
    FormsModule


  ],
  exports: [
    RegistrationComponent,
  ],
  providers:[ConfirmationService]
})
export class RegistrationModule{ }
