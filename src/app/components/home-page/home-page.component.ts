import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';
import { VisualConditionService } from 'src/app/services/visual-condition.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  isLoading = this.condition.latencySimulate;
  storeList = this.dataService.stores;
  isLogged = this.auth.person.isLogged;

  loadData() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

  // executeFetch = async () =>
  //   (await this.httpReq.GET('shop')).subscribe((data) => console.log(data));

  constructor(
    private dataService: DataService,
    public auth: AuthService,
    private condition: VisualConditionService,
    private httpReq: HttpService
  ) {}

  ngOnInit(): void {
    if (this.condition.latencySimulate) {
      this.loadData();
      this.condition.loadData();
    }

    let token = localStorage.getItem('token');
    if (!!token) {
      this.httpReq.GET('shop').subscribe((data: any) =>
        console.log(
          Object.keys(data).forEach((key) => {
            this.dataService.addStore(data[key]);
            this.dataService.stores = [...this.dataService.stores];
          })
        )
      );
      console.log(this.dataService.stores);
    }

    // this.executeFetch();
  }
}
