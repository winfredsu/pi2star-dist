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
import { Directive, ElementRef, HostListener, Input, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
var AffixDirective = /** @class */ (function () {
    function AffixDirective(document, el) {
        this.document = document;
        this.el = el;
    }
    AffixDirective.prototype.onWindowScroll = function () {
        if (this.document.body.scrollTop > this.scrollOffset || this.document.documentElement.scrollTop > this.scrollOffset) {
            this.el.nativeElement.classList.add('affix');
            this.el.nativeElement.style.top = this.affixTop + 'px';
        }
        else {
            this.el.nativeElement.classList.remove('affix');
            this.el.nativeElement.style.top = '';
        }
    };
    __decorate([
        Input('affix'),
        __metadata("design:type", Number)
    ], AffixDirective.prototype, "scrollOffset", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], AffixDirective.prototype, "affixTop", void 0);
    __decorate([
        HostListener('window:scroll', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AffixDirective.prototype, "onWindowScroll", null);
    AffixDirective = __decorate([
        Directive({ selector: '[affix]' }),
        __param(0, Inject(DOCUMENT)),
        __metadata("design:paramtypes", [Document,
            ElementRef])
    ], AffixDirective);
    return AffixDirective;
}());
export { AffixDirective };
//# sourceMappingURL=affix.directive.js.map