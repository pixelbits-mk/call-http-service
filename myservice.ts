import 'zone.js/dist/zone-node';
import 'reflect-metadata';

import {Injector, Injectable, NgModule } from '@angular/core'
import {HttpClient, HttpClientModule} from '@angular/common/http'
import {ServerModule, platformDynamicServer} from '@angular/platform-server';

@Injectable()
export class MyService {
  constructor(protected httpClient: HttpClient) { 
    httpClient.get('https://google.com/').subscribe(console.log, console.error);
  }
}

@NgModule({
  imports: [ServerModule, HttpClientModule],
  providers: [MyService]
})
export class AppModule {
  ngDoBootstrap() {}
}

(async () => {
    const platform = platformDynamicServer();
    const appModule = await platform.bootstrapModule(AppModule);
    const userService = appModule.injector.get(MyService);
})()
.catch(console.error);