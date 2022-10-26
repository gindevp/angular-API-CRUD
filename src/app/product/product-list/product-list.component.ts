import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../service/product/product.service";
import {Product} from "../../model/product";
import swal from "sweetalert";
import {Category} from "../../model/category";
import {CategoryService} from "../../service/category/category.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  categories: Category[] = [];

  constructor(private productService: ProductService,private  categoryService: CategoryService) {
    this.getAll();
    this.getAllCategories();
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

    swal({
      title: "Bạn chắc muốn xóa chứ",
      text: "Nếu xóa, bạn sẽ không thể khôi phục lại được",
      icon: "warning",
      // @ts-ignore
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          swal("Xong, bạn đã xóa rồi đó", {
            icon: "success",
          });
          this.productService.deleteProduct(id).subscribe(
            next =>{this.products = this.getAll();
            },
            error => {
              alert("error")
            }
          );
        } else {
          swal("Thứ bạn cần xóa đã k được xóa");
        }
      });

  }
  getAllCategories(){
    this.categoryService.getAllCategory().subscribe(categories=>{
      this.categories = categories;
    })
  }
  findNameCateById(id: number): string {
    // @ts-ignore
    let rs:string;
    for(let i=0; i<this.categories.length; i++){
      if(this.categories[i].id==id){
        rs=this.categories[i].name;
        return rs;
      }
    }
// @ts-ignore
    return null;
  }
  // findProduct(product: any){
  //   console.log(product)
  //   return this.productService.findProduct(product);
  // }
}
