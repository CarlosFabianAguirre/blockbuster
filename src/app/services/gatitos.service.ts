import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GatitosService {

  constructor(
    private http: HttpClient
  ) { }
  getGatitosInfo () {
   return this.http.get("https://catfact.ninja/fact");
  }
}
