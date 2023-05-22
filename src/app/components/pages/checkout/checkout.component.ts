import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { UsersService } from 'src/app/services/users.service';
import { Order } from 'src/app/shared/models/order.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})

export class CheckoutComponent implements OnInit {
  order = new Order();
  checkoutForm!: FormGroup;
  isSubmitted = false;

  constructor(
    cartService: CartService,
    private _fb: FormBuilder,
    private _userService: UsersService,
    private _snackBar: MatSnackBar,
    private router: Router
  ){
    const cart = cartService.getCart();
    // no need to get an observable when we only want the LATEST VALUES
    this.order.items = cart.items;
    this.order.totalPrice = cart.totalPrice;
  }

  ngOnInit(): void {
    let {name, address} = this._userService.currentUser;
    this.checkoutForm = this._fb.group({
      name:[name, Validators.required],
      address: [address, Validators.required]
    })
  }

  get fc() {
    return this.checkoutForm.controls;
  }

  createOrder() {
    if(this.checkoutForm.invalid) {
      this._snackBar.open("Please fill the inputs", "Ok", {
        duration: 3000,
        panelClass: ['snackbar-error']
      })
      return;
    }

    this.order.name = this.fc['name'].value;
    this.order.address = this.fc['address'].value;

    console.log(this.order);

    // must create new order

  }

  submit(){};

}
