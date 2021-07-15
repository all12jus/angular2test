import {Component, Input} from '@angular/core';
import {Product} from "../Product";

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  // can auto create this with `ng g c sidebar`
  // .......
  // template here if I want
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() products: Product[] = [];

  pageName = "Justin's Tech";
}
