import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ThemeUpdateService {

  constructor() { }

  formThemeUpdate: FormGroup= new FormGroup({
      $themeUpdateKey: new FormControl(null),
      themeName: new FormControl('',Validators.required),
      themeDescription: new FormControl('', Validators.required),
      currentGames: new FormControl(0)
  });

  initializeFormGroup()
  {
      this.formThemeUpdate.setValue({
        $themeUpdateKey: null,
        themeName: '',
        themeDescription: '',
        currentGames: 0
      })
  }
}
