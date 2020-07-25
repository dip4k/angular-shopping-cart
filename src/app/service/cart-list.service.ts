import { Injectable } from '@angular/core';
import { CartItem } from '../model/cart-item.model';
import { of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartListService {
  // imulate db operation
  cartItemList: CartItem[];

  constructor() {
    this.cartItemList = [];
  }

  // imulate add to DB
  AddItemToCart(cartItem: CartItem) {
    // save to DB
    this.cartItemList.push(cartItem);
  }

  // fetch from db
  GetCartItemList() {
    return this.cartItemList;
  }
}
