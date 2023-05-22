import { Product } from './product.model';

export class OrderItem {
  constructor (public product: Product) {};
  quantity: number = 1;
  price: number = this.product.price;

}
