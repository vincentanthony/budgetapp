import {Component, OnInit} from '@angular/core';

import { Budget } from '../shared/budget.model';
import {ActivatedRoute, Params} from '@angular/router';
import {BudgetService} from '../shared/budget.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  budget: Budget;
  id: number;


  constructor(private route: ActivatedRoute, private budgetService: BudgetService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.budget = this.budgetService.getBudget(this.id);
        }
      );
  }

  onAddRow() {
    this.budgetService.addCategory(this.id);
  }

}
