import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './alumnos/components/table/table.component';
import { MaterialModule } from './material.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/components/core.module';
import { InicioComponent } from './core/components/inicio/inicio.component';
import { AlumnosModule } from './alumnos/alumnos.module';



@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MaterialModule,
    SharedModule,
    CoreModule,
    AlumnosModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
