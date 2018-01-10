import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
	moduleId: module.id,
	selector: 'pi2star-solution',
	templateUrl: './solution.component.html'
})
export class SolutionComponent {
	constructor(title: Title) {
		title.setTitle('解决方案 | 集能芯成');
	}
}