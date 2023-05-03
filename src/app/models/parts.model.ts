import {PartTypes} from './partTypes.model';
import {Users} from './users.model';

export interface Parts {
  id: number;
  name: string;
  description: string;
  type: PartTypes;
  createdBy: Users;
  createdDate: Date;
  updatedBy: Users;
  updatedDate: Date;
  quantity: number;
}
