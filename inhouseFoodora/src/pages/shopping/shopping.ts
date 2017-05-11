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
    //this.shoppingCart.push(this.shopServ.getShoppingCart());
    

    for (var i = 0; i < this.shopServ.getShoppingCart().length; i++) {
      //let inputCost: number = parseInt(this.shopServ.getShoppingCart()[i].price);
      //this.totalCost = inputCost + this.totalCost;
      //console.log("Hva er denne seller driiiten da: " + this.shopServ.getShoppingCart()[i].seller)

      if(this.shopServ.getShoppingCart()[i].seller == "peppes") {
        this.shoppingCartPeppes.push(this.shopServ.getShoppingCartPeppes())
        let inputCostPeppes: number = parseInt(this.shopServ.getShoppingCartPeppes()[i].price);
        this.totalCostPeppes = inputCostPeppes + this.totalCostPeppes;
      } 

      if(this.shopServ.getShoppingCart()[i].seller == "bighorn")
        this.shoppingCartBigHorn.push(this.shopServ.getShoppingCartBigHorn())
        let inputCostBigHorn: number = parseInt(this.shopServ.getShoppingCartBigHorn()[i].price);
        this.totalCostBigHorn = inputCostBigHorn + this.totalCostBigHorn;
      }
    }
  

   modalDismiss() {
    this.viewCtrl.dismiss(this);
  }

}
