import { Component, OnInit, ViewChild, ElementRef, HostListener, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'nvlabs-simulator',
	templateUrl: './simulator.component.html'
})
export class SimulatorComponent implements OnInit{
	titleAffix: number;
	navAffix: number;
	titleMinHeight: number;
	navMinHeight: number;
	navWidth: number;
	navTop: number;
	@ViewChild('title') elTitle: ElementRef;
	@ViewChild('intro') elIntro: ElementRef;
	@ViewChild('nav') elNav: ElementRef;
	@ViewChild('titleWrapper') elTitleWrapper: ElementRef;
	constructor(title: Title) {
		title.setTitle('Simulator | NVLabs');
	}

	ngOnInit() {
		this.titleAffix = 60;
		this.calcNavAffix();
		this.calcTitleMinHeight();
		this.calcNavMinHeight();
		this.calcNavWidth();
	}

	@HostListener('window:resize', []) 
	onResize() {
		this.calcNavAffix();
		this.calcTitleMinHeight();
		this.calcNavMinHeight();
		this.calcNavWidth();
	}
	
	private calcNavAffix() {
		this.navAffix = this.elIntro.nativeElement.offsetHeight + 130;

		this.navTop = this.elTitle.nativeElement.offsetHeight + 97;
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
}

@Component({
	moduleId: module.id,
	selector: 'nvlabs-simulator-overview',
	templateUrl: './simulator-overview.component.html'
})
export class SimulatorOverviewComponent {

}

@Component({
	moduleId: module.id,
	selector: 'nvlabs-simulator-getting-started',
	templateUrl: './simulator-getting-started.component.html'
})
export class SimulatorGettingStartedComponent {

}

@Component({
	moduleId: module.id,
	selector: 'nvlabs-simulator-concept-and-structure',
	templateUrl: './simulator-concept-and-structure.component.html'
})
export class SimulatorConceptAndStructureComponent implements OnInit {
  constructor( 
		private route: ActivatedRoute, 
		private router: Router,
		@Input('SimulatorComponent') private simulatorComponent: SimulatorComponent
		){}
	
	offset: number;
	
	ngOnInit() {
		
		this.router.events.subscribe(s => {
			if (s instanceof NavigationEnd) {
				const tree = this.router.parseUrl(this.router.url);
				if (tree.fragment) {
					const element = document.querySelector("#" + tree.fragment);
					if (element) {
						this.offset = this.simulatorComponent.titleMinHeight + this.simulatorComponent.navMinHeight + 77;
						element.scrollIntoView();
						window.scrollBy(0, -this.offset);
					}
				}
			}
		});
	}
  onAnchorClick ( ) {
    this.route.fragment.subscribe ( f => {
      const element = document.querySelector ( "#" + f );
      if ( element ) {
				this.offset = this.simulatorComponent.titleMinHeight + this.simulatorComponent.navMinHeight + 77;
				element.scrollIntoView ();
				window.scrollBy(0, -this.offset);
			}
    });
  }
}

@Component({
	moduleId: module.id,
	selector: 'nvlabs-simulator-example',
	templateUrl: './simulator-example.component.html'
})
export class SimulatorExampleComponent {

}
