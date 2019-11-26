import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  { path: 'secure', loadChildren: () => import('./security/security.module').then(m => m.SecurityModule) },
  { path: '**', redirectTo: 'secure/register' }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
