import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ForumPage } from '../forum/forum';
import {Http} from '@angular/http';
import {Storage} from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {
  details=[];
  category=""
  question=""
  desc=""
  username:any
  uid:any
  
  constructor(public navCtrl: NavController,
              public navParams: NavParams, 
              public http: Http, public storage: Storage) {
                this.storage.set('status','true');
                this.storage.get('userid').then((val1)=>{
                  this.uid =val1;
                })
                this.storage.get('uname').then((val2)=>{
                  this.username =val2;
                })
    console.log(this.uid);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }


  Submit(){
    if(this.category!=""&&this.desc!=""&&this.question!=""){

                          var body= {
                            username: this.username,
                            question: this.question,
                            date: new Date().toDateString(),
                            questiontitle: this.question,
                            userid: this.uid,
                            description: this.desc,
                            time: new Date().toTimeString(),
                            qtype: this.category
                          }
                          this.http.post('http://localhost:3000/uploadquestion',body).subscribe(res =>{
                            console.log("success")
                          })                    
      
      this.navCtrl.pop();
    }
    }
    next1(){
      this.navCtrl.push(ForumPage);
    }
  }