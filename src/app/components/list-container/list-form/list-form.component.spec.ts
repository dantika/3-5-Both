import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { ListFormComponent } from './list-form.component';

describe('ListFormComponent', () => {
  let component: ListFormComponent;
  let el: DebugElement;
  let fixture: ComponentFixture<ListFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListFormComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ListFormComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('functional', () => {
    describe('editInput', () => {
      let inputSelector: DebugElement;
      let input: any;

      beforeEach(() => {
        inputSelector = el.query(By.css('#inputLength'));
        input = inputSelector.nativeElement;
      });

      it('should set lengthInput to 1 when event < 1', () => {
        input.value = -12;
        input.dispatchEvent(new Event('input'));

        expect(component.lengthInput.value).toBe(1);
      });

      it('should set lengthInput to 100 when event > 100', () => {
        input.value = 1112;
        input.dispatchEvent(new Event('input'));

        expect(component.lengthInput.value).toBe(100);
      });

      it('should set lengthInput to 100 when event > 100', () => {
        input.value = 12;
        input.dispatchEvent(new Event('input'));

        expect(component.lengthInput.value).toBe(12);
      });
    });

    describe('submitLength', () => {
      beforeEach(() => {
        spyOn(component.listLengthEvent, 'emit');
      });

      it('should emit listLength set event if lengthInput has value', () => {
        component.lengthInput.setValue(12);
        component.submitLength();

        expect(component.listLengthEvent.emit).toHaveBeenCalledTimes(1);
      });

      it('should not emit listLength set event if lengthInput has value', () => {
        component.lengthInput.setValue(null);
        component.submitLength();

        expect(component.listLengthEvent.emit).toHaveBeenCalledTimes(0);
      });
    });
  });
});
