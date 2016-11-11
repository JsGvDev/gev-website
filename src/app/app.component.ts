import { Component }  from '@angular/core';
import { LocalStore } from './localstore.service';
import { Auth }       from './auth.service';

// const contentObj: any = require('../assets/content-datas.json');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private localStore: LocalStore, private auth: Auth) {
    localStore.save('contet_datas', require('../assets/content-datas.json'));
  }
}
