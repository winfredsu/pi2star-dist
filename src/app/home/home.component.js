var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, HostListener, Inject, Input } from '@angular/core';
import { DOCUMENT, Title } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { MdDialog, MdDialogRef } from '@angular/material';
var HomeComponent = /** @class */ (function () {
    function HomeComponent(dialog, document, appComponent, title) {
        this.dialog = dialog;
        this.document = document;
        this.appComponent = appComponent;
        this.title = title;
        title.setTitle('NVLabs');
    }
    HomeComponent.prototype.onWindowScroll = function () {
        if (this.document.body.scrollTop > 60 || this.document.documentElement.scrollTop > 60) {
            // add a page-on-scroll class to header 
            this.appComponent.addClass('page-on-scroll');
        }
        else {
            // remove page-on-scroll class 
            this.appComponent.removeClass('page-on-scroll');
        }
    };
    HomeComponent.prototype.onResize = function (event) {
        this.height = event.target.innerHeight;
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.appComponent.removeClass('page-on-scroll');
        this.height = window.innerHeight;
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.appComponent.addClass('page-on-scroll');
    };
    HomeComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(NVPOneMinuteDialog, {
            width: '990px',
            height: 'auto'
        });
    };
    __decorate([
        HostListener('window:scroll', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HomeComponent.prototype, "onWindowScroll", null);
    __decorate([
        HostListener('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], HomeComponent.prototype, "onResize", null);
    HomeComponent = __decorate([
        Component({
            moduleId: module.id,
            selector: 'nvlabs-home',
            templateUrl: './home.component.html'
            // styleUrls: ['./app.component.css']	
        }),
        __param(1, Inject(DOCUMENT)),
        __param(2, Input('AppComponent')),
        __metadata("design:paramtypes", [MdDialog,
            Document,
            AppComponent,
            Title])
    ], HomeComponent);
    return HomeComponent;
}());
export { HomeComponent };
var NVPOneMinuteDialog = /** @class */ (function () {
    function NVPOneMinuteDialog(dialogRef) {
        this.dialogRef = dialogRef;
    }
    NVPOneMinuteDialog = __decorate([
        Component({
            moduleId: module.id,
            selector: 'nvp-one-minute-dialog',
            templateUrl: './nvp-one-minute-dialog.html'
        }),
        __metadata("design:paramtypes", [MdDialogRef])
    ], NVPOneMinuteDialog);
    return NVPOneMinuteDialog;
}());
export { NVPOneMinuteDialog };
//# sourceMappingURL=home.component.js.map