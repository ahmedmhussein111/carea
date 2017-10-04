import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { List } from '../list/list';
import { MapModal } from '../modal-page/modal-page';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
//import {HallService} from '../../services/HallService'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {

  expanded: Boolean;
  grid: Array<any>;
  districts: Array<any>;
  list = List;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public http: Http) {
    this.expanded = true;

    this.http.get('http://www.careaweb.com/api/Workshop/GetTypes').subscribe(data => {
        this.grid = data.json().Object;
        console.log(this.grid);
   //     debugger;
    });

    this.http.get('http://www.careaweb.com/api/Workshop/GetDistricts?CityId=1').subscribe(data => {
        this.districts = data.json().Object;
        console.log(this.districts);
        //     debugger;
    });
   
   // this.grid = [{img: 'assets/img/01.png', title: 'apartment', icon: 'ios-home-outline'}, {img: 'assets/img/02.png', title: 'wedding hall', icon: 'ios-bowtie-outline'}, {img: 'assets/img/03.png', title: 'shop', icon: 'ios-shirt-outline'}, {img: 'assets/img/04.png', title: 'rent', icon: 'ios-headset-outline'},{img: 'assets/img/01.png', title: 'apartment', icon: 'ios-home'}, {img: 'assets/img/02.png', title: 'wedding hall', icon: 'ios-bowtie'}, {img: 'assets/img/03.png', title: 'shop', icon: 'md-cart'}, {img: 'assets/img/04.png', title: 'rent', icon: 'md-headset'},{img: 'assets/img/01.png', title: 'apartment', icon: 'ios-home'}, {img: 'assets/img/02.png', title: 'wedding hall', icon: 'ios-bowtie'}, {img: 'assets/img/03.png', title: 'shop', icon: 'md-cart'}, {img: 'assets/img/04.png', title: 'rent', icon: 'md-headset'}]
  }

  presentModal() {
    let modal = this.modalCtrl.create(MapModal);
    modal.present();
  }

    

}
