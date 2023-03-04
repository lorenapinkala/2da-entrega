import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosRountingModule } from './alumnos-routing.module';
import { EditarAlumnoComponent } from './components/editar-alumno/editar-alumno.component';
import { DetalleAlumnoComponent } from './components/detalle-alumno/detalle-alumno.component';
import { AgregarAlumnoComponent } from './components/agregar-alumno/agregar-alumno.component';
import { AlumnoService } from './services/alumno.service';



@NgModule({
  declarations: [
    EditarAlumnoComponent,
    DetalleAlumnoComponent,
    AgregarAlumnoComponent
  ],
  imports: [
    CommonModule,
    AlumnosRountingModule
  ],
  providers: [
    AlumnoService
  ]
})
export class AlumnosModule { }
