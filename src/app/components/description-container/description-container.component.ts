import { Component } from '@angular/core';
import { ListItem } from 'src/app/models/list-item.model';

@Component({
  selector: 'app-description-container',
  templateUrl: './description-container.component.html',
  styleUrls: ['./description-container.component.scss'],
})
export class DescriptionContainerComponent {
  exempleItem1: ListItem = new ListItem(6);
  exempleItem2: ListItem = new ListItem(10);
  exempleItem3: ListItem = new ListItem(15);

  constructor() {}
}
