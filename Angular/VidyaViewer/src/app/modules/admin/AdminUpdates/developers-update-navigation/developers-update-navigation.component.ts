import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DevelopersAddComponent } from './developers-add/developers-add.component';

@Component({
  selector: 'app-developers-update-navigation',
  templateUrl: './developers-update-navigation.component.html',
  styleUrls: ['./developers-update-navigation.component.css']
})
export class DevelopersUpdateNavigationComponent implements OnInit {

  constructor(public addDeveloperDialog: MatDialog) { }

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
}
