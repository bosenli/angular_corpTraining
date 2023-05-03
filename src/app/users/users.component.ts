import {HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
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
      },
    ];
  }

  private loadUsersTable(){
    //Users[] from service return type
    this.usersService.getAllUsers().subscribe((data: Users[]) => {
      // do something with the data
      console.log(data)
      this.usertable= data;
    });
  }

  ngOnInit(): void {
    this.initColumns();
    this.loadUsersTable();
  }

  getField(rowData: Users, field: any) {
    return ObjectUtils.resolveFieldData(rowData, field);
  }

  onUserDelete(rowData: any) {
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
            this.messageService.add({severity:'info', summary:'Table Deleted', detail:`You have deleted user ${rowData.gmin}`});
            this.loadUsersTable();
          },
          error: (err) =>{
            if(err.status === HttpStatus.ACCEPTED){
              this.messageService.add({severity:'error', summary:'Failed to delete user', detail: err.error.message});
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
}
