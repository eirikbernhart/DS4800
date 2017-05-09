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
    console.log('ionViewDidLoad PreferencesPage');
    this.preferredDishes = this.navParams.get('param');
  }

  modalDismiss() {
    this.viewCtrl.dismiss(this.preferredDishes);
  }

  updateSuggestions() {

  }


  

}
