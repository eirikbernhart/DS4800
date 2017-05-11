import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ShoppingCart {

  public shoppingCart = [];
  public shoppingCartPeppes = [];
  public shoppingCartBigHorn = [];
  public seller;

  constructor(public http: Http) {

  }

  addToCart(item, sellerVal) {
    
      if(item.seller == "peppes") {
        this.shoppingCartPeppes.push(item);
      } 
      if(item.seller == "bighorn"){
        this.shoppingCartBigHorn.push(item);
      }
    
    this.shoppingCart.push(item);
    this.seller = sellerVal;
  }

  getShoppingCart() {
    return this.shoppingCart;
  }

   getShoppingCartPeppes() {
    return this.shoppingCartPeppes;
  }

   getShoppingCartBigHorn() {
    return this.shoppingCartBigHorn;
  }

}
