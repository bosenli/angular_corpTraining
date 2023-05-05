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
  partUpdatedListener = new Subject<Boolean>();
  newPartAdded = new Subject<Boolean>();


  constructor(private readonly http: HttpClient) {}
  getAllParts(): Observable<Parts[]> {
    return this.http.get<Parts[]>(`${this.BaseUrl}/parts`);
  }

  updateParts(content: Parts): Observable<Parts> {
    return this.http.put<Parts>(`${this.BaseUrl}/parts/${content.id}`, content)
  }

  addNewPart(content: Parts): Observable<Parts> {
    return this.http.post<Parts>(`${this.BaseUrl}/parts`, content)
  }

  deletePart(id: number) {
    return this.http.delete<Parts>(`${this.BaseUrl}/parts/${id}`);
  }
}
