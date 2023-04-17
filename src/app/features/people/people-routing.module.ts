import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePeopleComponent } from './create-edit-people/create-people.component';
import { ListPeopleComponent } from './list-people/list-people.component';
import { EditPeopleComponent } from './create-edit-people/edit-people.component';

const routes: Routes = [
  { path: 'create', component: CreatePeopleComponent },
  { path: 'edit/:id', component: EditPeopleComponent },
  { path: 'list', component: ListPeopleComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
