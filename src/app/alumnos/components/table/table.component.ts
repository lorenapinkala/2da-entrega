import { Component, OnDestroy, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { AlumnoService } from '../../services/alumno.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnDestroy{

  alumnos!: Alumno[];
  dataSource!: MatTableDataSource<Alumno>;
  columnas: string[] = ['nombre', 'comision', 'materia', 'acciones'];
  suscripcion!: Subscription;
  constructor(
    private alumnoService: AlumnoService,
    //private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    
    this.dataSource = new MatTableDataSource<Alumno>();
    this.suscripcion = this.alumnoService.obtenerAlumnosObservable().subscribe((alumnos: Alumno[]) => {

      this.dataSource.data = alumnos;
      
    })
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }
}
