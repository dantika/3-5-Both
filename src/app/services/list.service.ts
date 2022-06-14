import { Injectable } from '@angular/core';
import { ListItem } from '../models/list-item.model';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  constructor() {}

  public generateListItem(length: number): ListItem[] {
    const newList = [];

    for (let i = 0; i < length; i++) {
      const num = Math.floor(Math.random() * (1000 - -1000)) - 1000;
      newList.push(new ListItem(num));
    }

    return newList;
  }
}
