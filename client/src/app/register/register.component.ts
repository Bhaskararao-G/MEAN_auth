import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUser = {}

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onRegister() {
    this.authService.registerUser(this.registerUser).subscribe(res => {
      localStorage.setItem('token', res.token);
      this.router.navigate(['/special']);
    }, err => {
      console.log(err);
    });
  }

}
