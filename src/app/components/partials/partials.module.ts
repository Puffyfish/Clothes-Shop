import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../../material.module';

import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TitleComponent } from './components/title/title.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { OrderItemsComponent } from './order-items/order-items.component';

@NgModule({
  declarations: [
    FooterComponent,
    NotFoundComponent,
    TitleComponent,
    LoadingSpinnerComponent,
    OrderItemsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    FooterComponent,
    NotFoundComponent,
    TitleComponent,
    LoadingSpinnerComponent,
    OrderItemsComponent
  ]
})
export class PartialsModule { }
