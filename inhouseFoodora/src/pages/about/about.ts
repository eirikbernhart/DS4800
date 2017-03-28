import { Component } from '@angular/core';
import { NavController, ModalController, ViewController } from 'ionic-angular';
import { DetailsPage } from '../details-page/details-page';
import { MockedDishes } from '../details-page/mocked-dishes';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  category: string = "pizza"

  constructor(
    public navCtrl: NavController, 
    public modalCtrl: ModalController,
    public viewCtrl: ViewController,
    public mockedDishes: MockedDishes
    ) {

  }

  openModal(dish){
    let modal = this.modalCtrl.create(DetailsPage, {
      dish});
      
    modal.present();
  }


}
