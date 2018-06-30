import {Component, OnInit} from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BudgetService} from '../budget.service';
import {Budget} from '../budget.model';

@Component({
  selector: 'app-popup-modal',
  templateUrl: './popup-modal.component.html',
  styleUrls: ['./popup-modal.component.css']
})
export class PopupModalComponent implements OnInit {
  editMode = false;
  budget: Budget;
  index: number;


  myForm: FormGroup;

  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder, private budgetService: BudgetService) {
    this.createForm();
  }

  private createForm() {
    this.myForm = this.formBuilder.group({
      projectName: ''
    });
  }

  private submitForm() {
    this.activeModal.close(this.myForm.value);
  }

  ngOnInit() {
    this.editMode = this.budgetService.editMode;
      this.budget = new Budget('', null, null);
    if (this.index === undefined) {
    } else {
      this.budget = this.budgetService.getBudget(this.index);
    }

    console.log(this.editMode);
  }

}
