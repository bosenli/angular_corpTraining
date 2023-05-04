import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 passwordVisible: boolean = true;
  password: string = '';
  value3: any;

  constructor() { }

  ngOnInit(): void {
  }

  onCancel() {

  }

  OnLogIn() {

  }

  onSubmit(f: NgForm) {
    console.log(f);
    f.reset();

  }

}
