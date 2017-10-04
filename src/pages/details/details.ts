import { Component, OnInit, ElementRef,ViewChild , NgZone  } from '@angular/core';
import { NavController, ModalController, NavParams, Content } from 'ionic-angular';
import { RentPage } from '../rent/rent';
import { MapModal } from '../modal-page/modal-page';
import { ShareModal } from '../share-modal/share-modal';


@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class Details implements OnInit {

  @ViewChild(Content) content: Content;
  @ViewChild("contentRef") contentHandle: Content;

  showFooter= false;
  rentPage = RentPage;
  private topOrBottom: String;
  private contentBox;
  private tabBarHeight;
  like: any;
 
  constructor(public navCtrl: NavController, public navParams: NavParams, public myElement: ElementRef, public modalCtrl: ModalController, public zone:NgZone)  {} 

    ngOnInit(){
            this.toggle_footer(false);
    }
    toggle_footer(show){
        if(show){
        document.querySelector(".detFooter")['style'].display = 'block';
        document.querySelector("page-details .scroll-content")['style'].marginBottom = '50px';
        document.querySelector("page-details .fixed-content")['style'].marginBottom = '50px';
        this.zone.run(()=>{
          this.showFooter = true;
        })
        
        }else{
          document.querySelector(".detFooter")['style'].display = 'none';
          document.querySelector("page-details .scroll-content")['style'].marginBottom = 0;
          document.querySelector("page-details .fixed-content")['style'].marginBottom = 0;
          this.zone.run(()=>{
          this.showFooter = false;
          })
        }
    }

    goto(){
      this.content.scrollToBottom(300);//300ms animation speed
    }

    detect_position(){
        if(this.content.scrollTop > document.querySelector('body').offsetHeight  -100) {
          return true;
        }
        else return false;
    }
    scrollingFun(e){
        if(e.scrollTop > this.contentHandle.getContentDimensions().contentHeight - 200){
        this.toggle_footer(true);
      } else{
          this.toggle_footer(false);
      }
    }

    presentModal() {
      let modal = this.modalCtrl.create(MapModal);
      modal.present();
    }

    presentShare() {
      let Share = this.modalCtrl.create(ShareModal);
      Share.present();
    }

    ActiveLike(){
      this.like = !this.like;
    }
 
}