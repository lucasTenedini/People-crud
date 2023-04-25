import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Jobs } from 'src/app/shared/interface/jobs.interface';
import { JobsService } from 'src/app/shared/services/jobs/jobs.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {
  jobList!: Jobs[];
  loading = false;
  constructor(
    private jobService: JobsService,
    private router: Router) { }

  ngOnInit(): void {
    this.getRequisition();
  }

  getRequisition(): void {
    this.loading = true
    this.jobService.getList().subscribe((resp: Jobs[]) => {
      this.jobList = resp;
      this.loading = false;
    })
  }

  sendToEdit(id?: string): void {
    this.router.navigate(['job', 'edit', id]);
  }

  sendToCreate(): void {
    this.router.navigate(['job', 'create']);
  }

  deleteJob(id: string): void {
    this.jobService.deleteJob(id).subscribe(resp => {
      this.getRequisition()
    });
  }
}
