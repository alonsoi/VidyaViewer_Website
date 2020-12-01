import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators, Form } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DeveloperAddService {

  constructor() { }

  formDeveloperAdd: FormGroup= new FormGroup({
    $developerAddKey: new FormControl(null),
    developerName: new FormControl('', Validators.required),
    developerDescription: new FormControl('',Validators.required),
  });

  initializeFormGroup()
  {
    this.formDeveloperAdd.setValue({
      $developerAddKey: null,
      developerName: '',
      developerDescription: ''
    })
  }
}
