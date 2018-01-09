import { Component, ElementRef, OnInit, HostListener } from '@angular/core';
// import { DOCUMENT } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { IpFromCNService } from './ip-from-cn.service';
import 'rxjs/add/operator/map';

declare var $: any;

@Component({
	moduleId: module.id,
	selector: 'pi2star-app',
	templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
	constructor(
		// @Inject(DOCUMENT) private document: Document,
		// @ViewChild('navbarFixedTop') private elNavbarFixedTop: ElementRef,
		private el: ElementRef,
		private router: Router,
		private ipFromCNService: IpFromCNService ) {}

	public addClass(className: string) {
		this.el.nativeElement.classList.add(className);
	}

	public removeClass(className: string) {
		this.el.nativeElement.classList.remove(className);
	}

	hide() {
		$('.navbar-collapse.in').collapse('hide');
	}

	@HostListener('window:scroll', [])
	onScroll() {
		this.hide();
	}

	ngOnInit() {
		this.addClass('page-on-scroll');
		this.router.events.subscribe((evt) => {
			if (!(evt instanceof NavigationEnd)) {
				return;
			}
			window.scrollTo(0, 0)
		});
		this.ipFromCNService.getIpInfo();
	}
}
