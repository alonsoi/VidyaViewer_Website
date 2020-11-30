import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {
 
  constructor(){ }

  formAdminLogin: FormGroup= new FormGroup({
    $usrKey: new FormControl(null),
    usrName: new FormControl('', Validators.required),
    passwrd: new FormControl('', Validators.required)

  });

  initializeFormGroup(){
    this.formAdminLogin.setValue({
      $usrKey: null,
      usrName: '',
      passwrd: ''

    });
  };
}
