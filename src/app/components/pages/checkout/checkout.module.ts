import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { PartialsModule } from "../../partials/partials.module";
import { MaterialModule } from "src/app/material.module";
import { CheckoutComponent } from "./checkout.component";

@NgModule({
  declarations: [CheckoutComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PartialsModule,
    MaterialModule,
    RouterModule.forChild([
      {path: '', component: CheckoutComponent}
  ])
  ],
  exports: [
    CheckoutComponent
  ]
})

export class CheckoutModule {}
