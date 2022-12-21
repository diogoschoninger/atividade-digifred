import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-button-add-product',
  templateUrl: './button-add-product.component.html',
  styleUrls: ['./button-add-product.component.css']
})
export class ButtonAddProductComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(ButtonAddProductComponentDialog);
  }
}

@Component({
  selector: 'app-button-add-product-dialog',
  templateUrl: '../button-add-product-dialog/button-add-product-dialog.component.html',
  styleUrls: ['../button-add-product-dialog/button-add-product-dialog.component.css']
})
export class ButtonAddProductComponentDialog { }
