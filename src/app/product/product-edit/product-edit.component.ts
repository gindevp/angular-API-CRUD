import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../service/product/product.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Product} from "../../model/product";
import {Subscription} from "rxjs";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import swal from "sweetalert";
import {Category} from "../../model/category";
import {CategoryService} from "../../service/category/category.service";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  sub:Subscription;
  product: Product = {
    id:0,
    name:"name",
    description: "Mo ta",
    price: 0,
    category:{
      id:-1,
    }
  };
  id: number | undefined;
  categories: Category[]=[]

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.sub = this.activatedRoute.paramMap.subscribe( (paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      this.getProduct(this.id);
    })
  }

  ngOnInit(): void {
    this.getAllCategories()
  }

  getProduct(id: number){
    this.productService.getProduct(id).
    subscribe(product =>{
      this.product = product;
    });
  }

  updateProduct(){
    swal("Sửa thành công", "good", "success");
    this.productService.updateProduct(this.product.id, this.product).subscribe(()=>{
      this.router.navigate(['/'])
    });
    // this.router.navigateByUrl("/");
  }
  getAllCategories(){
    this.categoryService.getAllCategory().subscribe(categories=>{
      this.categories = categories;
    })
  }
}
