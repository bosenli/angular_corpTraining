
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {GmAppTitleModule} from '@gds/prime-ng/app-title';
import {GmButtonModule} from '@gds/prime-ng/button';
import {GmFormFieldModule} from '@gds/prime-ng/form-field';
import {GmStickyTableModule} from '@gds/prime-ng/sticky-table';
import {GmStickyTreeTableModule} from '@gds/prime-ng/sticky-tree-table';
import {GmTabMenuModule} from '@gds/prime-ng/tab-menu';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {DialogModule} from 'primeng/dialog';

import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {UsersService} from '../shared/services/users.service';
import {EditUserComponent} from './edit-user/edit-user.component';
import {UsersComponent} from './users.component';


@NgModule({
  declarations: [
    UsersComponent,
    EditUserComponent,
  ],
  imports: [
    GmStickyTreeTableModule,
    GmButtonModule,
    GmStickyTableModule,
    CommonModule,
    ToastModule,
    ConfirmDialogModule,
    GmFormFieldModule,
    FormsModule,
    DialogModule,
    GmTabMenuModule,
    ToolbarModule,
    GmAppTitleModule,

  ],
  providers: [MessageService]
})
export class UsersModule{ }
