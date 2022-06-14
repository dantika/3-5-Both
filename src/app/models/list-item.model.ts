/**
 * @description List item model.
 * Availables properties are : number, byFive, byThree
 * @param {number} number
 * @export
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
