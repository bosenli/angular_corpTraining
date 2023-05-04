import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {MessageService} from 'primeng/api';
import {DialogService} from 'primeng/dynamicdialog';
import {Users} from '../../models/users.model';

import {UsersService} from '../../shared/services/users.service';



@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  visible: boolean = false;
  userId: string = '';


//   export interface Users {
//   gmin: string;
//   firstName: string;
//   lastName: string;
//   email: string;
//   password: string;
//   companyName: string;
// }
   firstName: string ='';
   lastName: string ='';
   email: string = '';
   password: string ='';
   companyName: string='';
   gmin: string='';



constructor(private userService: UsersService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.userService.newUserEdit.subscribe((data: Users) => {
      console.log('edit user component', data);
      this.editUser(data);
      this.gmin = data.gmin;
    })

  }

  private editUser(data: Users) {
    this.visible=true;
    this.userId = data.gmin;
    this.firstName= data.firstName;
    this.lastName=data.lastName;
    this.email=data.email;
    this.password=data.password;
    this.companyName = data.companyName;
  }

  onCancel(){
    this.visible= false;
  }

  onUserFormSubmit(editUserformData: NgForm) {
    console.log(editUserformData);
    if (!editUserformData.valid){
      return;
    }

    const gmin = this.gmin;
    const firstName = editUserformData.value.firstName;
    const lastName = editUserformData.value.lastName;
    const email = editUserformData.value.email;
    const password = editUserformData.value.password;
    const companyName = editUserformData.value.companyName;

    let updateUserData : Users;

    updateUserData = {
      "gmin": gmin,
      "firstName" : firstName,
      "lastName" : lastName,
      "email" : email,
      "password" : password,
      "companyName" : companyName
    }

    try{
      this.userService.editUser(updateUserData).subscribe({
        next: (data) => {
          console.log(data)
        },
        error: (error) =>
        {
          console.log(error)
          //this.updateMessage = "Sign Up failed";
        },
        complete: () => {
          this.showSuccess();
          this.visible=false;
          this.userService.userUpdated.next(true);   //refresh user table sent to the table parent component , steps: service-> emitter here-> refresh at parent
        }
      } )
    }
    catch (error){

    };


  }


  showSuccess() {
    this.messageService.add({severity:'success', summary: 'Success', detail: 'user update sucessful'});
  }



}
