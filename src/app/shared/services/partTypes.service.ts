import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Parts} from '../../models/parts.model';
import {PartTypes} from '../../models/partTypes.model';
import {Users} from '../../models/users.model';
import {BASEURL} from '../constants';

@Injectable({
  providedIn: 'root'
})
export class PartTypesService {
  private readonly BaseUrl = `${BASEURL}`;

  constructor(private readonly http: HttpClient) {}

  getAllPartTypes(): Observable<PartTypes[]> {
    return this.http.get<PartTypes[]>(`${this.BaseUrl}/partTypes`);
  }


  deletePartType(code: string) {
    return this.http.delete<PartTypes>(`${this.BaseUrl}/partTypes/${code}`);
  }



}
