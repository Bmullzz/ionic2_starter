import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ThankyouPage } from '../thankyou/thankyou';
declare var Stripe:any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	private token:string = '';
	private ngForm:any = {
		cc:'',
		cvc:'',
		month:'',
		year:''
	}
  constructor(public navCtrl: NavController) {
		Stripe.setPublishableKey("pk_test_6DHiWqcUTv1NWe8SeDbnThsH");
  }

	onSubmit(){
		console.log(this.ngForm);
		Stripe.card.createToken({
			number:this.ngForm.cc,
			cvc:this.ngForm.cvc,
			exp_month: this.ngForm.month,
			exp_year: this.ngForm.year
		},(status, response) => this.stripeResponseHandler(status, response))
	}

	stripeResponseHandler(status, response){
		if(response.error){
			//Show the errors on the form
			console.log('error');
			console.log(response.error.message);
		}else{
			//response contains id and card, which contains additional card details
			this.token = response.id;
			//Insert the toen into the form so it gets submitted to the server
			console.log('sucess');
			console.log('Sending token param:');
			console.log(this.token);
			this.navCtrl.push(ThankyouPage, {token: this.token});
		}
	}

}
