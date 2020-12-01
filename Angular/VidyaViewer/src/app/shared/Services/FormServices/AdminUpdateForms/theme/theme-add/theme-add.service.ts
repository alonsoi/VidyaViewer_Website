import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class ThemeAddService {

  constructor() { }

  formThemeAdd: FormGroup= new FormGroup({
      $themeAddKey: new FormControl(null),
      themeName: new FormControl('', Validators.required),
      themeDescription: new FormControl('', Validators.required)
  });

  initializeFormGroup()
  {
      this.formThemeAdd.setValue({
          $themeAddKey: null,
          themeName: '',
          themeDescription: '',
      })
  }
}
