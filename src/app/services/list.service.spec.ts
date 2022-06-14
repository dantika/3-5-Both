import { TestBed } from '@angular/core/testing';

import { ListService } from './list.service';

describe('ListService', () => {
  let service: ListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should generate new array with given size', () => {
    const array = service.generateListItem(5);
    expect(array.length).toBe(5);
  });
});
