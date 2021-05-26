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
     console.log(cepin)
   return this.http.get(`http://viacep.com.br/ws/${cepin}/json/`);//.subscribe((x) =>console.log('ggggg'));

}


}
