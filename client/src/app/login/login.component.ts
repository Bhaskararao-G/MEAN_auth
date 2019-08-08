import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUser = {};

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onLogin() {
    this.authService.loginUser(this.loginUser).subscribe(res => {
      localStorage.setItem('token', res.token);
      this.router.navigate(['/special']);
    }, err => {
      console.log(err);
    });
  }

}
