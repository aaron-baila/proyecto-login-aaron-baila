import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ValidarTokenGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router) { }

  canActivate(): Observable<boolean> | boolean {

    return this.authService.validarToken()
      .pipe(
        tap(valid => {
          console.log("Can activate " + valid);
          if (!valid) {
            //Mejorable que rediriga a pagina de error
            this.router.navigateByUrl('/auth');
          }
        })
      );
  }


  canLoad(): Observable<boolean> | boolean {

    return this.authService.validarToken()
      .pipe(
        tap(valid => {
          console.log("Can load " + valid);
          if (!valid) {
            //Mejorable que rediriga a pagina de error
            this.router.navigateByUrl('/auth');
          }
        })
      );
  }

}
