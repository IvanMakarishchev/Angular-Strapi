import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../shared/header/header.component';
import { SharedModule } from '../../shared/shared.module';
import { SliderComponent } from './components/slider/slider.component';
import { RecentActionsComponent } from './components/recent-actions/recent-actions.component';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { TopSliderComponent } from './components/top-slider/top-slider.component';



@NgModule({
  declarations: [
    MainComponent,
    SliderComponent,
    RecentActionsComponent,
    TopSliderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MainRoutingModule
  ],
})
export class MainModule { }
