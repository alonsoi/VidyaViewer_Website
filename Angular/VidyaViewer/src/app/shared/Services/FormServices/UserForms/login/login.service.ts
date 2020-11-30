import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor() { }

  formLogin: FormGroup= new FormGroup({
    $usrKey: new FormControl(null),
    usrName: new FormControl('', Validators.required),
    passwrd: new FormControl('', Validators.required)

  });

  initializeFormGroup(){
    this.formLogin.setValue({
      $usrKey: null,
      usrName: '',
      passwrd: ''

    });
  };
}
