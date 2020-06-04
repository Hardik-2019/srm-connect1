import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import {Http} from '@angular/http';


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

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NeweventPage');
  }
back(){
  this.navCtrl.push(HomePage);
}
next(){
  var body= {
    title:this.title,
    venue:this.venue,
    //link:this.link,
    desc:this.desc,
    date:this.date
  }
  this.http.post('http://localhost:3000/uploadevent',body).subscribe(res =>{
    console.log("success")
  })                    

this.navCtrl.pop();
}
}
