import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainSubscribeComponent } from './main-subscribe/main-subscribe.component';
import { MainPipeComponent } from './main-pipe/main-pipe.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    MainSubscribeComponent,
    MainPipeComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    MainSubscribeComponent
  ]
})
export class ComponentsModule { }
