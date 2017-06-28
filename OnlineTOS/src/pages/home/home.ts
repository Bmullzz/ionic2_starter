import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Platform } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
	providers: [InAppBrowser]
})
export class HomePage {

	public readTOS:Boolean = false;

  constructor(public navCtrl: NavController, private platform:Platform, private iab:InAppBrowser) {}

	openTOS(){
		this.readTOS = !this.readTOS;
		this.platform.ready().then(() => {
			let ref = this.iab.create("https://ionic.io/tos");
		});
	}
}
