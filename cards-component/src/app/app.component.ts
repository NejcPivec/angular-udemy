import { Component } from '@angular/core';
import { Card } from './interface/Card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts: Card[] = [
    {
      title: 'Neat tree',
      imageUrl: 'assets/tree.jpeg',
      username: 'nature',
      content: 'I saw this neat tree today.',
    },
    {
      title: 'Snowy mountain',
      imageUrl: 'assets/mountain.jpeg',
      username: 'mountainLover',
      content: 'I saw this snowy mountain.',
    },
    {
      title: 'Mountain biking',
      imageUrl: 'assets/biking.jpeg',
      username: 'bikeMaster',
      content: 'I did some biking today.',
    },
  ];
}
