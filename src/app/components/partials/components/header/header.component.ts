import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { UsersService } from 'src/app/services/users.service';
import { ProductService } from 'src/app/services/product.service';
import { User } from 'src/app/shared/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  cartQuantity = 0;
  user!: User;
  categories!: [];
  // allMenu!: MatMenuPanel<any>|null;

  constructor(
    private router: Router,
    cartService: CartService,
    private userService: UsersService,
    private productService: ProductService
  ) {
    this.productService.getCategories().subscribe(
      (categoriesResult )=> {
        this.categories = categoriesResult
        console.log(categoriesResult)
      }
    )
    cartService.getCartObservable()
      .subscribe(
        (newCart) => {
          this.cartQuantity = newCart.totalCount;
        }
      )
    this.userService.userObservable.subscribe(
      (newUser) => {
        this.user = newUser;
      }
    )
  }

  ngOnInit(): void {
  }

  logout() {
    this.userService.logout();
  }

  // searchJewelries() {
  //   this.productService.getJewelries()
  // }

  search(term: string):void {
    if(term) {
      this.router.navigateByUrl('/search/' + term);
    }
  }

  get isAuth() {
    return this.user.token;
  }

}
