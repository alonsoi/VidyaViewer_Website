import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ThemeAddComponent } from './theme-add/theme-add.component';

@Component({
  selector: 'app-theme-update-navigation',
  templateUrl: './theme-update-navigation.component.html',
  styleUrls: ['./theme-update-navigation.component.css']
})
export class ThemeUpdateNavigationComponent implements OnInit {

  constructor(public addThemeDialog: MatDialog) { }

  ngOnInit(): void {
  }

  onAddTheme()
  {
    const addThemeDialog= this.addThemeDialog.open(ThemeAddComponent, {
      width: "500px"
    });

    addThemeDialog.afterOpened().subscribe(result => {
      console.log('Add Theme Dialog opened');
    })
  }

}
