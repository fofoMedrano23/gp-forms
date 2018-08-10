import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormioModule } from 'angular-formio';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation/navigation.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HomeComponent } from './home/home.component';
import { FormioGrid } from 'angular-formio/grid';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { FormulariosComponent } from './formularios/formularios.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LandingPageComponent,
    HomeComponent,
    FormulariosComponent
  ],
  imports: [
    FormioGrid,
    FormioModule,
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
