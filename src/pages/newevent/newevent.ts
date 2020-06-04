import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventsPage } from '../events/events';
import {Http} from '@angular/http';
import { AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-newevent',
  templateUrl: 'newevent.html',
})
export class NeweventPage {
  title:any;
  venue:any;
  link:any;
  desc:any;
  date:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NeweventPage');
  }
back(){
  this.navCtrl.push(EventsPage);
}
next(){
  var body= {
    title:this.title,
    venue:this.venue,
    link:this.link,
    desc:this.desc,
    date:this.date
  }
  this.http.post('http://localhost:3000/uploadevent',body).subscribe(res =>{
    console.log("success")
  })     
  const alert = this.alertCtrl.create({
    title: 'Changes Saved',
    buttons: ['OK']
  });
  alert.present();               

this.navCtrl.pop();
}
}
