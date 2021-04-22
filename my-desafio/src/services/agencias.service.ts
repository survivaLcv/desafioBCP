import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AgenciasService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.api;
  }

  getListadoAgencias() {
    const fullUrl = `${this.baseUrl}${environment.urlAgencias}`;
    if (environment.production) {
      return this.http.get(`${fullUrl}`);

    } else {
      return this.http.get(fullUrl);
    }
  }
}
