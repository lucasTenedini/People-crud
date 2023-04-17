import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/shared/services/login/login.service';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss']
})
export class SingInComponent implements OnInit {
  singInForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router) {
    this.singInForm = this.createForm();
  }

  public createForm(): FormGroup {
    return this.formBuilder.group(
      {
        userName: this.formBuilder.control(null, [Validators.required]),
        password: this.formBuilder.control(null, [
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(8),
        ]),
      },
    );
  }

  ngOnInit(): void {
  }

  submit() {
    if (this.singInForm.invalid) {
      this.invalidarForm(this.singInForm);
      return;
    }

    this.loginService.setToken(this.singInForm.get('userName').value).subscribe(() => {
      this.clear()
      this.sendToHome()
    });
  }

  clear() {
    this.singInForm.reset()
  }

  invalidarForm(form: FormGroup): void {
    for (const control of Object.keys(form.controls)) {
      form.controls[control].markAsTouched();
    }
  }

  sendToHome(): void {
    this.router.navigate(['home'])
  }
}
