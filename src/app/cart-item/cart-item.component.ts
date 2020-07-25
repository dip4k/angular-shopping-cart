import { Component, OnInit } from '@angular/core';
import { CartItem } from '../model/cart-item.model';
import { CartListService } from '../service/cart-list.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  cartItemList: CartItem[];
  name = '';
  description = '';
  price = 0;
  cartItem: CartItem;

  constructor(private cartListService: CartListService) {
    this.cartItem = new CartItem();
    this.cartItemList = [];
  }

  ngOnInit(): void {}

  addToCartList(event) {
    const item = new CartItem();
    item.Name = this.cartItem.Name;
    item.Price = this.cartItem.Price;
    item.Description = this.cartItem.Description;
    this.cartListService.AddItemToCart(item);
    this.cartItemList.push(this.cartItem);
    console.table(item);
  }
}
