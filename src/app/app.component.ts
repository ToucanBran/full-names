import { Component, OnInit } from '@angular/core';
import { AlertService } from './alert/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'full-names';
  hg = false;
  constructor(private alertService: AlertService) {
  }

  ngOnInit() {
    this.alertService.success('testing');
  }

  changeTitle(x) {
    this.title = x;
    this.hg = !this.hg;
  }
}
