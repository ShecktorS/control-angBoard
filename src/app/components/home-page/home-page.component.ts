import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  storeList = this.dataService.store;
  isLogged = this.auth.person.isLogged;

  constructor(private dataService: DataService, private auth: AuthService) {}

  ngOnInit(): void {}
}
