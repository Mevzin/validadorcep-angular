import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabelaService {

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      console.log(data)
    });
   }
   public getJSON(): Observable<any> {
    return this.http.get("http://localhost:3000/ceps")
}
}

