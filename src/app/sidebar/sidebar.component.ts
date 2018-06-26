import { Component, OnInit } from '@angular/core';

import { Budget } from '../shared/budget.model';
import { BudgetService } from '../shared/budget.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  budgets: Budget[];

  constructor(private budgetService: BudgetService) {

  }

  ngOnInit() {
    this.budgets = this.budgetService.getBudgets();
  }

  onBudgetClick(budget) {
    console.log(budget);
  }

}
