import { Directive, ElementRef, HostListener, Input, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Directive({ selector: '[affix]' })
export class AffixDirective {

	constructor(
		@Inject(DOCUMENT) private document: Document,
		private el: ElementRef) {}

	@Input('affix') scrollOffset: number;
	@Input() affixTop: number;

	@HostListener('window:scroll', []) 
	onWindowScroll() {
		if (this.document.body.scrollTop > this.scrollOffset || this.document.documentElement.scrollTop > this.scrollOffset) {
			this.el.nativeElement.classList.add('affix');
			this.el.nativeElement.style.top = this.affixTop + 'px';
		} else {
			this.el.nativeElement.classList.remove('affix');
			this.el.nativeElement.style.top = '';
		}
	}
}

