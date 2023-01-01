import { Component } from '@angular/core';

import { Product } from '../model/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products: Product[] = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'brand'];

  constructor(
    private productsService: ProductsService
  ) {
    this.productsService.list().subscribe((response: any) => {
      this.products = response.products;
    })
  }
}
