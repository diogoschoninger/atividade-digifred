import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly API_URL = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get(this.API_URL);
  }
}
