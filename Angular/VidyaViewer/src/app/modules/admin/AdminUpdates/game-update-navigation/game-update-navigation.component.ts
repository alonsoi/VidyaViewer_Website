import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GameAddComponent } from './game-add/game-add.component';
import { GameUpdateComponent } from './game-update/game-update.component';

interface gameArray{
  gameName: string;
  gameDescription: string;
  releaseDate: string;
  developerName: string;

}

@Component({
  selector: 'app-game-update-navigation',
  templateUrl: './game-update-navigation.component.html',
  styleUrls: ['./game-update-navigation.component.css']
})
export class GameUpdateNavigationComponent implements OnInit {

  //pass in value to array from API
  game: gameArray[] = [];
  constructor(public addGameDialog: MatDialog, public updateGameDialog: MatDialog) { }

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

  onUpdateGame()
  {
    const updateGameDialog= this.updateGameDialog.open(GameUpdateComponent, {
      width: "500px"
    });

    updateGameDialog.afterOpened().subscribe(result => {
      console.log('Add Game Dialog opened');
    })
  }
}
