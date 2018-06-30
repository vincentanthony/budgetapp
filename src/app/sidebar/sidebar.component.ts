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

  openProjectModal(index) {

    console.log(index);

    const modalRef = this.modalService.open(PopupModalComponent);
    modalRef.componentInstance.index = index;

    if (index === undefined) {
      this.budgetService.editMode = false;
      modalRef.result.then((result) => {
        this.budgetService.addBudget(result);
      }).catch((error) => {

      });
    } else  {
      this.budgetService.editMode = true;
      modalRef.result.then((result) => {
        this.budgetService.updateBudget(index, result);
      }).catch((error) => {

      });
    }

  }

  onDuplicate(index) {
    this.budgetService.duplicateBudget(index);
    console.log(this.budgets);
  }



}
