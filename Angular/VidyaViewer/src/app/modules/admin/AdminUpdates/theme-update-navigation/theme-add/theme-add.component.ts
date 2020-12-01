import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-theme-add',
  templateUrl: './theme-add.component.html',
  styleUrls: ['./theme-add.component.css']
})
export class ThemeAddComponent implements OnInit {

  //constructor(public themeAddServ: ThemeAddService) { }
  themeAdd: string= "Add New Theme";
  
  constructor(private themeAddFB: FormBuilder){ }
  formThemeAdd= this.themeAddFB.group({
    themeName:['', Validators.required],
    themeDescription: ['', Validators.required]
  })
  ngOnInit(): void {
  }

  onCancel()
  {
    //this.themeAddServ.formThemeAdd.reset();
    //this.themeAddServ.initializeFormGroup();
    this.formThemeAdd.reset();
  }

}
