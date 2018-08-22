import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';


import {CategoryComponent} from './category/category.component';
import {StartupComponent} from './startup/startup.component';

const appRoutes: Routes = [
  { path: '', component: StartupComponent, pathMatch: 'full' },
  { path: 'budget/:id', component: CategoryComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
