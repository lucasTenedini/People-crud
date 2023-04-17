import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListPeopleComponent } from './list-people/list-people.component';
import { CreatePeopleComponent } from './create-edit-people/create-people.component';
import { PeopleRoutingModule } from './people-routing.module';
import { PeopleService } from 'src/app/shared/services/people/people.service';
import { EditPeopleComponent } from './create-edit-people/edit-people.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { PeopleForm } from './create-edit-people/people.form';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    ListPeopleComponent,
    CreatePeopleComponent,
    EditPeopleComponent
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  providers: [PeopleService, PeopleForm],
})
export class PeopleModule { }
