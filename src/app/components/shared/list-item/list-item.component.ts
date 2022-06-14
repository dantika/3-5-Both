import { Component, Input, OnInit } from '@angular/core';
import { ListItem } from 'src/app/models/list-item.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent implements OnInit {
  @Input() item: ListItem = new ListItem(0);

  constructor() {}

  ngOnInit(): void {}
}
