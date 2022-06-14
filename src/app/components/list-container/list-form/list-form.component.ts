import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-list-form',
  templateUrl: './list-form.component.html',
  styleUrls: ['./list-form.component.scss'],
})
export class ListFormComponent {
  @Output() listLengthEvent = new EventEmitter<number>();

  // Range for input field
  MIN = 1;
  MAX = 100;

  lengthInput = new FormControl(1, [
    Validators.required,
    Validators.min(this.MIN),
    Validators.max(this.MAX),
  ]);

  constructor() {}

  /**
   * @description Edit user input if he doesn't write in the valid range MIN & MAX
   * @param {*} event
   */
  editInput(event: any) {
    if (event.target.value) {
      let num = Number(event.target.value);

      if (num < 1) {
        this.lengthInput.setValue(this.MIN);
      } else if (num > this.MAX) {
        this.lengthInput.setValue(this.MAX);
      }
    }
  }

  submitLength() {
    if (this.lengthInput.value) {
      this.listLengthEvent.emit(this.lengthInput.value);
    }
  }
}
