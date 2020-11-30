import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GameAddComponent } from './game-add/game-add.component';

@Component({
  selector: 'app-game-update-navigation',
  templateUrl: './game-update-navigation.component.html',
  styleUrls: ['./game-update-navigation.component.css']
})
export class GameUpdateNavigationComponent implements OnInit {

  constructor(public addGameDialog: MatDialog) { }

  ngOnInit(): void {
  }

  onAddGame()
  {
    const addGameDialog= this.addGameDialog.open(GameAddComponent, {
      width: "500px"
    });

    addGameDialog.afterOpened().subscribe(result => {
      console.log('Add Game Dialog opened');
    })
  }
}
