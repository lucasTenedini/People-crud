import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable()
export class PeopleForm {
  constructor(private formBuilder: FormBuilder) { }


  public createForm(): FormGroup {
    return this.formBuilder.group(
      {
        name: this.formBuilder.control(null, [Validators.required]),
        lastName: this.formBuilder.control(null, [Validators.required]),
        email: this.formBuilder.control(null, [
          Validators.required,
          Validators.maxLength(100),
          this.patternValidator(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, { isEmail: true }),

        ]),
        phone: this.formBuilder.control(null, [
          Validators.required,
          Validators.maxLength(20),
        ]),
        password: this.formBuilder.control(null, [
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(8),
        ]),
        confirmPassword: this.formBuilder.control(null, [
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(8),
        ]),
        city: this.formBuilder.control(null, [
          Validators.required,
          Validators.maxLength(100),
        ]),
        state: this.formBuilder.control(null, [
          Validators.required,
          Validators.maxLength(100),
        ]),
        profession: this.formBuilder.control(null, [
          Validators.required,
          Validators.maxLength(100),
        ]),
      },
    );
  }

  //Custom validator with regExp
  patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl): any => {
      if (!control.value) {
        return null;
      }
      const valid = regex.test(control.value);
      return valid ? null : error;
    };
  }
}
