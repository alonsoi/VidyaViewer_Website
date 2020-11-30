import { Component, OnInit } from '@angular/core';
import { AdminLoginService } from 'src/app/shared/Services/login/admin-login/admin-login.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  adminLogin: string= "Adminsitrator Login";
  constructor(public adminLoginServ: AdminLoginService) { }

  ngOnInit(): void {
  }

  onCancel(){
    this.adminLoginServ.formAdminLogin.reset();
    this.adminLoginServ.initializeFormGroup();

    
    Object.keys(this.adminLoginServ.formAdminLogin.controls).forEach(key => {
      this.adminLoginServ.formAdminLogin.get(key).setErrors(null) ;
    });
  }

}