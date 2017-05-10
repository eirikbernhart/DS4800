import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController, ToastController } from 'ionic-angular';
import { PreferencesPage } from '../preferences/preferences';
import { LoginPage } from '../login/login';




@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  public modal;
  public modalData = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,  public viewCtrl: ViewController, public modalCtrl: ModalController, public toast: ToastController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  modalDismiss() {
    this.viewCtrl.dismiss();
  }

  openModalPref(){
    this.modal = this.modalCtrl.create(PreferencesPage, {param:  this.modalData});
    this.modal.onDidDismiss(data => {
      console.log("Data: " + data);
      this.modalData = data;
    })
      
    this.modal.present();
  }

  openLogin() {
    this.navCtrl.push(LoginPage);
    
  }

}
