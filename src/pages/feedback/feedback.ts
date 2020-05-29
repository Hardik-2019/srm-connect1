import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventsPage } from '../events/events';
import { Storage }from '@ionic/storage';
import { Http }from '@angular/http';
/**
 * Generated class for the FeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
})
export class FeedbackPage {
  title:any;
  feed:any;
  userid:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public storage: Storage,public http:Http) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbackPage');
  }
next(){
  this.storage.get('userid').then((val)=>{
    this.userid=val;
 let body={
   userid:this.userid,
   title:this.title,
   feed:this.feed
 }
 this.http.post('http://localhost:3000/feedback',body).subscribe(res=>{
         
 })
     })
     
this.navCtrl.push(EventsPage);
}
}