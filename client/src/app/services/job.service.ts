import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private apiUrl = 'http://localhost:3000/api/';
  private adminApiUrl = 'http://localhost:3000/admin/';

  constructor(private http: HttpClient, private router: Router) { }

  saveJob(job_data: any) {
    return this.http.post<any>(this.apiUrl + 'create_job', job_data);
  }
  getJobs() {
    return this.http.get<any>(this.apiUrl + 'get_jobs');
  }

}
