// cart.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartKey = 'cart';

  constructor() { }

  getItems(): any[] {
    if (typeof localStorage !== 'undefined') {
      const cartItems = localStorage.getItem(this.cartKey);
      return cartItems ? JSON.parse(cartItems) : [];
    } else {
      return [];
    }
  }

  addToCart(item: any) {
    if (typeof localStorage !== 'undefined') {
      const cartItems = this.getItems();
      cartItems.push(item);
      localStorage.setItem(this.cartKey, JSON.stringify(cartItems));
    }
  }

  removeFromCart(index: number) {
    if (typeof localStorage !== 'undefined') {
      const cartItems = this.getItems();
      cartItems.splice(index, 1);
      localStorage.setItem(this.cartKey, JSON.stringify(cartItems));
    }
  }
}
