import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { SignupPage } from '../signup/signup';
import { EventsPage } from '../events/events';
import { Http }from '@angular/http';
import { Storage }from '@ionic/storage';
import { ForgotpassPage }from '../forgotpass/forgotpass';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private log: FormGroup;
  name1:any;
  pas1:any;
  token:any;
  userid:any;
 
  constructor(public navCtrl: NavController, private formBuilder: FormBuilder, public navParams: NavParams,public http:Http,public storage:Storage) {
    this.log = this.formBuilder.group({
      username: ['',[Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    }, {});
 
  }
next(){
  this.navCtrl.push(SignupPage);
}
next1(){
  let body = {
    name1:this.name1,
    pas1:this.pas1
  }
  this.http.post('http://localhost:3000/passcheck',body).subscribe(response=>{console.log(response.json())
        
  if(response.json().status==400){
    alert("Password incorrect");
  }
  else{
    this.token=response.json().token;
    this.userid = response.json().result;
    console.log("your id : ",this.userid);
    console.log("your id : ",this.name1);
    console.log(this.token);
    this.storage.set('token', this.token );
    this.storage.set('userid', this.userid );
    this.storage.set('uname',this.name1);
  this.navCtrl.setRoot(EventsPage);
  //this.storage.set('status','true');
  }
  })
  }

logForm() {
  console.log(this.log.value);
}
forgot(){
  this.navCtrl.push(ForgotpassPage);
}
}
