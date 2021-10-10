import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface EmailSummary {
  id: string;
  subject: string;
  from: string;
}

interface Email {
  id: string;
  subject: string;
  text: string;
  to: string;
  from: string;
  html: string;
}

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  rootUrl: string = 'https://api.angular-email.com';
  constructor(private http: HttpClient) {}

  getEmails(): Observable<EmailSummary[]> {
    return this.http.get<EmailSummary[]>(`${this.rootUrl}/emails`);
  }

  getEmail(id: string): Observable<Email> {
    return this.http.get<Email>(`${this.rootUrl}/emails/${id}`);
  }
}
