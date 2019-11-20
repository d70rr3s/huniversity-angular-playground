import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {StudentsComponent} from './students/students.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'students', component: StudentsComponent}
];

@NgModule({
  declarations: [
    HomeComponent,
    StudentsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
