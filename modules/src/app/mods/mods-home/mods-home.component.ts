import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;
  items = [
    { title: 'Why is the sky blue', content: 'The sky is blue because it is' },
    { title: 'What does the fox say?', content: 'DADADADADADA' },
    { title: 'What is your name?', content: 'Ich bin Nejc!' },
  ];

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
