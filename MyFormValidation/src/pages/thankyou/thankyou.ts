import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MyFormService } from '../../services/myform';

@Component({
  selector: 'page-thankyou',
  templateUrl: 'thankyou.html'
})
export class ThankyouPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public formData: MyFormService) {
	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThankyouPage');
  }

}
