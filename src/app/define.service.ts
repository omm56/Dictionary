import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DefineService {

  constructor(private http: HttpClient) { }

  getApi(searchword : any){
    return this.http.get('https://api.dictionaryapi.dev/api/v2/entries/en/' + searchword);
  }
}
