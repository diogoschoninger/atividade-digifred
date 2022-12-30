import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly API_URL = './products.json';

  constructor(private http: HttpClient) { }

  list() {
    return [
      {
        id: 1,
        title: "iPhone 14 Pro Max 1024GB",
        price: 14999.99,
        brand: "Apple"
      },
      {
        id: 2,
        title: "iPhone 14 Pro Max 1024GB",
        price: 14999.99,
        brand: "Apple"
      },
      {
        id: 3,
        title: "iPhone 14 Pro Max 1024GB",
        price: 14999.99,
        brand: "Apple"
      },
      {
        id: 4,
        title: "iPhone 14 Pro Max 1024GB",
        price: 14999.99,
        brand: "Apple"
      },
      {
        id: 5,
        title: "iPhone 14 Pro Max 1024GB",
        price: 14999.99,
        brand: "Apple"
      },
      {
        id: 6,
        title: "iPhone 14 Pro Max 1024GB",
        price: 14999.99,
        brand: "Apple"
      },
      {
        id: 7,
        title: "iPhone 14 Pro Max 1024GB",
        price: 14999.99,
        brand: "Apple"
      },
      {
        id: 8,
        title: "iPhone 14 Pro Max 1024GB",
        price: 14999.99,
        brand: "Apple"
      },
      {
        id: 9,
        title: "iPhone 14 Pro Max 1024GB",
        price: 14999.99,
        brand: "Apple"
      },
      {
        id: 10,
        title: "iPhone 14 Pro Max 1024GB",
        price: 14999.99,
        brand: "Apple"
      },
      {
        id: 11,
        title: "iPhone 14 Pro Max 1024GB",
        price: 14999.99,
        brand: "Apple"
      },
      {
        id: 12,
        title: "iPhone 14 Pro Max 1024GB",
        price: 14999.99,
        brand: "Apple"
      },
      {
        id: 13,
        title: "iPhone 14 Pro Max 1024GB",
        price: 14999.99,
        brand: "Apple"
      },
      {
        id: 14,
        title: "iPhone 14 Pro Max 1024GB",
        price: 14999.99,
        brand: "Apple"
      },
      {
        id: 15,
        title: "iPhone 14 Pro Max 1024GB",
        price: 14999.99,
        brand: "Apple"
      },
      {
        id: 16,
        title: "iPhone 14 Pro Max 1024GB",
        price: 14999.99,
        brand: "Apple"
      },
      {
        id: 17,
        title: "iPhone 14 Pro Max 1024GB",
        price: 14999.99,
        brand: "Apple"
      },
      {
        id: 18,
        title: "iPhone 14 Pro Max 1024GB",
        price: 14999.99,
        brand: "Apple"
      },
      {
        id: 19,
        title: "iPhone 14 Pro Max 1024GB",
        price: 14999.99,
        brand: "Apple"
      },
      {
        id: 20,
        title: "iPhone 14 Pro Max 1024GB",
        price: 14999.99,
        brand: "Apple"
      },
      {
        id: 21,
        title: "iPhone 14 Pro Max 1024GB",
        price: 14999.99,
        brand: "Apple"
      },
      {
        id: 22,
        title: "iPhone 14 Pro Max 1024GB",
        price: 14999.99,
        brand: "Apple"
      },
      {
        id: 23,
        title: "iPhone 14 Pro Max 1024GB",
        price: 14999.99,
        brand: "Apple"
      },
      {
        id: 24,
        title: "iPhone 14 Pro Max 1024GB",
        price: 14999.99,
        brand: "Apple"
      },
      {
        id: 25,
        title: "iPhone 14 Pro Max 1024GB",
        price: 14999.99,
        brand: "Apple"
      },
      {
        id: 26,
        title: "iPhone 14 Pro Max 1024GB",
        price: 14999.99,
        brand: "Apple"
      },
      {
        id: 27,
        title: "iPhone 14 Pro Max 1024GB",
        price: 14999.99,
        brand: "Apple"
      },
      {
        id: 28,
        title: "iPhone 14 Pro Max 1024GB",
        price: 14999.99,
        brand: "Apple"
      },
      {
        id: 29,
        title: "iPhone 14 Pro Max 1024GB",
        price: 14999.99,
        brand: "Apple"
      },
      {
        id: 30,
        title: "iPhone 14 Pro Max 1024GB",
        price: 14999.99,
        brand: "Apple"
      }
    ]
  }
}
