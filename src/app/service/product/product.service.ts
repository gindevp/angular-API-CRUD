import {Injectable} from '@angular/core';
import {Product} from "../../model/product";
import {HttpClient} from "@angular/common/http";
import { HttpClientModule } from '@angular/common/http'
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

const API_URL = `${environment.apiUrl}`
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private httpClient: HttpClient) {
  }

  getAllProduct(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(API_URL + "/product")
  }

  createProduct(product: Product): Observable<Product>{
    return this.httpClient.post<Product>(API_URL+"/product/", product)
  }

  getProduct(id:number): Observable<Product>{
    return this.httpClient.get<Product>(API_URL+`/product/${id}`)
  }

  updateProduct(id: number | undefined, product: Product): Observable<Product>{
    return this.httpClient.put<Product>(API_URL+`/product/${id}`,product)
  }

  deleteProduct(id:number):Observable<Product>{
    return this.httpClient.delete<Product>(API_URL+`/product/${id}`)
  }
  //
  // getAllProductByCategory(id:Number):Observable<Product[]>{
  //   return this.httpClient.get<Product[]>(API_URL+`/category/${id}/products`)
  // }
}
