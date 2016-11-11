import { Component, OnInit } from '@angular/core';
import { LocalStore } from '../localstore.service';

@Component({
  selector: 'app-get-start',
  templateUrl: './get-start.component.html',
  styleUrls: ['./get-start.component.scss']
})
export class GetStartComponent implements OnInit {

  getStart: any;

  constructor(private localStore: LocalStore) {
    this.getStart = localStore.read('contet_datas').getStart;
  }

  ngOnInit() {
  }

}
