import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SolutionComponent } from './solution/solution.component';
import { SimulatorComponent, SimulatorOverviewComponent, SimulatorGettingStartedComponent, SimulatorConceptAndStructureComponent, SimulatorExampleComponent } from './simulator/simulator.component';
import { ShowcaseComponent, SelfPoweredWearablesComponent, TransientComputingComponent, LowPowerIoTComponent } from './showcase/showcase.component';
import { ExploreComponent, RecommendedReadingComponent, NVPFundamentalsComponent } from './explore/explore.component';
import { AboutComponent } from './about/about.component';
import { TermsComponent } from './terms/terms.component';

const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'solution', component: SolutionComponent,	
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

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}


