import { Component, OnInit } from '@angular/core';
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

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.newUserEdit.subscribe((data: Users) => {
      console.log('edit user component', data);
      this.editUser(data);
    })


  }

  private editUser(data: Users) {
    this.visible=true;
    this.userId = data.gmin;
  }

  onCancel(){
    this.visible= false;
  }
}
