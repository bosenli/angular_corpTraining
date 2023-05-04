import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {GmStickyTableModule} from '@gds/prime-ng/sticky-table';
import {ButtonModule} from 'primeng/button';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ToastModule} from 'primeng/toast';
import {PartTypeComponent} from './part-type.component';

@NgModule({
  declarations: [
    PartTypeComponent
  ],
  imports: [
    GmStickyTableModule,
    ButtonModule,
    CommonModule,
    ToastModule,
    ConfirmDialogModule

  ],
  exports: [
    PartTypeComponent,
  ],
})
export class PartTypeModule{ }
