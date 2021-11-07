import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent implements OnInit {
  submitted: boolean = false;
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    // password: ['', [Validators.required, Validators.minLength(8)]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm
      .get('email')
      ?.valueChanges.pipe(debounceTime(3000))
      .subscribe();
  }

  get loginFormControl() {
    return this.loginForm.controls;
  }

  onFormSubmit() {
    this.submitted = true;
    console.log(this.loginForm.value);
  }
}
