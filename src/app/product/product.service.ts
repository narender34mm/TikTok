import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) {

   }

   getAllProducts(){
    return this.http.get<Product[]>('/product/all');
   }

   getProductById(id:number){
    return this.http.get<Product>(`/product/${id}`);
   }

   addProduct(product:Product){
    return this.http.post<Product[]>('/product/add',product);
   }

   deleteProduct(id:number){
    return this.http.delete<Product[]>(`/product/${id}`);
   }

   updateProduct(id:number,product:Product){
    return this.http.put<Product>(`/product/${id}`,product);
   }
}
