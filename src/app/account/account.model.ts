import { Item } from '../item/item.model';

export class Account {
  public number: number;
  public description: string;
  public total: number;
  public items: Item[];

  constructor(number: number, description: string, total: number, items: Item[]) {
    this.number = number;
    this.description = description;
    this.total = total;
    this.items = items;

  }
}
