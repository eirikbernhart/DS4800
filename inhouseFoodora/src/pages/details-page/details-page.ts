import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';


@Component({
  selector: 'page-details-page',
  templateUrl: 'details-page.html'
})
export class DetailsPage {

  public dishName: string = "EASY RIDER";
  public extraInfo: string = "Tacokrydret kjøttdeig, saftige tomatskiver og rødløk.";

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPagePage');
  }

  modalDismiss() {
    this.viewCtrl.dismiss();
  }



}
