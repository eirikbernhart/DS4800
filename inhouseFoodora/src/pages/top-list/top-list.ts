import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';
import { ListItem } from '../top-list/list-item';
import { DetailsPage } from '../details-page/details-page';


@Component({
  selector: 'top-list',
  templateUrl: 'top-list.html'
})
export class ToplistPage {

  public topList = [];
  public testPic = "http://pngimages.net/sites/default/files/ok-png-image-54396.png";

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
      this.topList.push(
          new ListItem("Peppes: Easy Rider", 1),
          new ListItem("Big Horn: Beef", 2)
        );
  }

  goToSuggested(item: string){
    let modal = this.modalCtrl.create(DetailsPage);
    modal.present();
  }

}
