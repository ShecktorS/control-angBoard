import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.scss'],
})
export class StoreItemComponent implements OnInit {
  @Input() store: any;

  constructor() {}

  ngOnInit(): void {}
}
