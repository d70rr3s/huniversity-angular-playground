import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularMaterialModule} from './angular_material/angular-material.module';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeModule} from './home/home.module';
import {SecurityModule} from './security/security.module';
import {UsersModule} from './users/users.module';
import {LoggerInterceptor} from './logger-interceptor.service';
import {JwtInterceptor} from './jwt-inteceptor.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    HomeModule,
    SecurityModule,
    UsersModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [
    HttpClientModule,
    {provide: HTTP_INTERCEPTORS, useClass: LoggerInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
