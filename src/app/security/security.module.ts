import {AngularMaterialModule} from '../angular_material/angular-material.module';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SecurityRoutingModule} from './security-routing.module';
import {LoginComponent} from './login.component';
import {RegisterComponent} from './register.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SecurityRoutingModule
  ]
})

export class SecurityModule {
}
