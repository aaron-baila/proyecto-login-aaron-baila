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
          if(respuesta.ok){
            this._usuario = {
              name: respuesta.name!,
              uid: respuesta.uid!
            }
          }
        }),
        map(respuesta => respuesta.ok),
        catchError(err => of(false))
      );
  }
}
