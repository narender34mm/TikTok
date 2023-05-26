import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent  {

  @Input() productList !:Product[];

  delete(id:number){
    this.productService.deleteProduct(id).subscribe(products => {
      this.productList = products;
    })
    alert(`Product Id ${id} deleted`)
  }

  constructor(private productService:ProductService){

  }

  

}
