import { Component, OnInit } from '@angular/core';
import { WorkersService } from '../../services/workers.service';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent implements OnInit {

  workers: any[] = [];

  constructor(private workerServie: WorkersService) { }

  ngOnInit() {
    this.getWorkers();
  }

  getWorkers() {
    this.workerServie.getWorkers().subscribe(res => {
      if (res.success) {
        this.workers = res.users;
      }
    })
  }

}
