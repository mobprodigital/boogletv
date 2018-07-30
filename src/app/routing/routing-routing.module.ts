import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';

const routes: Routes = [
  {
    path : 'home',
    component : HomeComponent
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
