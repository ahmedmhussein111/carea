import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Home } from '../home/home';



@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class Register {

  home = Home;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

}
