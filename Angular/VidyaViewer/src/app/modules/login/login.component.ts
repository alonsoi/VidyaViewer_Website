import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../shared/Services/FormServices/UserForms/login/login.service';
import { MatDialog } from '@angular/material/dialog';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: string= "Login";
  constructor(public loginServ: LoginService, public signupDialogRedirect: MatDialog) { }

  ngOnInit(): void {
  }

  onCancel(){
    this.loginServ.formLogin.reset();
    this.loginServ.initializeFormGroup();
    

    Object.keys(this.loginServ.formLogin.controls).forEach(key => {
      this.loginServ.formLogin.get(key).setErrors(null) ;
    });
  }

  onSignupRedirect(){
    const signupDialogRedirect= this.signupDialogRedirect.open(SignUpComponent, {
      width: "500px"
    });

    signupDialogRedirect.afterOpened().subscribe(result => {
      console.log('Signup Dialog opened');
    })
  }

}
