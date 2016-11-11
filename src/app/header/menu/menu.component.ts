import { Component, trigger, state, style, transition, animate } from '@angular/core';
import { Auth }              from '../../auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger('movementtrigger', [
      state('firstpos', style({transform: 'translateX(0)'})),
      state('secondpos', style({transform: 'translateX(245px)'})),
      transition('firstpos => secondpos', [
        animate('200ms ease-in')
      ]),
      transition('secondpos => firstpos', [
        animate('200ms ease-out')
      ])
    ])
  ]
})
export class MenuComponent {

  isOpen: boolean;
  state: string;

  constructor(private auth: Auth) {
    this.isOpen = false;
    this.state = 'secondpos';
  }

  openMenu() {
    this.isOpen = !this.isOpen;
    this.state = (this.state === 'firstpos' ? 'secondpos' : 'firstpos');
  }

}
