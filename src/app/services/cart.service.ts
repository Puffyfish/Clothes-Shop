import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from '../shared/models/cart.model';
import { OrderItem } from '../shared/models/orderItem.model';
import { Product } from '../shared/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = this.getCartFromLocalStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);
  constructor() { }

  addToCart(product: Product): void {
    let cartItem = this.cart.items.find(item => item.product.id === product.id)
    if (cartItem) return;

    this.cart.items.push( new OrderItem(product));
    this.setCartToLocalStorage();
  }

  removeFromCart(productId: string): void {
    this.cart.items = this.cart.items.filter(item => item.product.id !== productId);
    this.setCartToLocalStorage();
  }

  changeQuantity(productId: string, quantity: number) {
    let cartItem = this.cart.items
      .find(item => item.product.id === productId);

    if (!cartItem) return;

    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.product.price;
    this.setCartToLocalStorage();
  }

  clearCart() {
    this.cart = new Cart();
    this.setCartToLocalStorage();
  }

  getCart(): Cart {
    return this.cartSubject.value;
    // to get the latest values of the cart subject
  }

  getCartObservable(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }

  private setCartToLocalStorage(): void {
    // this changes the cart so any functions that needs to change the cart, should call this method
    this.cart.totalPrice = this.cart.items
      .reduce((prevSum, currentItem) => prevSum + currentItem.price, 0);
    this.cart.totalCount = this.cart.items
      .reduce((prevSum, currentItem) => prevSum + currentItem.quantity, 0);

    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart', cartJson);
    this.cartSubject.next(this.cart);
  }

  private getCartFromLocalStorage(): Cart {
    const cartJson = localStorage.getItem('Cart');
    return cartJson? JSON.parse(cartJson) : new Cart();
  }
}
