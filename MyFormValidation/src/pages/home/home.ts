import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ThankyouPage } from '../thankyou/thankyou';
import { MyFormService } from '../../services/myform';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	private data: any;
	private isSubmitted: Boolean = false;

  constructor(public nav: NavController, public formData:MyFormService) {
		this.data = {
			name: '',
			phone: '',
			comment: '',
			tos: false
		}

  }

	onSubmit(myForm){
		this.isSubmitted = true;
		console.log('onSubmit');
		console.log(myForm);

		if ((myForm.valid) && (myForm.value.tos)){
			this.formData.name = this.data.name;
			this.formData.phone = this.data.phone;
			this.formData.comment = this.data.comment;
			this.nav.push(ThankyouPage);
		}
	}

	noSubmit(e){
		e.preventDefault();
	}
}
