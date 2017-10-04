import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Network } from 'ionic-native';
import { Platform } from 'ionic-angular';
 

import 'rxjs/add/operator/map';

/*
  Generated class for the ConnectivityProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ConnectivityProvider {

  onDevice: boolean;
  
   constructor(public platform: Platform){
     this.onDevice = this.platform.is('cordova');
   }
   

}
