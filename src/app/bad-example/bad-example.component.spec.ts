import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadExampleComponent } from './bad-example.component';

describe('BadExampleComponent', () => {
  let component: BadExampleComponent;
  let fixture: ComponentFixture<BadExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
