import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';
import { PoupupService } from 'src/app/services/poupup.service';
import { VisualConditionService } from 'src/app/services/visual-condition.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  isLoading = this.condition.latencySimulate;
  storeList = this.dataService.store;
  isLogged = this.auth.person.isLogged;

  loadData() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

  constructor(
    private dataService: DataService,
    private auth: AuthService,
    private condition: VisualConditionService
  ) {}

  ngOnInit(): void {
    if (this.condition.latencySimulate) {
      this.loadData();
      this.condition.loadData();
    }
  }
}
