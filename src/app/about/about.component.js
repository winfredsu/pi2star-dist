var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
var AboutComponent = /** @class */ (function () {
    function AboutComponent(title) {
        this.lat = 40.005217;
        this.lng = 116.336007;
        this.zoom = 13;
        this.styleArray = [{
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
        title.setTitle('About | NVLabs');
    }
    AboutComponent.prototype.ngOnInit = function () {
        $("#sponsor-list").owlCarousel({
            loop: true,
            margin: 50,
            autoplay: true,
            autoplayTimeout: 2500,
            autoWidth: true,
            items: 4
            //responsive: {
            //0: { 
            //items: 2
            //},
            //768: {
            //items: 3
            //},
            //1200: {
            //items: 4
            //}
            //}
        });
    };
    AboutComponent = __decorate([
        Component({
            moduleId: module.id,
            selector: 'nvlabs-about',
            templateUrl: './about.component.html'
        }),
        __metadata("design:paramtypes", [Title])
    ], AboutComponent);
    return AboutComponent;
}());
export { AboutComponent };
//# sourceMappingURL=about.component.js.map