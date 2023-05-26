import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Customvalidator } from './validators/customvalidator';

@Component({
  selector: 'app-addoredit-product',
  templateUrl: './addoredit-product.component.html',
  styleUrls: ['./addoredit-product.component.css'],
})
export class AddoreditProductComponent implements OnInit {

  isEditMode = false;
  productId!: number;
  productForm!: FormGroup;
  productData!:Product;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private route: Router,
    private router:ActivatedRoute
  ) {}

  ngOnInit(): void {
   
    this.router.queryParams.subscribe(params => {
      const idParam = params['id'];
      if (idParam) {
        this.productId = idParam;
        this.isEditMode = true;
      } else {
        this.isEditMode = false; 
      }
      this.initializeForm();
    });
    
    
  }

  private initializeForm() {
    if (this.isEditMode) {
      this.productService.getProductById(this.productId).subscribe(product => {
        
      this.productForm = this.formBuilder.group({
        id: new FormControl({value:product.id,disabled:true,}),
        name: [product.name],
        description: [product.description],
        quantity: [product.quantity],
        price: [product.price],
        date:new FormControl(new Date(product.date).toISOString().substring(0, 10)),
        states:[product.states],
        inStock:[product.inStock]
      }
    )
      }
    );
      console.log(this.productForm);
   } else {
      this.productForm = this.formBuilder.group({
        id:[''],
        name: ['',[Validators.maxLength(12),Validators.minLength(3)]],
        description: [''],
        quantity: [''],
        price: [''],
        date:['',[Customvalidator.validateTime]],
        states:[''],
        inStock:['']
      });
    }
  }
  

  addProduct!: Product;
  onSubmit() {
    if (this.isEditMode) {
      this.addProduct = this.productForm.value;
      this.productService.updateProduct(this.productId,this.addProduct).subscribe();
    } else {
      this.addProduct = this.productForm.value;
    this.productService.addProduct(this.addProduct).subscribe();
    
    }
    this.route.navigate(['/product']);
   
  }
}

