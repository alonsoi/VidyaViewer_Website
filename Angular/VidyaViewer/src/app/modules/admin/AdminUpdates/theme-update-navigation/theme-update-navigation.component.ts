import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ThemeAddComponent } from './theme-add/theme-add.component';
import { ThemeUpdateComponent } from './theme-update/theme-update.component';

interface themeArray{
  themeName: string;
  themeDescription: string;
  gamesAssociated: string;

}
@Component({
  selector: 'app-theme-update-navigation',
  templateUrl: './theme-update-navigation.component.html',
  styleUrls: ['./theme-update-navigation.component.css']
})
export class ThemeUpdateNavigationComponent implements OnInit {
  
  theme: themeArray[]= [];
  constructor(public addThemeDialog: MatDialog, public updateThemeDialog: MatDialog) { }

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

  onUpdateTheme()
  {
    const updateThemeDialog= this.updateThemeDialog.open(ThemeUpdateComponent, {
      width: "500px"
    });

    updateThemeDialog.afterOpened().subscribe(result => {
      console.log('Add Game Dialog opened');
    })
  }

}
