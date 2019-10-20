import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProductDetailsPage } from './product-details.page';
import { MatSelectModule, MatFormFieldModule, MatInputModule } from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: ProductDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProductDetailsPage]
})
export class ProductDetailsPageModule {}
