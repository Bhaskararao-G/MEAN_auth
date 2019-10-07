import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { JobService } from '../../../services/job.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent implements OnInit {

  submitted: boolean = false;
  jobForm: FormGroup;
  professions = [];
  user: any;
  resMsg: string = '';

  constructor(private _fb: FormBuilder, private jobService: JobService, private authService: AuthService) { }

  ngOnInit() {

    if (localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user'));
    }

    this.getProfs();

    this.jobForm = this._fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      location: ['', Validators.required],
      type: ['', Validators.required],
      user: [this.user._id]
    });
  }

  get jbForm() { return this.jobForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.jobForm.invalid) {
      return;
    }

    let data = this.jobForm.value
    this.jobService.saveJob(data).subscribe(res => {
      if (res.success) {
        this.resMsg = res.msg
      } else {
        this.resMsg = res.msg
      }
      setTimeout(() => {
        this.resMsg = '';
      }, 2000);
    }, err => {
      console.log(err);
    });
  }

  getProfs() {
    this.authService.getProfessions().subscribe(res => {
      if (res.success) {
        this.professions = res.professions;
      }
    })
  }

}
