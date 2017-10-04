import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { allPages } from '../pages/common/declerations';

var APP_Pages = [];
  for(let i in allPages){
    APP_Pages.push(allPages[i]);
  }

  var config = {
      backButtonText: '',
      backButtonIcon: 'md-arrow-back',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      tabsPlacement: 'bottom',
      pageTransition: 'md',
      mode:'md'
    };

@NgModule({
  declarations: [
    MyApp,
    APP_Pages
  ],
  imports: [
    IonicModule.forRoot(MyApp,config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    APP_Pages
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
