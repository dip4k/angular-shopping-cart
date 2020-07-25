import {
  Component,
  OnInit,
  AfterViewChecked,
  AfterContentChecked,
} from '@angular/core';
import { CartItem } from '../model/cart-item.model';
import { CartListService } from '../service/cart-list.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
})
export class CartListComponent implements AfterContentChecked {
  cartItemList: CartItem[];
  constructor(private cartListService: CartListService) {
    this.cartItemList = [];
  }
  ngAfterContentChecked(): void {
    this.cartItemList = this.cartListService.GetCartItemList();
  }
}
