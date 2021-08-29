import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../interface/Card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() post: Card;

  constructor() {}

  ngOnInit(): void {}
}
