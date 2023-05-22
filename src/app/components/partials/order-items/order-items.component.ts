import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/models/order.model';
// import { MatTableDataSource } from '@angular/material/table';
// import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.scss']
})
export class OrderItemsComponent implements OnInit {
  displayedColumns: string[] = ['image', 'name', 'price', 'quantity', 'total'];
  // dataSource!: MatTableDataSource<Order>;

  constructor(
    // private _cartService: CartService
  ){}

  ngOnInit(): void {
    console.log(this.order)
    // this.getAllOrders();
  }

  // async getAllOrders() {
  //   try {

  //     const { data } : any = await this._cartService.getCart();

  //     console.log("[getAllOrders] orders", data);

  //     this.dataSource = new MatTableDataSource(data.data);


  //   } catch (e) {
  //     console.log('[getAllOrders] error', e);
  //   }
  // }

  @Input() order!: Order;

}
