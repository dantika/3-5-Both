/**
 * @description ListItem model.
 * On creation, complete byFive and byThree properties by checking if number can be divide by 5 and 3.
 * @param {number} number
 * @property {number} number
 * @property {boolean} byFive
 * @property {boolean} byThree
 * @class ListItem
 */
export class ListItem {
  public byThree: boolean;
  public byFive: boolean;

  constructor(public number: number) {
    this.byThree = this.divByThree(number);
    this.byFive = this.divByFive(number);
  }

  private divByThree(num: number): boolean {
    return num % 3 === 0;
  }

  private divByFive(num: number): boolean {
    return num % 5 === 0;
  }
}
