import { Component, OnInit } from '@angular/core';
import { PoupupService } from '../../services/poupup.service';

@Component({
  selector: 'app-alert-poupup',
  templateUrl: './alert-poupup.component.html',
  styleUrls: ['./alert-poupup.component.scss'],
})
export class AlertPoupupComponent implements OnInit {
  closePoupup() {
    this.poupup.switchPoupup();
  }

  constructor(public poupup: PoupupService) {}

  ngOnInit(): void {}
}
