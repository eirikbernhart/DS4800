import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { ShoppingCart } from '../../providers/shopping-cart';



@Component({
  selector: 'page-shopping',
  templateUrl: 'shopping.html'
})
export class ShoppingPage {

  public shoppingCart = [];
  public shoppingCartPeppes = [];
  public shoppingCartBigHorn = [];

  public totalCost: number = 0;
  public totalCostPeppes: number = 0;
  public totalCostBigHorn: number = 0;

  public seller: string = "default";

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public viewCtrl: ViewController, 
    public shopServ: ShoppingCart
  ) {}

  ionViewDidLoad() {
   
      for (var i = 0; i < this.shopServ.getShoppingCartPeppes().length; i++) {

       let inputCostPeppes: number = parseInt(this.shopServ.getShoppingCartPeppes()[i].price);
       this.totalCostPeppes += inputCostPeppes;

      }

      for (var i = 0; i < this.shopServ.getShoppingCartBigHorn().length; i++) {

       let inputCostBigHorn: number = parseInt(this.shopServ.getShoppingCartBigHorn()[i].price);
       this.totalCostBigHorn += inputCostBigHorn;

      }
    }
  

   modalDismiss() {
    this.viewCtrl.dismiss(this);
  }

}
