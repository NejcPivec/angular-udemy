import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

interface SignUpCredentials {
  username: string;
  password: string;
  passwordConfirmation: string;
}

interface SignInCredentials {
  username: string;
  password: string;
}

interface SignUpResponse {
  username: string;
}

interface SignedInResponse {
  authenticated: boolean;
  username: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  rootUrl: string = 'https://api.angular-email.com';
  // Observable has $ at the end
  signedIn$ = new BehaviorSubject(false);

  constructor(private http: HttpClient) {}

  usernameAvailable(username: string) {
    return this.http.post<{ available: boolean }>(
      `${this.rootUrl}/auth/username`,
      {
        username,
      }
    );
  }

  signUp(credentials: SignUpCredentials) {
    return this.http
      .post<SignUpResponse>(`${this.rootUrl}/auth/signup`, credentials)
      .pipe(
        tap(() => {
          this.signedIn$.next(true);
        })
      );
  }

  checkAuth() {
    return this.http
      .get<SignedInResponse>(`${this.rootUrl}/auth/signedin`)
      .pipe(
        tap(({ authenticated }) => {
          this.signedIn$.next(authenticated);
        })
      );
  }

  signOut() {
    return this.http.post<any>(`${this.rootUrl}/auth/signout`, {});
  }

  signIn(credentials: SignInCredentials) {
    return this.http.post(`${this.rootUrl}/auth/signin`, credentials).pipe(
      tap(() => {
        this.signedIn$.next(true);
      })
    );
  }
}
