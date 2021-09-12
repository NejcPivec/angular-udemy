import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Example 1
  signedIn$: BehaviorSubject<boolean>;
  constructor(private authService: AuthService) {
    this.signedIn$ = this.authService.signedIn$;
  }

  // Example 2:
  // signedIn: boolean = false;
  // ngOnInit() {
  //   this.authService.signedIn$.subscribe((signedin: boolean) => {
  //     this.signedIn = signedin;
  //   });
  // }

  ngOnInit() {
    this.authService.checkAuth().subscribe(() => {});
  }
}
