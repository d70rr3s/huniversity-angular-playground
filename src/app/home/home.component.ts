import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {UsersService} from '../users/users.service';
import {User} from '../models/user.model';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  users: User[];
  usersSubscriber: Observable<User[]>;
  destroy$: Subject<boolean> = new Subject<boolean>();
  displayedColumns: string[];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.displayedColumns = ['name', 'surname', 'email', 'active'];
    this.usersSubscriber = this.usersService.list();
    this.usersSubscriber.pipe(takeUntil(this.destroy$)).subscribe(data => {
      this.users = data;
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }

}
