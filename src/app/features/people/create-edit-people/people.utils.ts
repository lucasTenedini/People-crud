import { Directive } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { State } from 'src/app/shared/interface/states.interface';
import { STATES } from 'src/app/shared/mock/states';
import { PeopleService } from 'src/app/shared/services/people/people.service';
import { PeopleForm } from './people.form';
import { People } from 'src/app/shared/interface/peoples.interface';
import { ToastrService } from 'ngx-toastr';

@Directive()
export class PeopleDirective {
  states: State[] = STATES
  peopleForm: FormGroup;
  peopleId: string = null;
  loading = false;

  constructor(
    private form: PeopleForm,
    private peopleService: PeopleService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService) {
    this.peopleForm = this.form.createForm()
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (!!params['id']) {
        this.loading = true;
        this.peopleService.getPeopleById(params['id']).subscribe(resp => {
          this.setEditRequestOnForm(resp)
          this.loading = false;
        },
        (err) => {
          this.toastr.error('Error');
          this.loading = false;
        })
      }
    });
  }

  submit(): void {
    if (this.peopleForm.invalid) {
      this.invalidarForm(this.peopleForm);
      return;
    }

    if (!this.peopleId) {
      this.peopleService.postPeople(this.peopleForm.value).subscribe(() => {
        this.clear();
        this.sendToList();
        this.toastr.success('People Registered');
      },
        (err) => {
          this.toastr.error('Error');
        });
    } else {
      this.peopleService.putPeople(this.peopleForm.value, this.peopleId).subscribe(() => {
        this.clear();
        this.sendToList();
        this.toastr.success('People Updated');
      },
        (err) => {
          this.toastr.error('Error');
        });
    }
  }

  invalidarForm(form: FormGroup): void {
    for (const control of Object.keys(form.controls)) {
      form.controls[control].markAsTouched();
    }
  }

  sendToList(): void {
    this.router.navigate(['people', 'list'])
  }

  setEditRequestOnForm(value: People): void {
    const controls = Object.keys(value);
    controls.forEach((control: string) => {
      if (control === '_id') {
        this.peopleId = value[control]
      } else {
        this.peopleForm.controls[control].setValue(value[(control as keyof People)])
      }
    })
  }

  clear(): void {
    this.peopleForm.reset();
    this.peopleId = null;
  }
}
