import {HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FilterTemplate} from '@gds/prime-ng/api';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ObjectUtils} from 'primeng/utils';
import {Parts} from '../models/parts.model';
import {PartTypes} from '../models/partTypes.model';
import {Users} from '../models/users.model';
import {BASEURL} from '../shared/constants';
import {HttpStatus} from '../shared/enum';
import {PartsService} from '../shared/services/parts.service';

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.css']
})
export class PartsComponent implements OnInit {
   private readonly BaseUrl = `${BASEURL}`;
  partsTable: Parts[]=[];
  partsTableColumns: any;
  partColumnNames: String[]= ['Id', 'Name','Description','Type', 'Created By', 'Created Date', 'Updated By', 'Update Date'];
  retrievedDataLength: number = 0;

  constructor(private readonly http: HttpClient, private partsService: PartsService, private readonly confirmationService: ConfirmationService, private readonly messageService: MessageService) {}

  private loadPartsTable(){
    //parts[] from service return type
    this.partsService.getAllParts().subscribe((data: Parts[]) => {
      // do something with the data
      console.log(data)
      this.partsTable = data;
      this.retrievedDataLength = this.partsTable.length;
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
        header: 'Created By',
        fields: ['createdBy.gmin'],
      },
      {
        id: 'Created Date',
        header: 'Created Date',
        fields: ['createdDate'],
        filter: {
          template: FilterTemplate.CALENDAR,
          placeholder: 'Date' }
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
        filter: {
          template: FilterTemplate.CALENDAR,
          placeholder: 'Date' }
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

    this.partsService.partUpdatedListener.subscribe(()=>{
      this.loadPartsTable();
    })

    this.partsService.newPartAdded.subscribe(()=> {
      this.loadPartsTable();
      }
    )
  }

  getField(rowData: any, field: any) {
    return ObjectUtils.resolveFieldData(rowData, field);
  }

  onEditPartsRow(rowData: any) {
        this.partsService.newPartEdit.next(rowData);
  }

  onPartsDelete(rowData: any) {
    console.log('on Delete ', rowData)
    this.confirmationService.confirm({
      message: `Are you sure you want to delete part row # ${rowData.id}`,
      header: `Confirm Delete user ${rowData.id}`,
      icon: 'pi pi-exclamation-triangle',
      acceptLabel:'Delete',
      rejectLabel:'Cancel',
      accept: () => {
        this.partsService.deletePart(rowData.id).subscribe({
          next: (data: any)=> {
            this.messageService.add({severity:'info', summary:'Part Deleted', detail:`You have deleted part ${rowData.id}`});
            this.loadPartsTable();
          },
          error: (err) =>{
            if(err.status === HttpStatus.SERVERERROR){
              this.messageService.add({severity:'error', summary:`Failed to delete part # ${rowData.id} sucessfully`, detail: err.error.message});
            }
          },
        });
      }
    });
  }

  showDialog() {

  }
}
