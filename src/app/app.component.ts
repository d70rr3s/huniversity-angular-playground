import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '#hUniversity Angular 8';
  currentUser = 'Daniel';

  greeting(message: string) {
    alert(message);
  }

}
