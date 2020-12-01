import { Component, OnInit } from '@angular/core';
import { GameAddService } from 'src/app/shared/Services/FormServices/AdminUpdateForms/games/game-add/game-add.service';

@Component({
  selector: 'app-game-add',
  templateUrl: './game-add.component.html',
  styleUrls: ['./game-add.component.css']
})
export class GameAddComponent implements OnInit {

  constructor(public gameAddServ: GameAddService) { }

  gameAdd: string="Add new Game";
  ngOnInit(): void {
  }

  onCancel()
  {
    this.gameAddServ.formGameAdd.reset();
    this.gameAddServ.initializeFormGroup;
  }

}
