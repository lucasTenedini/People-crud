import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JobRoutingModule } from './jobs-routing.module';
import { PeopleService } from 'src/app/shared/services/people/people.service';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { ToastrModule } from 'ngx-toastr';
import { JobListComponent } from './job-list/job-list.component';


@NgModule({
  declarations: [
    JobListComponent
  ],
  imports: [
    CommonModule,
    JobRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  providers: [PeopleService],
})
export class JobsModule { }
