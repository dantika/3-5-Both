import { Injectable } from '@angular/core';
import { ListItem } from '../models/list-item.model';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  constructor() {}

  /**
   * @description Generate n randoms numbers between -1000 and 1000. Add them in an array wich create n ListItem based on this number.
   * @param {number} length
   * @returns {*}  {ListItem[]}
   */
  public generateListItem(length: number): ListItem[] {
    let newList = [];

    for (let i = 0; i < length; i++) {
      const num = Math.floor(Math.random() * (1000 - -1000)) - 1000;
      newList.push(new ListItem(num));
    }

    return newList;
  }
}
