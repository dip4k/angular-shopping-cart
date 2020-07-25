import {
  Component,
  OnInit,
  AfterViewChecked,
  OnChanges,
  AfterContentChecked,
} from '@angular/core';
import { CartListService } from '../service/cart-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements AfterContentChecked {
  cartCount = 0;
  constructor(private cartListService: CartListService) {}
  getServiceSubscription$: Subscription;
  ngAfterContentChecked(): void {
    this.cartCount = this.cartListService.GetCartItemList().length;
  }
}
