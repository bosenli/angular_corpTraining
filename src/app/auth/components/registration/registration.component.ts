import {Component, ElementRef, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {GmNavItem} from '@gds/prime-ng/api';
import {last} from 'rxjs';
import {Users} from '../../../models/users.model';
import {AuthService} from '../../../shared/services/auth.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  passwordVisible: boolean = true;
 signUpMessage: string= '';

 isLoggIn = false;





  constructor(private authService: AuthService) { }

  ngOnInit(): void {

  }

  onCancel() {

  }

  OnRegister() {

  }

  togglePasswordVisibility() :void {
    this.passwordVisible = !this.passwordVisible;
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    passwordInput.type = this.passwordVisible ? 'password' : 'text';

  }


//   export interface Users {
//   gmin: string;
//   firstName: string;
//   lastName: string;
//   email: string;
//   password: string;
//   companyName: string;
// }
  onSubmit(registrationForm: NgForm) {
    console.log(registrationForm);
    if (!registrationForm.valid){
      return;
    }

    const gmin = registrationForm.value.gmin;
    const firstName = registrationForm.value.firstName;
    const lastName = registrationForm.value.lastName;
    const email = registrationForm.value.email;
    const password = registrationForm.value.password;
    const companyName = registrationForm.value.companyName;

    let newUser : Users;

    newUser = {
      "gmin": gmin,
      "firstName" : firstName,
      "lastName" : lastName,
      "email" : email,
      "password" : password,
      "companyName" : companyName
    }

    this.authService.signUp(newUser).subscribe({
      next: (data) => {
        console.log(data)
      },
    error: (error) =>
    {
      console.log(error.message())
      this.signUpMessage = "Sign Up failed";
    },
   complete: () => {
      this.signUpMessage = "Congrats! Sign Up User Scuessful";
    }
  }
    )
    registrationForm.reset();

  }
}
