import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly env = environment;

  constructor(private httpClient: HttpClient) {
  }

  login(identifier: string, password: string): Observable<{message: string, token: string}> {
    return this.httpClient.post<{message: string, token: string}>(this.env.authApiUrl + '/auth', {identifier, password});
  }

}
