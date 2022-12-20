import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get('https://dummyjson.com/products');
  }

  getAllWithPagination(limit: number, skip: number) {
    return this.http.get(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
  }
}
