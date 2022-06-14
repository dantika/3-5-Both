import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-list-form',
  templateUrl: './list-form.component.html',
  styleUrls: ['./list-form.component.scss'],
})
export class ListFormComponent implements OnInit {
  @Output() listLengthEvent = new EventEmitter<number>();

  lengthInput = new FormControl(1, [
    Validators.required,
    Validators.min(1),
    Validators.max(100),
  ]);

  constructor() {}

  ngOnInit(): void {}

  editInput(event: any) {
    let num = Number(event.target.value);

    if (num < 1) {
      this.lengthInput.setValue(1);
    } else if (num > 100) {
      this.lengthInput.setValue(100);
    }
  }

  submitLength() {
    if (this.lengthInput.value) {
      this.listLengthEvent.emit(this.lengthInput.value);
    }
  }
}
