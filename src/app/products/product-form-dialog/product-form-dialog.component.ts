import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { API_URL } from '../products/products.component';

export interface DialogData {
  action: string,
  title: string,
  id: number
}

@Component({
  selector: 'app-product-form-dialog',
  templateUrl: './product-form-dialog.component.html',
  styleUrls: ['./product-form-dialog.component.scss']
})
export class ProductFormDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onAddProduct(title: string) {
    fetch(`${API_URL}/add`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title
      })
    })
      .then(res => res.json())
      .then(res => window.alert('Produto adicionado com sucesso'));
  }

  onEditProduct(id: number, title: string) {
    fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title
      })
    })
      .then(res => res.json())
      .then(res => window.alert('Produto editado com sucesso'));
  }
}
