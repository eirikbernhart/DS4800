import { Component } from '@angular/core';
import { AboutPage } from '../about/about'
import { NavController, ModalController, ViewController } from 'ionic-angular';
import { PreferencesPage } from '../preferences/preferences';
import { SettingsPage } from '../settings/settings';
import { ShoppingPage } from '../shopping/shopping';
import { Suggestions } from '../home/suggestions';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  public preferredDishes: string;

  public modal;
  public modalData = [];

  public shoppingModal;
  public shoppingModalData = [];

  public suggestionList = [];
 

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public suggestions: Suggestions,
    public viewCtrl: ViewController
    
    ) {
      
  }

  ionViewDidEnter() {
    console.log('Data: ' + this.modalData);
    if(this.modalData.length < 0) {
        this.modalData = [];
      } else {
        this.modalData = this.modalData;
      }
    
  }
    

  goToDetail(){
    this.navCtrl.push(AboutPage);
  }

  openSettings() {
     this.modal = this.modalCtrl.create(SettingsPage, {param:  this.modalData});
     this.modal.onDidDismiss(data => {
      console.log("Data: " + data);
      this.modalData = data;
      
    })
     this.modal.present();
  }
  
  openModal(){
    this.modal = this.modalCtrl.create(PreferencesPage, {param:  this.modalData});
    this.modal.onDidDismiss(data => {
      console.log("Data: " + data);
      this.modalData = data;
    })
      
    this.modal.present();
  }

  openShoppingModal(){
    this.shoppingModal = this.modalCtrl.create(ShoppingPage, {param:  this.shoppingModalData});
    this.shoppingModal.onDidDismiss(data => {
      console.log("Data: " + data);
      this.shoppingModalData = data;
    })
      
    this.shoppingModal.present();
  }

}
