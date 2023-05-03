import { Component, OnInit } from '@angular/core';
import {Parts} from '../../models/parts.model';
import {Users} from '../../models/users.model';
import {PartsService} from '../../shared/services/parts.service';

@Component({
  selector: 'app-edit-parts',
  templateUrl: './edit-parts.component.html',
  styleUrls: ['./edit-parts.component.css']
})
export class EditPartsComponent implements OnInit {
  partDialogVisible: boolean= false;

  constructor(private partsService: PartsService) { }

  ngOnInit(): void {

    this.partsService.newPartEdit.subscribe((data: Parts)=>{
      this.editParts(data);
    })
  }


//   this.userService.newUserEdit.subscribe((data: Users) => {
//   console.log('edit user component', data);
//   this.editUser(data);
// })

  private editParts(data: Parts) {
    this.partDialogVisible = true;
    console.log('edit parts', data);
  }
}
