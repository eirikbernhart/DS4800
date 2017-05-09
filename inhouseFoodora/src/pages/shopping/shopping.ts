import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';


@Component({
  selector: 'page-shopping',
  templateUrl: 'shopping.html'
})
export class ShoppingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShoppingPage');
  }

   modalDismiss() {
    this.viewCtrl.dismiss(this);
  }

}
