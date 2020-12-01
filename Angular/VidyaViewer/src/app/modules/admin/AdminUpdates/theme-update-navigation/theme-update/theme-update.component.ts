import { Component, OnInit } from '@angular/core';
import { ThemeUpdateService } from 'src/app/shared/Services/FormServices/AdminUpdateForms/theme/theme-update/theme-update.service';

@Component({
  selector: 'app-theme-update',
  templateUrl: './theme-update.component.html',
  styleUrls: ['./theme-update.component.css']
})
export class ThemeUpdateComponent implements OnInit {

  constructor(public themeUpdateServ: ThemeUpdateService) { }
  themeUpdate: string= "value passed from Database Update";
  ngOnInit(): void {
  }

  onCancel()
  {
    this.themeUpdateServ.formThemeUpdate.reset();
    this.themeUpdateServ.initializeFormGroup();
  }

}
