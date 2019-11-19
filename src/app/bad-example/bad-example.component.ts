import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bad-example',
  template: `
    <p>
      bad-example works!
    </p>
  `,
  styleUrls: ['./bad-example.component.scss']
})
export class BadExampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
