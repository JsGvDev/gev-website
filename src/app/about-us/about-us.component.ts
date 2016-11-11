import { Component, OnInit } from '@angular/core';
import { LocalStore } from '../localstore.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  aboutUs: any;

  constructor(private localStore: LocalStore) {
    this.aboutUs = localStore.read('contet_datas').aboutUs;
  }

  ngOnInit() {
  }

}
