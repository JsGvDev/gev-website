import { Component, OnInit } from '@angular/core';
import { LocalStore } from '../localstore.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Array<any>;
  state: string;

  constructor(private localStore: LocalStore) {
    this.products = localStore.read('contet_datas').products;
    this.state = 'down'; 
  }

  ShowHideItems() {
    this.state = this.state === 'down' ? 'up' : 'down';
  }

  ngOnInit() {
  }

}
