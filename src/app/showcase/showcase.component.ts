import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { IpFromCNService } from '../ip-from-cn.service';

@Component({
	moduleId: module.id,
	selector: 'pi2star-showcase',
	templateUrl: './showcase.component.html'
})
export class ShowcaseComponent {
	constructor( router: Router, title: Title ) {
		if ( router.url === '/showcase') {
			title.setTitle('行业应用 | 集能芯成');
		}
	}	
}

@Component({
	moduleId: module.id,
	selector: 'nvlabs-self-powered-wearables',
	templateUrl: './self-powered-wearables.component.html'
})
export class SelfPoweredWearablesComponent {
	ipFromCN: boolean = false;
	constructor(ipFromCNService: IpFromCNService) {
		this.ipFromCN = ipFromCNService.ipFromCN();
	}
}

@Component({
	moduleId: module.id,
	selector: 'nvlabs-transient-computing',
	templateUrl: './transient-computing.component.html'
})
export class TransientComputingComponent {
	ipFromCN: boolean = false;
	constructor(ipFromCNService: IpFromCNService) {
		this.ipFromCN = ipFromCNService.ipFromCN();
	}
}

@Component({
	moduleId: module.id,
	selector: 'nvlabs-low-power-iot',
	templateUrl: './low-power-iot.component.html'
})
export class LowPowerIoTComponent {

}
