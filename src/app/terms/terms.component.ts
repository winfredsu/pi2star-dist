import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
	moduleId: module.id,
	selector: 'nvlabs-terms-and-conditions',
	templateUrl: './terms.component.html'
})
export class TermsComponent {
	constructor(title:Title){
		title.setTitle('Terms & Conditions | NVLabs');
	}
}
