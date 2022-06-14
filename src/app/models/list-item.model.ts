export class ListItem {
  public byThree: boolean;
  public byFive: boolean;

  constructor(public number: number) {
    this.byThree = this.divByThree(number);
    this.byFive = this.divByFive(number);
  }

  divByThree(num: number): boolean {
    return num % 3 === 0;
  }

  divByFive(num: number): boolean {
    return num % 5 === 0;
  }
}
