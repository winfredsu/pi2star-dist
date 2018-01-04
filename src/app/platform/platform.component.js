var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MdDialog, MdDialogRef } from '@angular/material';
var PlatformComponent = /** @class */ (function () {
    function PlatformComponent(title, dialog) {
        this.dialog = dialog;
        title.setTitle('Platform | NVLabs');
    }
    PlatformComponent.prototype.ngOnInit = function () {
        var _this = this;
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
        setTimeout(function () { _this.calcNavAffix(); }, 500);
    };
    PlatformComponent.prototype.goToSlide = function (id) {
        $('#carouselPlatform').trigger("to.owl.carousel", [id, 500, true]);
    };
    PlatformComponent.prototype.onResize = function () {
        this.calcTitleMinHeight();
        this.calcNavMinHeight();
        this.calcNavWidth();
        this.calcNavAffix();
    };
    PlatformComponent.prototype.calcNavAffix = function () {
        this.navAffix = this.elIntro.nativeElement.offsetHeight + 130;
        // console.log('platform navAffix:' + this.navAffix);
        this.navTop = this.elTitle.nativeElement.offsetHeight + 97;
    };
    PlatformComponent.prototype.calcTitleMinHeight = function () {
        this.titleMinHeight = this.elTitle.nativeElement.offsetHeight + 20;
    };
    PlatformComponent.prototype.calcNavMinHeight = function () {
        this.navMinHeight = this.elNav.nativeElement.offsetHeight;
    };
    PlatformComponent.prototype.calcNavWidth = function () {
        this.navWidth = this.elTitleWrapper.nativeElement.offsetWidth;
    };
    PlatformComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(BuyNowDialog, {
            width: '700px',
            height: 'auto'
        });
    };
    __decorate([
        ViewChild('title'),
        __metadata("design:type", ElementRef)
    ], PlatformComponent.prototype, "elTitle", void 0);
    __decorate([
        ViewChild('intro'),
        __metadata("design:type", ElementRef)
    ], PlatformComponent.prototype, "elIntro", void 0);
    __decorate([
        ViewChild('nav'),
        __metadata("design:type", ElementRef)
    ], PlatformComponent.prototype, "elNav", void 0);
    __decorate([
        ViewChild('titleWrapper'),
        __metadata("design:type", ElementRef)
    ], PlatformComponent.prototype, "elTitleWrapper", void 0);
    __decorate([
        HostListener('window:resize', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PlatformComponent.prototype, "onResize", null);
    PlatformComponent = __decorate([
        Component({
            moduleId: module.id,
            selector: 'nvlabs-platform',
            templateUrl: './platform.component.html'
        }),
        __metadata("design:paramtypes", [Title, MdDialog])
    ], PlatformComponent);
    return PlatformComponent;
}());
export { PlatformComponent };
var BuyNowDialog = /** @class */ (function () {
    function BuyNowDialog(dialogRef) {
        this.dialogRef = dialogRef;
    }
    BuyNowDialog = __decorate([
        Component({
            moduleId: module.id,
            selector: 'buy-now-dialog',
            templateUrl: './buy-now-dialog.html'
        }),
        __metadata("design:paramtypes", [MdDialogRef])
    ], BuyNowDialog);
    return BuyNowDialog;
}());
export { BuyNowDialog };
var PlatformOverviewComponent = /** @class */ (function () {
    function PlatformOverviewComponent() {
    }
    PlatformOverviewComponent = __decorate([
        Component({
            moduleId: module.id,
            selector: 'nvlabs-platform-overview',
            templateUrl: './platform-overview.component.html'
        })
    ], PlatformOverviewComponent);
    return PlatformOverviewComponent;
}());
export { PlatformOverviewComponent };
var PlatformTechspecsComponent = /** @class */ (function () {
    function PlatformTechspecsComponent() {
    }
    PlatformTechspecsComponent = __decorate([
        Component({
            moduleId: module.id,
            selector: 'nvlabs-platform-techspecs',
            templateUrl: './platform-techspecs.component.html'
        })
    ], PlatformTechspecsComponent);
    return PlatformTechspecsComponent;
}());
export { PlatformTechspecsComponent };
var PlatformGettingStartedComponent = /** @class */ (function () {
    function PlatformGettingStartedComponent() {
    }
    PlatformGettingStartedComponent = __decorate([
        Component({
            moduleId: module.id,
            selector: 'nvlabs-platform-getting-started',
            templateUrl: './platform-getting-started.component.html'
        })
    ], PlatformGettingStartedComponent);
    return PlatformGettingStartedComponent;
}());
export { PlatformGettingStartedComponent };
var PlatformDownloadsComponent = /** @class */ (function () {
    function PlatformDownloadsComponent() {
    }
    PlatformDownloadsComponent = __decorate([
        Component({
            moduleId: module.id,
            selector: 'nvlabs-platform-downloads',
            templateUrl: './platform-downloads.component.html'
        })
    ], PlatformDownloadsComponent);
    return PlatformDownloadsComponent;
}());
export { PlatformDownloadsComponent };
//# sourceMappingURL=platform.component.js.map