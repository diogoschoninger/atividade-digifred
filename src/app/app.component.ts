import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { tap } from 'rxjs';

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

export class AppComponent implements OnInit, AfterViewInit {
  dataSource: Product[] = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'brand'];

  @ViewChild(MatPaginator)
  paginator?: MatPaginator;

  totalProducts: number = 0;

  constructor(private service: ProductsService) { }

  getProductsWithPagination() {
    this.service.getAllWithPagination(this.paginator?.pageSize ?? 10, (this.paginator?.pageIndex ?? 0) * (this.paginator?.pageSize ?? 0)).subscribe(response => {
      // Transforma a resposta em uma string e em seguida em um objeto JSON
      let res: any = JSON.stringify(response)
      res = JSON.parse(res)

      // Salva os produtos
      this.dataSource = res.products;

      // Salva o total de itens da resposta
      this.totalProducts = res.total;
    })
  }

  ngOnInit() {
    this.getProductsWithPagination();
  }

  ngAfterViewInit() {
    this.paginator?.page.pipe(
      tap(() => this.getProductsWithPagination())
    ).subscribe()
  }
}
