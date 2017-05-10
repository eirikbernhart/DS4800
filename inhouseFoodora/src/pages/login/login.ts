import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public toast: ToastController
    ){}

  ionViewDidLoad() {
    
  }

  fakeLogin() {
    this.navCtrl.push(TabsPage);
    let toast = this.toast.create({
      message: "Du er logget inn!",
      duration: 2699,
      position: "top"
    });
    toast.present();
  }

}
