import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { ClickOutsideModule } from 'ng-click-outside';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { LanguageService } from '../../core/services/language.service';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';



@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [TopbarComponent, FooterComponent, SidebarComponent],
  imports: [
    CommonModule,
    TranslateModule,
    PerfectScrollbarModule,
    NgbDropdownModule,
    ClickOutsideModule,
    RouterModule
  ],
  exports: [TopbarComponent, FooterComponent, SidebarComponent],
  providers: [LanguageService]
})
export class SharedModule { }
