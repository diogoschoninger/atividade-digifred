import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../shared/material/material.module';
import { SharedModule } from '../shared/shared.module';
import { ProductFormDialogComponent } from './product-form-dialog/product-form-dialog.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductFormDialogComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialModule,
    SharedModule,
  ]
})
export class ProductsModule { }
