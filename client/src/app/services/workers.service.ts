import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WorkersService {

  // private apiUrl = 'http://localhost:3000/api/';
  // private adminApiUrl = 'http://localhost:3000/admin/';

  private apiUrl = environment.apiUrl;
  private adminApiUrl = environment.baseUrl;

  constructor(private http: HttpClient, private router: Router) { }

  getWorkers() {
    return this.http.get<any>(this.apiUrl + 'get_users');
  }

}
