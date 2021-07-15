import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ProductPageComponent} from "./product-page/product-page.component";


const routes: Routes = [
  {
    path: "",
    redirectTo: "1",
    pathMatch: "full"
  },
  {
    path: ':id',
    component: ProductPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

export const routingComponents = [ProductPageComponent]
