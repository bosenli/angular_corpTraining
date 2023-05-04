import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Users} from '../../models/users.model';
import {BASEURL} from '../constants';

@Injectable()

export class UsersService {

  private readonly BaseUrl = `${BASEURL}`;

  newUserEdit = new Subject<Users>();

  constructor(private readonly http: HttpClient) {}

  getAllUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(`${this.BaseUrl}/users`);
  }

  createUser(content: Users): Observable<Users> {
    return this.http.post<Users>(`${this.BaseUrl}/users/${content.gmin}`,content)
  }

  editUser(content: Users): Observable<Users> {
    return this.http.put<Users>(`${this.BaseUrl}/users/${content.gmin}`, content);
  }

  deleteUser(gmin: string) {
    return this.http.delete<Users>(`${this.BaseUrl}/users/${gmin}`);
  }



}
