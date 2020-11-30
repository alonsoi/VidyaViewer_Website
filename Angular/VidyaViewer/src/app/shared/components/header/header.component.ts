import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogConfig } from '@angular/material/dialog/dialog-config';
import { SignUpComponent } from 'src/app/modules/sign-up/sign-up.component';
import { LoginComponent } from 'src/app/modules/login/login.component';
import { AdminLoginComponent } from 'src/app/modules/admin/admin-login/admin-login.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public signUpDialog: MatDialog, public loginDialog: MatDialog, public adminDialog: MatDialog) { }

  ngOnInit(): void {
  }

  onSignup(){
    this.signUpDialog.open(SignUpComponent);

  }

  onLogin(){
    this.loginDialog.open(LoginComponent);

  }
  onAdminLogin(){
    this.adminDialog.open(AdminLoginComponent);

  }
}
