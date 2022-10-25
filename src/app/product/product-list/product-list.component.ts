import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../service/product.service";
import {Product} from "../../product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {
    this.getAll();
  }

  ngOnInit(){
    // this.getAll();
  }
  getAll(): Product[]{
    this.productService.getAllProduct().subscribe(
      products=>{
        this.products= products;
      }
    )
    return this.products
}
  delete(id: any){
    if(confirm("Bạn có thực sự muốn xóa?")){
      this.productService.deleteProduct(id).subscribe(
        next =>{this.products = this.getAll();
        },
        error => {
          alert("error")
        }
      );
    }
  }
  // findProduct(product: any){
  //   console.log(product)
  //   return this.productService.findProduct(product);
  // }
}
