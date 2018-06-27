import { Budget } from './budget.model';
import { Category } from '../category/category.model';

export class BudgetService {
  private budgets: Budget[] = [
    new Budget('Fear, Inc', 350000, [
      new Category(2100, 'Producers', 16000),
      new Category(2200, 'Director', 8000)
    ]),
    new Budget('Painkillers', 305000, [
      new Category(2100, 'Producers', 16000),
      new Category(2200, 'Director', 10000)
    ]),
    new Budget('Anderson Falls', 700000, [
      new Category(2100, 'Producers', 40000),
      new Category(2200, 'Director', 30000)
    ])
  ];

  getBudgets() {
    return this.budgets.slice();
  }

  getBudget(index) {
    return this.budgets[index];
  }
}



