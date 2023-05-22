import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';

const mainRoutes: Routes = [
  {path: '', component: HomeComponent},
  // {
  //   path: 'login',
  //   loadChildren: () => import('./components/pages/auth/auth.module').then( m => m.AuthModule)
  // },
  {
    path: 'category/:category',
    loadChildren: () => import('./components/pages/products-page/products-page.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'cart-page',
    loadChildren: () => import('./components/pages/cart/cart.module').then( m => m.CartModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./components/pages/register/register.module').then( m => m.RegisterModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./components/pages/checkout/checkout.module').then( m => m.CheckoutModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(mainRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
