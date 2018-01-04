import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MdDialog, MdDialogRef } from '@angular/material';
declare var $: any;

@Component({
	moduleId: module.id,
	selector: 'nvlabs-platform',
	templateUrl: './platform.component.html'
})
export class PlatformComponent implements OnInit {
	navAffix: number;
	titleMinHeight: number;
	navMinHeight: number;
	navWidth: number;
	navTop: number;

	@ViewChild('title') elTitle: ElementRef;
	@ViewChild('intro') elIntro: ElementRef;
	@ViewChild('nav') elNav: ElementRef;
	@ViewChild('titleWrapper') elTitleWrapper: ElementRef;
	constructor(title: Title, public dialog: MdDialog) {
		title.setTitle('Platform | NVLabs');
	}

	ngOnInit(): void {
		$('#carouselPlatform').owlCarousel({
			items: 1,
			autoplay: true,
			dots: false,
			loop: true,
			autoplayHoverPause: true,
			autoplayTimeout: 7500,
			autoplaySpeed: 500,
			URLhashListener: true,
			startPosition: 'URLHash'
		});

		this.calcTitleMinHeight();
		this.calcNavMinHeight();
		this.calcNavWidth();
		//this.calcNavAffix();
		setTimeout(()=>{ this.calcNavAffix(); }, 500 );
	}

	goToSlide(id: number) {
		$('#carouselPlatform').trigger("to.owl.carousel", [id, 500, true]);
	}

	@HostListener('window:resize', []) 
	onResize() {
		this.calcTitleMinHeight();
		this.calcNavMinHeight();
		this.calcNavWidth();

		this.calcNavAffix();
	}
	
	private calcNavAffix() {
		this.navAffix = this.elIntro.nativeElement.offsetHeight+130;

		// console.log('platform navAffix:' + this.navAffix);
		this.navTop = this.elTitle.nativeElement.offsetHeight+97;
	}

	private calcTitleMinHeight() {
		this.titleMinHeight = this.elTitle.nativeElement.offsetHeight+20;
	}

	private calcNavMinHeight() {
		this.navMinHeight = this.elNav.nativeElement.offsetHeight;
	}

	private calcNavWidth() {
		this.navWidth = this.elTitleWrapper.nativeElement.offsetWidth;
	}

	openDialog(): void {
		let dialogRef = this.dialog.open(BuyNowDialog, {
			width: '700px',
			height: 'auto'
		});
	}

}

@Component({
	moduleId: module.id,
	selector: 'buy-now-dialog',
	templateUrl: './buy-now-dialog.html'
})
export class BuyNowDialog {
	constructor(
		public dialogRef: MdDialogRef<BuyNowDialog>,
	){}
}

@Component({
	moduleId: module.id,
	selector: 'nvlabs-platform-overview',
	templateUrl: './platform-overview.component.html'
})
export class PlatformOverviewComponent {

}

@Component({
	moduleId: module.id,
	selector: 'nvlabs-platform-techspecs',
	templateUrl: './platform-techspecs.component.html'
})
export class PlatformTechspecsComponent {

}

@Component({
	moduleId: module.id,
	selector: 'nvlabs-platform-getting-started',
	templateUrl: './platform-getting-started.component.html'
})
export class PlatformGettingStartedComponent {

}

@Component({
	moduleId: module.id,
	selector: 'nvlabs-platform-downloads',
	templateUrl: './platform-downloads.component.html'
})
export class PlatformDownloadsComponent {

}
