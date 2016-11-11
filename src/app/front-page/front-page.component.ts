import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.scss']
})
export class FrontPageComponent implements OnInit {

  private height: number;

  constructor() {
    this.height = (this.calculateHeight()) - 50;
  }

  getHeight() {
    return this.height;
  }

  calculateHeight() {
    if ( 'innerHeight' in window ) {
      return window.innerHeight;
    } else {
      return document.documentElement.clientHeight;
    }
  }

  ngOnInit() {
  }

}
