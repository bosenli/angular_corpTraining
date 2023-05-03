import {HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ObjectUtils} from 'primeng/utils';
import {Parts} from '../models/parts.model';
import {PartTypes} from '../models/partTypes.model';
import {Users} from '../models/users.model';
import {BASEURL} from '../shared/constants';
import {PartsService} from '../shared/services/parts.service';

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.css']
})
export class PartsComponent implements OnInit {
  // id: number;
  // name: string;
  // description: string;
  // type: PartTypes;
  // createdBy: string;
  // createdDate: Date;
  // updatedBy: string;
  // updatedDate: Date;
  // quantity: number;

  private readonly BaseUrl = `${BASEURL}`;
  partsTable: Parts[]=[];
  partsTableColumns: any
  partColumnNames: String[]= ['Id', 'Name','Description','Type', 'Created By', 'Created Date', 'Updated By', 'Update Date'];

  constructor(private readonly http: HttpClient, private partsService: PartsService) {}

  private loadPartsTable(){
    //Users[] from service return type
    this.partsService.getAllParts().subscribe((data: Parts[]) => {
      // do something with the data
      console.log(data)
      this.partsTable = data;
    });
  }

  private initPartsColumns(): void {

    this.partsTableColumns = [
      {
        id: 'id',
        header: 'id',
        fields: ['id'],
      },
      {
        id: 'Name',
        header: 'Name',
        fields: ['name'],
      },
      {
        id: 'Description',
        header: 'Description',
        fields: ['description'],
      },
      {
        id: 'type',
        header: 'Type',
        fields: ['type.code'],
      },
      {
        id: 'Created By',
        header: 'Email',
        fields: ['createdBy.email'],
      },
      {
        id: 'Created Date',
        header: 'Created Date',
        fields: ['createdDate'],
      },
      {
        id: 'updatedBy',
        header: 'Updated By',
        fields: ['updatedBy.gmin'],
      },
      {
        id: 'Update Date',
        header: 'Update Date',
        fields: ['updatedDate'],
      },
      {
        id: 'quantity',
        header: 'Quantity',
        fields: ['quantity'],
      },
    ];
  }

  ngOnInit(): void {

    this.initPartsColumns();
    this.loadPartsTable();
  }

  getField(rowData: any, field: any) {
    return ObjectUtils.resolveFieldData(rowData, field);
  }

  onEditPartsRow(rowData: any) {
        this.partsService.newPartEdit.next(rowData);
  }

  onPartsDelete(rowData: any) {

  }
}