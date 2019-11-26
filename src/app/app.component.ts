import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '#hUniversity Angular 8';

  constructor(private router: Router) {
  }

  goTo(url: string) {
    this.router.navigate([url]).then(() => {
      console.log(`goto:${url}`);
    });
  }

}
