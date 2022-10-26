import { Component } from '@angular/core';
import {ProductService} from "./service/product/product.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-crud-product';
}
