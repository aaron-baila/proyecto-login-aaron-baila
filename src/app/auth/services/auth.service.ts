import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { AuthResponse, Usuario } from '../interfaces/interfaces';
import { map, catchError, of, tap, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //Que no sea importado de produccion ya que cuando sea necesario el de prod angular se encargara de ello
  private baseUrl: string = environment.baseUrl;
  private _usuario!: Usuario;


  //Añadimos el hhtp client para poder hacer peticiones
  constructor(private http: HttpClient) { }

  //REGISTRO 
  registro(name: string, surname: string, email: string, password: string) {

    const url = `${this.baseUrl}/auth/sign-up`;
    const body = { name, surname, email, password };
    let mensaje = "";

    return this.http.post<AuthResponse>(url, body)
      .pipe(
        tap(r => {
          //r == null registro nuevo 
          //r = vacio si registro repetido

          if (r === null) {
            mensaje = "Registro correcto";
            // }else{
            //   mensaje = "Registro ya existente";
          }

        }),
        map(r => r.accessToken),
        catchError(err => of(mensaje))
      );
  }


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

        }),
        map(r => r.accessToken),
        catchError(err => of(""))

      );
  }

  validarToken(): Observable<boolean> {
    const accessToken = localStorage.getItem('accessToken');

    const url = `${this.baseUrl}/users/me`;



    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    });

    return this.http.get<AuthResponse>(url, { headers: headers })
      .pipe(
        map(resp => {


          // localStorage.setItem('accessToken', resp.accessToken!);
          localStorage.setItem('accessToken', accessToken!);
          this._usuario = {
            // accessToken: resp.accessToken!,
            // refreshToken: resp.refreshToken!,
            // tokenType: resp.tokenType!,
            name: resp.name!,
            surname: resp.surname!,
            id: resp.id!
          }
          return true;
        }),
        catchError(err => of(false))
      );

  }

  logOut() {
    localStorage.clear();
  }
}
