import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { NotFoundComponent } from '../modules/shared/components/not-found/not-found.component';

const routes: Routes = [

  {
    path: 'video',
    loadChildren: '../modules/video/video.module#VideoModule'
  },
  {
    path: 'image',
    loadChildren: '../modules/image/image.module#ImageModule'
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingRoutingModule { }
