import { Component, OnInit } from '@angular/core';
import {GmNavItem} from '@gds/prime-ng/api';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  authMenuItems: GmNavItem[] = [];


  private initAuthMenuColumn(): void {
    this.authMenuItems =
      [
        {label: 'Log In', id: 'Log In', routerLink: '/login', separator: true},
        {label: 'Sign Up', id: 'Sign Up', routerLink: '/registration', separator: true},
      ];

  }

  constructor() { }

  ngOnInit(): void {
    this.initAuthMenuColumn();
  }

}



