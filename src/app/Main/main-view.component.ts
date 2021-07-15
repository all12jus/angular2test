import {Component, Input} from '@angular/core';
import {Product} from "../Product";

@Component({
  selector: 'main-view',
  templateUrl: './main.component.html',
  // template here if I want
  styleUrls: ['./main.component.css']
})
export class MainViewComponent {
  pageName = "Justin's Tech";
  @Input() products: Product[] = [];
}
