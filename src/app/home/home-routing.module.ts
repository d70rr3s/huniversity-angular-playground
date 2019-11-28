import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {AuthenticatedGuard} from '../security/authenticated.guard';

const appRoutes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthenticatedGuard]}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class HomeRoutingModule {
}
