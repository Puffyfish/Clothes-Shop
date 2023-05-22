import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../shared/models/product.model';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  PRODUCTS_URL = 'https://fakestoreapi.com/products';
  JEWELRY_URL = 'https://fakestoreapi.com/products/category/jewelery';

  constructor(private http: HttpClient) { }

  // getAll(): Observable<Food[]> {
  //   return this.http.get<Food[]>(FOODS_URL);
  // }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.PRODUCTS_URL)
  }

  getCategories(): Observable<[]> {
    return this.http.get<[]>('https://fakestoreapi.com/products/categories')
  }

  getMensProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`https://fakestoreapi.com/products`).pipe(
      map((data:any[]) => {
        return data.filter(product => {
          return (
            product.category === "men's clothing"
          )
        })
      })
    )
  }

  getWomensProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`https://fakestoreapi.com/products`).pipe(
      map((data:any[]) => {
        return data.filter(product => {
          return (
            product.category === "women's clothing"
          )
        })
      })
    )
  }

  getJewelryProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('https://fakestoreapi.com/products/category/jewelery')
  }

  getElectronicProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('https://fakestoreapi.com/products/category/electronics')
  }


}
