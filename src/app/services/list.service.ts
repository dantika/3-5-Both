import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  constructor() {}

  divBy3(num: number): boolean {
    return num % 3 === 0;
  }

  divBy5(num: number): boolean {
    return num % 5 === 0;
  }
}
