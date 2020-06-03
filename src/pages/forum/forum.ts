import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing'
import { Http } from '@angular/http';
import {AddPage} from '../add/add'
import {DetailsPage} from '../details/details';
import {Storage} from '@ionic/storage'

@IonicPage()
@Component({
  selector: 'page-forum',
  templateUrl: 'forum.html',
})
export class ForumPage {
  searchQuery: string = ''
  csearch=0
  category=""
  cc: boolean=false;
  uid:any
  details: any;
  constructor(public navCtrl: NavController,
              private socialSharing: SocialSharing,
              public http: Http,
              public navParams: NavParams, public storage:Storage) {

                this.http.get('http://localhost:3000/disquestions').subscribe(res=>{
                    this.details = res.json();
                },err =>{
                    console.log("Server Down")
                })
                this.storage.set('status','true');
                this.storage.get('userid').then((val1)=>{
                  this.uid =val1;
                })
                
  }

  
  Share(){
    this.socialSharing.share("Hey! Check This Out!  ",
                             "SRM Connect Forum Question",
                             "",
                             "    https://drive.google.com/open?id=1HL-sjAZze8j-eBqbUWzCWpWQNiAdDtMn")
  }
  Details(i:number){
    this.navCtrl.push(DetailsPage,{
      detail:this.details[i]
    });
  }
  
  AddPage(){
    this.navCtrl.push(AddPage)
  }

  Search(){
    if(this.csearch==0)
      this.csearch=1;
    else 
      this.csearch=0;
  }

  Filter(category:string){
    var body={
      category: category
    }
    this.http.post('http://localhost:3000/filter',body).subscribe(res=>{
      this.details=res.json();
    })
  }

  onCancel(){
    this.http.get('http://localhost:3000/disquestions').subscribe(res=>{
                    this.details = res.json();
                },err =>{
                    console.log("Server Down")
                })
    
  }


  SearchString(term:string){
    var body={
      term:term
    }
    this.http.post('http://localhost:3000/search',body).subscribe(res=>{
      this.details=res.json();
    })
  }
  Delete(i:number){
    var body= {
      questionid : this.details[i].questionid
    }
    this.http.post('http://localhost:3000/delquestion',body).subscribe(res=>{
    
      },err =>{
        console.log("Server Down")
    })
    this.ionViewWillEnter();
  }

  ionViewWillEnter(){
    this.http.get('http://localhost:3000/disquestions').subscribe(res=>{
                    this.details = res.json();
                },err =>{
                    console.log("Server Down")
                })
  }

}
