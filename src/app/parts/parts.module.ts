
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {GmButtonModule} from '@gds/prime-ng/button';
import {GmFormFieldModule} from '@gds/prime-ng/form-field';
import {GmStickyTableModule} from '@gds/prime-ng/sticky-table';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import {ToastModule} from 'primeng/toast';
import {PartsComponent} from './parts.component';
import { EditPartsComponent } from './edit-parts/edit-parts.component';

@NgModule({
  declarations: [
    PartsComponent,
    EditPartsComponent
  ],
  imports: [
    GmStickyTableModule,
    CommonModule,
    GmButtonModule,
    GmFormFieldModule,
    DialogModule,
    FormsModule,
    DropdownModule,
    ConfirmDialogModule,
    ToastModule,
    //added this for form

  ],
  exports: [
    PartsComponent,
  ],
})
export class PartsModule{ }
