import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor() { }

  formSign: FormGroup= new FormGroup({
    $usrKey: new FormControl(null),
    usrName: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    passwrd: new FormControl('', Validators.required),
    passwrd_check: new FormControl('', Validators.required)
  });

  initializeFormGroup(){
    this.formSign.setValue({
      $usrKey: null,
      usrName: '',
      firstName: '',
      lastName: '',
      passwrd: '',
      password_check: ''

    });
  }

}
