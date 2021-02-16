import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css'],
})
export class OneComponent {
  @Output() greetEvent: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  onClick(): void {
    this.greetEvent.emit();
  }
}
