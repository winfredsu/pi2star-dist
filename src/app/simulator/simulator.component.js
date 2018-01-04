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
import { ActivatedRoute } from '@angular/router';
var SimulatorComponent = /** @class */ (function () {
    function SimulatorComponent(title) {
        title.setTitle('Simulator | NVLabs');
    }
    SimulatorComponent.prototype.ngOnInit = function () {
        this.titleAffix = 60;
        this.calcNavAffix();
        this.calcTitleMinHeight();
        this.calcNavMinHeight();
        this.calcNavWidth();
    };
    SimulatorComponent.prototype.onResize = function () {
        this.calcNavAffix();
        this.calcTitleMinHeight();
        this.calcNavMinHeight();
        this.calcNavWidth();
    };
    SimulatorComponent.prototype.calcNavAffix = function () {
        this.navAffix = this.elIntro.nativeElement.offsetHeight + 130;
        this.navTop = this.elTitle.nativeElement.offsetHeight + 97;
    };
    SimulatorComponent.prototype.calcTitleMinHeight = function () {
        this.titleMinHeight = this.elTitle.nativeElement.offsetHeight + 20;
    };
    SimulatorComponent.prototype.calcNavMinHeight = function () {
        this.navMinHeight = this.elNav.nativeElement.offsetHeight;
    };
    SimulatorComponent.prototype.calcNavWidth = function () {
        this.navWidth = this.elTitleWrapper.nativeElement.offsetWidth;
    };
    __decorate([
        ViewChild('title'),
        __metadata("design:type", ElementRef)
    ], SimulatorComponent.prototype, "elTitle", void 0);
    __decorate([
        ViewChild('intro'),
        __metadata("design:type", ElementRef)
    ], SimulatorComponent.prototype, "elIntro", void 0);
    __decorate([
        ViewChild('nav'),
        __metadata("design:type", ElementRef)
    ], SimulatorComponent.prototype, "elNav", void 0);
    __decorate([
        ViewChild('titleWrapper'),
        __metadata("design:type", ElementRef)
    ], SimulatorComponent.prototype, "elTitleWrapper", void 0);
    __decorate([
        HostListener('window:resize', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SimulatorComponent.prototype, "onResize", null);
    SimulatorComponent = __decorate([
        Component({
            moduleId: module.id,
            selector: 'nvlabs-simulator',
            templateUrl: './simulator.component.html'
        }),
        __metadata("design:paramtypes", [Title])
    ], SimulatorComponent);
    return SimulatorComponent;
}());
export { SimulatorComponent };
var SimulatorOverviewComponent = /** @class */ (function () {
    function SimulatorOverviewComponent() {
    }
    SimulatorOverviewComponent = __decorate([
        Component({
            moduleId: module.id,
            selector: 'nvlabs-simulator-overview',
            templateUrl: './simulator-overview.component.html'
        })
    ], SimulatorOverviewComponent);
    return SimulatorOverviewComponent;
}());
export { SimulatorOverviewComponent };
var SimulatorGettingStartedComponent = /** @class */ (function () {
    function SimulatorGettingStartedComponent() {
    }
    SimulatorGettingStartedComponent = __decorate([
        Component({
            moduleId: module.id,
            selector: 'nvlabs-simulator-getting-started',
            templateUrl: './simulator-getting-started.component.html'
        })
    ], SimulatorGettingStartedComponent);
    return SimulatorGettingStartedComponent;
}());
export { SimulatorGettingStartedComponent };
var SimulatorConceptAndStructureComponent = /** @class */ (function () {
    function SimulatorConceptAndStructureComponent(route) {
        this.route = route;
    }
    SimulatorConceptAndStructureComponent.prototype.onAnchorClick = function () {
        this.route.fragment.subscribe(function (f) {
            var element = document.querySelector("#" + f);
            if (element)
                element.scrollIntoView();
        });
    };
    SimulatorConceptAndStructureComponent = __decorate([
        Component({
            moduleId: module.id,
            selector: 'nvlabs-simulator-concept-and-structure',
            templateUrl: './simulator-concept-and-structure.component.html'
        }),
        __metadata("design:paramtypes", [ActivatedRoute])
    ], SimulatorConceptAndStructureComponent);
    return SimulatorConceptAndStructureComponent;
}());
export { SimulatorConceptAndStructureComponent };
var SimulatorExampleComponent = /** @class */ (function () {
    function SimulatorExampleComponent() {
    }
    SimulatorExampleComponent = __decorate([
        Component({
            moduleId: module.id,
            selector: 'nvlabs-simulator-example',
            templateUrl: './simulator-example.component.html'
        })
    ], SimulatorExampleComponent);
    return SimulatorExampleComponent;
}());
export { SimulatorExampleComponent };
//# sourceMappingURL=simulator.component.js.map