import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderModule } from '../components/header/header.module';
import { MainComponent } from './main.component';



@NgModule({
  declarations: [
    LandingPageComponent, 
    MainComponent
  ],
  imports: [
    CommonModule,
    HeaderModule
  ]
})
export class MainModule { }
