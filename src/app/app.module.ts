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
import { FormulariosViewComponent } from './views/formularios-view/formularios-view.component';
import { FormularioLabinComponent } from './formularios/formulario-labin/formulario-labin.component';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { MDBSpinningPreloader } from 'ng-uikit-pro-standard';
import { ReportesComponent } from './reportes/reportes.component';
import { SeccionReportesComponent } from './reportes/seccion-reportes/seccion-reportes.component';
import { ReporteLabinComponent } from './reportes/reporte-labin/reporte-labin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LandingPageComponent,
    HomeComponent,
    FormulariosComponent,
    FormulariosViewComponent,
    FormularioLabinComponent,
    ReportesComponent,
    SeccionReportesComponent,
    ReporteLabinComponent
  ],
  imports: [
    FormioGrid,
    FormioModule,
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModulesPro.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [MDBSpinningPreloader],
  bootstrap: [AppComponent]
})
export class AppModule { }
