import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import {Parts} from '../../models/parts.model';
import {PartTypes} from '../../models/partTypes.model';
import {Users} from '../../models/users.model';
import {PartsService} from '../../shared/services/parts.service';
import {PartTypesService} from '../../shared/services/partTypes.service';

@Component({
  selector: 'app-edit-parts',
  templateUrl: './edit-parts.component.html',
  styleUrls: ['./edit-parts.component.css']
})
export class EditPartsComponent implements OnInit {
  partDialogVisible: boolean= false;
  partRow: string = '';
  editPartMode: boolean = false;
  addPartMode: boolean = false;

  partSelectionOnFormUI: Parts = {
    id: 0,
    name: '',
    description: '',
    quantity: 0,
    type: { code: '', description: '' }, // Initialize with an empty PartTypes object
    createdBy: {
      gmin: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      companyName: '',
    }, // Initialize with an empty Users object
    createdDate: new Date(),
    updatedBy: {
      gmin: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      companyName: '',
    }, // Initialize with an empty Users object
    updatedDate: new Date(),
  };



  partTypesList: Object[] =[];

  getPartTypes(){
    this.partTypesService.getAllPartTypes().subscribe((data=>{
      console.log("part type data", data)
      data.forEach(partType=>{
          //only choose the code object
          this.partTypesList.push({
            name: partType.code,  //showing pattern , optionLabel
            value: partType})      //actaul value behind the scenme , enum = name and value
        }
      )
      console.log("parttypelist", this.partTypesList)
    }))
  }
  constructor(private partsService: PartsService, private partTypesService: PartTypesService, private messageService: MessageService) { }

  ngOnInit(): void {

    this.getPartTypes();
    //pass Data from component to the form
    this.partsService.newPartEdit.subscribe((data: Parts)=>{
      this.editParts(data);
    })
  }



  addParts(){
    this.partDialogVisible = true;
    this.addPartMode = true;

  }


  private editParts(partTableData: Parts) {
    this.partDialogVisible = true;
    this.partRow = partTableData.name;

    this.editPartMode = true;
    //give existing data to FormUI
    this.partSelectionOnFormUI = partTableData;

    // const resolvePartType = ()=>{  //sets the partType to the list object
    //   for(const partTypeCode of this.partTypesList){
    //     if(partTypeCode === this.partSelectionOnFormUI.type){
    //
    //       return this.partSelectionOnFormUI.type;
    //     }
    //   }
    //
    // };
    // this.partSelectionOnFormUI.type = resolvePartType();
  }


  onCancel() {
    this.partDialogVisible = false;
  }

  onSubmit(f: any) {

    if (this.editPartMode) {
       try {
        this.partsService.updateParts(this.partSelectionOnFormUI).subscribe({
           next: (data:Parts) =>{
             console.log(data);
           },
          error:(err)=>{
          },
          complete: ()=>{
            this.showSuccess();
            this.partDialogVisible = false;
            this.partsService.partUpdatedListener.next(true);
             console.log('complete')
          }

          }
        )
      } catch (e){
        console.log(e)
      }
    }
    // not edit mode but it is ADD PART MODE
     else {

    }

  }

  private showSuccess() {
    this.messageService.add({severity:'success', summary: 'Success', detail: 'Part update sucessful'});
  }
}
