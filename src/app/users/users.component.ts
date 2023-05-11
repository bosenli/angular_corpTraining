import {HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {GmNavItem} from '@gds/prime-ng/api';
import {ConfirmationService, MessageService} from 'primeng/api';
import {Table} from 'primeng/table';
import {ObjectUtils} from 'primeng/utils';
import {Users} from '../models/users.model';
import {HttpStatus} from '../shared/enum';
import {UsersService} from '../shared/services/users.service';
import {ToastModule} from 'primeng/toast';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  userTableColumns: any[] =[];
  usertable: Users[]=[];
  private clonedUsers: { [i: string]: Users; }={};
  simpleColumn: string[]=[];




  constructor(private readonly usersService: UsersService, private readonly confirmationService: ConfirmationService
  , private readonly messageService: MessageService) { }

  private initColumns(): void {
    this.userTableColumns = [
      {
        id: 'gmin',
        header: 'GMIN',
        fields: ['gmin'],
      },
      {
        id: 'firstName',
        header: 'First Name',
        fields: ['firstName'],
        editable: true
      },
      {
        id: 'lastName',
        header: 'Last Name',
        fields: ['lastName'],
      },
      {
        id: 'email',
        header: 'Email',
        fields: ['email'],
      },
      {
        id: 'password',
        header: 'Password',
        fields: ['password'],
      },
      {
        id: 'companyName',
        header: 'Company Name',
        fields: ['companyName'],
        editable:true
      },
    ];

    this.simpleColumn = ['gmin','firstName','lastName','email','password','companyName']
  }

  private loadUsersTable(){
    //Users[] from service return type
    this.usersService.getAllUsers().subscribe((data: Users[]) => {
      // do something with the data
      console.log(data)
      this.usertable= data.map((user, index)=>({
        ...user,
        idx: index
      }));
      console.log('this.usertable', this.usertable);
    });
  }

  ngOnInit(): void {
    this.initColumns();
    this.loadUsersTable();

    this.usersService.userUpdated.subscribe(()=>{
      this.loadUsersTable();
    })
  }

  getField(rowData: Users, field: any) {
    //console.log('getField rowData', rowData, 'getfiled filed', field);
    return ObjectUtils.resolveFieldData(rowData, field);
  }

  onUserDelete(rowData: Users) {
   console.log('on Delete ', rowData)
    this.confirmationService.confirm({
      message: `Are you sure you want to delete ${rowData.gmin}`,
      header: `Confirm Delete user ${rowData.gmin}`,
      icon: 'pi pi-exclamation-triangle',
      acceptLabel:'Delete',
      rejectLabel:'Cancel',
      accept: () => {
        this.usersService.deleteUser(rowData.gmin).subscribe({
          next: (data: any)=> {
            this.messageService.add({severity:'info', summary:'User Deleted', detail:`You have deleted user ${rowData.gmin}`});
            this.loadUsersTable();
          },
          error: (err) =>{
            if(err.status === HttpStatus.SERVERERROR){
              this.messageService.add({severity:'error', summary:'Failed to delete user, the GMIN is an foreign key of another table', detail: err.error.message});
            }
          },
        });
      }
    });
  }

  userId: string = '';


  onEditUserRow(rowData: Users) {
    //this.myNewService.newUserEdit.next(rowData);
  console.log('on Edit ');

    //call modal for edit , emit a new User row
    this.usersService.newUserEdit.next(rowData);
    }
   currentRow:any;
  selectedProduct: any;
  onRowEditInit(rowData: Users) {
    console.log('edit init row data: ', rowData)
    console.log('rowData.id:', rowData.gmin)
    this.clonedUsers[rowData.gmin] = {...rowData};
    console.log('this.cloneUsers:', this.clonedUsers)

  }

  onRowEditSave(rowData: any) {
       console.log('save',rowData)
  }

  onRowEditCancel(rowData: any, rowIndex: any) {
    this.usertable[rowIndex] = this.clonedUsers[rowData.gmin];
    delete this.usertable[rowData.gmin];
  }

  clear(table: Table) {
    table.clear();
    //table.reset();
    table.sortField='';
    table.sortOrder=1;

  }
}
