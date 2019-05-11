import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Wrestler } from '../models/Wrestler';

@Injectable({
  providedIn: 'root'
})
export class WrestlerService {

  wrestlersURL:string = 'https://raw.githubusercontent.com/RepublicOfDavid/wrestlers-list-db/master/db.json';

  constructor(private http:HttpClient) { }

  // Get Wrestlers
  getWrestlers():Observable<Wrestler[]> {
    return this.http.get<Wrestler[]>(this.wrestlersURL);
  }

}