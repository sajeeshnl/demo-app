import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { SearchModule } from '../search/search.module';
import { ProfileImageModule } from '../profile-image/profile-image.module';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    SearchModule,
    ProfileImageModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
