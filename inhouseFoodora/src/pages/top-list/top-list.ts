import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';
//import { ListItem } from '../top-list/list-item';
import { DetailsPage } from '../details-page/details-page';
import { DomSanitizer } from '@angular/platform-browser';


import { Dish } from '../details-page/dish';


@Component({
  selector: 'top-list',
  templateUrl: 'top-list.html'
})
export class ToplistPage {

  public topList = [];
  public testPic = "http://pngimages.net/sites/default/files/ok-png-image-54396.png";

  constructor(
    public navCtrl: NavController, 
    public modalCtrl: ModalController,
    private sanitizer: DomSanitizer
    ) {
      this.topList.push(
          new Dish("Easy Rider", 134, "Tacokrydret kjøttdeig, saftige tomatskiver og rødløk.",
            "tacoPizza.jpg", 3.800, 1),
          new Dish("New York Strip", 379, 
            "Marmorert ytrefilet med fett lokk, spesielt ettertraktet for sin unike smak! Med aspargesbønner, rødløk, ferske gulrotstaver og valgfrie poteter.",
            "newYorkStrip.jpg", 3.100, 2),
          new Dish("Heavy Heaven", 160,"Pepperoni, hvitløkskrydrede kjøttboller, marinert biffkjøtt, rødløk og oregano.",
             "heavyHeaven.jpg", 2.800, 3)
        );
  }

  goToSuggested(dish){
    let modal = this.modalCtrl.create(DetailsPage, {
      dish});
    modal.present();
  }

}
