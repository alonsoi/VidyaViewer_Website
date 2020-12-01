import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-theme-update',
  templateUrl: './theme-update.component.html',
  styleUrls: ['./theme-update.component.css']
})
export class ThemeUpdateComponent implements OnInit {

  
  themeUpdate: string= "value passed from Database Update";

  constructor(private themeUpdateFB: FormBuilder) { }
  formThemeUpdate= this.themeUpdateFB.group({
    themeName:['', Validators.required],
    themeDescription: ['', Validators.required],
    currentAssociatedGames: []
  })
  ngOnInit(): void {
  }

  onCancel()
  {
    this.formThemeUpdate.reset();
  }

}
