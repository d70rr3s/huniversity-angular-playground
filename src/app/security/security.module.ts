import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SecurityRoutingModule } from './security-routing.module';
import { CoreModule } from '../core/core.module';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    SecurityRoutingModule
  ]
})

export class SecurityModule { }
