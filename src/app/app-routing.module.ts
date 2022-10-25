import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ProductListComponent} from "./product/product-list/product-list.component";
import {ProductCreateComponent} from "./product/product-create/product-create.component";
import {ProductEditComponent} from "./product/product-edit/product-edit.component";


const routes: Routes = [
  {
    path: 'list',
    component: ProductListComponent
  },
  {
    path: 'create',
    component: ProductCreateComponent
  },
  {
    path: 'edit/:id',
    component: ProductEditComponent
  },
  {
    path: '',
    redirectTo: 'list',
    pathMatch: "full"
  },
  {
    path: '**',
    redirectTo: 'list'
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
