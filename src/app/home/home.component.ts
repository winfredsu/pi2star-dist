import { Component, OnInit, HostListener, Inject, Input, OnDestroy  } from '@angular/core';
import { DOCUMENT, Title } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
	moduleId: module.id,
	selector: 'pi2star-home',
	templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {
	height: number;
	constructor(
		public dialog: MatDialog,
		@Inject(DOCUMENT) private document: Document,
		@Input('AppComponent') private appComponent: AppComponent, 
		private title: Title) {
		title.setTitle('集能芯成');
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
  		let dialogRef = this.dialog.open(IntroVideoDialog, {
			width: '990px',
			height: 'auto'
  		});
	}
}

@Component({
	moduleId: module.id,
	selector: 'intro-video',
	templateUrl: './intro-video.html'
})
export class IntroVideoDialog {
	  constructor(
    public dialogRef: MatDialogRef<IntroVideoDialog>,
    ){}
}
