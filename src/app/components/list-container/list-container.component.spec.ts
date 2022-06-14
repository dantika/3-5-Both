import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ListItem } from 'src/app/models/list-item.model';

import { ListContainerComponent } from './list-container.component';

describe('ListContainerComponent', () => {
  let component: ListContainerComponent;
  let el: DebugElement;
  let fixture: ComponentFixture<ListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListContainerComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('render DOM', () => {
    it('should render list container if itemList is populated', () => {
      component.itemList = [new ListItem(1), new ListItem(2), new ListItem(3)];
      fixture.detectChanges();

      const mainContainer = el.query(By.css('.mainContainer'));

      expect(mainContainer).toBeTruthy();
    });

    it('should not render list container if itemList is populated', () => {
      component.itemList = [new ListItem(1), new ListItem(2), new ListItem(3)];
      fixture.detectChanges();

      const mainContainer = el.query(By.css('.mainContainer'));

      expect(mainContainer).toBeTruthy();
    });
  });

  describe('functional', () => {
    it('should set itemList', () => {
      component.listLengthEvent(5);

      expect(component.itemList.length).toEqual(5);
    });

    it('should reset itemList', () => {
      component.listLengthEvent(5);
      component.resetList();

      expect(component.itemList.length).toEqual(0);
    });
  });
});
