import { OrderItem } from "./orderItem.model";

export class Order {
  id!: number;
  items!: OrderItem[];
  totalPrice!: number;
  name!: string;
  address!: string;
  paymentId!: string;
  createdAt!: string;
  status!: string;
}
