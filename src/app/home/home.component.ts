import { Component, OnInit, HostListener, Inject, Input, OnDestroy  } from '@angular/core';
import { DOCUMENT, Title } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { MdDialog, MdDialogRef } from '@angular/material';
import { IpFromCNService } from '../ip-from-cn.service';

@Component({
	moduleId: module.id,
	selector: 'nvlabs-home',
	templateUrl: './home.component.html'
	// styleUrls: ['./app.component.css']	
})
export class HomeComponent implements OnInit, OnDestroy {
	height: number;
	constructor(
		public dialog: MdDialog,
		private ipFromCNService: IpFromCNService,
		@Inject(DOCUMENT) private document: Document,
		@Input('AppComponent') private appComponent: AppComponent, 
		private title: Title) {
		title.setTitle('NVLabs');
	}

	@HostListener('window:scroll', [])
	onWindowScroll() {
		if (this.document.body.scrollTop > 60 || this.document.documentElement.scrollTop > 60) {
			// add a page-on-scroll class to header 
			this.appComponent.addClass('page-on-scroll');
		} else {
			// remove page-on-scroll class 
			this.appComponent.removeClass('page-on-scroll');
		}
	}

	@HostListener('window:resize', ['$event'])
	onResize(event: any) {
	  this.height = event.target.innerHeight; 
	}

	ngOnInit() {
		this.appComponent.removeClass('page-on-scroll');
		this.height = window.innerHeight;
	}

	ngOnDestroy() {
		this.appComponent.addClass('page-on-scroll');
	}

  openDialog(): void {
  	if (this.ipFromCNService.ipFromCN()) {
  		let dialogRef = this.dialog.open(NVPOneMinuteDialogCN, {
			width: '990px',
			height: 'auto'
  		});
  	} else {
  		let dialogRef = this.dialog.open(NVPOneMinuteDialog, {
			width: '990px',
			height: 'auto'
  		});
  	}
	}
}

@Component({
	moduleId: module.id,
	selector: 'nvp-one-minute-dialog',
	templateUrl: './nvp-one-minute-dialog.html'
})
export class NVPOneMinuteDialog {
	  constructor(
    public dialogRef: MdDialogRef<NVPOneMinuteDialog>,
    ){}
}

@Component({
	moduleId: module.id,
	selector: 'nvp-one-minute-dialog-cn',
	templateUrl: './nvp-one-minute-dialog-cn.html'
})
export class NVPOneMinuteDialogCN {
	  constructor(
    public dialogRef: MdDialogRef<NVPOneMinuteDialogCN>,
    ){}
}