var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import { Injectable, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ServerModule, platformDynamicServer } from '@angular/platform-server';
let MyService = class MyService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        httpClient.get('https://google.com/').subscribe(console.log, console.error);
    }
};
MyService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [HttpClient])
], MyService);
export { MyService };
let AppModule = class AppModule {
    ngDoBootstrap() { }
};
AppModule = __decorate([
    NgModule({
        imports: [ServerModule, HttpClientModule],
        providers: [MyService]
    })
], AppModule);
export { AppModule };
(() => __awaiter(this, void 0, void 0, function* () {
    const platform = platformDynamicServer();
    const appModule = yield platform.bootstrapModule(AppModule);
    const userService = appModule.injector.get(MyService);
}))()
    .catch(console.error);
