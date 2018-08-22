import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Budget } from './budget.model';
import { Category } from '../category/category.model';
import { Account } from '../account/account.model';
import { Item } from '../item/item.model';


@Injectable()
export class BudgetService {
  budgetsChanged = new Subject<Budget[]>();
  editMode = false;


  private budgets: Budget[] = [
    new Budget('Fear, Inc', 350000, [
      new Category(2100, 'Producers', 16000,[
        new Account( 2101, 'Producers', 15000, [
          new Item( 'Joe Manga', 1, 'Allow', 1, 5000, 5000 ),
          new Item( 'David Cross', 1, 'Allow', 1, 8000, 8000 )
        ])
    ]),
      new Category(2200, 'Director', 8000, [
        new Account( 2201, 'Directors', 15000, [
          new Item( 'Joe Manga', 1, 'Allow', 1, 5000, 5000 ),
          new Item( 'David Cross', 1, 'Allow', 1, 8000, 8000 )
        ])
      ])
    ]),
    new Budget('Painkillers', 305000, [
      new Category(2100, 'Producers', 16000, [
        new Account( 2101, 'Producers', 15000, [
          new Item( 'Joe Manga', 1, 'Allow', 1, 5000, 5000 ),
          new Item( 'David Cross', 1, 'Allow', 1, 8000, 8000 )
        ])
      ]),
      new Category(2200, 'Director', 10000, [
        new Account( 2101, 'Producers', 15000, [
          new Item( 'Joe Manga', 1, 'Allow', 1, 5000, 5000 ),
          new Item( 'David Cross', 1, 'Allow', 1, 8000, 8000 )
        ])
        ])
    ]),
    new Budget('Anderson Falls', 700000, [
      new Category(2100, 'Producers', 40000, [
        new Account( 2101, 'Producers', 15000, [
          new Item( 'Joe Manga', 1, 'Allow', 1, 5000, 5000 ),
          new Item( 'David Cross', 1, 'Allow', 1, 8000, 8000 )
        ])
      ]),
      new Category(2200, 'Director', 30000, [
        new Account( 2101, 'Producers', 15000, [
          new Item( 'Joe Manga', 1, 'Allow', 1, 5000, 5000 ),
          new Item( 'David Cross', 1, 'Allow', 1, 8000, 8000 )
        ])
      ])
    ])
  ];




  getBudgets() {
    return this.budgets.slice();
  }

  getBudget(index) {
    return this.budgets[index];
  }

  addCategory(index) {
    const newCategory = new Category(null, 'please enter description', null, null);
    this.budgets[index].categories.push(newCategory);
  }

  addBudget(budget) {
    const budgetName = budget.projectName;
    const newBudget = new Budget(
      budgetName,
      null,
      [new Category(null, 'please enter description', null, null)]);
    this.budgets.push(newBudget);
    this.budgetsChanged.next(this.budgets.slice());

  }

  deleteBudget(index: number) {
    this.budgets.splice(index, 1);
    this.budgetsChanged.next(this.budgets.slice());
  }

  updateBudget(index: number, name) {
    const budgetName = name.projectName;
    this.budgets[index].name = budgetName;
    this.budgetsChanged.next(this.budgets.slice());
  }

  duplicateBudget(index) {
    const duplicateBudget = JSON.parse(JSON.stringify(this.budgets[index]));
    this.budgets.push(duplicateBudget);
    this.budgetsChanged.next(this.budgets.slice());
  }
}



