import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Product } from '../model/product';
import { ProductFormDialogComponent } from '../product-form-dialog/product-form-dialog.component';

export const API_URL = 'https://dummyjson.com/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products: Product[] = [];
  displayedColumns = ['id', 'title', 'price', 'brand', 'actions'];

  tableLength = 0;
  tablePageSize = 10;
  tablePageIndex = 0;

  constructor(
    public dialog: MatDialog,
  ) {
    this.getProducts();
  }

  getProducts() {
    fetch(`${API_URL}?limit=${this.tablePageSize}&skip=${this.tablePageSize * this.tablePageIndex}`)
      .then(res => res.json())
      .then(res => {
        this.products = res.products;
        this.tableLength = res.total;
      })
      .catch(err => this.onError('Erro ao carregar os produtos. Recarregue a página'));
  }

  onError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage
    });
  }

  onAddButton() {
    this.dialog.open(ProductFormDialogComponent, {
      data: {
        action: 'Adicionar',
        title: ''
      }
    })
  }

  onEditButton(id: number, title: string) {
    this.dialog.open(ProductFormDialogComponent, {
      data: {
        action: 'Editar',
        title,
        id
      }
    })
  }

  tablePageEvent(event: PageEvent) {
    this.products = [];

    this.tableLength = event.length;
    this.tablePageSize = event.pageSize;
    this.tablePageIndex = event.pageIndex;

    this.getProducts();
  }
}
