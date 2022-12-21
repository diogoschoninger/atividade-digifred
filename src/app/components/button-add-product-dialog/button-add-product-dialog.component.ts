import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-button-add-product-dialog',
  templateUrl: './button-add-product-dialog.component.html',
  styleUrls: ['./button-add-product-dialog.component.css']
})
export class ButtonAddProductDialogComponent {
  constructor(public dialog: MatDialog) {}
}
