import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
 
  productList:Product[]=[];

  constructor(private productService:ProductService){
  
  }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(products=>{
      this.productList=products;
    });
  }

}
