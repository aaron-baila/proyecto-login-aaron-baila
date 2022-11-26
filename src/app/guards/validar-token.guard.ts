import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ValidarTokenGuard implements CanActivate, CanLoad {

  constructor(private authService: AuthService,
    private router: Router) { }

  canActivate(): Observable<boolean> | boolean {
    console.log("canActivate");
    return this.authService.validarToken()
      .pipe(
        tap(validar => {
          if (!validar) {
            this.router.navigateByUrl('/auth')
          }
        })
      );
  }

  canLoad(): Observable<boolean> | boolean {
    return this.authService.validarToken()
      .pipe(
        tap(validar => {
          if (!validar) {
            this.router.navigateByUrl('/auth')
          }
        })
      );
  }
}
