import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { IonicModule } from '@ionic/angular';

import { ProductsByCategoryPage } from './products-by-category.page';

const routes: Routes = [
  {
    path: '',
    component: ProductsByCategoryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatExpansionModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProductsByCategoryPage]
})
export class ProductsByCategoryPageModule { }
