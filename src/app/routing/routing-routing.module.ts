import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { NotFoundComponent } from '../modules/shared/components/not-found/not-found.component';
import { AboutComponent } from '../components/about/about.component';
import { ContactUsComponent } from '../components/contact-us/contact-us.component';

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
    path: 'about-us',
    component: AboutComponent,
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
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
