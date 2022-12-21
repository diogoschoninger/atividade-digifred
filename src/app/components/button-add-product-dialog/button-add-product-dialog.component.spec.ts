import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAddProductDialogComponent } from './button-add-product-dialog.component';

describe('ButtonAddProductDialogComponent', () => {
  let component: ButtonAddProductDialogComponent;
  let fixture: ComponentFixture<ButtonAddProductDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonAddProductDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonAddProductDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
