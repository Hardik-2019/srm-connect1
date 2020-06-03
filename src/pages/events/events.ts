import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventformPage } from '../eventform/eventform';
import { HomePage } from '../home/home';
import { Http }from '@angular/http';
import { Storage }from '@ionic/storage';
import { SocialSharing } from '@ionic-native/social-sharing';

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {
  selectedSegment: string;
  events:any;
  favs: any;
  as:any;
  items:any;
  user:any;
  checkFav: boolean;
  result:any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http,public storage:Storage,private socialSharing:SocialSharing) {


    
  }
  ionViewWillEnter(){
    this.selectedSegment='all';
    this.storage.get('status').then(val=>{
      if (val=='true'){
        this.selectedSegment='all';
      }
      else{
        this.selectedSegment='interest';
      }
    })

   
  this.storage.set('status','true');
  
  this.storage.get('token').then((val)=>{
    console.log(val);
    this.as = val;
    console.log('token is ',this.as);
    let body  = {
      as:this.as
    }
    this.http.post('http://localhost:3000/disevents',body).subscribe(response =>{
      this.events=response.json();
        console.log(this.events);
    
  //  console.log((response.json()))
    if(response.json().status==500){
      alert("session expired");
      this.navCtrl.setRoot(HomePage);
    }
    else{
      if(response.json()!=null){
        this.items=response.json();
       
      }
      else{
        alert("failed");
      }
    }
    })

  })
  this.storage.get('userid').then((val1)=>{
    this.user =val1;
   
     let body ={userid:this.user}
    this.http.post('http://localhost:3000/fetchfavourites',body).subscribe(res=>{
    console.log(res.json()); 
    this.favs=res.json();
    console.log('value',this.favs);
    if(res.json()!=null){
      this.items=res.json();
    }
    else{
      alert("failed");
    }
    })

  })
    
  }
  ionViewDidLoad() {
    this.selectedSegment='all';
    console.log('ionViewDidLoad EventsPage');
  }
  next1(id){
    this.storage.set('id',id);
    this.navCtrl.push(EventformPage);
   }
   
   next2(eventid){
     let body={
       userid:this.user,
       eventid: eventid
     }
     this.http.post('http://localhost:3000/addfavourites',body).subscribe(res=>{
        console.log('done');
  });

    this.ionViewWillEnter();
   }
   
   Delete(eventid: any){
    let body={
      userid:this.user,
      eventid: eventid
    }
    this.http.post('http://localhost:3000/delfavourites',body).subscribe(res=>{
       console.log('done');
    });
    this.ionViewWillEnter();
   }

   all(){
     this.ionViewWillEnter();
     //console.log('current segment is ',this.selectedSegment)
   }
   share(){
    this.socialSharing.share('Message', 'Subject', 'http://www.ionicsync.com/images/logo.png', 'http://www.ionicsync.com').then(() => {

        console.log('Shared Successfully');

    }).catch(() => {

        console.log('Sharing Failed');

    });
};
}
