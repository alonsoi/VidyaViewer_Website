import { Component, OnInit } from '@angular/core';
import { ThemeAddService } from 'src/app/shared/Services/FormServices/AdminUpdateForms/theme/theme-add/theme-add.service';

@Component({
  selector: 'app-theme-add',
  templateUrl: './theme-add.component.html',
  styleUrls: ['./theme-add.component.css']
})
export class ThemeAddComponent implements OnInit {

  constructor(public themeAddServ: ThemeAddService) { }

  themeAdd: string= "Add New Theme";
  ngOnInit(): void {
  }

  onCancel()
  {
    this.themeAddServ.formThemeAdd.reset();
    this.themeAddServ.initializeFormGroup();
  }

}
