import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment';

import { AuthResponse, Usuario } from '../interfaces/interfaces';
import { map, catchError, of, tap, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {//Que no sea importado de produccion ya que cuando sea necesario el de prod angular se encargara de ello


  private baseUrl: string = environment.baseUrl;
  private _usuario!: Usuario;

  get usuario() {
    return { ...this._usuario };
  }

  constructor(private http: HttpClient) { }

  //LOGIN  
  login(email: string, password: string) {

    const url = `${this.baseUrl}/auth`;
    const body = { email, password };

    return this.http.post<AuthResponse>(url, body)
      .pipe(
        tap(respuesta => {
          //TODO OK
          if (respuesta.ok) {
            localStorage.setItem('token', respuesta.token!);
            this._usuario = {
              name: respuesta.name!,
              uid: respuesta.uid!
            }
          }
        }),
        map(respuesta => respuesta.ok),
        catchError(err => of(err.error.msg))
      );


    //VALIDAR TOKEN
  }
  validarToken(): Observable<boolean> {

    const url = `${this.baseUrl}/auth/renew`;
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '');

    return this.http.get<AuthResponse>(url, { headers })
      .pipe(
        map(respuesta => {
          localStorage.setItem('token', respuesta.token!);
          this._usuario = {
            name: respuesta.name!,
            uid: respuesta.uid!
          }
          return respuesta.ok;
        }),
        catchError(err => of(false))
      );
  }

  logOut(){
    //TODO cuando tengamos token no poder acceder al login
    //Si queremos dejar algo como el recordar usuario o algo asi se cambiaria 
    localStorage.clear();
  }

  registro(name: string, email: string, password: string){

    const url = `${this.baseUrl}/auth/registro`;
    const body = { name, email, password };

    return this.http.post<AuthResponse>(url, body)
      .pipe(
        tap(respuesta => {
          //TODO OK
          if (respuesta.ok) {
            localStorage.setItem('token', respuesta.token!);
            this._usuario = {
              name: respuesta.name!,
              uid: respuesta.uid!
            }
          }
        }),
        map(respuesta => respuesta.ok),
        catchError(err => of(err.error.msg))
      );
  }
}
