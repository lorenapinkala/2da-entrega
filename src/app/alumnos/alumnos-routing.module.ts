import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditarAlumnoComponent } from './components/editar-alumno/editar-alumno.component';
import { TableComponent } from './components/table/table.component';


const routes: Routes = [
    {
        path: 'alumnos', children: [
            { path: 'listar', component: TableComponent },
            { path: 'agregar', component: EditarAlumnoComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AlumnosRountingModule { }