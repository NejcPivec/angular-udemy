import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { MatchPassword } from '../validators/match-password';
import { UniqueUsername } from '../validators/unique-username';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  loading: boolean = false;

  authForm = new FormGroup(
    {
      username: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.pattern(/^[a-z0-9]+$/),
        ],
        [this.uniqueUsername.validate]
      ),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
      passwordConfirmation: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
    },
    { validators: [this.matchPassword.validate] }
  );

  constructor(
    private matchPassword: MatchPassword,
    private uniqueUsername: UniqueUsername,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log(this.loading);
  }

  onSubmit() {
    if (this.authForm.invalid) {
      return;
    }

    this.authService.signUp(this.authForm.value).subscribe({
      // Pending
      next: (response) => {
        this.loading = true;
        console.log('Next loading', this.loading);

        this.router.navigateByUrl('/inbox');
      },
      // Error
      error: (error) => {
        this.loading = false;
        console.log('Error loading', this.loading);
        if (!error.status) {
          this.authForm.setErrors({ noConnection: true });
        }
      },
      // Success
      complete: () => {
        this.loading = false;
        console.log('Complete loading', this.loading);
      },
    });
  }
}
