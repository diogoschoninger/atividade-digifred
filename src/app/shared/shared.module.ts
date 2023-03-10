import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from './material/material.module';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';

@NgModule({
  declarations: [
    ErrorDialogComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    ErrorDialogComponent,
  ]
})
export class SharedModule { }
