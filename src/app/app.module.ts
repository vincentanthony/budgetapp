import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { DragulaModule } from 'ng2-dragula';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DetailComponent } from './detail/detail.component';
import { AccountComponent } from './account/account.component';
import { CategoryComponent } from './category/category.component';
import { BudgetListComponent } from './budget-list/budget-list.component';
import {BudgetService} from './shared/budget.service';
import {AppRoutingModule} from './app-routing.module';
import { StartupComponent } from './startup/startup.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    DetailComponent,
    AccountComponent,
    CategoryComponent,
    BudgetListComponent,
    StartupComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    DragulaModule,
    AppRoutingModule
  ],
  providers: [BudgetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
