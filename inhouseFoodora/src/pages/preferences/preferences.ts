import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-preferences',
  templateUrl: 'preferences.html'
})
export class PreferencesPage {

  public preferredDishes: string;
  public testPref: "pizza";
 

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public modal: ModalController
    ) {}

  ionViewDidLoad() {
    this.preferredDishes = this.navParams.get('param');
    /*if(this.navParams.get('param').toString() == "") {
          console.log('Da er den tom!!!');
    } else {
          this.preferredDishes = this.navParams.get('param');
          console.log('Da er den ikke tom!');
    }*/
  }

  modalDismiss() {
    this.viewCtrl.dismiss(this.preferredDishes);
  }

  updateSuggestions() {

  }


  

}
