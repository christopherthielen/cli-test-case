import { UIRouterModule, UIView } from '@uirouter/angular';
import { INITIAL_STATES } from './app.states';
import { UIRouter } from '@uirouter/core';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ROUTES } from '@angular/router';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UIRouterModule.forRoot({ states: INITIAL_STATES, useHash: false, config: routerConfig })
  ],
  providers: [
  ],
  bootstrap: [UIView]
})
export class AppModule {
}



export function routerConfig(router: UIRouter, mod: any): void {
  const injector: Injector = mod.injector;
  let routes = injector.get(ROUTES).reduce((acc, routes) => acc.concat(routes), []);

  if (routes.length === 4) {
    console.log("App works!  Routes: [" + routes.map(route => route['name']).join(', ') + "]", routes);
  } else {
    console.error("Incorrect number of routes (" + routes.length + ") found in DI. Routes: [" + routes.map(route => route['name']).join(', ') + "]", routes);
  }

  router.trace.enable(1);
  router.urlService.rules.initial({ state: 'A' });
}
