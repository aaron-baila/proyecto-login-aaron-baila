import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { AuthResponse, Usuario } from '../interfaces/interfaces';
import { map, catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //Que no sea importado de produccion ya que cuando sea necesario el de prod angular se encargara de ello
  private baseUrl: string = environment.baseUrl;
  private _usuario!: Usuario;

  //Añadimos el hhtp client para poder hacer peticiones
  constructor(private http: HttpClient) { }

  get usuario() {
    return { ... this._usuario };
  }


  login(email: string, password: string) {
    // http://51.38.51.187:5050/api/v1/auth/log-in
    //http//51.38.51.187:5050/api/v1/auth/log-in

    const url = `${this.baseUrl}/auth/log-in`;

    const body = { email, password };
    // console.log("ESTO ES " + url + " Y TAMBIEN " + body.email + " " + body.password);

    //El subscribe lo haremos donde le llamemos
    //Recibiremos un Auth response


    return this.http.post<AuthResponse>(url, body)
      .pipe(
        tap(r => {
          if (r.accessToken) {

            localStorage.setItem('accessToken', r.accessToken);

            this._usuario = {
              accessToken: r.accessToken!,
              refreshToken: r.refreshToken!,
              tokenType: r.tokenType!,
              email: email!
            }
          }
          console.log(r);
        }),
        map(r => r.accessToken),
        catchError(err => of(""))

      );
  }

  validarToken() {

    const url = `${this.baseUrl}/users/me`;

    const accessToken = localStorage.getItem('accessToken');
    console.log(accessToken);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    })
    return this.http.get(url, { headers: headers });

  }
}
