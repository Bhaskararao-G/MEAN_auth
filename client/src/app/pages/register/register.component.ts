import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  submitted: boolean = false;
  registerForm: FormGroup;
  professions = [];
  selectedItems = [];
  settings = {};

  constructor(private _fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {

    this.getProfessions();

    this.registerForm = this._fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        phone: ['', Validators.required],
        profession: ['', Validators.required],
        username: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.settings = {
        text: "Select Professions",
        selectAllText: 'Select All',
        unSelectAllText: 'UnSelect All',
        classes: "myclass custom-class"
    };  
  }
  onItemSelect(item: any) {
    console.log(this.regForm.profession.value);
  }
  OnItemDeSelect(item: any) {
    console.log(this.regForm.profession.value);
  }
  onSelectAll(items: any) {
    console.log(this.regForm.profession.value);
  }
  onDeSelectAll(items: any) {
    console.log(this.regForm.profession.value);
  }

  get regForm() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    
    console.log(this.registerForm.invalid);
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    let data = this.registerForm.value
    this.authService.registerUser(data).subscribe(res => {
      localStorage.setItem('token', res.token);
      localStorage.setItem('user', JSON.stringify(res.user));
      this.router.navigate(['/services']);
    }, err => {
      console.log(err);
    });
  }

  getProfessions() {
    this.authService.getProfessions().subscribe(res => {
      if (res.success) {
        res.professions.map((item) => {
          let obj = {}
          obj['id'] = item._id;
          obj['itemName'] = item.name;
          this.professions.push(obj);
        });
      }
    })
  }

}
