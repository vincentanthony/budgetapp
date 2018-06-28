import { Budget } from './budget.model';
import { Category } from '../category/category.model';
import {Subject} from 'rxjs';

export class BudgetService {
  budgetsChanged = new Subject<Budget[]>();


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

  addCategory(index) {
    const newCategory = new Category(null, 'please enter description', null);
    this.budgets[index].categories.push(newCategory);
  }

  addBudget(budget) {
    const budgetName = budget.projectName;
    const newBudget = new Budget(budgetName, null, [null]);
    this.budgets.push(newBudget);
    this.budgetsChanged.next(this.budgets.slice());
    console.log(this.budgets);
  }
}



