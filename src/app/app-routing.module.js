var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlatformComponent, PlatformOverviewComponent, PlatformTechspecsComponent, PlatformGettingStartedComponent, PlatformDownloadsComponent } from './platform/platform.component';
import { SimulatorComponent, SimulatorOverviewComponent, SimulatorGettingStartedComponent, SimulatorConceptAndStructureComponent, SimulatorExampleComponent } from './simulator/simulator.component';
import { ShowcaseComponent, SelfPoweredWearablesComponent, TransientComputingComponent, LowPowerIoTComponent } from './showcase/showcase.component';
import { ExploreComponent, RecommendedReadingComponent, NVPFundamentalsComponent } from './explore/explore.component';
import { AboutComponent } from './about/about.component';
import { TermsComponent } from './terms/terms.component';
var routes = [
    { path: 'home', component: HomeComponent },
    { path: 'platform', component: PlatformComponent,
        children: [
            { path: '', redirectTo: 'overview', pathMatch: 'full' },
            { path: 'overview', component: PlatformOverviewComponent },
            { path: 'getting-started', component: PlatformGettingStartedComponent },
            { path: 'techspecs', component: PlatformTechspecsComponent },
            { path: 'downloads', component: PlatformDownloadsComponent },
        ]
    },
    { path: 'simulator', component: SimulatorComponent,
        children: [
            { path: '', redirectTo: 'overview', pathMatch: 'full' },
            { path: 'overview', component: SimulatorOverviewComponent },
            { path: 'getting-started', component: SimulatorGettingStartedComponent },
            { path: 'concept-and-structure', component: SimulatorConceptAndStructureComponent },
            { path: 'example', component: SimulatorExampleComponent }
        ]
    },
    { path: 'showcase', component: ShowcaseComponent },
    { path: 'showcase/self-powered-wearables', component: SelfPoweredWearablesComponent },
    { path: 'showcase/transient-computing', component: TransientComputingComponent },
    { path: 'showcase/low-power-iot', component: LowPowerIoTComponent },
    { path: 'explore', component: ExploreComponent },
    { path: 'explore/recommended-reading', component: RecommendedReadingComponent },
    { path: 'explore/nvp-fundamentals', component: NVPFundamentalsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'terms-and-conditions', component: TermsComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map