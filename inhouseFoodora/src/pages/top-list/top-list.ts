import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ListItem } from '../top-list/list-item';


@Component({
  selector: 'top-list',
  templateUrl: 'top-list.html'
})
export class ToplistPage {

  public topList = [];
  public testPic = "http://pngimages.net/sites/default/files/ok-png-image-54396.png";

  constructor(public navCtrl: NavController) {
      this.topList.push(
          new ListItem("Peppes", 1),
          new ListItem("Big Horn", 2)
        );
  }

}
