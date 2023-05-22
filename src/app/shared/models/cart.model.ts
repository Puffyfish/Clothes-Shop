import { OrderItem } from './orderItem.model';

export class Cart {
  items: OrderItem[] = [];
  totalPrice: number = 0;
  totalCount: number = 0;
}
