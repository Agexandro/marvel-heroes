import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from './Models/heroe';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APIKEY } from './config';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private baseUrl = 'https://gateway.marvel.com:443/v1/public/characters';
  private apiKey = APIKEY;

  constructor(private httpClient:HttpClient) { }

  getHeroes():Observable<Data> {
    return this.httpClient.get<Data>(this.baseUrl+this.apiKey);
  }

  getHeroe(id:number):Observable<Data> {
    return this.httpClient.get<Data>(this.baseUrl+'/'+id+this.apiKey);
  }
}
