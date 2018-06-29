import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Budget } from '../shared/budget.model';
import { BudgetService } from '../shared/budget.service';
import { PopupModalComponent } from '../shared/popup-modal/popup-modal.component';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  budgets: Budget[];
  index: number;
  subscription: Subscription;

  constructor(private budgetService: BudgetService, private modalService: NgbModal) {

  }

  ngOnInit() {
    this.budgets = this.budgetService.getBudgets();
    this.subscription = this.budgetService.budgetsChanged
      .subscribe(
        (budgets: Budget[]) => {
          this.budgets = budgets;
        }
      );
  }

  openNewProjectModal() {
    const modalRef = this.modalService.open(PopupModalComponent);


    modalRef.result.then((result) => {
      this.budgetService.addBudget(result);
    }).catch((error) => {
      console.log(error);
    });
  }

  onDelete(i) {
    this.budgetService.deleteBudget(i);
  }

}
