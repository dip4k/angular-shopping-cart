import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartItemComponent } from './cart-item/cart-item.component';
import { HeaderComponent } from './header/header.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartListService } from './service/cart-list.service';

@NgModule({
  declarations: [
    AppComponent,
    CartItemComponent,
    HeaderComponent,
    CartListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [CartListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
