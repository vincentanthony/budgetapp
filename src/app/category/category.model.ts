import { Account } from '../account/account.model';

export class Category {
  public number: number;
  public description: string;
  public total: number;
  public accounts: Account[];

  constructor(number: number, description: string, total: number, accounts: Account[]) {
    this.number = number;
    this.description = description;
    this.total = total;
    this.accounts = accounts;


  }
}
