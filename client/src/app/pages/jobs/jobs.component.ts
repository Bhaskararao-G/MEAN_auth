import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job.service';
import * as moment from 'moment';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  moment: any = moment;
  jobs: any[] = [];

  constructor(private jobService: JobService) { }

  ngOnInit() {
    this.getJobs();
  }

  getJobs() {
    this.jobService.getJobs().subscribe(res=> {
      console.log(res);
      if (res.success) {
        this.jobs = res.jobs;
      }
    })
  }

}
