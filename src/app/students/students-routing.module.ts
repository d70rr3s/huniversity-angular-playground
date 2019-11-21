import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {StudentsComponent} from './students.component';

const appRoutes: Routes = [
  { path: ':name', component: StudentsComponent },
  { path: '', component: StudentsComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class StudentsRoutingModule { }
