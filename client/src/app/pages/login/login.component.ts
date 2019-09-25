import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted: boolean = false;

  constructor(private _fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this._fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get logForm() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    
    console.log(this.loginForm.invalid);
    if (this.loginForm.invalid) {
      return;
    }

    let data = this.loginForm.value
    this.authService.loginUser(data).subscribe(res => {
      localStorage.setItem('token', res.token);
      localStorage.setItem('user', JSON.stringify(res.user));
      this.router.navigate(['/jobs']);
    }, err => {
      console.log(err);
    });
  }

}
