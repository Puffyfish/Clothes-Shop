import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { PartialsModule } from "../../partials/partials.module";
import { MaterialModule } from "src/app/material.module";
import { RegisterComponent } from "./register.component";

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PartialsModule,
    MaterialModule,
    RouterModule.forChild([
      {path: '', component: RegisterComponent}
  ])
  ],
  exports: [
    RegisterComponent
  ]
})

export class RegisterModule {}
