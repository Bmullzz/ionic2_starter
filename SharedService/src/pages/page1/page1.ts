import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../services/user';
import { Page2 } from '../page2/page2';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
	private user:any;
	private nav:any;
  constructor(user:UserService, nav:NavController) {
		console.log(user.name);
		this.user = user;
		this.nav = nav;
	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page1Page');
  }

	goToPage2(){
		this.nav.push(Page2);
	}
}
