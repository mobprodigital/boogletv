import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { SingleVideoComponent } from '../modules/video/components/single-video/single-video.component';

const routes: Routes = [
  {
    path : 'home',
    component : HomeComponent
  },
  {
    path : 'video/single',
    component : SingleVideoComponent
  },
  {
    path : '',
    component : HomeComponent,
    pathMatch : 'full'
  },
  {
    path : '**',
    component : NotFoundComponent,
    pathMatch : 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingRoutingModule { }
