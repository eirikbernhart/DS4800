import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { DetailsPage } from '../details-page/details-page';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  dish: string = "pizza"

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  openModal(dish: string){
    let modal = this.modalCtrl.create(DetailsPage);
    modal.present();
  }


}
