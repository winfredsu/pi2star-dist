import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AgmCoreModule } from '@agm/core';
import { MatDialogModule } from '@angular/material';
import { HttpModule } from '@angular/http';

import { IpFromCNService } from './ip-from-cn.service';

import { AppComponent } from './app.component';
import { HomeComponent, IntroVideoDialog } from './home/home.component';
import { SolutionComponent } from './solution/solution.component';
import { ShowcaseComponent, SelfPoweredWearablesComponent, TransientComputingComponent, LowPowerIoTComponent } from './showcase/showcase.component';
import { JoinusComponent } from './joinus/joinus.component';
import { AboutComponent } from './about/about.component';


@NgModule({
	imports: [
		MatDialogModule,
		BrowserModule,
		HttpModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		AgmCoreModule.forRoot({
			apiKey: 'AIzaSyDFquj9AnLZG3zPXBPdovChfCxujtu2V8E' 
		})
	],
	declarations: [
		AppComponent,
		HomeComponent,
		IntroVideoDialog,	
		SolutionComponent,
		ShowcaseComponent,
		SelfPoweredWearablesComponent,
		TransientComputingComponent,
		LowPowerIoTComponent,
		JoinusComponent,
		AboutComponent,
	],
	providers: [
		IpFromCNService
	],
	entryComponents: [
	IntroVideoDialog
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
