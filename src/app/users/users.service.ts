import {environment} from '../../environments/environment';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {User} from '../models/user.model';
import {Firebase} from '../models/firebase.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly env = environment;

  constructor(private httpClient: HttpClient) { }

  private getUrl() {
    return this.env.apiUrl + '/' + Firebase.COLLECTION;
  }

  public list(): Observable<User[]> {
    return this.httpClient.get<Firebase.UserCollection>(this.getUrl())
      .pipe(
        map((response: Firebase.UserCollection) => {
          const result: User[] = [];
          response.documents.forEach(document => {
            // Skip default document which does not have 'fields'.
            if (document.hasOwnProperty('fields')) {
              const record: User = new User(
                document.name.split('/').pop(),
                document.fields.name.stringValue,
                document.fields.surname.stringValue,
                document.fields.email.stringValue,
                document.fields.active.booleanValue,
                document.createTime,
                document.updateTime
              );
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
