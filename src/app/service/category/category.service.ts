import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../../model/category";
import {environment} from "../../../environments/environment";
const API_URL = `${environment.apiUrl}`
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private httpClient: HttpClient) { }

  getAllCategory(): Observable<Category[]>{
    return this.httpClient.get<Category[]>(API_URL+"/category")
  }

  deleteCategory(id:number):Observable<Category>{
    return this.httpClient.delete<Category>(API_URL+`/category/${id}`)
  }

  create(category:Category):Observable<Category>{
    return this.httpClient.post<Category>(API_URL+"/category", category)
  }

  getCategory(id:Number):Observable<Category>{
    return this.httpClient.get<Category>(API_URL+`/category/${id}`);
  }

  editCategory(id:Number, category:Category): Observable<Category>{
    return this.httpClient.put<Category>(API_URL+`/category/${id}`, category)
  }
}
