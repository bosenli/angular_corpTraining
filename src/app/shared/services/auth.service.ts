import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Users} from '../../models/users.model';
import {BASEURL} from '../constants';

@Injectable({
  providedIn:'root'
})
//dispatcher
export class AuthService {


  private readonly BaseUrl = `${BASEURL}`;

  constructor(private readonly http: HttpClient) {
  }



  signUp(user: Users): Observable<Users> {
    return this.http.post<Users>(`${this.BaseUrl}/users`, user);
  }

  //logIn(email: string, password: string)
}
