import { Component } from '@angular/core';
import { PeopleDirective } from './people.utils';
@Component({
  selector: 'app-edit-people',
  templateUrl: './create-edit-people.component.html',
  styleUrls: ['./create-edit-people.component.scss']
})
export class EditPeopleComponent extends PeopleDirective {
}
