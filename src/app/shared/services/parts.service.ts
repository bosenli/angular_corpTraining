import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Parts} from '../../models/parts.model';
import {Users} from '../../models/users.model';
import {BASEURL} from '../constants';

@Injectable({
  providedIn: 'root'
})
export class PartsService {
  private readonly BaseUrl = `${BASEURL}`;

  newPartEdit = new Subject<Parts>();

  constructor(private readonly http: HttpClient) {}
  getAllParts(): Observable<Parts[]> {
    return this.http.get<Parts[]>(`${this.BaseUrl}/parts`);
  }

}
