import {environment} from '../../environments/environment';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {User} from '../models/user.model';
import {FirebaseUsersResponse} from '../firebase/users.response';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly env = environment;

  private readonly COLLECTION = '/users';

  constructor(private httpClient: HttpClient) { }

  private getUrl() {
    return this.env.apiUrl + this.COLLECTION;
  }

  public list(): Observable<User[]> {
    return this.httpClient.get<FirebaseUsersResponse>(this.getUrl())
      .pipe(
        map((response: FirebaseUsersResponse) => {
          const result: User[] = [];
          response.documents.forEach(document => {
            // Skip default document which does not have 'fields'.
            if (document.hasOwnProperty('fields')) {
              const record: User = new User('', '');
              record.name = document.fields.name.stringValue;
              record.surname = document.fields.surname.stringValue;
              record.email = document.fields.email.stringValue;
              record.active = document.fields.active.booleanValue;
              result.push(record);
            }
          });
          return result;
        }));
  }

  public create(user: User) {
    const formattedUser: {
      fields: {
        name: {
          stringValue: string,
        },
        surname: {
          stringValue: string,
        },
        email: {
          stringValue: string,
        },
        active: {
          booleanValue: boolean
        }
      }
    } = {
      fields: {
        name: {
          stringValue: user.name,
        },
        surname: {
          stringValue: user.surname,
        },
        email: {
          stringValue: user.email,
        },
        active: {
          booleanValue: user.active,
        }
      }
    };
    return this.httpClient.post(this.getUrl(), formattedUser);
  }

}
