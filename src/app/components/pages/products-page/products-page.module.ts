import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { PartialsModule } from "../../partials/partials.module";
import { MaterialModule } from "src/app/material.module";
import { ProductsPageComponent } from "./products-page.component";
import { HeaderComponent } from "../../partials/components/header/header.component";

@NgModule({
  declarations: [
    ProductsPageComponent],
  imports: [
    CommonModule,
    PartialsModule,
    MaterialModule,
    RouterModule.forChild([
      {path: '', component: ProductsPageComponent}
    ])
  ],
  exports: [
    ProductsPageComponent]
})

export class ProductsPageModule {}
