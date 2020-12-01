import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class GameAddService {

  constructor() { }
  formGameAdd: FormGroup= new FormGroup({
    $gameAddKey: new FormControl(null),
    gameName: new FormControl('', Validators.required),
    platformType: new FormControl('', Validators.required),
    associatedTheme: new FormControl(0, Validators.required),
    gameDescription: new FormControl('',Validators.required),
    associatedVendors: new FormControl()
  });

  initializeFormGroup()
  {
    this.formGameAdd.setValue({
      $gameAddKey: null,
      gameName: '',
      platformType: '',
      associatedTheme: 0,
      gameDescription: '',
      associatedVendors: null,
      
    })
  }
}
