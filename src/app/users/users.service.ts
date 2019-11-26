import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {User} from '../models/user.model';

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

  public list() {
    return this.httpClient.get(this.getUrl());
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
