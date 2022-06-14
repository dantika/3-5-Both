import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description-container',
  templateUrl: './description-container.component.html',
  styleUrls: ['./description-container.component.scss'],
})
export class DescriptionContainerComponent implements OnInit {
  exempleItem1 = 'exempleItem1';
  exempleItem2 = 'exempleItem2';
  exempleItem3 = 'exempleItem3';

  constructor() {}

  ngOnInit(): void {}
}
