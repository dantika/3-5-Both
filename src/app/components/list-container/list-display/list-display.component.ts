import { Component, Input } from '@angular/core';
import { ListItem } from 'src/app/models/list-item.model';

@Component({
  selector: 'app-list-display',
  templateUrl: './list-display.component.html',
  styleUrls: ['./list-display.component.scss'],
})
export class ListDisplayComponent {
  @Input() itemList: ListItem[] | null = null;

  constructor() {}
}
