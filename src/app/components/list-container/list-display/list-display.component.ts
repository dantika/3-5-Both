import { Component, Input, OnInit } from '@angular/core';
import { ListItem } from 'src/app/models/list-item.model';

@Component({
  selector: 'app-list-display',
  templateUrl: './list-display.component.html',
  styleUrls: ['./list-display.component.scss'],
})
export class ListDisplayComponent implements OnInit {
  @Input() itemList: ListItem[] | null = null;

  constructor() {}

  ngOnInit(): void {}
}
