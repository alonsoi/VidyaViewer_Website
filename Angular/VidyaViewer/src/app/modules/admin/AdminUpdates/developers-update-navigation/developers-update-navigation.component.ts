import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DevelopersAddComponent } from './developers-add/developers-add.component';
//import { DevelopersUpdateComponent } from './developers-update/developers-update.component';

interface developerArray{
  developerNameValue: string;
  developerDescription: string;
  gamesAssociated: string;

}

@Component({
  selector: 'app-developers-update-navigation',
  templateUrl: './developers-update-navigation.component.html',
  styleUrls: ['./developers-update-navigation.component.css']
})


export class DevelopersUpdateNavigationComponent implements OnInit {

  //pass in value to array from API
  developer: developerArray[] = [];
  constructor(public addDeveloperDialog: MatDialog, public updateDeveloperDialog: MatDialog) { }

  ngOnInit(): void {
  }

  onAddDeveloper()
  {
    const addDeveloperDialog= this.addDeveloperDialog.open(DevelopersAddComponent, {
      width: "500px"
    });

    addDeveloperDialog.afterOpened().subscribe(result => {
      console.log('Add Developer Dialog opened');
    })
  }

  /**onUpdateDeveloper()
  {
    const updateDeveloperDialog= this.updateDeveloperDialog.open(DevelopersUpdateComponent, {
      width: "500px"
    });

    updateDeveloperDialog.afterOpened().subscribe(result => {
      console.log('Add Developer Dialog opened');
    })
  } */
}
