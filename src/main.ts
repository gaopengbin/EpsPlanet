import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
// import { AppByLibHomeModule } from './app/app-bylib/app-bylib-home.module';
if (typeof Cesium !== "undefined" && Cesium.buildModuleUrl) {
  Cesium.buildModuleUrl.setBaseUrl('/assets/cesium/');
} else {
  window['CESIUM_BASE_URL'] = '/assets/cesium/';
}
if (environment.production) {
  enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
/*
if (environment.dev) {
  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
} else {
  platformBrowserDynamic().bootstrapModule(AppByLibHomeModule)
    .catch(err => console.error(err));

  // platformBrowserDynamic().bootstrapModule(AppPublishHomeModule).catch(() => {
  //   return platformBrowserDynamic().bootstrapModule(AppPublishHomeModule);
  // })
}*/
