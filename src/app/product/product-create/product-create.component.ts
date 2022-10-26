import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product/product.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Product} from "../../model/product";
import {Router} from "@angular/router";
import swal from "sweetalert";
import {Category} from "../../model/category";
import {CategoryService} from "../../service/category/category.service";

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
    description: "",
    category: {
      id: -1,
      name: ""
    }
  }
  categories: Category[]=[];

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private router: Router) {
    this.getAllCategories();

  }
getAllCategories(){
    this.categoryService.getAllCategory().subscribe(categories=>{
        this.categories=categories;
      })
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
    swal("Thêm thành công", "good", "success")
    this.productService.createProduct(this.product)
      .subscribe(() => {
        this.router.navigate(['/'])
      });
  }
}
