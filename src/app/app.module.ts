import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from "./components/home/home.component";

import { RoutingRoutingModule } from "./routing/routing-routing.module";
import { SharedModule } from './modules/shared/shared.module';


// custom modules

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    RoutingRoutingModule,
    SharedModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
