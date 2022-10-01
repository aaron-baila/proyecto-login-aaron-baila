import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { AuthResponse } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //Que no sea importado de produccion ya que cuando sea necesario el de prod angular se encargara de ello
  private baseUrl: string = environment.baseUrl;

//Añadimos el hhtp client para poder hacer peticiones
  constructor(private http: HttpClient) { }


  login(email: string, password: string){
    // http://51.38.51.187:5050/api/v1/auth/log-in
    //http//51.38.51.187:5050/api/v1/auth/log-in

    const url = `${ this.baseUrl}/auth/log-in`;

    const body = { email, password};

    //El subscribe lo haremos donde le llamemos
    //Recibiremos un Auth response
    console.log("Has llegao ");
    return this.http.post<AuthResponse> (url,body);

  }
}
