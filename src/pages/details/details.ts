import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http} from '@angular/http'
import {Storage} from '@ionic/storage'
import {ForumPage} from '../forum/forum'

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  value:any
  searchQuery: string=''; 
  upvotes=32
  downvotes=0
  username=""
  check1: boolean=false
  check: boolean=false
  today = Date.now();
  d= new Date();
  answer="";
  comments: any;
  uid : any
  aname="Aayush Saxena"
  atime="19th Feb, 2019 16:34pm"
  items: any;
  upcheck: any;
  xx:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public http: Http, public storage:Storage) {
                this.value=navParams.get("detail")
          
    this.storage.get('userid').then((val1)=>{
      this.uid =val1;
    })
    this.storage.get('uname').then((val1)=>{
      this.username =val1;
    })
  }
  
  submit(){
    if(this.answer!=""){

      var body= {
          questionid : this.value.questionid,
          date: new Date().toDateString(),
          userid: this.uid,
          answer: this.answer,
          time: new Date().toTimeString()  ,
          username: this.username
        }
      this.http.post('http://localhost:3000/answers',body).subscribe(res =>{
           console.log("success")
      })               

      this.http.post('http://localhost:3000/disanswers',body).subscribe(res=>{
      this.comments = res.json();
      console.log(this.comments);
    },err =>{
      console.log("Server Down")
    })
  
    }
    this.answer="";

    this.http.post('http://localhost:3000/inc_count',body).subscribe(res=>{
      
    })
 
  }

  Delete(i:number){
    var body= {
      answer : this.comments[i].answers,
      questionid : this.comments[i].questionid
    }
    this.http.post('http://localhost:3000/delanswer',body).subscribe(res=>{
    
      },err =>{
        console.log("Server Down")
    })
    this.http.post('http://localhost:3000/dec_count',body).subscribe(res=>{
      
    })
    this.ionViewWillEnter();
  }

  Answer(){
    this.check1=!(this.check1);
  }
  ionViewWillEnter() {
    var body= {
      questionid : this.value.questionid
    }
this.http.post('http://localhost:3000/disanswers',body).subscribe(res=>{
this.comments = res.json();
console.log(this.comments);
},err =>{
console.log("Server Down")
})
var body1 = {
userid:this.uid
}
this.http.post('http://localhost:3000/upvote',body1).subscribe(res=>{
this.items = res.json();
console.log(this.items);
},err =>{
console.log("Server Down")
})

  }
upvote(answerid){
  var body = {
userid:this.uid,
answerid:answerid

  }
  this.http.post('http://localhost:3000/doupvote',body).subscribe(res =>{
    
    if(res.json().status==500){
      
      var body = {
        userid:this.uid,
        answerid:answerid
      }
      this.http.post('http://localhost:3000/delupvote',body).subscribe(res=>{
        console.log(res.json())
        this.xx="0"
      })
    
    }else{this.xx="1";}
  
      })
  console.log(answerid , this.uid)
}
next1(){
  this.navCtrl.push(ForumPage);
}
} 