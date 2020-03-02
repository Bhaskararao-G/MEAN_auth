import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.apiUrl;
  private adminApiUrl = environment.baseUrl;

  // private apiUrl = 'http://localhost:3000/api/';
  // private adminApiUrl = 'http://localhost:3000/admin/';

  constructor(private http: HttpClient, private router: Router) { }

  registerUser(user: any) {
    return this.http.post<any>(this.apiUrl + 'add_user', user);
  }

  getProfessions() {
    return this.http.get<any>(this.adminApiUrl + 'get_professions');
  }

  loginUser(user: any) {
    return this.http.post<any>(this.apiUrl + 'login', user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logoutUser() {
    localStorage.removeItem('token');
    this.router.navigate(['/jobs']);
  }
}
