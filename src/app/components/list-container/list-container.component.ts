import { Component, Provider } from '@angular/core';
import { ListItem } from 'src/app/models/list-item.model';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.scss'],
})
export class ListContainerComponent {
  itemList: ListItem[] = [];

  constructor(private ListService: ListService) {}

  /**
   * @description List length edit handler from list-form
   * @param {number} event
   */
  listLengthEvent(event: number) {
    this.itemList = this.ListService.generateListItem(event);
  }

  resetList() {
    this.itemList = [];
  }
}
