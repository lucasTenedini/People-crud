import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { People } from 'src/app/shared/interface/peoples.interface';
import { PeopleService } from 'src/app/shared/services/people/people.service';

@Component({
  selector: 'app-list-people',
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.scss']
})
export class ListPeopleComponent implements OnInit {
  peopleList!: People[];
  loading = false;
  constructor(
    private peopleService: PeopleService,
    private router: Router) { }

  ngOnInit(): void {
    this.getRequisition();
  }

  getRequisition(): void {
    this.loading = true
    this.peopleService.getPeople().subscribe((resp: People[]) => {
      this.peopleList = resp;
      this.loading = false;
    })
  }

  sendToEdit(id?: string): void {
    this.router.navigate(['people', 'edit', id]);
  }

  sendToCreate(): void {
    this.router.navigate(['people', 'create']);
  }

  deletePeople(id: string): void {
    this.peopleService.deletePeople(id).subscribe(resp => {
      this.getRequisition()
    });
  }

}
