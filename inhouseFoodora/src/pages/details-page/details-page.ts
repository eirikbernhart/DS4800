import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { MockedDishes } from '../details-page/mocked-dishes';


@Component({
  selector: 'page-details-page',
  templateUrl: 'details-page.html'
})
export class DetailsPage {

  public dish;

  public dishName: string = "EASY RIDER";
  public extraInfo: string = "Tacokrydret kjøttdeig, saftige tomatskiver og rødløk.";

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public viewCtrl: ViewController,
    public mockedDishes: MockedDishes,
    public inputData: NavParams,
    private sanitizer: DomSanitizer,
    public toast: ToastController
    ) {
      this.dish = this.inputData.get('dish');
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPagePage');
    //console.log("Hva er dish nå: " + this.dish.name);
  }

  modalDismiss() {
    this.viewCtrl.dismiss();
  }

  likeDish(){
    this.dish.rating = this.dish.rating + 0.1;
  }

  addToCart() {
     let toast = this.toast.create({
      message: this.dishName + " er lagt til handle kurv!",
      duration: 1500,
      position: "middle",
      cssClass: "toastSuccess",
    });
    toast.present();
  }


  
}
