import { Component } from '@angular/core';
//import { Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HomePage } from '../home/home';
import { Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage { 
  name:any;
  em:any;
  pas:any;
  mob:any;
  reg:any;
  batch:any;
  course:any;
  dept:any;
  year:any;
  private sup: FormGroup;
  unpattern="^(?=.*[A-Z])(?=.*[a-z]).{3,15}$";
  paspattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$";
  mobpattern="^[0-9]{10}$";
  regpattern="^[A-Z]{2}[0-9]{13}$";
 
  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder,public http:Http) {
    this.sup = this.formBuilder.group({
      username: ['',[Validators.required,Validators.pattern(this.unpattern)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      mobile: ['', [Validators.required, Validators.min(6000000000), Validators.max(9999999999) ,Validators.pattern(this.mobpattern)]],
      regno: ['',[Validators.required,Validators.pattern(this.regpattern)]],
      batch: ['',[Validators.required]],
      course: ['',[Validators.required,Validators.pattern(this.unpattern)]],
      dept: ['',[Validators.required]],
      year:['',[Validators.required]]
    }, {});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  supForm() {
    console.log(this.sup.value);
  }
  next() {
  this.navCtrl.push(HomePage);
  this.navCtrl.setRoot(HomePage);
  }
  store(){
    let userdata={
    name: this.name,
    em:this.em,
    pas:this.pas,
    mob:this.mob,
    reg:this.reg,
    batch:this.batch,
    dept:this.dept,
    course:this.course,
    year:this.year
  }
  this.http.post('http://localhost:3000/signup',userdata).subscribe(res=>{
        
  })

  this.navCtrl.push(HomePage);
  this.navCtrl.setRoot(HomePage);

}

}

