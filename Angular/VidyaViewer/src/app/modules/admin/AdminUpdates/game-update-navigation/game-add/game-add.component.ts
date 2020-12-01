import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
//import { GameAddService } from 'src/app/shared/Services/FormServices/AdminUpdateForms/games/game-add/game-add.service';

@Component({
  selector: 'app-game-add',
  templateUrl: './game-add.component.html',
  styleUrls: ['./game-add.component.css']
})
export class GameAddComponent implements OnInit {

  //constructor(public gameAddServ: GameAddService) { }
  gameAdd: string="Add new Game";

  constructor(private gameAddFB: FormBuilder) { }
  formGameAdd= this.gameAddFB.group({
    gameName: ['', Validators.required],
    platformType: ['', Validators.required],
    gameDescription: ['', Validators.required]
  })

  ngOnInit(): void {
  }

  onCancel()
  {
    this.formGameAdd.reset();
  }

}
