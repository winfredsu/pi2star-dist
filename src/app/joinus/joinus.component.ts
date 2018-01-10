import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
	moduleId: module.id,
	selector: 'pi2star-joinus',
	templateUrl: './joinus.component.html'
})
export class JoinusComponent {
	constructor(router: Router, title: Title) {
		if(router.url === '/explore') {
			title.setTitle('招贤纳士 | 集能芯成');
		}
	}
}
