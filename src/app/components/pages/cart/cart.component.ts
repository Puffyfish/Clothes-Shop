import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/shared/models/cart.model';
import { OrderItem } from 'src/app/shared/models/orderItem.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart!: Cart;

  constructor(
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.cartService.getCartObservable()
      .subscribe(
        (cart) => {
          this.cart = cart;
        }
      )
  }

  removeFromCart(orderItem: OrderItem) {
    this.cartService.removeFromCart(orderItem.product.id);
  }

  changeQuantity(orderItem: OrderItem, qty: string) {
    const quantity = parseInt(qty);
    this.cartService.changeQuantity(orderItem.product.id, quantity)
  }
}
