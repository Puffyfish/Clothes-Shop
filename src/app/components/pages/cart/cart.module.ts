import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { PartialsModule } from "../../partials/partials.module";
import { MaterialModule } from "src/app/material.module";
import { CartComponent } from "./cart.component";

@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    PartialsModule,
    MaterialModule,
    RouterModule.forChild([
      {path: '', component: CartComponent}
  ])
  ],
  exports: [
    CartComponent
  ]
})

export class CartModule {}
