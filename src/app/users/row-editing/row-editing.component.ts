import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-row-editing',
  templateUrl: './row-editing.component.html',
  styleUrls: ['./row-editing.component.css']
})
export class RowEditingComponent implements OnInit {
  simpleColumn: any;
  usertable: any;

  constructor() { }

  ngOnInit(): void {
  }

  onRowEditInit(user: any) {

  }

  onRowEditSave(user: any) {

  }

  onRowEditCancel(user: any, rowIndex: any) {

  }
}
