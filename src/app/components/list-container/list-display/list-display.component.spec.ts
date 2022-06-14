import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ListItem } from 'src/app/models/list-item.model';

import { ListDisplayComponent } from './list-display.component';

describe('ListDisplayComponent', () => {
  let component: ListDisplayComponent;
  let el: DebugElement;
  let fixture: ComponentFixture<ListDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListDisplayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListDisplayComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('render DOM', () => {
    it('should render list', () => {
      component.itemList = [new ListItem(1), new ListItem(3)];
      fixture.detectChanges();

      const li = el.queryAll(By.css('li'));

      expect(li.length).toEqual(2);
    });
  });
});
