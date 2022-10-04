import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  //Que no sea importado de produccion ya que cuando sea necesario el de prod angular se encargara de ello
  private baseUrl: string = environment.baseUrl;



  //Añadimos el hhtp client para poder hacer peticiones
  constructor(private http: HttpClient) { }

  dameUsers() {
    const accessToken = localStorage.getItem('accessToken');

    const url = `${this.baseUrl}/users`;

    console.log(accessToken);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    });

    return this.http.get(url, { headers });
  }
}
