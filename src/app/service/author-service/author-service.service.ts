import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiConfig } from '../../../config/config';

@Injectable({
  providedIn: 'root'
})
export class AuthorServiceService {
  private uriApi = apiConfig.uriApi;
  constructor (private http: HttpClient) {}
  public getData(): Observable<any>{
    return this.http.get<any>(this.uriApi+"author");
  }
  public getDataAutorObras(author: any): Observable<any>{
    return this.http.get<any>(this.uriApi+"author/"+author+"/title");
  }
  public getDataDetailsObra(author: any, title: any): Observable<any>{
    return this.http.get<any>(this.uriApi+"author,title/"+author+";"+title);
  }
}
