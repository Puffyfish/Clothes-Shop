import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent {
  products!: Product[];

  constructor(
    private _route: ActivatedRoute,
    private _productService: ProductService,
    private _router: Router,
  ){}

  ngOnInit(): void {

    this._route.paramMap.subscribe(params=> {
      const categoryName= params.get('category')
      console.log('params:', categoryName)
      switch(categoryName) {
        case "men":
          this._productService.getMensProducts().subscribe(
            res => this.products = res
          )
          break;
        case "women":
          this._productService.getWomensProducts().subscribe(
            res => this.products = res
          )
          break;
        case "accessories":
          this._productService.getJewelryProducts().subscribe(
            res => this.products = res
          )
          break;
        case "electronics":
          this._productService.getElectronicProducts().subscribe(
            res => this.products = res
          )
          break;
      }
    })
  }

  addToCart() {
    // this._cartService.addToCart(this.food);
    this._router.navigateByUrl('/cart-page')
  }
}
