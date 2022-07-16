import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPipeComponent } from './components/main-pipe/main-pipe.component';
import { MainSubscribeComponent } from './components/main-subscribe/main-subscribe.component';

const routes: Routes = [
  {
    path: '',
    component: MainSubscribeComponent
  },
  {
    path: 'async-pipe',
    component: MainPipeComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}