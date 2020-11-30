import { Component, OnInit } from '@angular/core';
import { SignUpService } from '../../shared/Services/FormServices/UserForms/sign-up/sign-up.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(public signServ: SignUpService) { }

  signUp: string= "Sign-Up";
  ngOnInit(): void {
    
  }

  onCancel(){
    this.signServ.formSign.reset();
    this.signServ.initializeFormGroup();
  }

}
