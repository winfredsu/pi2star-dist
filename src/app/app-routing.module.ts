import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SolutionComponent } from './solution/solution.component';
import { ShowcaseComponent, SelfPoweredWearablesComponent, TransientComputingComponent, LowPowerIoTComponent } from './showcase/showcase.component';
import { JoinusComponent } from './joinus/joinus.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'solution', component: SolutionComponent },
	{ path: 'showcase', component: ShowcaseComponent },
	{ path: 'showcase/self-powered-wearables', component: SelfPoweredWearablesComponent },
	{ path: 'showcase/transient-computing', component: TransientComputingComponent },
	{ path: 'showcase/low-power-iot', component: LowPowerIoTComponent },
	{ path: 'joinus', component: JoinusComponent },
	{ path: 'about', component: AboutComponent },
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}


