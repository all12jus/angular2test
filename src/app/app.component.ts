import {Component} from '@angular/core';
import {Product} from "./Product";
import {ProductsService} from "./products.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listOfProducts: Product[]
  constructor(productService: ProductsService) {
    // let productService = new ProductsService();
    this.listOfProducts = productService.getProducts()
  }

  pageName = "Justin's Tech";

  // you shouldn't ask for http requests here.


}
