import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ListItem } from 'src/app/models/list-item.model';

import { ListItemComponent } from './list-item.component';

describe('ListItemComponent', () => {
  let component: ListItemComponent;
  let el: DebugElement;
  let fixture: ComponentFixture<ListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListItemComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('render DOM', () => {
    it('should display Gest with byThree props true', () => {
      component.item = new ListItem(6);
      fixture.detectChanges();

      const gest = el.query(By.css('.gest'));
      const form = el.query(By.css('.form'));

      expect(gest).toBeTruthy();
      expect(form).toBeFalsy();
    });

    it('should display Form with byFive props true', () => {
      component.item = new ListItem(10);
      fixture.detectChanges();

      const gest = el.query(By.css('.gest'));
      const form = el.query(By.css('.form'));

      expect(gest).toBeFalsy();
      expect(form).toBeTruthy();
    });

    it('should display GestForm with byThree and byFive props are true', () => {
      component.item = new ListItem(15);
      fixture.detectChanges();

      const gest = el.query(By.css('.gest'));
      const form = el.query(By.css('.form'));

      expect(gest).toBeTruthy();
      expect(form).toBeTruthy();
    });

    it('should not display GestForm with byThree and byFive props are false', () => {
      component.item = new ListItem(22);
      fixture.detectChanges();

      const gest = el.query(By.css('.gest'));
      const form = el.query(By.css('.form'));

      expect(gest).toBeFalsy();
      expect(form).toBeFalsy();
    });
  });
});
