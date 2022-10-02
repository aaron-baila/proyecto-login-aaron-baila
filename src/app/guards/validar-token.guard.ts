import { Injectable } from '@angular/core';
import { CanActivate, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ValidarTokenGuard implements CanActivate, CanLoad {


  constructor(private authService: AuthService) { }

  canActivate(): Observable<boolean> | boolean {
    console.log('Can activate');
    return this.authService.validarToken();
  }

  canLoad(): Observable<boolean> | boolean {
    console.log('Can load');
    return this.authService.validarToken();
  }
}
