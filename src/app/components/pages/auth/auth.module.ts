import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { PartialsModule } from "../../partials/partials.module";
import { MaterialModule } from "src/app/material.module";
import { AuthComponent } from "./auth.component";

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PartialsModule,
    MaterialModule,
    RouterModule.forChild([
      {path: '', component: AuthComponent}
  ])
  ],
  exports: [
    AuthComponent
  ]
})

export class AuthModule {}
