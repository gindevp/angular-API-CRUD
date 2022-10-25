import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Product} from "../../product";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product: Product = {
    id: 0,
    name: "",
    price: 0,
    description: ""
  }

  constructor(private productService: ProductService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  // productForm: FormGroup = new  FormGroup({
  //   id: new FormControl(),
  //   name: new FormControl(),
  //   price: new FormControl(),
  //   description: new FormControl(),
  // })
  // submit(){
  //   const product = this.productForm.value;
  //   this.productService.saveProduct(product)
  // }

  createProduct() {
    this.productService.createProduct(this.product)
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }
}
