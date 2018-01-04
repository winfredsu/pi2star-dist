var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef, HostListener } from '@angular/core';
// import { DOCUMENT } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
var AppComponent = /** @class */ (function () {
    function AppComponent(
        // @Inject(DOCUMENT) private document: Document,
        // @ViewChild('navbarFixedTop') private elNavbarFixedTop: ElementRef,
        el, router) {
        this.el = el;
        this.router = router;
    }
    AppComponent.prototype.addClass = function (className) {
        this.el.nativeElement.classList.add(className);
    };
    AppComponent.prototype.removeClass = function (className) {
        this.el.nativeElement.classList.remove(className);
    };
    AppComponent.prototype.hide = function () {
        $('.navbar-collapse.in').collapse('hide');
    };
    AppComponent.prototype.onScroll = function () {
        this.hide();
    };
    AppComponent.prototype.ngOnInit = function () {
        this.addClass('page-on-scroll');
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    __decorate([
        HostListener('window:scroll', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "onScroll", null);
    AppComponent = __decorate([
        Component({
            moduleId: module.id,
            selector: 'nvlabs-app',
            templateUrl: './app.component.html'
        }),
        __metadata("design:paramtypes", [ElementRef,
            Router])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map