import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Home } from '../home/home';


@Component({
  selector: 'page-rent',
  templateUrl: 'rent.html'
})
export class RentPage {

  home = Home;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

}
