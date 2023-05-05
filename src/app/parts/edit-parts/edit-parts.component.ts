import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import {Parts} from '../../models/parts.model';
import {PartTypes} from '../../models/partTypes.model';
import {Users} from '../../models/users.model';
import {PartsService} from '../../shared/services/parts.service';
import {PartTypesService} from '../../shared/services/partTypes.service';
import {UsersService} from '../../shared/services/users.service';

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

  initNewPart(): Parts {
    return {
      id: 0,
      name: '',
      description: '',
      quantity: 0,
      type: {code: '', description: ''}, // Initialize with an empty PartTypes object
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
  }

  partSelectionOnFormUI: Parts = this.initNewPart();


  partTypesList: Object[] =[];
  UsersList: Object[]=[];

  getPartTypes(){
    this.partTypesService.getAllPartTypes().subscribe((data=>{
      console.log("part type data", data)
      data.forEach(partType=>{
          //only choose the code object
          this.partTypesList.push({
            name: partType.code,  //showing pattern , optionLabel
            value: partType})      //actual value behind the scene , enum = name and value
        }
      )
      console.log("parttypelist", this.partTypesList)
    }))
  }

  getUsers(){
    this.userService.getAllUsers().subscribe((data=>{
      data.forEach(user=>{
        this.UsersList.push({
          name:  user.gmin,
          value: user,
         })
      })
    }))
  }

  constructor(private partsService: PartsService, private partTypesService: PartTypesService, private messageService: MessageService, private userService: UsersService) { }

  ngOnInit(): void {
    this.getUsers();

    this.getPartTypes();
    //pass Data from component to the form
    this.partsService.newPartEdit.subscribe((data: Parts)=>{
      this.editParts(data);
    })
  }



  addPart(){
    this.editPartMode = false;
    this.partDialogVisible = true;
    this.addPartMode = true;

    this.partSelectionOnFormUI = this.initNewPart();
    console.log(this.partSelectionOnFormUI);
  }


  private editParts(partTableData: Parts) {
    this.partDialogVisible = true;
    this.partRow = partTableData.name; //show in header of the dialog

    this.editPartMode = true;
    //give existing data to FormUI, match the same model
     console.log('editparts', partTableData);
    this.partSelectionOnFormUI = partTableData;

  }


  onCancel() {
    this.partDialogVisible = false;
  }

  onSubmit(f: any) {

    if (this.editPartMode) {
       try {
         if(this.partSelectionOnFormUI.updatedBy.email){
           let updateUserData = {
             "gmin": this.partSelectionOnFormUI.updatedBy.gmin,
             "firstName" : this.partSelectionOnFormUI.updatedBy.firstName,
             "lastName" : this.partSelectionOnFormUI.updatedBy.lastName,
             "email" : this.partSelectionOnFormUI.updatedBy.email,
             "password" : this.partSelectionOnFormUI.updatedBy.password,
             "companyName" : this.partSelectionOnFormUI.updatedBy.companyName
           }
             this.userService.editUser(updateUserData).subscribe({
               next: (data:Users) =>{
               },
               error:(err)=>{
               },
               complete: ()=>{
                 console.log('email update complete')
               }
             })
         }

        this.partsService.updateParts(this.partSelectionOnFormUI).subscribe({
           next: (data:Parts) =>{
             console.log(data);
           },
          error:(err)=>{
             console.log(err)
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

       try{

         console.log('add new part values', this.partSelectionOnFormUI);
           this.partsService.addNewPart(this.partSelectionOnFormUI).subscribe(
             {
               next: (data:Parts) =>{
                 console.log(data);
               },
               error:(err)=>{
                 console.log(err)
               },
               complete: ()=>{
                 this.showSuccess();
                 this.partDialogVisible = false;
                 this.partsService.newPartAdded.next(true);
                 console.log('complete')
               }
             }

           )
       } catch (e) {
         console.log(e)
       }

    }

  }

  private showSuccess() {
    this.messageService.add({severity:'success', summary: 'Success', detail: `Part ${this.editPartMode ? "updated" : "added" } sucessfully`});
  }
}
