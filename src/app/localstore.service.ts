import { Injectable } from '@angular/core';

@Injectable()
export class LocalStore {

  constructor() { }

  save( key: string , value: any  ) {
        try {
          localStorage.setItem(key, JSON.stringify(value));
          return true;
        } catch (e) { return false; }
    }

    remove( key: string ) {
        if (this.read(key)) {
          localStorage.removeItem(key);
          return true;
        } else {
          return false;
        }
    }

    read( key: string  ) {
        return JSON.parse(localStorage.getItem( key ));
    }

}
