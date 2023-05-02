import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'primeng/accordion';
import {MenuModule} from 'primeng/menu';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {DialogModule} from 'primeng/dialog';
import {FileUploadModule} from 'primeng/fileupload'; 
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ToastModule} from 'primeng/toast';
import {PanelModule} from 'primeng/panel';

import { GmAppTitleModule } from '@gds/prime-ng/app-title';
import {GmNavbarModule} from '@gds/prime-ng/navigation-bar';
import {GmSideBarModule} from '@gds/prime-ng/side-bar';
import {GmSideNavModule} from '@gds/prime-ng/side-nav';
import {GmBreadcrumbModule} from '@gds/prime-ng/breadcrumb';
import {GmLinkModule} from '@gds/prime-ng/link';
import {GmTabMenuModule} from '@gds/prime-ng/tab-menu';
import {GmSpinnerModule} from '@gds/prime-ng/spinner';
import {GmStickyTableModule} from '@gds/prime-ng/sticky-table';
import {GmFormFieldModule} from '@gds/prime-ng/form-field';
import {GmButtonModule} from '@gds/prime-ng/button';
import {GmLoadingBlockModule} from '@gds/prime-ng/loading-block';





@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AccordionModule,
    MenuModule,
    GmAppTitleModule,
    GmNavbarModule,
    GmSideBarModule,
    GmSideNavModule,
    GmBreadcrumbModule,
    GmLinkModule,
    GmTabMenuModule,
    GmSpinnerModule,
    GmStickyTableModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    GmFormFieldModule,
    CalendarModule,
    GmButtonModule,
    DropdownModule,
    GmLoadingBlockModule,
    ProgressSpinnerModule,
    FileUploadModule,
    DialogModule,
    ConfirmDialogModule,
    ToastModule,
    PanelModule
  ],
  exports: [
    AccordionModule,
    GmAppTitleModule,
    GmNavbarModule,
    GmSideBarModule,
    GmSideNavModule,
    GmBreadcrumbModule,
    GmLinkModule,
    GmTabMenuModule,
    GmSpinnerModule,
    GmStickyTableModule,
    MenuModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    GmFormFieldModule,
    CalendarModule,
    GmButtonModule,
    DropdownModule,
    GmLoadingBlockModule,
    ProgressSpinnerModule,
    FileUploadModule,
    DialogModule,
    ConfirmDialogModule,
    ToastModule,
    PanelModule
  ]
})
export class PrimengModule {}
