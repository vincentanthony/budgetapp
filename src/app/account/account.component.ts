import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../shared/budget.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private budgetService: BudgetService) { }

  ngOnInit() {
  }

}
