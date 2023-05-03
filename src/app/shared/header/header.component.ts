import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {GmNavItem} from '@gds/prime-ng/api';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navigationItems: GmNavItem[] = [];
  items: MenuItem[]=[];
  userName: string = '';

  constructor() { }

  ngOnInit(): void {

    this.userName = 'bosen li'

    this.items = [
      {
        label: 'User Profile',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Sign Out',
            icon: 'pi pi-sign-out',
            disabled: false,
            routerLink: ["/logout"],
            command: ()=>{
            }
          }
        ]}
    ];


    this.navigationItems =
      [
        {label: 'Home',
          styleClass: 'p-menuitem-link-active',
          routerLink: ["/home"]},
        {
          label:'Registration',
          routerLink: ["/registration"]
        },
        {
          label: ' Users',
          escape: false,
          disabled: false,
          visible: true,
          routerLink: ["/users"]
          // items: this.tableList
        },
        {
          label: 'PartType',
          visible: true,
          routerLink: ["/part-type"]
        },
        {
          label: 'Part',
          visible: true,
          routerLink: ["/parts"]
        },

      ];
  }

}
