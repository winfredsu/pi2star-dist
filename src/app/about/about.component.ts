import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IpFromCNService } from '../ip-from-cn.service';
declare var $: any;
declare var AMap: any;

@Component({
	moduleId: module.id,
	selector: 'nvlabs-about',
	templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {
	ipFromCN: boolean=false;
	lat: number = 40.113126;
	lng: number = 116.629632;
	zoom: number = 13;
  styleArray = [{
      featureType: "all",
      stylers: [{
          saturation: -80
      }]
  }, {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [{
          hue: "#00ffee"
      }, {
          saturation: 50
      }]
  }, {
      featureType: "poi.business",
      elementType: "labels",
      stylers: [{
          visibility: "off"
      }]
  }];

	constructor( 
		private ipFromCNService: IpFromCNService,
		title: Title
		) {
		title.setTitle('关于我们 | 集能芯成');
	}

	ngOnInit(): void {
		this.ipFromCN = this.ipFromCNService.ipFromCN();

		let amap = new AMap.Map('map-cn',{
	    zoom: 13,
	    center: [116.629632,40.113126]//new AMap.LngLat(116.39,39.9)
		});
		let marker = new AMap.Marker({
			map: amap
		});

		$("#sponsor-list").owlCarousel({
			loop: true,
			margin: 50,
			autoplay: true,
			autoplayTimeout: 2500,
			autoWidth: true,
			items: 4
		});
	}
}

