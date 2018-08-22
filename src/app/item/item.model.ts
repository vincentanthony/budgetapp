export class Item {
  public descripion: string;
  public amount: number;
  public units: string;
  public mult: number;
  public rate: number;
  public subTotal: number;

constructor(description: string, amount: number, units: string, mult: number, rate: number, subTotal: number) {
  this.descripion = description;
  this.amount = amount;
  this.units = units;
  this.mult = mult;
  this.rate = rate;
  this.subTotal = subTotal;

}

}
