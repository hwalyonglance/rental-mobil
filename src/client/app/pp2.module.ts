import { isPlatformBrowser } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PLATFORM_ID, APP_ID, Inject, isDevMode, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';

import { environment } from '../environments/environment';

// import { BrowserPrebootModule } from 'preboot/browser';

// import { TransferHttpCacheModule } from '@nguniversal/common';

import { DryModule } from './modules/_dry/dry.module';

import { Pp2RoutingModule, Pp2Components } from './pp2.routing.module';

import { PengurusModule } from './modules/pengurus/pengurus.module';
import { SayaModule } from './modules/saya/saya.module';

import { Pp2Component } from './pp2.component';
import { NavComponent_ } from './components/_nav/_nav.component';

@NgModule({
	imports: [
		BrowserModule.withServerTransition({ appId: 'pp2' }),
		// BrowserPrebootModule.replayEvents(),
		HttpClientModule,
		HttpModule,
		// TransferHttpCacheModule,
		PengurusModule,
		SayaModule,
		Pp2RoutingModule
		// ,ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
	],
	declarations: [
		Pp2Component,
		NavComponent_,
		...Pp2Components
	],
	bootstrap: [Pp2Component]
})
export class Pp2Module {
	constructor(
		@Inject(PLATFORM_ID) private platformId: Object,
		@Inject(APP_ID) private appId: string
	) {
		const platform = isPlatformBrowser(platformId) ? 'on the browser' : 'in the server';
		console.log(platformId)
		console.log(`Running ${platform} with appId=${appId}`);
		if ( platform == 'on the browser' && !isDevMode()) {
			const swRegister = document.createElement('script');
			swRegister.src = 'assets/sw-register.js';
			document.body.appendChild(swRegister);
		}
	}
}
