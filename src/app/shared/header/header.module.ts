import {NgModule} from '@angular/core';
import {GmAppTitleModule} from '@gds/prime-ng/app-title';
import {GmNavbarModule} from '@gds/prime-ng/navigation-bar';
import {GmToolbarModule} from '@gds/prime-ng/toolbar';
import {GmUserMenuModule} from '@gds/prime-ng/user-menu';
import {ChipModule} from 'primeng/chip';
import {HeaderComponent} from './header.component';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    GmToolbarModule,
    GmAppTitleModule,
    GmNavbarModule,
    ChipModule,
    GmUserMenuModule,

  ],
  exports: [
    HeaderComponent,
  ],
})
export class HeaderModule{ }
