import {PartTypes} from './partTypes.model';
import {Users} from './users.model';

export interface Parts {
  id: number;
  name: string;
  description: string;
  quantity: number;
  type: PartTypes;   //option to choose
  createdBy: Users;  //not editable/updatable, and it was set by a user in the user list
  createdDate: Date;     //not editable
  updatedBy: Users;      //not editable
  updatedDate: Date;     //not editable
}
