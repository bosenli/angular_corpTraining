import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GmAppTitleModule} from '@gds/prime-ng/app-title';
import {GmNavbarModule} from '@gds/prime-ng/navigation-bar';
import {GmPageTitleModule} from '@gds/prime-ng/page-title';
import {GmUserMenuModule} from '@gds/prime-ng/user-menu';
import {ChipModule} from 'primeng/chip';
import {GmToolbarModule} from "@gds/prime-ng/toolbar";
import {GmHelpMenuModule} from "@gds/prime-ng/help-menu";
import {HeaderComponent} from './header/header.component';
import {PrimengModule} from './modules/primeng/primeng.module';
import {GmNavItem} from '@gds/prime-ng/api/gm-nav-item';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    GmToolbarModule,
    GmHelpMenuModule,
    GmUserMenuModule,
    GmPageTitleModule,
    ChipModule,
    GmAppTitleModule,
    GmNavbarModule,
    PrimengModule,

  ],
  exports: [
    HeaderComponent,
  ],
})
export class HeaderModule{ }
