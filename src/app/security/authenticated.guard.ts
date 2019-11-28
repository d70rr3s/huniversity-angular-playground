import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedGuard implements CanActivate {

  private readonly env = environment;

  constructor(private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (localStorage.getItem(this.env.tokenKey)) {
      return true;
    }

    this.router.navigate(['login']).then(() => {
      console.log('Unauthenticated user.');
    });
  }

}
