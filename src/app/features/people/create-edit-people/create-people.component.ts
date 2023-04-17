import { Component, OnInit } from '@angular/core';
import { PeopleDirective } from './people.utils';

@Component({
  selector: 'app-create-people',
  templateUrl: './create-edit-people.component.html',
  styleUrls: ['./create-edit-people.component.scss']
})
export class CreatePeopleComponent extends PeopleDirective {
}
