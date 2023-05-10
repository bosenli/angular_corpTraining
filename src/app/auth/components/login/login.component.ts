import { Component, OnInit } from '@angular/core';
import {FormGroup, NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 passwordVisible: boolean = true;
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  //loginForm: FormGroup;



  ngOnInit(): void {
  }

  onCancel() {

  }

  OnLogIn() {

  }

  onSubmit(f: NgForm) {
    if (f.valid) {
      this.authService.logIn(this.email, this.password).subscribe(
        (user) => {
          console.log(user);
          localStorage.setItem('user', JSON.stringify(user));
          this.router.navigate(['/']);
        },
        (error) => {
          console.log('Error:', error);
          // Handle login error, e.g., display an error message
        }
      );
    }
  }
  togglePasswordVisibility(input: HTMLInputElement) {
    this.passwordVisible = !this.passwordVisible;
    input.type = this.passwordVisible ? 'password' : 'text';
  }

}
