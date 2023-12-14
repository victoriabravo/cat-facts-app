import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FactsService {

 baseFactUrl = 'https://catfact.ninja/facts';
 
  constructor(
    private http: HttpClient
  ) { }

  getAllFacts(page?:any): Observable<any>{
    let params = new HttpParams()
    // .set('maxlength', maxlength)
    // .set('limit', limit)
    .set('page', page);
    return this.http.get(this.baseFactUrl,{
      params: params
    })
  }

  getDetail(): Observable<any>{
    return this.http.get('https://placekitten.com/200/300')
  }

}
