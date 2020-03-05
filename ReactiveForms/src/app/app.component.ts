import { RegistrationService } from './registration.service';
import { PasswordValidator } from './shared/password.validator';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  FormArray
} from '@angular/forms';
import { forbiddenNameValidator } from './shared/username.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userRegistrationForm: FormGroup;
  errorMessage: string;

  constructor(
    private fb: FormBuilder,
    private registrationService: RegistrationService
  ) {}

  ngOnInit(): void {
    // this.userRegistrationForm = new FormGroup({
    //   username: new FormControl('Ramesh'),
    //   email: new FormControl('ramesh@test.com'),
    //   password: new FormControl(),
    //   confirmPassword: new FormControl()
    // });
    this.userRegistrationForm = this.fb.group(
      {
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            forbiddenNameValidator(/ramesh/)
          ]
        ],
        email: [''],
        subscribe: [false],
        password: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]],
        address: this.fb.group({
          city: [''],
          state: [''],
          postalCode: ['']
        }),
        alternateEmails: this.fb.array([])
      },
      { validator: PasswordValidator }
    );
    this.userRegistrationForm
      .get('subscribe')
      .valueChanges.subscribe(checkedValue => {
        const email = this.userRegistrationForm.get('email');
        if (checkedValue) {
          email.setValidators(Validators.required);
        } else {
          email.clearValidators();
        }
        email.updateValueAndValidity();
      });
  }
  // Useful to fill form values from service
  loadApiData(): void {
    // Here setValue method strictly follows FormGroup structure
    // this.userRegistrationForm.setValue({
    //   username: 'Ramesh',
    //   email: 'ramesh@test.com',
    //   password: '',
    //   confirmPassword: '',
    //   address: {
    //     city: 'Hyderabad',
    //     state: 'TS',
    //     postalCode: '50016'
    //   }
    // });

    this.userRegistrationForm.patchValue({
      username: 'Ramesh',
      email: 'ramesh@dev.com'
    });
  }
  get alternateEmails() {
    return this.userRegistrationForm.get('alternateEmails') as FormArray;
  }

  addAlternateEmail() {
    this.alternateEmails.push(this.fb.control(''));
  }
  onSubmit() {
    console.log(this.userRegistrationForm.value);
    this.registrationService
      .register(this.userRegistrationForm.value)
      .subscribe(
        response => console.log('Success!', response),
        error => (this.errorMessage = error)
      );
  }
}
