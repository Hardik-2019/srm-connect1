import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HomePage } from '../home/home';
import { Http }from '@angular/http';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-forgotpass',
  templateUrl: 'forgotpass.html',
})
export class ForgotpassPage {
  private log: FormGroup;
  private sup: FormGroup;
  unpattern="^(?=.*[A-Z])(?=.*[a-z]).{3,15}$";
  regpattern="^[A-Z]{2}[0-9]{13}$";
  paspattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$";
  regno:any;
  email:any;
  name:any;
  check1:boolean=false;
  pass1:any;
  pass2:any;

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder, public navParams: NavParams,public http:Http, public alertCtrl: AlertController) {
    this.log = this.formBuilder.group({
      name: ['',[Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      regno: ['',[Validators.required,Validators.pattern(this.regpattern)]],
    }, {});
    this.sup = this.formBuilder.group({
      password1: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required, Validators.minLength(6)]]
    }, {});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotpassPage');
  }

  next(){
    this.navCtrl.push(HomePage);
  }
  check(){
    let body = {
      name:this.name,
      email:this.email,
      regno:this.regno
    }
    this.http.post('http://localhost:3000/forgotpass',body).subscribe(response=>{
      console.log(response.json())
      if(response.json().length==0){
      const alert = this.alertCtrl.create({
        title: 'Invalid Credentials',
        buttons: ['OK']
      });
      alert.present();
    }
    else{
      this.check1=!(this.check1);
    }
  })
  }

  change(){
    if(this.pass1!=this.pass2){
      const alert = this.alertCtrl.create({
        title: 'Passwords does not match',
        buttons: ['OK']
      });
      alert.present();
    }
    else{
      let body={
        newpass: this.pass1
      }
      this.http.post('http://localhost:3000/forgotpass',body).subscribe(response=>{
        const alert = this.alertCtrl.create({
          title: 'Passwords changed successfully',
          buttons: ['OK']
        });
        alert.present();
        })
        this.navCtrl.push(HomePage);
    }
  }
}
