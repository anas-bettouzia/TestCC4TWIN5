import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private apiUrl = 'http://localhost:3000/teams'; 

  constructor(private http: HttpClient) { }

  getTeams(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
