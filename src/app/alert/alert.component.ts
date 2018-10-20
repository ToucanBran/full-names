import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AlertService } from './alert.service';
import { Alert } from '../models/alert';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  alert: Alert;
  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.alertService.alert$.subscribe((alert: Alert) => {
      this.alert = alert;
    });
  }

  removeAlert() {
    this.alert.message = 'dafjsoajfd';
  }
}
