import { Component, OnInit } from '@angular/core';
import { LocalStore } from '../localstore.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  contentDatas: any;
  contentModified: boolean;
  aboutUs: any;
  frontPage: any;
  getStart: any;
  products: Array<any>;
  errors: Array<boolean>;


  constructor(private localStore: LocalStore) {
    this.contentDatas = localStore.read('contet_datas');
    this.contentModified = false;
    this.aboutUs = this.contentDatas.aboutUs;
    this.frontPage = this.contentDatas.frontPage;
    this.getStart = this.contentDatas.getStart;
    this.products = this.contentDatas.products;
    this.errors = [];
    this.errors['frontPage'] = false;
    this.errors['getStart'] = false;
    this.errors['aboutUs'] = false;
  }

  onSaveFrontPage( msg: any ) {
    if (msg.length) {
      this.errors['frontPage'] = false;
      this.frontPage.msg = msg;
      this.contentModified = true;
    } else {
      this.errors['frontPage'] = true;
    }
  }

  onSaveGetStart( title: any, msg: any ) {
    if (title.length || msg.length) {
      this.errors['getStart'] = false;
      this.getStart.title = title;
      this.getStart.msg = msg;
      this.contentModified = true;
    } else {
      this.errors['getStart'] = true;
    }
  }

  onSaveAboutUs( title: any, msg: any ) {
    if (title.length || msg.length) {
      this.errors['aboutUs'] = false;
      this.aboutUs.title = title;
      this.aboutUs.msg = msg;
      this.contentModified = true;
    } else {
      this.errors['aboutUs'] = true;
    }
  }

  downloadJSON() {
      this.localStore.save('contet_datas', this.contentDatas);
      this.contentModified = false;
    // SET link to download the file
      let file = JSON.stringify(this.contentDatas, null, 2);
      let downloadObject = new Blob([file], {type: 'application/json'});
      let link = document.createElement('a');
      link.download = 'content-datas.json';
      link.href = window.URL.createObjectURL(downloadObject);
      link.click();
  }

  ngOnInit() {
  }

}
