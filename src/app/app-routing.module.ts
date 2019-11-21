import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  { path: 'students', loadChildren: () => import('./students/students.module').then(m => m.StudentsModule) },
  { path: '**', redirectTo: 'students' }
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

export class AppRoutingModule { }
