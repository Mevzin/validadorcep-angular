import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViacepService {

  constructor(private http: HttpClient) {

   }
   public getCEP(cepin: string): Observable<any> {
    return this.http.get(`http://viacep.com.br/ws/${cepin}/json/`);
  }

  saveCep(allCeps: any){
    return this.http.post(`http://localhost:3000/ceps`, allCeps);
  }

}
