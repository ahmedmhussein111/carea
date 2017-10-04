import { Component , Directive ,ViewChild } from '@angular/core';
import { Nav, NavController, NavParams } from 'ionic-angular';
import { Keyboard } from 'ionic-native';


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class Profile {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  focusInput(input){
    input.disabled=!input.disabled;
    if(!input.disabled){
      input.setFocus();
      Keyboard.show(); // Android Mobiles
    }
  }

}
