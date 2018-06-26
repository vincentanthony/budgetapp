import {Category} from '../category/category.model';

export class Budget {
  public name: string;
  public total: number;
  public categories: Category[];

  constructor(name: string, total: number, categories: Category[]) {
    this.name = name;
    this.total = total;
    this.categories = categories;
  }

}
