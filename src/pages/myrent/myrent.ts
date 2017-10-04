import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-myrent',
  templateUrl: 'myrent.html'
})
export class Myrent {

  list: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.list=[{img: 'assets/img/11.png', title: 'Stylish house'}, {img: 'assets/img/22.png', title: 'Big Houses'}, {img: 'assets/img/33.png', title: 'Big Houses'}, {img: 'assets/img/11.png', title: 'Stylish house'},{img: 'assets/img/11.png', title: 'Stylish house'}, {img: 'assets/img/22.png', title: 'Big Houses'}, {img: 'assets/img/33.png', title: 'Big Houses'}, {img: 'assets/img/11.png', title: 'Stylish house'}]

  }

  removeItem(item){
    for(var i = 0; i < this.list.length; i++) {
 
      if(this.list[i] == item){
        this.list.splice(i, 1);
      }
 
    }
  }

}
