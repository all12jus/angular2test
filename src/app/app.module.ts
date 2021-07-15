import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainViewComponent } from "./Main/main-view.component";
import { SidebarComponent } from "./Sidebar/sidebar.component";
import { ProductsService } from "./products.service";
import { AppRoutingModule } from "./app-routing.module";
import { ProductPageComponent } from './product-page/product-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    SidebarComponent,
    ProductPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ProductsService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
