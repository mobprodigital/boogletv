import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from "./components/home/home.component";
import { NotFoundComponent } from './components/not-found/not-found.component';

import { RoutingRoutingModule } from "./routing/routing-routing.module";
import { ImageSliderDirective } from './directives/image-slider/image-slider.directive';
import { VideoModule } from './modules/video/video.module';


// custom modules

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent,
    ImageSliderDirective
  ],
  imports: [
    BrowserModule,
    VideoModule,
    RoutingRoutingModule,
    VideoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
