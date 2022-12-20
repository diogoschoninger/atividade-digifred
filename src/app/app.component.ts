import { Component, OnInit } from '@angular/core';

import { ProductsService } from './services/products.service';

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  dataSource: Product[] = [];

  displayedColumns: string[] = ['id', 'title', 'price', 'brand'];

  constructor(private service: ProductsService) { }

  ngOnInit() {
    this.service.getAll().subscribe(response => {
      let res = JSON.stringify(response)
      this.dataSource = JSON.parse(res).products;
    })
  }
}
