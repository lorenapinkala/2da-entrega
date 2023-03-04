import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './alumnos/components/table/table.component';
import { InicioComponent } from './core/components/inicio/inicio.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';


const routes: Routes = [
  //{ path: 'table', component: TableComponent },
  { path: 'inicio', component: InicioComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
