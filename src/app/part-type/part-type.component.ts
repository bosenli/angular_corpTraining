import {HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ObjectUtils} from 'primeng/utils';
import {Parts} from '../models/parts.model';
import {PartTypes} from '../models/partTypes.model';
import {HttpStatus} from '../shared/enum';
import {PartsService} from '../shared/services/parts.service';
import {PartTypesService} from '../shared/services/partTypes.service';

@Component({
  selector: 'app-part-type',
  templateUrl: './part-type.component.html',
  styleUrls: ['./part-type.component.css']
})
export class PartTypeComponent implements OnInit {

   partsTypeColumns: any;

   partTypesTable: PartTypes[] = [];

  constructor(private readonly http: HttpClient, private partTypesService: PartTypesService, private readonly confirmationService: ConfirmationService, private readonly messageService: MessageService) { }

  private initPartTypesColumns(): void {
    this.partsTypeColumns = [
      {
        id: 'code',
        header: 'Code',
        fields: ['code'],
      },
      {
        id: 'description',
        header: 'Description',
        fields: ['description'],
      }]  }

  private loadPartTypesTable(): void {
    this.partTypesService.getAllPartTypes().subscribe((data: PartTypes[]) => {
      console.log(data)
      this.partTypesTable = data;
    });
  }

  ngOnInit(): void {

    this.initPartTypesColumns();
    this.loadPartTypesTable();
  }

  getField(rowData: any, field: any) {
    return ObjectUtils.resolveFieldData(rowData, field);
  }

  onEditPartTypesRow(rowData: any) {

  }

  onPartTypesDelete(rowData: PartTypes) {
    this.confirmationService.confirm({
      message: `Are you sure you want to delete ${rowData.code}`,
      header: `Confirm Delete Part Type ${rowData.code}`,
      icon: 'pi pi-exclamation-triangle',
      acceptLabel:'Delete',
      rejectLabel:'Cancel',
      accept: () => {
     this.partTypesService.deletePartType(rowData.code).subscribe({
       next: (data: any)=> {
         this.messageService.add({severity:'info', summary:'User Deleted', detail:`You have deleted part type ${rowData.code}`});
         this.loadPartTypesTable();
       },
       error: (err) =>{
         if(err.status === HttpStatus.SERVERERROR){
           this.messageService.add({severity:'error', summary:'Failed to delete user', detail: err.error.message});
         }
       },
     });
      }
    });
  }
}
