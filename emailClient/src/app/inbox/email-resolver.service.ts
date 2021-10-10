import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

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
export class EmailResolverService implements Resolve<Email> {
  constructor() {}

  resolve() {
    return {
      id: 'jfnjfnf',
      subject: 'mklfernfvfer',
      to: 'nkvfeonv',
      from: 'bvceijv',
      text: 'njvev',
      html: 'kvnefv',
    };
  }
}
