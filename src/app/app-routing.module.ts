import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonajesListComponent } from './components/personajes/personajes-list/personajes-list.component';
import { PersonajesDetailsComponent } from './components/personajes/personajes-details/personajes-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'people', pathMatch: 'full' },
  { path: 'people', component: PersonajesListComponent },
  { path: 'people/:id', component: PersonajesDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
