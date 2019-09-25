import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  professions: any[] = [];

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.getProfessions();
  }

  getProfessions() {
    this.authService.getProfessions().subscribe(res => {
      if (res.success) {
        this.professions = res.professions;
      }
    })
  }

}
